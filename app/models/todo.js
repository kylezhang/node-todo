var mongoose = require('mongoose');
var moment = require('moment');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    },
    is_deleted: {
        type: Number,
        default: 1   //is deleted, 0: undeleted, 1: deleted
    },
    created_at: {
        type: String,
        default: moment().format('YYYY-MM-DD HH:MM:SS')
    },
    updated_at: {
        type: String,
        default: moment().format('YYYY-MM-DD HH:MM:SS')
    }
});