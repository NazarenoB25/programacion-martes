var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: ' a ' });
});




router.post('/', async(req, res, next) => {

  var nombre = req.body.nombre;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'nazarenob2501@gmail.com',
    subject: 'CONTACTO WEB',
    html: nombre + "" + "se contacto atraves de la web y quiere mas info ed este corre:" + email + ". <br> ademas , hizo el siguente comentario: " + mensaje + ". <br> su tel es" + telefono
  }

  var transporter = nodemailer.createTransport({ 

    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })// cierra tranporter

var info = await transporter.sendMail(obj);

res.render('index', {
  message: 'Mensaje enviado de forma correcta',
});


});

module.exports = router;
