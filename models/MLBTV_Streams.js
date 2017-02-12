'use strict';

var mongoose = require('mongoose');

var MLBTV_Streams = mongoose.model('MLBTV_StreamsDB', {
    GUID: String,
    HOME_TEAM: String,
    GAME_DATE: String,
    REQUEST_TIMESTAMP_ET: String,
    Streaming_Device_Platform: String,
    Determined_Location_Zip_Code: String
});

module.exports = MLBTV_Streams;




// mlbmediahackthon-app

// MLBTV_StreamsDB

// MLBTV_Streams.txt

// mongoimport --db mlbmediahackthon-app --collection mlbtv_streamsdbs --type json --file MLBTV_Streams.json --jsonArray

// HOME_TEAM, GAME_DATE ,REQUEST_TIMESTAMP_ET ,Streaming_Device_Platform,Determined_Location_Zip_Code