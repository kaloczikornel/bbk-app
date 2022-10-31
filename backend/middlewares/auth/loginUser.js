const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');
    return async (req, res, next) => {
        if (req.body.user === undefined) {
            return res.send({ success: false });
        }
        const { user } = req.body;

        const userInDb = await UserModel.findOne({
            auth0Id: user.sub,
        });
        if (!userInDb) {
            const newUser = new UserModel();
            newUser.name = `${user.family_name} ${user.given_name}`;
            newUser.email = user.email;
            newUser.idCardNumber = '';
            newUser.canGetIn = false;
            newUser.hasCard = false;
            newUser.auth0Id = user.sub;
            newUser.role = 'user';
            await newUser.save((error) => {
                if (error) {
                    return next(error);
                }
                return res.send({ user: newUser });
            });
        }
        return res.send({ user: userInDb });
    };
};
