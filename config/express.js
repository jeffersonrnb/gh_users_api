const express = require('express');
const config = require('config');
const consign = require('consign');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || config.get('server.port'));

  consign({cwd: 'api'})
    .then('controllers')
    .then('routes')
    .into(app)

  return app;
};
