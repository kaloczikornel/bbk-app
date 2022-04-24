const express = require('express');
const app = express();
app.set('view engine', 'ejs');

//app.use(express.static('static'));

require("./route/index")(app);

const server = app.listen(1000, function () {
    console.log("On: 1000");
});