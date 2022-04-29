const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Blog = db.model('Blog', {
    title: String,
    sumUp: String,
    content: String,
    _author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Blog;