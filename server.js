const restify = require('restify');
const routes = require('./routes');
const grpcserver = require('./grpc/grpc-server');
const port = process.env.PORT || 3000;

/* Create a Restify server */
const server = restify.createServer({ name: 'poc-api' });

routes(server);

server.listen(port, () => {
    console.log('Restify server started on: localhost:' + port);
    /* Create a GRPC server */
    grpcserver.start();
});

/* Plugin for CURL usage */
server.pre(restify.plugins.pre.userAgentConnection());

/* Error catcher */
process.on('uncaughtException', function (err) {
    console.log(err);
});

/* Restify error catcher */
server.on('uncaughtException', function (err) {
    errObj = {
        errors: [{
            status: 500,
            title:  "Internal Error",
            detail: err
        }]
    };

    console.log(JSON.stringify(errObj));
    res.send(500, errObj);
    return next();
});

/* export for testing */
module.exports = server;