const db = require("../database/database");


const data = class{
    static insert = (into) =>{
        let {nom,prenom,email,numero,ville} = into 
        let sq = "INSERT INTO `clients`( `nom`, `prenom`, `email`, `numero`, `ville`) VALUES (?,?,?,?,?);"
       
        db.query(sql,[nom, prenom, email,numero,ville],(erreur,result)=>{
            if (erreur) {
                console.log(erreur,'rrrrrrr');
                return erreur
            } else {
                console.log(result);
                return result
           
            }
        })   
    }

    static selt = () =>{
        return  new Promise((resolve,reject) =>{       
            db.query(`SELECT * FROM clients`,(error,resl)=>{
                if (error) {
                    console.log('eeeeeee',error);
                    reject(error)
                } else {
                    resolve(resl)
                
                }
            }) 
        })
    }

    static supp = (req) =>{
        db.query(`DELETE  FROM clients WHERE id = ?`, [req.query.id],(error,resl)=>{
            if (error) {
                console.log('eeeeeee',error);
                return error
            } else {
                console.log('eeeeerrrrrr',resl);
                return resl
            
            }
        })
    }
}

module.exports = data

