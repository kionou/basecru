let express = require('express');
let router= express.Router();
const db = require('../database/database');
const crud = require('../controllers/inscriptionControllers');
const { valider,userVlidation } = require('../mill/validator');



router.get('/',(req,res)=>{
   
      res.render('index')
       

})
router.route('/inscription')
    .get((req,res)=>{
        res.render('inscription',{alert:{} })
    })
    .post( valider,userVlidation,crud.insertionPost)

router.get('/connection',crud.connexionGet)
router.post('/connection',crud.connexionPost)


router.get('/resultat',crud.selection)

router.get('/delete',crud.supprimer)
router.get('/modifier',(req,res)=>{
    res.render('editt',{result:{}})
})

router.post('/edit/',(req,res)=>{
      const { id } = req.query.id;
      console.log('eeeftfdjrgrgg',id);
      let {nom,prenom,email,numero,ville} = req.body
        let sql = "UPDATE clients SET ? WHERE id = ?"
        // db.query(sql,[nom, prenom, email,numero,ville,id],(erreur,result)=>{
        //     if (erreur) {
        //         console.log(erreur,'rrrrrrr');
        //         return erreur
        //     } else {
        //         console.log(result);
        //         res.redirect('/resultat')
        //         return result
           
        //     }
        // })   
})


router.get('/edit',(req,res)=>{
    console.log(req.query.id);
    db.query(`SELECT * FROM clients WHERE id = ?`,[req.query.id],(error,result)=>{
        if (error) {
            console.log('eeeeeee',error);
        } else {
            res.render('edit',{data:result[0]});
            console.log("eeerfftt",result[0]);
        }
    })
})

module.exports = router;





//  let error = validationResult(req);
//     if (error) {
//         console.log("ededede",error.mapped())
//         res.render('../views/index',{
//             alert:error.mapped(),
//         })
//     }else{

// }