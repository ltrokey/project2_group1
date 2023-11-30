const sequelize = require("../config/connection");
const router = require("express").Router();
const { Users, Products } = require("../models");

// router.get('/', (req, res) => {
//     Users.findAll({
//         attributes: { exclude: ['[password']}
//     })
//     .then(dbUserData => res.json(dbUserData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.get('/profile', (req, res) => {
//     Products.findAll({
//         attributes: ['title', 'price', 'filename']
//       })
//     })
//     .then(dbProductData => res.json(dbProductData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });

module.exports = router;
