const sequelize = require('../config/connection');
const router = require("express").Router();
const {Users, Products} = require('../models');

router.get('/profile', (req, res) => {
    const userData = {
        username: username,
        items: [
            { title: 'Drone', price: 64.00, image: '/public/images/02_cat_upto100_drone.img'},
            { title: 'Karaoke', price: 37.00, image: '/public/images/02_cat_upto100_karaoke.img'},
            { title: 'LEGO Disney Princess', price: 52.00, image: '/public/images/02_cat_upto100_legoprincess.img'},
            { title: 'Hoverboard', price: 90.00, image: '/public/images/02_cat_upto100_hoverboard.img'},
            { title: 'Laser Tag', price: 120.00, image: '/public/images/02_cat_upto100_lazertag.img'},
            { title: 'Smart Robot', price: 120.00, image: '/public/images/02_cat_upto100_smartrobot.img'},
        ]
    };

    res.render('profile', userData); 
});

module.exports = router;
