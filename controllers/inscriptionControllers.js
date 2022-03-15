const { request,response } = require("express");
const db = require("../database/database");
const data = require("../requettes/requet");





const crud = class{
    static insertionGet = (req=request,res=response) =>{
        res.render(`../views/inscription
    
        // ,{
        //     alert:{}
        // }
        `)
    }

    static insertionPost = (req=request,res=response) =>{
        console.log('req bobyrtytrff',req.body);
        data.insert(req.body)   
       
        res.redirect('/connection')
        
    }

    static connexionGet = (req=request,res=response) =>{
        if(req.session.user){
            res.redirect('/resultat')
        }
        res.render('connection')
        
    }



    static connexionPost = (req=request,res=response) =>{
        let{nom,email}=req.body;
       db.query("select * from clients where nom = ? and email = ?",[nom,email],(err,resultat) =>{
           if (resultat) {
             let data = {
                    nom: req.body.nom,
                    email: req.body.email
             }
                    req.session.user = data;
                    console.log('ma session est :',req.session)
                    res.redirect("/resultat")
           }else{
               console.log(err);
           }
       })
    }

    static selection = (req=request,res=response) =>{
        
        data.selt(req).then(suc=>{
                res.render('resultat',{suc})  
              }).catch(err=>{
                  res.redirect('/error404')
              })
        console.log('ggdgg',req.session.user);

      
       

    }

    static supprimer =  (req=request,res=response) =>{
     data.supp(req)
      res.redirect('/resultat')
 
    }

}


module.exports= crud;