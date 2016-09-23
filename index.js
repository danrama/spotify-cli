#!/usr/bin/env node --harmony

'use strict';

const
    co = require('co'),
    _ = require('lodash'),
    program = require('commander'),
    spotify = require('./lib/spotify-api'),
    VERSION = require('./package.json').version;

function* processRequest(names) {
    let artistRequests = [];
    names.forEach(function(name) {
        artistRequests.push(spotify.artistSearch(name))
    });
     
    let artists = yield artistRequests;

    let trackRequests = _.map(artists, function(artist) {
        return spotify.artistTopTracks(artist.id);
    });

    let tracks = yield trackRequests;

    for (let i=0; i < artists.length; i++) {
        console.log(artists[i].name + ' - ' + tracks[i].name);
    };
};

program
    .version(VERSION)
    .description('An application for search top tracks for artists in Spotify')
    .usage('<artists> - example: "Churches, Guns and Roses, Aha"')
    .arguments('<artists>')
    .action(function(artists) {
        console.log(artists);
        if (typeof artists === 'undefined') {
          console.error('No artists provided');
          process.exit(1);
        };
        let artistArray = _.map(artists.split(','), _.trim);
        console.log('Searching Spotify for top tracks for artists: %s', artists);
        co(processRequest(artistArray)).catch(function(err) {
            console.error(err);
        });
    });

program.parse(process.argv);

if (!program.args.length) program.help();