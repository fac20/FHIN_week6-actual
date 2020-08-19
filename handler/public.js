const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");


const fileType = {
    html: "text/html",
    css: "text/css",
    png: "image/png",
    js: "application/javascript",
    ico: "image/x-icon"

}

function publicHandler(request, response) {
    const file = request.url;
    const array = file.split(".");
    const extension = array[1];
    const type = fileType[extension];

    const filePath = path.join(__dirname, "..", file);
    fs.readFile(filePath, (error, data) => {
        if (error) {
            console.log(error);
            response.end(missingHandler);
        } else {
            response.writeHead(200, {"content-type": type})
            response.end(data);
        }

    })
}

module.exports = publicHandler;