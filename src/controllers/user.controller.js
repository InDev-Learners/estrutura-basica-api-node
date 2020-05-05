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

module.exports.getOne = (req, res) => {
    const userId = req.params.id;

    if (userId < userData.length) {
        res.status(200).json(userData[userId]);
    } else {
        res.status(400).json({ error: "user not found!"});
    }
}

 module.exports.update = (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    if(userId < userData.length){
        let attrs = Object.getOwnPropertyNames(updateData);
        for(const attr of attrs) {
            userData[userId][attr] = updateData[attr];
        }
    
        res.status(200).json(userData[userId]);
    } else {
        res.status(400).json({ error: "user not found!"});
    }
 }

module.exports.delete = (req, res) => {
    const userId = req.params.id;

    if(userId < userData.length) {
        userData.splice(userId, 1);
        res.status(200).json({message: `User with ID: ${userId} was deleted`});
    } else {
        res.status(400).json({ error : 'user not found!'});
    }        
}