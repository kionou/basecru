const jwt = require('jsonwebtoken');



const authentification = class {
    static CreerToken = (int)=>{
        let user = {
            nom:int.nom,
            prenom:int.prenom,
            email:int.email,
            numero:int.numero,
            ville:int.ville,
       }
       let token = jwt.sign(user, "ZGVtbyBkZSBKc29uV2ViVG9rZW4=");
       return token
    }

    static VerifierToken = (token)=>{
        console.log('token est ', token);

        try {
         
          const auth=  jwt.verify(token, "ZGVtbyBkZSBKc29uV2ViVG9rZW4=");
          console.log('rrr',auth);
            return auth
        } catch {
            console.log('token d\'authentification invalide');
        }
    }
}
module.exports= authentification;



