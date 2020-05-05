const User = require('../models/User');
const { userData } = require('../data');

module.exports.getUsers = (req, res) => {
    res.status(200).json(userData);
};

module.exports.create = (req, res) => {
    let data = req.body;
    const newUser = new User(data.name, data.age, data.email);

    userData.push(newUser);
    res.status(201).json(newUser);
}
