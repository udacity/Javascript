
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
Dino.prototype.compareWeight = function (humanWeight)  {
    let fact = '';
    if (humanWeight > this.weight) {
        fact = `You weigh more than ${this.species}!`;
    } else if (humanWeight < this.weight) {
        fact = `No surprises here - ${this.species} weighs more than you!`;
    } else if (humanWeight < this.weight) {
        fact = `Wow! You and ${this.species} actually weigh the same.`;
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
    const human = new Human(name, weight, height, diet);
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




    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
