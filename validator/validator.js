const { body ,validationResult} = require("express-validator");

exports.valider= [
    body('nom')
    .trim()
    .not()
    .isEmpty()
    .withMessage('remplisser')   
]

exports.userVlidation = (req, res, next) => {
    const result = validationResult(req)
    const hasError = !result.isEmpty()
    if (hasError ) {
        const error = result.mapped()
        console.log('rrfrrkrk',error ); 
        res.render('../views/index')

  
    }
    
    next()
    
  
    // const error = result[0].msg;
    // res.json({ success: false, message: error });
  };







//  let error = validationResult(req);
//     if (error) {
//         console.log("ededede",error.mapped())
//         res.render('../views/index',{
//             alert:error.mapped(),
//         })