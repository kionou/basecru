let express = require('express');
const session = require('express-session');
let app = express();
let db = require('./database/database');
let accueil = require("./router/inscriptionRouter");





db.connect((err)=>{
    if(!err){
        console.log('connection etablie');
        app.set('view engine', 'ejs')
        app.set('views','./views')
        app.use(express.static('public'));
        app.use(express.json())
        app.use(express.urlencoded({ extended: false }))
        app.use(session({ 
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 60000 }
        }))
        app.use(accueil);

    }else{
        console.log('connection echec ' + JSON.stringify(err , undefined ,2),err);  

    }
})




app.listen(8080 ,()=>{
    console.log('connect port 8080');
})