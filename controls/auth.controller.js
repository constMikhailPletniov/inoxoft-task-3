
const { CREATE, NOT_FOUND } = require('../config/conf');
const { addUsers, getUsers, getEmail } = require('../services/user.service');

module.exports = {
    log: async (req, res) => {
        const { email } = req.body;
        const user = await getEmail(email);

        if (!user) {
            return res.status(NOT_FOUND).redirect('/registration');
        } else {
            return res.redirect('/users');
        }
    },
    reg: async (req, res) => {
        const { name, email, pass, age } = req.body;
        const users = await getUsers();
        const findUser = await users.find(user => user.email === email);

        if (!findUser) {
            await addUsers({ name, email, pass, age, id: users.length });
            return res.status(CREATE).redirect('/login');
        }
        return res.redirect('/login');

    },
}