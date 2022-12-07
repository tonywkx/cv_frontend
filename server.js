const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require('path');
const port = process.env.PORT || 8080;

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
/* app.listen(5000, () => console.log("Server Running")); */
/* console.log(process.env.REACT_EMAIL_USER);
console.log(process.env.REACT_EMAIL_PASS); */

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера

//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

//простой тест сервера
app.get('/ping', function (req, res) {
 return res.send('pong');
});

//обслуживание html
app.get('/*', function (req, res) {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);




const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "mr.tonywk@gmail.com",
    pass: "drxryrquwzlowqkq"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "tonywk@ya.ru",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});