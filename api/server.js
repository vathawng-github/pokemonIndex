require('dotenv').config();
require('app-module-path').addPath(__dirname);

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Routers
const apiRouter = require('./routes/api/v1');

const app = express();

// Configure the rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});

// Connect to Mongo via mongoose
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then( () => console.log('MongoDB connected.'))
.catch( err => console.log(err) );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(limiter);

// if (process.env.NODE_ENV === "production") {
//     app.use(cors({
//         origin: "https://sp23-41200-vathawng-pokemon.ue.r.appspot.com"
//     }));
// } else {
//     app.use(cors());
// }

app.use(cors());

app.use('/api/v1', apiRouter);

module.exports = app;
