const db = require("./database/connection");

function createNewRecipe(data) {
    const values = [
        data.recipe_name,
        data.ingredients,
        data.method,
        data.time
    ]
    return db.query(
        `INSERT INTO recipes(recipe_name, ingredients, method, time) VALUES($1, $2, $3, $4)`, 
        values,
    )
};

function getRecipes() {
    return db.
    query(`SELECT * FROM recipes`)
    .then(result => result.rows)
    .catch(error => {
        console.error(error)
    })
};


module.exports = { createNewRecipe, getRecipes };