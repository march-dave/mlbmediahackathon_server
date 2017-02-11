'use strict';

var mongoose = require('mongoose');

var IssueImage = mongoose.model('mlbDB', {
    imageurl: String,
    like: String,
    dislike: String
});

module.exports = IssueImage;