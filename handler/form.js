const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");
const database = require("../model");
function formHandler(request, response) {
    const filePath = path.join(__dirname, "..", "public", "login.html");
    fs.readFile(filePath, "utf-8", (error, html) => {
        if (error) {
            console.log(error);
            response.end(missingHandler);
        } else {
                response.writeHead(200, { "content-type": "text/html" });
                response.end(html);
            }
    });
}
module.exports = formHandler;