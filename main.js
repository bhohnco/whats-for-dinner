var letsCookButton = document.querySelector('.lets-cook-button');
var sideButton = document.getElementById('Side');
var mainButton = document.getElementById('Main Dish');
var dessertButton = document.getElementById('Dessert');
var entireMealButton = document.getElementById('Entire');
var cookpotBox = document.querySelector('.cookpot');
var foodResults = document.querySelector('.foodResults');
var foodText = document.getElementById('food-text');


var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Crispy Potatoes','Sweet Potato Tots', 'Coconut Rice', 'Caesar Salad', 'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies']
var mains = ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza']
var dessert = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler','Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macaroons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs']

letsCookButton.addEventListener("click", showFoodOptions);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function toggleCookpotImage() {
  foodResults.hidden = false;
  cookpotBox.hidden = true;
}

function showFoodOptions() {
  if (sideButton.checked)  {
    foodText.innerText = `${sides[getRandomIndex(sides)]}!`
    toggleCookpotImage()
  } else if (mainButton.checked) {
    foodText.innerText =`${mains[getRandomIndex(mains)]}!`
    toggleCookpotImage()
  } else if (dessertButton.checked) {
    foodText.innerText =`${dessert[getRandomIndex(dessert)]}!`
    toggleCookpotImage()
  } else if (entireMealButton.checked) {
    foodText.innerText =`${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${dessert[getRandomIndex(dessert)]} for dessert!`
    toggleCookpotImage()
  }
}
