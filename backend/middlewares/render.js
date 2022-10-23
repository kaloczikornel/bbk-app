/**
 * A template alapján összrakja az oldalt, amit a felhasználó lát.
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        if (req.query.json === undefined) {
            return res.render(viewName);
        }
        return res.send(res.locals);
    };
};
