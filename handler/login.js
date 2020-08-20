  
const bcrypt = require("bcryptjs");
const database = require("../model");
const { sign } = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET;


function loginHandler(request, response) {
    let body = "";
            request.on("data", chunkOfData => (body += chunkOfData));
            request.on("end", () => {
                const data = new URLSearchParams(body);
                const email = data.get("email");
                const password = data.get("password");
                const cookie = sign(email, secret);
                database.getUser(email) //-> getting hashed password from db
                .then(dbUser => bcrypt.compare(password, dbUser.password)) //
                .then(result => {
                    if (!result) throw new Error("Password mismatch"); 
                    response.writeHead(302, 
                        { "Location": "/home",
                          'Set-Cookie': `jwt=${cookie}; HttpOnly`
                        });
                })
                .catch(error => {
                    console.error(error);
                    response.writeHead(401, { "content-type": "text/html" });
                    response.end("<h1>User unauthorised, please log in again</h1>") 
                });
        })
};

module.exports = { loginHandler };

