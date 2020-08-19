const fs = require("fs");
const path = require("path");

function missing (request, response) {
    response.writeHead(404, {"content-type": "text/html"});
    response.end("<h1>404 Page not found</h1>");
}

module.exports = missing;