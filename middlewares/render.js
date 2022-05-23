/**
 * A template alapján összrakja az oldalt, amit a felhasználó lát.
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        //console.log(res.locals,viewName,"RENDER")
        res.render(viewName);
        //console.log('render: ' + viewName);
        //res.end('Template: ' + viewName);
    };
};