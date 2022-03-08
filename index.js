const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

let transporter = nodemailer.createTransport({
host: 'smtp.gmail.com',
port: 587,
secure: false,
requireTLS: true,
auth: {
    user: process.env.EMAIL, // like : abc@gmail.com
    pass:  process.env.APP_PASSWORD,     // like : pass@123
}
});

let mailOptions = {
 from: process.env.EMAIL,
 to: '2019ume1827@mnit.ac.in',
 subject: 'Check Mail',
 text: 'deepak madarchod'
};
// const msg= async()=>{
//   for(let i =0; i<1000; i++)
//   {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//        return console.log(error.message);
//     }
//   console.log('success');
//   }); 
//   }
// }
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
     return console.log(error.message);
  }
})
}
main().catch(console.error);


