// In progress work. Having many issues around deploying functions to firebase. Learning curve :-)
const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/timestamp', (request, response) => {
  response.send(`${Date.now()}`);
});

app.get('/timestamp-cached', (request, response) => {
  response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  response.send(`${Date.now()}`);
});

app.get('/api', (req, res) => {
  res.send('Hello from the API');
});
app.get('/admin', (req, res) => {
  res.send('Hello from the ADMIN');
});

exports.app = functions.https.onRequest(app);
