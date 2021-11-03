const serializer = require('../utils/json-api-serializer');
const grpcclient = require('../grpc/grpc-client');

module.exports = (server) => {
  server.get('/about', (req, res, next) => {
    grpcclient.getAbout((err, data) => {
      if (err) {
        return next(err);
      }
      
      res.json(serializer.serialize('about', data));
      return next();
    });
  });
};


