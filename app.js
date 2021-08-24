    // Create Dino Constructor
    function Dinosaur(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        }


    // Create Dino Objects

    const allDinosaurs = [];
    const dinoData = fetch('dino.json').then(response => response.json()).then(data => {return data});
    console.log(dinoData);
    const dinosaurs = dinoData.map(dino => new Dinosaur(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact));
    console.log(dinosaurs);


    // Create Human Object
    function Human(name, weight, height, food) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.food = food;
    }

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


// On button click, prepare and display infographic
