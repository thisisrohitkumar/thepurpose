// Buttons
const grocery = document.getElementById("grocery-btn");
const beauty = document.getElementById("beauty-btn");
const stationery = document.getElementById("stationery-btn");
const dairy = document.getElementById("dairy-btn");
const vegetables = document.getElementById("vegetables-btn");
const fruits = document.getElementById("fruits-btn");
const health = document.getElementById("health-btn");
const house = document.getElementById("house-btn");
const beverages = document.getElementById("beverages-btn");

// Products Divs
const grocery_div = document.getElementById("grocery-pro-list");
const beauty_div = document.getElementById("beauty-pro-list");
const stationery_div = document.getElementById("stationery-pro-list");
const dairy_div = document.getElementById("dairy-pro-list");
const vegetables_div = document.getElementById("vegetables-pro-list");
const fruits_div = document.getElementById("fruits-pro-list");
const health_div = document.getElementById("health-pro-list");
const house_div = document.getElementById("house-pro-list");
const beverages_div = document.getElementById("beverages-pro-list");

grocery.addEventListener("click", () => {
  show_grocery();
});

function show_grocery() {
  grocery_div.style.display = "grid";
  beauty_div.style.display = "none";
  stationery_div.style.display = "none";
  dairy_div.style.display = "none";
  vegetables_div.style.display = "none";
  fruits_div.style.display = "none";
  health_div.style.display = "none";
  house_div.style.display = "none";
  beverages_div.style.display = "none";

  grocery.style.backgroundColor = "#e96235";
  grocery.style.color = "#f7f7f7";
  beauty.style.backgroundColor = "#f7f7f7";
  beauty.style.color = "black";
  stationery.style.backgroundColor = "#f7f7f7";
  stationery.style.color = "black";
  dairy.style.backgroundColor = "#f7f7f7";
  dairy.style.color = "black";
  vegetables.style.backgroundColor = "#f7f7f7";
  vegetables.style.color = "black";
  fruits.style.backgroundColor = "#f7f7f7";
  fruits.style.color = "black";
  health.style.backgroundColor = "#f7f7f7";
  health.style.color = "black";
  house.style.backgroundColor = "#f7f7f7";
  house.style.color = "black";
  beverages.style.backgroundColor = "#f7f7f7";
  beverages.style.color = "black";
}

beauty.addEventListener("click", () => {
  show_beauty();
});

function show_beauty() {
  grocery_div.style.display = "none";
  beauty_div.style.display = "grid";
  stationery_div.style.display = "none";
  dairy_div.style.display = "none";
  vegetables_div.style.display = "none";
  fruits_div.style.display = "none";
  health_div.style.display = "none";
  house_div.style.display = "none";
  beverages_div.style.display = "none";

  grocery.style.backgroundColor = "#f7f7f7";
  grocery.style.color = "black";
  beauty.style.backgroundColor = "#e96235";
  beauty.style.color = "#f7f7f7";
  stationery.style.backgroundColor = "#f7f7f7";
  stationery.style.color = "black";
  dairy.style.backgroundColor = "#f7f7f7";
  dairy.style.color = "black";
  vegetables.style.backgroundColor = "#f7f7f7";
  vegetables.style.color = "black";
  fruits.style.backgroundColor = "#f7f7f7";
  fruits.style.color = "black";
  health.style.backgroundColor = "#f7f7f7";
  health.style.color = "black";
  house.style.backgroundColor = "#f7f7f7";
  house.style.color = "black";
  beverages.style.backgroundColor = "#f7f7f7";
  beverages.style.color = "black";
}

stationery.addEventListener("click", () => {
  show_stationery();
});

function show_stationery() {
  grocery_div.style.display = "none";
  beauty_div.style.display = "none";
  stationery_div.style.display = "grid";
  dairy_div.style.display = "none";
  vegetables_div.style.display = "none";
  fruits_div.style.display = "none";
  health_div.style.display = "none";
  house_div.style.display = "none";
  beverages_div.style.display = "none";

  grocery.style.backgroundColor = "#f7f7f7";
  grocery.style.color = "black";
  beauty.style.backgroundColor = "#f7f7f7";
  beauty.style.color = "black";
  stationery.style.backgroundColor = "#e96235";
  stationery.style.color = "#f7f7f7";
  dairy.style.backgroundColor = "#f7f7f7";
  dairy.style.color = "black";
  vegetables.style.backgroundColor = "#f7f7f7";
  vegetables.style.color = "black";
  fruits.style.backgroundColor = "#f7f7f7";
  fruits.style.color = "black";
  health.style.backgroundColor = "#f7f7f7";
  health.style.color = "black";
  house.style.backgroundColor = "#f7f7f7";
  house.style.color = "black";
  beverages.style.backgroundColor = "#f7f7f7";
  beverages.style.color = "black";
}

dairy.addEventListener("click", () => {
  show_dairy();
});

function show_dairy() {
  grocery_div.style.display = "none";
  beauty_div.style.display = "none";
  stationery_div.style.display = "none";
  dairy_div.style.display = "grid";
  vegetables_div.style.display = "none";
  fruits_div.style.display = "none";
  health_div.style.display = "none";
  house_div.style.display = "none";
  beverages_div.style.display = "none";

  grocery.style.backgroundColor = "#f7f7f7";
  grocery.style.color = "black";
  beauty.style.backgroundColor = "#f7f7f7";
  beauty.style.color = "black";
  stationery.style.backgroundColor = "#f7f7f7";
  stationery.style.color = "black";
  dairy.style.backgroundColor = "#e96235";
  dairy.style.color = "#f7f7f7";
  vegetables.style.backgroundColor = "#f7f7f7";
  vegetables.style.color = "black";
  fruits.style.backgroundColor = "#f7f7f7";
  fruits.style.color = "black";
  health.style.backgroundColor = "#f7f7f7";
  health.style.color = "black";
  house.style.backgroundColor = "#f7f7f7";
  house.style.color = "black";
  beverages.style.backgroundColor = "#f7f7f7";
  beverages.style.color = "black";
}

vegetables.addEventListener("click", () => {
  show_vegetables();
});

function show_vegetables() {
  grocery_div.style.display = "none";
  beauty_div.style.display = "none";
  stationery_div.style.display = "none";
  dairy_div.style.display = "none";
  vegetables_div.style.display = "grid";
  fruits_div.style.display = "none";
  health_div.style.display = "none";
  house_div.style.display = "none";
  beverages_div.style.display = "none";

  grocery.style.backgroundColor = "#f7f7f7";
  grocery.style.color = "black";
  beauty.style.backgroundColor = "#f7f7f7";
  beauty.style.color = "black";
  stationery.style.backgroundColor = "#f7f7f7";
  stationery.style.color = "black";
  dairy.style.backgroundColor = "#f7f7f7";
  dairy.style.color = "black";
  vegetables.style.backgroundColor = "#e96235";
  vegetables.style.color = "#f7f7f7";
  fruits.style.backgroundColor = "#f7f7f7";
  fruits.style.color = "black";
  health.style.backgroundColor = "#f7f7f7";
  health.style.color = "black";
  house.style.backgroundColor = "#f7f7f7";
  house.style.color = "black";
  beverages.style.backgroundColor = "#f7f7f7";
  beverages.style.color = "black";
}

fruits.addEventListener("click", () => {
  show_fruits();
});

function show_fruits() {
  grocery_div.style.display = "none";
  beauty_div.style.display = "none";
  stationery_div.style.display = "none";
  dairy_div.style.display = "none";
  vegetables_div.style.display = "none";
  fruits_div.style.display = "grid";
  health_div.style.display = "none";
  house_div.style.display = "none";
  beverages_div.style.display = "none";

  grocery.style.backgroundColor = "#f7f7f7";
  grocery.style.color = "black";
  beauty.style.backgroundColor = "#f7f7f7";
  beauty.style.color = "black";
  stationery.style.backgroundColor = "#f7f7f7";
  stationery.style.color = "black";
  dairy.style.backgroundColor = "#f7f7f7";
  dairy.style.color = "black";
  vegetables.style.backgroundColor = "#f7f7f7";
  vegetables.style.color = "black";
  fruits.style.backgroundColor = "#e96235";
  fruits.style.color = "black";
  health.style.backgroundColor = "#f7f7f7";
  health.style.color = "black";
  house.style.backgroundColor = "#f7f7f7";
  house.style.color = "black";
  beverages.style.backgroundColor = "#f7f7f7";
  beverages.style.color = "black";
}

health.addEventListener("click", () => {
  show_health();
});

function show_health() {
  grocery_div.style.display = "none";
  beauty_div.style.display = "none";
  stationery_div.style.display = "none";
  dairy_div.style.display = "none";
  vegetables_div.style.display = "none";
  fruits_div.style.display = "none";
  health_div.style.display = "grid";
  house_div.style.display = "none";
  beverages_div.style.display = "none";

  grocery.style.backgroundColor = "#f7f7f7";
  grocery.style.color = "black";
  beauty.style.backgroundColor = "#f7f7f7";
  beauty.style.color = "black";
  stationery.style.backgroundColor = "#f7f7f7";
  stationery.style.color = "black";
  dairy.style.backgroundColor = "#f7f7f7";
  dairy.style.color = "black";
  vegetables.style.backgroundColor = "#f7f7f7";
  vegetables.style.color = "black";
  fruits.style.backgroundColor = "#f7f7f7";
  fruits.style.color = "black";
  health.style.backgroundColor = "#e96235";
  health.style.color = "#f7f7f7";
  house.style.backgroundColor = "#f7f7f7";
  house.style.color = "black";
  beverages.style.backgroundColor = "#f7f7f7";
  beverages.style.color = "black";
}

house.addEventListener("click", () => {
  show_house();
});

function show_house() {
  grocery_div.style.display = "none";
  beauty_div.style.display = "none";
  stationery_div.style.display = "none";
  dairy_div.style.display = "none";
  vegetables_div.style.display = "none";
  fruits_div.style.display = "none";
  health_div.style.display = "none";
  house_div.style.display = "grid";
  beverages_div.style.display = "none";

  grocery.style.backgroundColor = "#f7f7f7";
  grocery.style.color = "black";
  beauty.style.backgroundColor = "#f7f7f7";
  beauty.style.color = "black";
  stationery.style.backgroundColor = "#f7f7f7";
  stationery.style.color = "black";
  dairy.style.backgroundColor = "#f7f7f7";
  dairy.style.color = "black";
  vegetables.style.backgroundColor = "#f7f7f7";
  vegetables.style.color = "black";
  fruits.style.backgroundColor = "#f7f7f7";
  fruits.style.color = "black";
  health.style.backgroundColor = "#f7f7f7";
  health.style.color = "black";
  house.style.backgroundColor = "#e96235";
  house.style.color = "#f7f7f7";
  beverages.style.backgroundColor = "#f7f7f7";
  beverages.style.color = "black";
}

beverages.addEventListener("click", () => {
  show_beverages();
});

function show_beverages() {
  grocery_div.style.display = "none";
  beauty_div.style.display = "none";
  stationery_div.style.display = "none";
  dairy_div.style.display = "none";
  vegetables_div.style.display = "none";
  fruits_div.style.display = "none";
  health_div.style.display = "none";
  house_div.style.display = "none";
  beverages_div.style.display = "grid";

  grocery.style.backgroundColor = "#f7f7f7";
  grocery.style.color = "black";
  beauty.style.backgroundColor = "#f7f7f7";
  beauty.style.color = "black";
  stationery.style.backgroundColor = "#f7f7f7";
  stationery.style.color = "black";
  dairy.style.backgroundColor = "#f7f7f7";
  dairy.style.color = "black";
  vegetables.style.backgroundColor = "#f7f7f7";
  vegetables.style.color = "black";
  fruits.style.backgroundColor = "#f7f7f7";
  fruits.style.color = "black";
  health.style.backgroundColor = "#f7f7f7";
  health.style.color = "black";
  house.style.backgroundColor = "#f7f7f7";
  house.style.color = "black";
  beverages.style.backgroundColor = "#e96235";
  beverages.style.color = "#f7f7f7";
}
