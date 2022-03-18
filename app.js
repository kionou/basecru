let express = require('express');
const session = require('express-session');
const nodemailer = require('nodemailer');
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
            cookie: { maxAge: 60000000000 }
        }))
        app.use(accueil);

    }else{
        console.log('connection echec ' + JSON.stringify(err , undefined ,2),err);  

    }
})
 let transporter = nodemailer.createTransport({
         service:'gmail',
        auth: {
            user:'kionoumohamed@gmail.com',
            pass:'Laloi2015'
        },
 });

 let mailOptio = {
     from:'kionoumohamed@gmail.com',
     to:'kionoumamadou.00@gmail.com',
     subject:'demo modemailer nan',
     text:'bonjour Mr......,veillez cliquer sur ce lien pour finaliser votre inscription.',
     html:'<p>Hello world,bonjour Mr......,veillez cliquer sur ce lien pour finaliser votre inscription. </p>'
     
 }

 transporter.sendMail(mailOption, (error,info)=>{
     if (error) {
         console.log('ererrre',error);
     } else {
         console.log('succcesss',info.response);
     }
 })






app.listen(8080 ,()=>{
    console.log('connect port 8080');
})