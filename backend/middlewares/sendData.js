module.exports = function () {
    return function (req, res) {
        return res.send(res.locals);
    };
};
