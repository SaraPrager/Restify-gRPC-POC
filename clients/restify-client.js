const clients = require('restify-clients');
 
const client = clients.createJsonClient({
  url: 'http://localhost:3000'
});
 
function printResponse(error, response) {
    if (error)
        console.log('Error: ', error);
    else
        console.log(JSON.stringify(response));
}

function getAbout() {
    client.get('/about', function(err, req, res, obj) {
        printResponse(err, obj);
    });
}

function getMore() {
    client.get('/more', function(err, req, res, obj) {
        printResponse(err, obj);
    });
}

/* Parse CLI Arguments */
let processName = process.argv.shift();
let scriptName = process.argv.shift();
let command = process.argv.shift();

if (command == 'about')
    getAbout();
else if (command == 'more')
    getMore();