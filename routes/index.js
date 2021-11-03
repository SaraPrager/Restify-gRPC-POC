const about = require('./about');
const more = require('./more');

module.exports = (server) => {
  about(server);
  more(server);
  server.get('*', (req, res, next) => {
    res.send('Home page! Navigate to /about or /more to see the POC');
    return next();
  });
};
