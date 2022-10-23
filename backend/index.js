const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const { errorHandler } = require('./middlewares/auth0/errorHandle');
const { checkJwt } = require('./middlewares/auth0/checkJWT');

const app = express();

const port = process.env.PORT || 4000;

app.use(express.static('static'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors());

app.use(
    session({
        secret: 'asfdgaergaregagrasdfwrgwef',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

/*
app.use((err,req,res,next)=>{
    console.log(err);
    res.end('Ajajj, baj van :(');
});
 */

// app.use(checkJwt);
app.use(errorHandler);

// Load routing
require('./route/index')(app);

app.listen(port, function () {
    console.log(`On: ${port}`);
});
