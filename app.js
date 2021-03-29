
    //var declarations are globally scoped or function scoped 
    //while let and const are block scoped. 
    //var variables can be updated and re-declared within its scope; 
    //let variables can be updated but not re-declared; 
    //const variables can neither be updated nor re-declared. 
    //They are all hoisted to the top of their scope.
    // 2. Decide how you will work with classes, then build out your classes and objects.
 


//Add a submit event listener to the dino-compare form. 
//Try to console.log the dinos data when the form is submitted.
//On form submit: hide the form and show the grid (you can get their ids from the HTML code). 
//'display: none;' is a good CSS property to use here.
//On form submit: loop through the dinos list and create an instance of the constructor/class for each entry. 
//It will be used to create the tiles later. Log that new list.
//On form submit: get the data from the form. There is a number of ways to do it, 
//but every input has an id and makes it easier to use getElementById.
//There, the first part (getting the data) is ready. Now you need to create compare 
// //functions and build the tiles. 



//Create a Dino construtor or class.
function Dino(species, height, weight, diet, where, when, fact, img) {
  this.species = species;
  this.height = height;
  this.weight = weight;
  this.where = where;
  this.diet = diet;
  this.when = when;
  this.fact = fact;
  this.img = img;
}

// Create Dino Objects
let dinos = [];
fetch("./dino.json")
  .then((res) => res.json())
  .then((data) => {
    let dinos = data.Dinos;
    console.log(dinos);
    getDinos(dinos);
  });
function getDinos(dinos) {
  dinos.map((dino) => console.log(dino));
}
 

    
    
function Human (name, height, weight,diet) {
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.diet = diet;
}
const button = document.getElementById('btn');
button.addEventListener('click', function(human){
  
 
    human.name = document.getElementById('name').value;
    human.height = (document.getElementById('feet').value * 12) + document.getElementById('inches').value;
    human.weight = document.getElementById('weight').value;
    human.diet = document.getElementById('diet').value;
    var human = new Human (name, height, weight,diet);
    return(human);
  })();
  
  console.log(human);
  document.forms[0].reset();
  
  console.log(human);
  document.forms[0].reset();

 //ref: https://knowledge.udacity.com/questions/350113
 // ref : https://www.youtube.com/watch?v=NxVCq4p0Kb0
  
    // Use IIFE to get human data from form
    // 3. Get human data from the html form to build your human object. 
    //Think about what 3 things you are going to compare to your human. 
    //You may need to create more fields, adjust the fields that are there, 
    //or remove fields to correspond with the data you will be collecting. 
    

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display  infographic