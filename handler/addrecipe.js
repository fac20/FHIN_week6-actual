
const database = require("../model");
const querystring = require('querystring');
const missingHandler = require("./missing");

function addRecipe(request, response) {
    let body = "";
    request.on("data", (chunk) => {
        body += chunk.toString();
    });

    request.on("end", () => {
        const object = querystring.parse(body);
        console.log(object);
        database.createNewRecipe(object);
        response.writeHead(302, {location: "/"})
        response.end();
    });

    request.on("error", (error) => {
        response.writeHead(500, {
          "content-type": "text/html"
        });
        console.error(error);
        response.end(missingHandler);
      });
}

module.exports = addRecipe;

