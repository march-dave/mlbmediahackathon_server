// var request = require("request");
//
// var options = { method: 'GET',
//   url: 'http://mlb.mlb.com/lookup/named.roster_all.bam',
//   qs: { team_id: '\'141\'' },
//   headers:
//    { 'postman-token': 'e24805c9-2d42-32b5-0ac3-dce901cf743a',
//      'cache-control': 'no-cache',
//      'content-type': 'application/x-www-form-urlencoded' },
//   form: { imageurl: 't', like: 'g', dislike: 's' } };
//
// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//
//   console.log(body);
// });
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