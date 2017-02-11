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

var xml2js = require('xml2js'); // XML2JS Module
var parser = new xml2js.Parser();

router.route('/')
    .get((req, res) => {
        
        var options = { method: 'GET',
        url: 'http://mlb.mlb.com/lookup/named.roster_all.bam',
        qs: { team_id: '\'141\'' },
        headers:
        { 'postman-token': 'e24805c9-2d42-32b5-0ac3-dce901cf743a',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded' },
        form: { imageurl: 't', like: 'g', dislike: 's' } };

        request(options, function (err, response, body) {
            var ret = JSON.stringify(body);
            (err) ? response.status(400).send(err) :  parser.parseString( res.send(ret) )  
            // (err) ? response.status(400).send(err) :  parser.parseString( ret, function(error, result) {
            //     console.log(result);
            //     console.log('Done');                
            // })  
        });
    })

router.route('/:id')    
    .get((req, res) => {
        Client.findById(req.params.id, (err, client) => {
            res.status(err ? 400 : 200).send(err || client);
        });
    })


module.exports = router;