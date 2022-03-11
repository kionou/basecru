const { request,response } = require("express");
const db = require("../database/database");
const data = require("../requettes/requet");





const crud = class{
    static insertionGet = (req=request,res=response) =>{
        res.render(`../views/index
    
        // ,{
        //     alert:{}
        // }
        `)
    }

    static insertionPost = (req=request,res=response) =>{
        data.insert(req.body)   
        res.redirect('/connection')
        
    }

    static connexionGet = (req=request,res=response) =>{
        res.render('connection')
    }



    static connexionPost = (req=request,res=response) =>{
        let{nom,email}=req.body;
        console.log('ytujjgg',req.body);
       db.query("select * from clients where nom = ? and email = ?",[nom,email],(err,resultat) =>{
           if (resultat) {
               req.session.nom = req.body.nom,
               req.session.mail = req.body.email;
               console.log('ma session est :',req.session)
               res.redirect("/resultat")
           }else{
               console.log(err);
           }
       })
    }

    static selection = (req=request,res=response) =>{
        console.log('ggdgg',req.session);
        if (req.session) {
            data.selt(req).then(suc=>{
                res.render('../views/resultat',{suc})  
              }).catch(err=>{
                  res.redirect('/error404')
              })  
            
            
        } else {
            res.redirect('https://www.google.com/')
        }
       

    }

    static supprimer =  (req=request,res=response) =>{
     data.supp(req)
      res.redirect('/resultat')
 
    }

}


module.exports= crud;