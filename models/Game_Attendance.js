'use strict';

var mongoose = require('mongoose');

var Game_Attendance = mongoose.model('Game_AttendanceDB', {
    HOME_TEAM: String,
    AWAY_TEAM: String,
    START_TIME: String,
    ATTENDANCE: String
});

module.exports = Game_Attendance;