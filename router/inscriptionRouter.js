let express = require('express');
let router= express.Router();

const db = require('../database/database');
const { body, validationResult } = require('express-validator');
const crud = require('../controllers/inscriptionControllers');

const validator = [
    body('nom')
    .isEmpty().withMessage('remplisser')
    .isLength({min: 3}).withMessage('le nom doit avoir au min 3 caracteres')
    
] 

router.get('/',crud.insertionGet)

router.post('/',crud.insertionPost)

router.get('/resultat',crud.selection)



router.get('/delete',crud.supprimer)

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





//  let error = validationResult(req);
//     if (error) {
//         console.log("ededede",error.mapped())
//         res.render('../views/index',{
//             alert:error.mapped(),
//         })