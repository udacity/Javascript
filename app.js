//Fetch data from json
const getDinoData = async () => {
  const fetchedData = await fetch("./dino.json");
  const data = await fetchedData.json();
  return data.Dinos;
};

//////COMMENTED OUT FOR BEING DUMB
// // Create Dino Constructor
// function Dino(species, weight, height, diet, where, when, fact) {
//   this.species = species;
//   this.weight = weight;
//   this.height = height;
//   this.diet = diet;
//   this.where = where;
//   this.when = when;
//   this.fact = fact;
// }
// // Create Dino Objects
// let dinosaur = new Dino();
//////COMMENTED OUT FOR BEING DUMB

// Create Human Object
const humanData = {};

// Use IIFE. to get human data from form
const compareBtn = document.getElementById("btn");

function getHumanData() {
  humanData.name = document.getElementById("name").value;
  humanData.height =
    document.getElementById("feet").value * 12 +
    document.getElementById("inches").value;
  humanData.weight = document.getElementById("weight").value;
  humanData.diet = document.getElementById("diet").value;
}

compareBtn.addEventListener("click", async function (event) {
  const dinos = await getDinoData();
  getHumanData();

  console.log(dinos, humanData);

  dinos.splice(4, 0, humanData);
  console.log(dinos);

  //Set form to hidden here
  //Generate tiles here
  //Calling the compare methods here
});
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
