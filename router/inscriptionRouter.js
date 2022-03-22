let express = require('express');
let router= express.Router();
const db = require('../database/database');
const crud = require('../controllers/inscriptionControllers');
const { valider } = require('../mill/validator');
const multer = require('multer');





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imageMulter')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })




router.get('/',crud.accueil)
router.route('/inscription')
      .get((req,res) =>{
            res.render('inscription',{alert:{} })
      })
      .post( valider,crud.insertionPost)
router.get('/connection',crud.connexionGet)
router.post('/connection',crud.connexionPost)
router.get('/resultat',crud.selection)
router.get('/edit/:id',crud.editGet)
router.post('/edit/:id',crud.editPost)
router.get('/delete/:id',crud.supprimer)







router.get('/multer',(req,res)=>{
        res.render('multer')
    })

    router.post('/multer',upload.single('uploaded_file'),(req,res)=>{
        let sql =`INSERT INTO image (photo) VALUES('${req.file.filename}')`;
        db.query(sql,(err,result)=>{
            if (err) {
                console.log('errrrrr' +'bonjour',err);
            } else {
                console.log('resultttt',result);
            }
        })
    })

module.exports = router;

