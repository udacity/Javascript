
const tiles = [];

// fetch Dino JSON Data
const fetchJSONData = () => {
    return fetch('./dino.json')
            .then(response => response.json())
};

    // Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.facts = [fact];
    }

function Bird(species, weight, height, diet, where, when, fact) {
    Dino.call(this, species, weight, height, diet, where, when, fact);
}

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareDiet = function (humanDiet)  {
    let fact = '';
    if (humanDiet !== this.diet) {
        fact = `${this.species} are ${this.diet}, therefore you follow different diets.`;
    } else if (humanDiet === this.diet) {
        fact = `You and  ${this.species} follow the same diet - ${this.diet}.`;
    }
    this.facts.push(fact);
}

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareHeight = function (humanHeight) {
    let fact = '';
    if (humanHeight > this.height) {
        fact = `Guess what? You're taller than ${this.species}! ${this.species} are ${this.height} inches tall`;
    } else if (humanHeight < this.height) {
        fact = `You've got some growing to do! At ${this.height} inches, ${this.species} are taller than you.`;
    } else if (humanHeight === this.height) {
        fact = `${this.species} and you are the same height - ${this.height} inches!`;
    }
    this.facts.push(fact);
}

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function (humanWeight) {
    let fact = '';
    if (humanWeight > this.weight) {
        fact = `You weigh more than ${this.species}! They weigh about ${this.weight} lbs.`;
    } else if (humanWeight < this.weight) {
        fact = `${this.species} are heavier than you at ${this.weight} lbs. Go ahead and eat that pizza tonight!`;
    } else if (humanWeight === this.weight) {
        fact = `${this.species} and you are the same approximate weight - ${this.weight} lbs.`;
    }
    this.facts.push(fact);
}

    // Create Dino Objects
const createDinos = () => {
    dataSet.dinos.forEach((obj) => {
        if (obj.species === 'Pigeon') {
            const pigeon = new Bird(obj.species, obj.weight, obj.height, obj.diet, obj.where, obj.when, obj.fact);
            tiles.push(pigeon);
        } else {
            const dino = new Dino(obj.species, obj.weight, obj.height, obj.diet, obj.where, obj.when, obj.fact);
            dino.compareWeight(dataSet.humanData.weight);
            dino.compareHeight(dataSet.humanData.height);
            dino.compareDiet(dataSet.humanData.diet);
            tiles.push(dino);
        }
    });
    console.log('tiles', tiles);
}


    // Create Human Object
function Human(name, weight, height, diet) {
    this.name = name;
    this.species = 'Human';
    this.weight = weight;
    this.height = height;
    this.diet = diet;
}

function getHumanData() {
    const name = document.getElementById('name').value;
    const heightFeet = document.getElementById('feet').value;
    const heightInches = document.getElementById('inches').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;
    const height = (heightFeet * 12) + heightInches;
    const human = new Human(name, weight, height, diet.toLowerCase());
    return human;
}

const dataSet = {}

const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    dataSet.humanData = getHumanData();
    fetchJSONData()
        .then(data => {
            dataSet.dinos = data.Dinos;
            createDinos();
            console.log('dataset', dataSet);
        });

})


    // Generate Tiles for each Dino in Array

        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
