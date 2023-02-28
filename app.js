const DinoList = [];

/**
 * @description Represents a dinosoar object
 * @constructor
 * @param {string} species - The species of the dinosoar
 * @param {string} author - The weight of the dinosoar
 * @param {string} height - The height of the dinosoar
 * @param {string} diet - The diet of the dinosoar
 * @param {string} where - Where the dinosoar lived
 * @param {string} when - When the dinosoar lived
 * @param {string} fact - A fact about the dinosoar
 */
function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

/**
 * @description Represents a human object
 * @constructor
 * @param {string} name - The name of the human
 * @param {string} height - The height of the human
 * @param {string} weight - The weight of the human
 * @param {string} diet - The diet of the human
 */
function Human(name, height, weight, diet) {
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.diet = diet;
}

// Create Dino Objects from JSON file and push them to DinoList array
const getDinos = async () => {
  const response = await fetch("dino.json");
  const data = await response.json();
  return data.Dinos;
};

getDinos().then((data) =>
  data.forEach((dino) => {
    const newDino = new Dino(
      dino.species,
      dino.weight,
      dino.height,
      dino.diet,
      dino.where,
      dino.when,
      dino.fact
    );
    DinoList.push(newDino);
  })
);

// Create Human Object
const human = new Human();

// create a method that compares the human's weight to the dino's weight
Dino.prototype.compareWeight = function (human) {
  if (human.weight > this.weight) {
    return `The human is heavier than the ${this.species}`;
  } else if (human.weight < this.weight) {
    return `The human is lighter than the ${this.species}`;
  } else {
    return `The human and the ${this.species} have the same weight`;
  }
};

// create a method that compares the human's height to the dino's height
Dino.prototype.compareHeight = function (human) {
  if (human.height > this.height) {
    return `The human is taller than the ${this.species}`;
  } else if (human.height < this.height) {
    return `The human is shorter than the ${this.species}`;
  } else {
    return `The human and the ${this.species} have the same height`;
  }
};

// create a method that compares the human's diet to the dino's diet
Dino.prototype.compareDiet = function (human) {
  if (human.diet === this.diet.toLowerCase()) {
    return `The human and the ${this.species} have the same diet, they are both ${this.diet}s`;
  } else {
    return `The human and the ${this.species} have different diets, the human is a ${human.diet} and the ${this.species} is a ${this.diet}`;
  }
};

// Generate Tiles for each Dino in Array
function generateTiles() {
  const grid = document.getElementById("grid");

  // add human to the middle of the grid
  DinoList.splice(4, 0, human);

  // loop through the DinoList array and create a tile for each dino
  DinoList.forEach((dino, index) => {
    // create a tile for the human and add it to the grid in the middle of the grid
    if (index === 4) {
      const humanTile = document.createElement("div");
      humanTile.className = "grid-item";
      humanTile.innerHTML = `
      <h3>${human.name}</h3>
      <img src="images/human.png" alt="human"/>
      `;
      grid.appendChild(humanTile);
      return;
    }

    // get a random fact from the dino's fact array
    const randomIndex = Math.floor(Math.random() * dino.fact.length);
    const randomFact = dino.fact[randomIndex];
    let fact;

    // if the dino is a pigeon, use the fact from the JSON file
    if (dino.species === "Pigeon") {
      fact = dino.fact;
    } else {
      fact = randomFact;
    }

    // create a tile for the dino and add it to the grid
    const tile = document.createElement("div");
    tile.className = "grid-item";
    tile.innerHTML = `
    <h3>${dino.species}</h3>
    <img src="images/${dino.species}.png" alt="${dino.species}"/>
    <p>${fact}</p>
    `;
    grid.appendChild(tile);
  });
}

// Remove form from screen when user clicks button
function removeForm() {
  const form = document.getElementById("dino-compare");
  form.style.display = "none";
}

// Generate random facts for each dino object, 1 from the JSON file and 3 random facts from the methods created above
function getRandomFact() {
  DinoList.forEach((dino) => {
    const diet = dino.compareDiet(human);
    const height = dino.compareHeight(human);
    const weight = dino.compareWeight(human);
    const facts = [diet, height, weight];
    if (dino.species !== "Pigeon") {
      dino.fact = [dino.fact, ...facts];
    }
    return dino.fact;
  });
}

// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const feet = document.getElementById("feet").value;
  const inches = document.getElementById("inches").value;
  const weight = document.getElementById("weight").value;
  const diet = document.getElementById("diet").value;

  human.name = name;
  // convert feet and inches to inches
  human.height = feet * 12 + inches;
  human.weight = weight;
  human.diet = diet;

  getRandomFact();
  generateTiles();
  removeForm();
});
