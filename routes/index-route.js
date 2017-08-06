const express = require('express');
const indexRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

indexRouter.get('/', (req, res) => {
  res.render('index', {
    message: 'Welcome',
    currentPage: 'Wordsmith',
    documentTitle: 'DeLorean Movies!!!',
    subTitle: 'Your Source For Lyrics',
  });
});

module.exports = indexRouter;
