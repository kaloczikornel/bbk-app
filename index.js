const express = require('express');
const app = express();

app.use(express.static('static'));

const server = app.listen(1000, function () {
    console.log("On: 1000");
});