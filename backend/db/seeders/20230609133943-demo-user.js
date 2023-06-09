'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        options.tableName = 'Users';
        return queryInterface.bulkInsert(options, [
            {
                email: 'demo@user.io',
                username: 'DemoUser',
                firstName: "Demo",
                lastName: "User",
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                email: 'user1@user.io',
                username: 'FakeUser1',
                firstName: "User",
                lastName: "1",
                hashedPassword: bcrypt.hashSync('password2')
            },
            {
                email: 'user2@user.io',
                username: 'FakeUser2',
                firstName: "User",
                lastName: "2",
                hashedPassword: bcrypt.hashSync('password3')
            },
            {
                email: 'user3@user.io',
                username: 'FakeUser3',
                firstName: "User",
                lastName: "3",
                hashedPassword: bcrypt.hashSync('password3')
            },
            {
                email: 'user4@user.io',
                username: 'FakeUser4',
                firstName: "User",
                lastName: "4",
                hashedPassword: bcrypt.hashSync('password4')
            },
            {
                email: 'user5@user.io',
                username: 'FakeUser5',
                firstName: "User",
                lastName: "5",
                hashedPassword: bcrypt.hashSync('password5')
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        options.tableName = 'Users';
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(options, {
            username: { [Op.in]: ['DemoUser', 'FakeUser1', 'FakeUser2', 'FakeUser3', 'FakeUser4', 'FakeUser5'] }
        }, {});
    }
};