let express = require('express');
let router= express.Router();
let bodyParser = require('body-parser');
const db = require('../database/database');
const { body, validationResult } = require('express-validator');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
const validator = [
    body('nom')
    .isEmpty().withMessage('remplisser')
    .isLength({min: 3}).withMessage('le nom doit avoir au min 3 caracteres')
    
    ] 


router.use(bodyParser.json())



router.get('/',(req,res)=>{
    res.render('../views/index',{
        alert:{}
    })
})

router.post('/',validator,urlencodedParser,(req,res)=>{
    let error = validationResult(req);
    if (error) {
        console.log("ededede",error.mapped());
        // let alert = error.array()
        res.render('../views/index',{
            alert:error.mapped(),
        })

    } else {

        let {nom,prenom,email,numero,ville} = req.body
        let sql = "INSERT INTO `clients`( `nom`, `prenom`, `email`, `numero`, `ville`) VALUES (?,?,?,?,?);"
        db.query(sql,[nom, prenom, email,numero,ville],(erreur,result)=>{
            if (erreur) {
                console.log(erreur);
            } else {
                console.log(result);
            res.redirect('/resultat')
            }
        })  
    }
    

})

router.get('/resultat',(req,res)=>{
    db.query(`SELECT * FROM clients`,(error,resl)=>{
        if (error) {
            console.log('eeeeeee',error);
        } else {
            res.render('../views/resultat',{resultat:resl})
        }
    })
})



router.get('/delete',(req,res)=>{
    db.query(`DELETE  FROM clients WHERE id = ?`, [req.query.id],(error,resl)=>{
        if (error) {
            console.log('eeeeeee',error);
        } else {
            console.log('eeeeerrrrrr',resl);
            res.redirect('/resultat')
        }
    })
})

router.get('/edit',(req,res)=>{
    db.query(`SELECT * FROM clients WHERE id = ?`,[req.query.id],(error,result)=>{
        if (error) {
            console.log('eeeeeee',error);
        } else {
            res.render('../views/index',{resul:result[0]});
            console.log("eeerfftt",result[0]);
        }
    })
})

module.exports = router;