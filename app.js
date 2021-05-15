async function displayGrid() {

    // Load data from Dino.json
    const url = 'https://api.jsonbin.io/b/609ddee8ed60487e5bb4941e';
    let data = null;
    try {
        const response = await fetch(url);
        data = await response.json();
    } catch (error) {
        console.log(error);
    }

    // Create Dino Constructor
    function Dino(dino) {
        this.species = dino.species;
        this.weight  = dino.weight;
        this.height  = dino.height;
        this.diet    = dino.diet;
        this.where   = dino.where;
        this.when    = dino.when;
        this.fact    = dino.fact;
    }

    // Create Dino Objects
    var triceratops   = new Dino(data.Dinos[0]);
    var rex           = new Dino(data.Dinos[1]);
    var anklyosaurus  = new Dino(data.Dinos[2]);
    var brachiosaurus = new Dino(data.Dinos[3]);
    var stegosaurus   = new Dino(data.Dinos[4]);
    var elasmosaurus  = new Dino(data.Dinos[5]);
    var pteranodon    = new Dino(data.Dinos[6]);
    var pigeon        = new Dino(data.Dinos[7]);

    // Create Human Object
    function Human(name, feet, inches, weight, diet) {
        this.name   = name;
        this.feet   = feet;
        this.inches = inches;
        this.weight = weight;
        this.diet   = diet;
    }

    var human = new Human( {} );

    // Use IIFE to get human data from form
    (function () {
        human.name   = document.getElementById('name').value;
        human.feet   = document.getElementById('feet').value;
        human.inches = document.getElementById('inches').value;
        human.weight = document.getElementById('weight').value;
        human.diet   = document.getElementById('diet').value;
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
}

// On button click, prepare and display infographic
var button = document.getElementById('btn');
button.onclick = function () {
    displayGrid();
}
