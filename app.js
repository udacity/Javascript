fetch("dino.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "dino.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // .open will NOT return a value but simply returns undefined in async mode so use a callback
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

loadJSON((text) => {
  console.log(text);
});
// Create Dino Constructor
function Dinosaur(dinoData) {
  this.species = dinoData.species;
  this.weight = dinoData.weight;
  this.height = dinoData.height;
  this.diet = dinoData.diet;
  this.where = dinoData.where;
  this.when = dinoData.when;
  this.fact = dinoData.fact;
}

// Create Human Constructor
function Human(humanData) {
  this.name = humanData.name;
  this.feet = humanData.feet;
  this.inches = humanData.inches;
  this.weight = humanData.weight;
  this.diet = humanData.diet;
}

// Create Dino Objects

// Create Human Object
const createHumanObject = (formData) => {
  return new Human(formData);
};

// Use IIFE to get human data from form
const getFormData = () =>
  (function () {
    const name = document.getElementById("name").value;
    const feet = document.getElementById("feet").value;
    const inches = document.getElementById("inches").value;
    const weight = document.getElementById("weight").value;
    const diet = document.getElementById("diet").value;

    return {
      name: name,
      feet: feet,
      inches: inches,
      weight: weight,
      diet: diet,
    };
  })();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
const compareButtonHandler = (event) => {
  console.log("Button was clicked");

  const humanObject = createHumanObject(getFormData());
  console.log(humanObject);
};
const compareButton = document.getElementById("btn");
compareButton.addEventListener("click", compareButtonHandler);
