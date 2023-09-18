const {response} = require('express')
const User = require('../models/User');

module.exports ={
    async store(reques, response) {
    const {name, email } = request.body

    const user = await User.create({ name, email});

    return response.json(user);
    }
    };
  