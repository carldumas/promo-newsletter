'use strict';

require('dotenv').config();

const router = require('express').Router();

// Testing
router.get('/api/test', (req, res) => {
  res.send({ express: 'Testing server...' });
});

// Mail Service using nodemailer and googleapis
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENTID,
  process.env.CLIENTSECRET,
  process.env.URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESHTOKEN,
});
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.DEFAULTUSEREMAIL,
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    refreshToken: process.env.REFRESHTOKEN,
    accessToken: accessToken,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

router.post('/send-mail', (req, res) => {
  const usersArr = req.body.users;
  const newUsersArr = usersArr.map((user) => user.email);

  const mailOptions = {
    from: process.env.DEFAULTUSEREMAIL,
    bcc: newUsersArr,
    subject: 'Daily Promotion 2',
    generateTextFromHTML: true,
    html: '<b>Here are the promotions for today...</b>',
    // TODO: need to be able to import email template with data,
  };

  smtpTransport.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages', success);
    }
  });

  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      console.log(response.message);
      res.sendStatus(200);
    }
    smtpTransport.close();
  });
});

module.exports = router;
