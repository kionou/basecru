let express = require('express');
let router= express.Router();
const db = require('../database/database');
const crud = require('../controllers/inscriptionControllers');
const { valider ,userVlidation} = require('../validator/validator');




 

router.get('/',valider,userVlidation,crud.insertionGet)

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
//     }else{

// }