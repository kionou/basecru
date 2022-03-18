const db = require("../database/database");


const data = class{
    static insert = (into) =>{

        return new Promise ((resolve,reject) =>{
            let {nom,prenom,email,numero,ville} = into 
        let sql = "INSERT INTO `clients`( `nom`, `prenom`, `email`, `numero`, `ville`) VALUES (?,?,?,?,?);"

        let requete = "select * from clients where  email = ?"
        db.query(requete,[email],(err,result)=>{
            if (result=='') {
              
                db.query(sql,[nom, prenom, email,numero,ville],(erreur,result)=>{
                    if (erreur) {
                        
                        reject(erreur) 
                    } else {
                        
                        resolve(result) 
                    }
                })   
            } else {
                reject({message:'deja inscrit ,essayé avec une autre adresse mail ! '})
            }
        })
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
                return error
            } else {
                return resl
            
            }
        })
    }
    static postconn = (req) =>{
        let{nom,email}=req;
        return new Promise ((resolve,reject)=>{
            let sql = "select * from clients where nom = ? and email = ?"
            db.query(sql,[nom,email],(err,resultat) =>{
                if (err) {
                    reject(err)
                } else {
                    resolve( resultat)
                }
            })
        })
    }
}

module.exports = data

