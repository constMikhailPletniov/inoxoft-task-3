const usersReq = require('../database/usersdata.json');
const { getUsers } = require('../services/user.service');

module.exports = {
    getUserById: async (req, res) => {
        const { user_id } = req.params;
        const users = await getUsers();
        const findUser = await users.find(user => user.id === Number(user_id));

        return res.render('user_id', { ...findUser });
        //return res.json(user[users_id]);
    },
    deleteUserById: (req, res) => {
        return res.send(usersReq);
    },
    getAllUsers: async (req, res) => {
        const users = await getUsers();
        return res.render('users', { users });
    },
    postUsers: (req, res) => {
        return res.send(usersReq);
    },
}