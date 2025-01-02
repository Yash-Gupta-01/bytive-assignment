const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    name: String,
    description: String,
    status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Todo', todoSchema);