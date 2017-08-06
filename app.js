const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');;
const favicon = require('serve-favicon');

var app = express();
require('dotenv').config();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Hey, Mitch! Currently listening on port ${port}`);
});

const indexRoute = require('./routes/index-route');
app.use('/', indexRoute);
const songsRoutes = require('./routes/songs-routes');
app.use('/songs', songsRoutes);
const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const usersRoutes = require('./routes/users-routes');
app.use('/user', usersRoutes);


app.get('*', (req, res) => {
    res.status(404).send('not found!');
});