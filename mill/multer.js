const multer = require("multer");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imageMulter')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  
const uploads = class {
  static upload = multer({ storage: storage })
}