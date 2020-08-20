const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const missingHandler = require("./missing");
const database = require("../model");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const SECRET = "asdfghjklzxcvbnmqwertyuio!@3456"

function signUpHandler(request, response) {
    
    const filePath = path.join(__dirname, "..", "public", "index.html");

    fs.readFile(filePath, "utf-8", (error, html) => {
        if (error) {
            console.log(error);
            response.end(missingHandler);
        } else {

            let body = "";
            request.on("data", chunkOfData => (body += chunkOfData));
            request.on("end", () => {
                const data = new URLSearchParams(body);
                const email = data.get("email");
                const password = data.get("password");
                bcrypt 
                    .genSalt(10)
                    .then((salt) => bcrypt.hash(password, salt))
                    .then((hash) => database.createUser(email, hash));


                    
                
                
                
                const userData = { email: email};


            })
                response.writeHead(200, { "content-type": "text/html" });
                response.end(html);
            }
    })
};



module.exports = formHandler;

