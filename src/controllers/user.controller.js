const User = require('../models/User');
const { userData } = require('../data');

module.exports.getUsers = (req, res) => {
    res.status(200).json(userData);
};
