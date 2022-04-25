
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(session({
    secret: 'asfdgaergaregagrasdfwrgwef',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false}
}))
/*
app.use((err,req,res,next)=>{
    console.log(err);
    res.end('Ajajj, baj van :(');
});
 */

//app.use(express.static('static'));

// Load routing
require('./route/index')(app);

const server = app.listen(1000, function () {
    console.log("On: 1000");
});