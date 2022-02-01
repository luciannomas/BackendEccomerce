import nodemailer from 'nodemailer'


export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, //587
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'luciano.mastran@gmail.com', // generated ethereal user
      pass: 'ssfgrhkeqwkfglhw', // generated ethereal password
    },
  });

  transporter.verify().then( () => {
      //console.log("ready for send email")
  })