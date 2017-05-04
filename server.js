"use strict"

const Hapi = require("hapi")

const server = new Hapi.Server()
server.connection({ port: 3000, host: "localhost", routes: { cors: true } })
//server.connection({ routes: { cors: true } })
//var server = new Hapi.Server('localhost', 8000, {serverors: true });

server.route({
  method: "GET",
  path: "/",
  handler: function(request, reply) {
    reply("Hello, world!")
  }
})

server.route({
  method: "GET",
  path: "/{name}",
  handler: function(request, reply) {
    reply("Hello, " + encodeURIComponent(request.params.name) + "!")
  }
})

server.route({
  method: "GET",
  path: "/data",
  handler: function(request, reply) {
    reply({
      folders: "test json"
    }).code(200)
  }
})

server.start(err => {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})
