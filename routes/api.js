'use strict';

import express from 'express';
const router = express.Router();

router.use('/mlbroustername', require('./mlbroustername'));

export default router;