const nodemailer = require('nodemailer');




exports.mailer = (req,token)=>{
    

let transporter = nodemailer.createTransport({
    service:'gmail',
   auth: {
       user:'kionoumohamed@gmail.com',
       pass:'Laloi2015'
   },
});
let lien = `http://localhost:8080/connection/${token}`;
let mailOption = {
from:'kionoumohamed@gmail.com',
to:req,
subject:'demo modemailer nan',
text:'bonjour Mr......,veillez cliquer sur ce lien pour finaliser votre inscription.',
html:`<p>Hello world,bonjour Mr ${req},veillez cliquer sur ce lien suivant:  </p> 
            <a  href="${lien}">confirmer votre email</a> 
            pour finaliser votre inscription.`   
}

transporter.sendMail(mailOption, (error,info)=>{
if (error) {
    console.log('ererrre',error);
} else {
    console.log('succcesss',info.response);
}
})
   
}
 

