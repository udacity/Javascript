
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
    this.fact = fact;
    }

function Bird(weight, height, diet, where, when, fact) {
    Dino.call(this, weight, height, diet, where, when, fact);
}

    // Create Dino Objects
const createDinos = () => {
    dataSet.dinos.forEach((obj) => {
        const dino = new Dino(obj.species, obj.weight, obj.height, obj.diet, obj.where, obj.when, obj.fact);
        tiles.push(dino);
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
    // Use IIFE to get human data from form
    const humanData = getHumanData();
    console.log(humanData);
    fetchJSONData()
        .then(data => {
            dataSet.dinos = data.Dinos;
            createDinos();
        });
    console.log('dataset', dataSet);
})

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
