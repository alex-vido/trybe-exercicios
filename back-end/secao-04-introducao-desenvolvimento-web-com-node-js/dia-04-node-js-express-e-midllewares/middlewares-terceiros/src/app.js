const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(morgan('dev'));
// configura para procurar o path no diretório ./images
app.use(express.static('./images'));

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

module.exports = app;