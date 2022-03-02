let express = require('express');
let router= express.Router();
let bodyParser = require('body-parser');
const db = require('../database/database');
let urlencodedParser = bodyParser.urlencoded({ extended: false });




router.use(bodyParser.json())



router.get('/',(req,res)=>{
    res.render('../views/index')
})

router.post('/', urlencodedParser,(req,res)=>{
   
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

})

router.get('/resultat',(req,res)=>{
    db.query(`SELECT * FROM clients`,(error,resl)=>{
        if (error) {
            console.log('eeeeeee',error);
        } else {
            console.log('eeeeerrrrrr',resl);
            res.render('../views/resultat',{resultat:resl})
        }
    })
})



router.get('/resultat/:id',(req,res)=>{
    db.query(`SELECT * FROM clients WHERE id = ?`, [req.params.id],(error,resl)=>{
        if (error) {
            console.log('eeeeeee',error);
        } else {
            console.log('eeeeerrrrrr',resl);
            res.render('../views/resultat',{resultat:resl})
        }
    })
})


module.exports = router;