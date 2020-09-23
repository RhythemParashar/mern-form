const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Erros: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const age = Number(req.body.age);
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
    const newUser = new User({
        username,
        age,
        height,
        weight,
    });

    newUser
        .save()
        .then(() => res.json('user added!'))
        .catch((err) => res.status(400).json('Erros: ' + err));
});

module.exports = router;
