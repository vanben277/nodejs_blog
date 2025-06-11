const mongoose = require("mongoose")

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog');
        console.log('true')
    }
    catch (error) {
        console.log('false', error.message)
    }
}

module.exports = { connect };