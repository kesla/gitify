'use strict';

var env   =  process.env
  , uname =  env.GITHUB_USER
  , pwd   =  env.GITHUB_PWD;

// TODO: use config instead of env vars and prompt if no config found
module.exports = function (opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  var username = opts.username || uname
    , password = opts.password || pwd;

  if (!username || !password) 
    return cb(new Error('need to specify username and password'));

  cb(null, { uname: username, pwd: password });
};
