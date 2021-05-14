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
        this.weight = dino.weight;
        this.height = dino.height;
        this.diet = dino.diet;
        this.where = dino.where;
        this.when = dino.when;
        this.fact = dino.fac;
    }

    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


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
