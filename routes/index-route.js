var express = require('express');
var indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('index', {
    message: 'Hello world!',
    currentPage: 'home',
    documentTitle: 'DeLorean Movies!!!',
    subTitle: 'Check out some cool info on the best movies around.',
  });
});

module.exports = indexRouter;
