'use strict';

var request = require('request');

module.exports = function (url, cb) {
    url = 'http://migre.me/api.json?url=' + url;
    cb = cb || function () {};

    request.get({
        json: true,
        url: url
    }, function (error, response, body) {
        if (error || response.statusCode !== 200) {
            return cb(error || response.message);
        }

        cb(null, body);
    });
};
