const sequelize = require('../config/connection');
const router = require("express").Router();
const {Users, Products} = require('../models');

router.get('/profile', (req, res) => {
    const userData = {
        username: username,
        items: items
    };
    res.render('profile', userData); 
});

module.exports = router;
