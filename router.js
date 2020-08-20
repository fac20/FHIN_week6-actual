const signupHandler = require("./handler/signup");
const publicHandler = require("./handler/public");
const addrecipeHandler = require("./handler/addrecipe");
const missingHandler = require("./handler/missing");
const formHandler = require("./handler/form");

const router = (request, response) => {
    const url = request.url;
    if (url === "/") {
        formHandler(request, response);
    }
    else if(url.includes("public")) {
        publicHandler(request, response);
    }
    else if(url === "/submit" && request.method === "POST") {
        addrecipeHandler(request, response);
    }
    else if(url === "/signup" && request.method === "POST") {
        signupHandler(request, response); 
    } else if (url === "/login" && request.method === "POST") {
        loginHandler(request, response);
    }
     else {  
        missingHandler(request, response);
    }
};

module.exports = router;

