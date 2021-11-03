const serializer = require('../utils/json-api-serializer');
const grpcclient = require('../grpc/grpc-client');

module.exports = (server) => {
  server.get('/more', (req, res, next) => {
    grpcclient.getMore((err, data) => {
      if (err) {
        return next(err);
      }

      res.json(serializer.serialize('more', data));
      return next();
    });
  });
};