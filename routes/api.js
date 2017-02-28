'use strict';

// var express = require('express');
// var router = express.Router();
import express from 'express';
const router = express.Router();

router.use('/mlbroustername', require('./mlbroustername'));

// module.exports = router;
export default router;