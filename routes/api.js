'use strict';

var express = require('express');
var router = express.Router();

// router.use('/clients', require('./clients') );
router.use('/mlbroustername', require('./mlbroustername'));

module.exports = router;