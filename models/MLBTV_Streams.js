'use strict';

var mongoose = require('mongoose');

var MLBTV_Streams = mongoose.model('MLBTV_StreamsDB', {
    HOME_TEAM: String,
    GAME_DATE: String,
    REQUEST_TIMESTAMP_ET: String,
    Streaming_Device_Platform: String,
    Determined_Location_Zip_Code: String
});

module.exports = MLBTV_Streams;