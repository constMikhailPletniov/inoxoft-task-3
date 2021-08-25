
const path = require('path');
const fs = require('fs');
const util = require('util');

const readPromise = util.promisify(fs.readFile);
const appendPromise = util.promisify(fs.writeFile);
const userPath = path.join('database', 'usersdata.json');

const getUsers = async () => {
    const getUser = await readPromise(userPath);
    return JSON.parse(getUser);
};
const addUsers = async (data) => {
    const users = await getUsers();
    users.push(data);
    await appendPromise(userPath, JSON.stringify(users));
};

const getID = async () => {
    const getId = await getUsers();
    const getKey = [];
    for (const key in getId) {
        getKey.push(key);
    }
    return getKey;
};
const getEmail = async (email) => {
    const users = await getUsers();
    const findEmail = await users.find((user) => user.email === email);
    return findEmail;
}

module.exports = {
    getID,
    addUsers,
    getUsers,
    getEmail,
}