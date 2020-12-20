var letsCookButton = document.querySelector('.lets-cook-button');
var sideButton = document.getElementById('Side');
var mainButton = document.getElementById('Main Dish');
var dessertButton = document.querySelector('Dessert');
var entireMealButton = document.querySelector('Entire Meal');
var cookAll = document.getElementByName('dishes');
var
var addRecpie = document.querySelector();

var sides =['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Crispy Potatoes','Sweet Potato Tots', 'Coconut Rice', 'Caesar Salad', 'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies']
var mains =['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza']
var dessert =['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler','Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macaroons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs']

letsCookButton.addEventListener("click", showFoodOptions);

// function showFoodOptions(){
// var randomSidesIndex = Math.floor(Math.random() * sides.length);
// var randomMainIndex = Math.floor(Math.random() * mains.length);
// var randomDessertIndex = Math.floor(Math.random() * dessert.length);
