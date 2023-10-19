const db = require('../config/connection');
const User = require('../models/User');

const userData = [
    {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
    },
    {
        "username": "dmitchell",
        "email": "dmitch@gmail.com"
    },
    {
        "username": "jmcshan01",
        "email": "jmcshan@yahoo.com"
    },
    {
        "username": "Rei",
        "email": "jpoland@gmail.com"
    },
    {
        "username": "mattdam",
        "email": "mattdamon@gmail.com"
    },
    {
        "username": "elonM",
        "email": "musk@gmail.com"
    },
]

User.insertMany(userData)

