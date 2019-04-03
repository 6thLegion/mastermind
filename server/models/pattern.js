var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PatternSchema   = new Schema({
    pattern: Array,
    date: Date,
});

module.exports = mongoose.model('Pattern', PatternSchema, 'mastermind');
