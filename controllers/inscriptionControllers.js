const { request,response } = require("express");
const { validationResult } = require("express-validator");
const data = require("../requettes/requet");






const crud = class{
    static insertionGet = (req=request,res=response) =>{
        res.render('../views/inscription')
    }

    static insertionPost = (req=request,res=response) =>{
       
        const result = validationResult(req)

        if (!result.isEmpty() ) {
            const error = result.mapped()
            console.log('rrfrrkrk',error ); 
            res.render('inscription',{alert:error})

        } else {
            data.insert(req.body).then(response=>{
                // console.log(response );
                res.redirect('/connection')
            }).catch(error=>{
                res.render('inscription',{alert:error})
            })
        }
       
       
       
       
        
        
    }

    static connexionGet = (req=request,res=response) =>{
       
        if(req.session.user){
            console.log('connexion post log log',req.session.user);
            return  res.redirect('/resultat')
        }
        res.render('connection')
        
    }



    static connexionPost = (req=request,res=response) =>{
        
        req.session.user = ''
        //console.log("req.body",req.body);
        data.postconn(req.body)
            .then((succes)=>{
                console.log("success ",succes);
                let dataSuccess = {
                    nom: succes[0].nom,
                    email: succes[0].email
                }
                req.session.user = dataSuccess;
                console.log('ma session est :',req.session.user)

                res.redirect("/resultat")

            }).catch(error=>{
                console.log('eerrrffrtgg',error);
                res.redirect('/erreur404')
                return error
            })
        
        
            
           
    }

    static selection = (req=request,res=response) =>{
        if(req.session.user){
            data.selt(req).then(suc=>{
                res.render('resultat',{suc})  
            }).catch(err=>{
                res.redirect('/error404')
            })
            console.log('ggdgga',req.session.user);
        } else {
          return  res.redirect('/connection')

        }
      
       

    }

    static supprimer =  (req=request,res=response) =>{
     data.supp(req)
      res.redirect('/resultat')
 
    }

}


module.exports= crud;