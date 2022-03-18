
const jwt = require('jsonwebtoken');

exports.authentification = (req,res,next)=>{

    try {
        
      const decodedtoken=  jwt.verify(token, "ZGVtbyBkZSBKc29uV2ViVG9rZW4=");
        console.log('grehfdfdjf',decodedtoken);
        console.log('token ok');
        next();
    } catch {
        console.log('authentificatrion token invalide');
    }
}
