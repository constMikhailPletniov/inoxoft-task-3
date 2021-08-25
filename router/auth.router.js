const router = require('express').Router();

const { log, reg } = require('../controls/auth.controller');

router.get('/login', (req, res) => res.render('login'));
router.get('/registration', (req, res) => res.render('registration'));

router.post('/log', log);
router.post('/reg', reg);

module.exports = router;