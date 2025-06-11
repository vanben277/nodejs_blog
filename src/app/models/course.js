const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, default: 'hahaha' },
    image: { type: String, default: 'hahaha' },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, default: 'hahaha' },
}, {
    timestamps: true
});

module.exports = mongoose.model('courses', Course);