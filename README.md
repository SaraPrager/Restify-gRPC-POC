# restify-grpc-poc
A simple POC, demonstrates a basic usage of Restify framework,
gRPC server & client, and REST API with the specification of JSON API (http://jsonapi.org/).

## Running the project
```console
$ cd restify-grpc-poc/
$ npm install
$ npm start
```
## Usage
Navigate to http://localhost:3000/about or http://localhost:3000/more
You will get json-api-compliant responses with the data as returned from the gRPC server.

You can run it also using the CLI:
```console
$ cd restify-grpc-poc/
$ cd clients/
```
To demonstrate the gRPC client itself, run:
```console
$ node grpc-cli-client.js about
$ node grpc-cli-client.js more
```
To demonstrate the gRPC client using Rest calls, run:
```console
$ node restify-client.js about
$ node restify-client.js more
```