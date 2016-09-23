'use strict';

const
    request = require('request'),
    _ = require('lodash'),
    BASE_URL = 'https://api.spotify.com/v1';

module.exports = {
    artistSearch: artistSearch,
    artistTopTracks: artistTopTracks
};

function artistSearch(name) {
    return new Promise(function(fullfill, reject) {
        request.get({
            url: BASE_URL + '/search',
            qs: {
                q: name,
                type: 'artist'
            },
            json: true
        }, function (err, response, body) {
            if (err) {
                reject(err);
            } else {
                let artist = _.first(body.artists.items);
                fullfill({
                    id: artist.id,
                    name: artist.name,
                    image: _.last(artist.images).url
                });
            }
        })
    });
}

function artistTopTracks(artistId) {
    return new Promise(function(fullfill, reject) {
        request.get({
            url: BASE_URL + '/artists/' + artistId + '/top-tracks',
            qs: {
                country: 'US'
            },
            json: true
        }, function (err, response, body) {
            if (err) {
                reject(err);
            } else {
                let track = _.first(body.tracks);
                fullfill({
                    name: track.name
                });
            }
        })
    });
}

