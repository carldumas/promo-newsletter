require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(morgan('tiny'));
app.use(express.static('./client/build'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/test', (req, res) => {
  res.send({ express: 'Testing server...' });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
