const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'hahaha' },
    description: { type: String, default: 'hahaha' },
    image: { type: String, default: 'hahaha' },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('courses', Course);