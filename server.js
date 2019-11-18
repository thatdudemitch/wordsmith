const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

require('dotenv').config();
// express server
const app = express();
const port = process.env.PORT || 8080;
// middleware
app.use(cors())
app.use(express.json());
app.use(logger('dev'));
// passport authentication
app.use(cookieParser());
app.use(session({secret: process.env.SECRET_KEY, resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); 
    });
}

app.listen(port, () => {
    console.log(`Currently listening on port ${port}`);
});
// routes
const songsRouter = require('./routes/songs');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
app.use('/auth', authRouter);
app.use('/songs', songsRouter);
app.use('/profile', usersRouter);