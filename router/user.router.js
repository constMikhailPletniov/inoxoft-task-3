
const router = require('express').Router();
const { deleteUserById, getAllUsers, getUserById, postUsers } = require('../controls/user.controller');

router.get('/:user_id', getUserById);
router.delete('/:user_id', deleteUserById);

router.get('/', getAllUsers);
router.post('/', postUsers);

module.exports = router;

