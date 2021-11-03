const grpc = require('grpc');
/* Load proto files & dynamically build the code */
const aboutProto = grpc.load({root: __dirname, file: 'about.proto'});
const moreProto = grpc.load({root: __dirname, file: 'more.proto'});

const url = 'localhost:50051';

/* Fake data */
let about = {
    device: 'Fake device',
    msg: 'Hello! here is my basic information',
    voltage: 217.7,
    power: 0,
    load: 0.00,
    frequency: 49.8,
    alarms: false
};

let more = { 
    msg: 'Hello! here is more information about me',
    bank_breaker: 'closed',
    device_mode: 'present',
    input_frequency: 49.9,
    low_transfer_voltage: 0,
    valid_status: true
};

/* Start a GRPC server which returns the fake data */
exports.start = function() {
    const grpcServer = new grpc.Server();

    grpcServer.addService(aboutProto.about.AboutService.service, {
        get: function(call, callback) {
            callback(null, about);
        }
    });

    grpcServer.addService(moreProto.more.MoreService.service, {
        get: function(call, callback) {
            callback(null, more);
        }
    });

    grpcServer.bind(url, grpc.ServerCredentials.createInsecure());

    console.log('grpcServer started on: ' + url);

    grpcServer.start();    
};
