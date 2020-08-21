const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");
const database = require("../model");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET;

const { parse } = require('cookie');

function homeHandler(request, response) {
   try {
    //if the request is missing the cookie then return an error message of unauthorised
    if (!request.headers.cookie) {
        const message = 'fail!'
        res.writeHead(
            401,
            {
              'Content-Type': 'text/plain',
              'Content-Length': message.length
            }
          );
          return res.end(message);
        }
    
    //get JWT from the headers
    const cookie = parse(request.headers.cookie);

    //handle case in which JWT is missing and return an error message of unathorised
    if (!cookie.jwt) {
        const message = 'fail!'
        res.writeHead(
            401,
            {
              'Content-Type': 'text/plain',
              'Content-Length': message.length
            }
          );
          return res.end(message);
        }
    
    //if this throws an error it will skip the code below it 
    //and go to the final catch
    jwt.verify(cookie.jwt, secret)
    const filePath = path.join(__dirname, "..", "public", "index.html");
    fs.readFile(filePath, "utf-8", (error, html) => {
        if (error) {
            console.log(error);
            response.end(missingHandler);
        } else {
            database.getRecipes().then(recipe => {
                const post = recipe.map((r) => {
                return (`<li><p class="label">Recipe Name: </p><br><p class="description">${r.recipe_name}</p></li>
                <li><p class="label">Prep Time: </p><br><p class="description">${r.time}</p></li>
                <li><p class="label">Ingredients: </p><br><p class="description">${r.ingredients}</p></li>
                <li><p class="label">Method: </p><br><p class="description">${r.method}</p></li>`)
                });
                html = html.replace(`<!-- recipe-placeholder -->`, post.join(","));  
                response.writeHead(200, { "content-type": "text/html" });
                response.end(html);
            })
        }
    });

} catch (error) { 
    console.log(error);

}

}

  

   //try jwt 
   //fail redirect login 
   


module.exports = homeHandler;

                