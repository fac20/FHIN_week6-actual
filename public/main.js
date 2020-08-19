const addButton = document.querySelector("#addRecipeButton");
const getButton = document.querySelector("#goToRecipeButton");
const inputForm = document.querySelector("#input-form");
const recipeList = document.querySelector("#recipe-list");

function openCloseForm () {
    inputForm.classList.toggle("hidden");
}

function openCloseRecipes () {
    recipeList.classList.toggle("hidden");
}

addButton.addEventListener("click", openCloseForm);
getButton.addEventListener("click", openCloseRecipes);
