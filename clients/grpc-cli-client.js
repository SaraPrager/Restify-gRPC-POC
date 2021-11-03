const grpcclient = require('../grpc/grpc-client');

function printResponse(error, response) {
    if (error)
        console.log('Error: ', error);
    else
        console.log(JSON.stringify(response));
}

module.exports.getAbout = function() {
    grpcclient.getAbout((error, about) => {
        printResponse(error, about);
    });
}

module.exports.getMore = function() {
    grpcclient.getMore((error, more) => {
        printResponse(error, more);
    });
}

/* Parse CLI Arguments */
let processName = process.argv.shift();
let scriptName = process.argv.shift();
let command = process.argv.shift();

if (command == 'about')
    this.getAbout();
else if (command == 'more')
    this.getMore();