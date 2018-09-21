const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging:false
});

const Page = db.define('Page', {
    title: { 
        type: Sequelize.STRING, 
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING, 
        allowNull: false, 
        validate: { 
            isURL: true //maybe change? 
        }
    },
    content: {
        type: Sequelize.TEXT, 
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'),
        defaultValue: "open"
    }
})
const User = db.define('User', {
    name: { 
        type: Sequelize.STRING, 
        allowNull: false
    },
    email: { 
        type: Sequelize.STRING, 
        allowNull: false, 
        validate: { 
            isEmail: true
        }
    }
})

module.exports = { db, Page, User }