let express = require('express');
let app = express();
const db = require('./database/database');
let accueil = require("./router/inscriptionRouter");



db.connect((err)=>{
    if(!err){
        console.log('connection etablie');

        app.use(express.static('public'));
        app.set('view engine', 'ejs')
        app.use('/', accueil);

    }else{
        console.log('connection echec ' + JSON.stringify(err , undefined ,2),err);  

    }
})





app.listen(8080 ,()=>{
    console.log('connect port 8080');
})