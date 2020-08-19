const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");
const database = require("../model");

function homeHandler(request, response) {
    
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
}

module.exports = homeHandler;

                