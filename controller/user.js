const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = data.users;

exports.createUser = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.status(201).json(req.body);
};

exports.getAllUsers = (req, res) => {
    res.json(users);
};

exports.getUserById = (req, res) => {
    const id = +req.params.id;
    const user = users.find(u => u.id === id);
    res.json(user);
};

exports.replaceUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(user => user.id === id);
    const updateData = {...req.body, id:id};
    console.log(updateData);
    users.splice(userIndex, 1,  updateData)
    res.status(201).json(users);
};

exports.updatePartialUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(user => user.id === id);
    const user = users[userIndex];
    console.log(user);
    const partialUpdatedData = {...user, ...req.body};
    users.splice(userIndex, 1, partialUpdatedData)
    res.status(201).json(users);
};

exports.deleteUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(user => user.id === id);
    const user = users[userIndex];
    users.splice(userIndex, 1);
    res.status(201).json(user);
};
