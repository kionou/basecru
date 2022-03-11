const { body ,validationResult} = require("express-validator");

exports.valider= [
    body('nom')
        .not()
        .isEmpty()
        .trim()
        .escape()
        .bail()
        .withMessage('Nom ne peut pas être vide')
        .isLength({min:5 , max:10})
        .withMessage('Minimun 5 caractères obligatoires'),
    body('prenom')
        .not()
        .isEmpty()
        .trim()
        .escape()
        .bail()
        .withMessage('Prenom ne peut pas être vide')
        .isLength({min:5 , max:10})
        .withMessage('Minimun 5 prenom caractères obligatoires'),
    body('email')
        .notEmpty()
        .withMessage('e-mail est requis'),
     body('email')
        .isEmail()
        .withMessage('email non valide'),
    body('numero')
        .isLength({ min: 10 })
        .withMessage('Le numero de téléphone doit etre de 10 chiffres'),
    body('numero')
        .notEmpty()
        .withMessage('numero obligatoire'),
	body('numero')
        .isMobilePhone('id-ID')
        .withMessage('Numero non valide')
  

    
   
]

exports.userVlidation = (req, res, next) => {
        const result = validationResult(req)
    if (!result.isEmpty() ) {
        const error = result.mapped()
        console.log('rrfrrkrk',error ); 
        res.render('index',{alert:error})
    }
    
      next() 
};







//  let error = validationResult(req);
//     if (error) {
//         console.log("ededede",error.mapped())
//         res.render('../views/index',{
//             alert:error.mapped(),
//         })


// const error = result[0].msg;
// res.json({ success: false, message: error });