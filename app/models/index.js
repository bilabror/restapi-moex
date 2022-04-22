const config = require('../../config/database');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose;
db.url = config.url
db.posts = require('./postModel')(mongoose)

module.exports = db