const { request,response } = require("express");
const data = require("../requettes/requet");





const crud = class{
    static insertionGet = (req=request,res=response) =>{
        res.render('../views/index'
        // ,{
        //     alert:{}
        // }
        )
    }

    static insertionPost = (req=request,res=response) =>{
        data.insert(req.body)   
        res.redirect('/resultat')
        
    }

    static selection = (req=request,res=response) =>{
        data.selt(req).then(suc=>{
          res.render('../views/resultat',{suc})  
        }).catch(err=>{
            res.redirect('/error404')
        })

    }

    static supprimer =  (req=request,res=response) =>{
     data.supp(req)
      res.redirect('/resultat')
 
    }

}


module.exports= crud;