'use strict';

import mongoose from mongoose;

const Game_Attendance = mongoose.model('Game_AttendanceDB', {
    HOME_TEAM: String,
    AWAY_TEAM: String,
    START_TIME: String,
    ATTENDANCE: String
});

export default Game_Attendance;