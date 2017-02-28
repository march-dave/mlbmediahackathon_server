'use strict';

// var mongoose = require('mongoose');
import mongoose from 'mongoose';

const IssueImage = mongoose.model('mlbDB', {
    imageurl: String,
    like: String,
    dislike: String
});

// module.exports = IssueImage;
export default IssueImage;