const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

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

// add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})

module.exports = mongoose.model('courses', Course);