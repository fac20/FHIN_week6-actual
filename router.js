const homeHandler = require("./handler/home");
const publicHandler = require("./handler/public");
const addrecipeHandler = require("./handler/addrecipe");
const missingHandler = require("./handler/missing");

const router = (request, response) => {
    const url = request.url;
    if (url === "/") {
        homeHandler(request, response);
    }
    else if(url.includes("public")) {
        publicHandler(request, response);
    }
    else if(url === "/submit" || request.method === "POST") {
        addrecipeHandler(request, response);
    } else {  
        missingHandler(request, response);
    }
}

module.exports = router;