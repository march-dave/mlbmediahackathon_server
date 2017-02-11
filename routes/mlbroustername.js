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

var request = require("request");
var Client = require('../models/mlb');

router.route('/')
    .get((req, res) => {
        // Client.find({}, (err, trees) => {
        //     if (err) {
        //         res.status(400).send(err);
        //     } else {
        //         res.send('trees');
        //     }
        // });

        var options = { method: 'GET',
        url: 'http://mlb.mlb.com/lookup/named.roster_all.bam',
        qs: { team_id: '\'141\'' },
        headers:
        { 'postman-token': 'e24805c9-2d42-32b5-0ac3-dce901cf743a',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded' },
        form: { imageurl: 't', like: 'g', dislike: 's' } };

        request(options, function (error, response, body) {
        // if (error) throw new Error(error);

        // console.log(body);

        res.send(body);
        });


    })

router.route('/:id')
    .get((req, res) => {
        Client.findById(req.params.id, (err, client) => {
            res.status(err ? 400 : 200).send(err || client);
        });
    })


module.exports = router;