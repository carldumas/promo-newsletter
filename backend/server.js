require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(function (req, res, next) {
  console.log('request test: ', req.body, req.method);
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, HEAD, GET, PUT, POST, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.end();
  } else {
    next();
  }
});
app.use(morgan('tiny'));
app.use(express.static('./client/build'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
