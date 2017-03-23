"use strict";

// migre-me | matheus alves
// https://github.com/theuves/migre-me

var request = require("request");

module.exports = function (url, cb) {
  url = "http://migre.me/api.json?url=" + url;
  cb = cb || function () {
    return undefined;
  };

  request.get({
    json: true,
    url: url
  }, function (error, response, body) {
    return (error || response.statusCode !== 200)
      ? cb(error || response.message)
      : cb(null, body);
  });
};