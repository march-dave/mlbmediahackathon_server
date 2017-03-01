'use strict';

import mongoose from 'mongoose';

const IssueImage = mongoose.model('mlbDB', {
    imageurl: String,
    like: String,
    dislike: String
});

export default IssueImage;