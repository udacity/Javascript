// Create dinosaur class constructor
function Dinosaur(species, weight, height, diet, where, when, fact, image) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.image = image;
}

// Create Human class constructor
function Human(humanName, weight, feet, inches, diet) {
  this.species = "human";
  this.humanName = humanName;
  this.weight = weight;
  this.feet = feet;
  this.inches = inches;
  this.diet = diet;
  this.image = "human.png";
}

// Get human data from form and create human object
function getHuman() {
  const humanName = document.getElementById("myName").value;
  const humanInches = document.getElementById("inches").value;
  const humanFeet = document.getElementById("feet").value;
  const humanWeight = document.getElementById("weight").value;
  const humanDiet = document.getElementById("diet").value;
  const human = new Human(
    humanName,
    humanWeight,
    humanFeet,
    humanInches,
    humanDiet
  );
  return human;
}

// On clicking the button, hide the form and instead show the grid
function hideForm() {
  document.getElementById("dino-compare").style.display = "none";
  document.getElementById("grid").style.display = "";
}

//Helper function to convert the height of humans and dinos into meters
function getHeightInMeters(feet, inches) {
  return feet * 0.3048 + inches * 0.0254;
}

// Create Dino Compare Method 1
function compareWeight(weight, humanWeight) {
  const humanIntegerWeight = parseInt(humanWeight);
  if (weight > humanIntegerWeight) return "It weighed more than you";
  if (weight < humanIntegerWeight) return "It weighed less than you";
  if (weight === humanIntegerWeight) return "Yay! You both weigh the same";
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareDiet(diet, humanDiet) {
  if (diet === humanDiet) return "Wow! You eat the same stuff";
  else return "You don't have the same diet";
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight(height, humanHeight) {
  if (height > humanHeight) return "Taller than you";
  if (height < humanHeight) return "Not as tall as you";
  if (height === humanHeight) return "You are the same height";
}

// Generate tiles for each Dino in Array
function createTile(creature, human) {
  const fact =
    creature.species === "Pigeon"
      ? "All birds are living dinosaurs."
      : generateRandomFact(creature, human);
  const dinoGrid = document.getElementById("grid");
  const tile = document.createElement("div");
  const tileTitle =
    creature.species === "human" ? human.humanName : creature.species;
  tile.classList.add("grid-item");

  tile.innerHTML = `
  <h3>${tileTitle}</h3>
   <img src="images/${creature.image}">
   <p>${fact}<p>
    `;

  dinoGrid.appendChild(tile);
}

//loop through the creatureArray to generate a tile for each
function makeTiles(creatureArray, human) {
  creatureArray.forEach((creature) => createTile(creature, human));
}

//Randomize and generate facts for each tile
function generateRandomFact(dinosaur, human) {
  if (dinosaur.species === "human") return "Hey, that's you 🤓";
  const randomNumber = Math.floor(Math.random() * 2);
  switch (randomNumber) {
    case 0:
      return compareDiet(dinosaur.diet, human.humanDiet);
    case 1:
      return compareWeight(dinosaur.weight, human.weight);
    case 2:
      const humanHeight = getHeightInMeters(human.feet, human.inches);
      const dinoHeight = getHeightInMeters(0, dinosaur.height);
      return compareHeight(dinoHeight, humanHeight);
  }
}

// Show information grid with 9 tiles when clicking the button
const dinoData = fetch("dino.json")
  .then((response) => response.json())
  .then((data) => {
    const dinosaurs = data.Dinos.map(
      (dino) =>
        new Dinosaur(
          dino.species,
          dino.weight,
          dino.height,
          dino.diet,
          dino.where,
          dino.when,
          dino.fact,
          dino.image
        )
    );
    document.getElementById("btn").addEventListener("click", () => {
      const human = getHuman();
      hideForm();
      const shuffledDinosaurs = dinosaurs.sort((a, b) => 0.5 - Math.random());
      const allCreatures = shuffledDinosaurs
        .slice(0, 4)
        .concat(human)
        .concat(shuffledDinosaurs.slice(4, 8));
      makeTiles(allCreatures, human);
    });
  });
