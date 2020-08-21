const bcrypt = require("bcrypt");
const database = require("../model");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const secret =process.env.SECRET;
const dotenv = require("dotenv");
dotenv.config();

function signupHandler(request, response) {
    let body = "";
    request.on("data", chunk => (body += chunk));

    request.on("end", () => {
        const data = new URLSearchParams(body);
        console.log("formvalues: ", data);
        const email = data.get("email");
        const password = data.get("password");
        console.log("Data: ", email, password);
        bcrypt
         .genSalt(10)
         .then(salt => bcrypt.hash(secret, salt))
         .then(hash => database.createUser({ email, password: hash }))
         .then(() => {
          response.writeHead(302, { 'Location': '/' });
          response.end();
         });
   

    request.on("error", (error) => {
        response.writeHead(500, {
          "content-type": "text/html"
        });
        console.error(error);
        response.end(`<h1>Signup failed</h1>`);
      });
});

}

module.exports = signupHandler;
