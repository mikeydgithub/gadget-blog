const { User } = require('../models');

const userData = [
    {
        username: "meagan92",
        email: "meagan_park@avenetro.ke",
        password: "pass1234"
    },
    {
        username: "candy92",
        email: "candy_diaz@zytrex.voto",
        password: "pass12345"
    },
    {
        username: "vasquez94",
        email: "vasquez_dudley@buzzmaker.pk",
        password: "pass12346"
    },
    {
        username: "dunlap93",
        email: "dunlap_james@comveyor.cards",
        password: "pass12347"
    },
    {
        username: "amalia90",
        email: "amalia_deleon@paprikut.cuisinella",
        password: "pass12348"
    },
    {
        username: "chan90",
        email: "chan_lowery@zoid.dz",
        password: "pass12349"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;