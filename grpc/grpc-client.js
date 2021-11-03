const grpc = require('grpc');
const aboutProto = grpc.load({root: __dirname, file: 'about.proto'});
const moreProto = grpc.load({root: __dirname, file: 'more.proto'});
const aboutClient = new aboutProto.about.AboutService('localhost:50051', grpc.credentials.createInsecure());
const moreClient = new moreProto.more.MoreService('localhost:50051', grpc.credentials.createInsecure());

module.exports.getAbout = function(callback) {
    aboutClient.get({}, callback);
}

module.exports.getMore = function(callback) {
    moreClient.get({}, callback);
}