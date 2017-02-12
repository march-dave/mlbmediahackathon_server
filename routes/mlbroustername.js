'use strict';

var express = require('express');
var router = express.Router();

// var Game_Attendance = require('../models/Game_Attendance');
var MLBTV_Streams = require('../models/MLBTV_Streams');

router.route('/')
    .get((req, res) => {
         MLBTV_Streams.find({}, (err, trees) => {
          if(err) {
            res.status(400).send(err);
          } else {
            // console.log('res', res);
            res.send(trees);
          }
        });
    })
    .post((req, res) => {
        var mlbtv_Streams = new MLBTV_Streams(req.body);
        mlbtv_Streams.save((err, saved) => {
        res.status(err ? 400 : 200).send(err || mlbtv_Streams);
    })
})

router.route('/:id')
    .get((req, res) => {
      MLBTV_Streams.findById(req.params.id, (err, client) => {
        res.status(err ? 400 : 200).send(err || client);
      });
    })
    .delete((req, res) => {
      MLBTV_Streams.findByIdAndRemove(req.params.id, (err, client) => {
        res.status(err ? 400 : 200).send(err);
      });
    })
    .put((req, res) => {
      MLBTV_Streams.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, client) => {
        res.status(err ? 400 : 200).send(err || client);
      });
    })


module.exports = router;