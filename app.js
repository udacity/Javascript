
    // Create Dino Constructor
    function dino(species, weight, height, diet, where, when, fact ){
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    // Create Dino Objects
    tricera = new dino("Triceratops", 13000, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh.");
    tyranosaurusRex = new dino("Tyranosaurus Rex", 11905, 144, "Carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.");
    ankylo = new dino("Ankylosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Ankylosaurus survived for approximately 135 million years.");
    brachio = new dino("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurassic", "An asteroid was named 9954 Brachiosaurus in 1991.");
    stego =  new dino("Stegosaurus", 11600, 79, "herbavor", "North Americca, Europe, Asia", "Late Jurassic to Early Cretaceous", "The Stegosaurus had between 17 and 22 separate places and flat spines."); 
    elasmo = new dino("Elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.");
    ptera = new dino("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.");
    Pigeon = new dino("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.");
    
    // Create Human Object
    // Use IIFE to get human data from form
    humanData = (function(){

        return Object.assign({}, {
            name: document.getElementById("name"),
            height: (document.getElementById("feet") * 12) + document.getElementById("inches"),
            weight: document.getElementById("weight"),
            diet: document.getElementById("diet")
            })
    })

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    humanAvg = humanData.weight / humanData.height;
    dino.avg = dino.weight / dino.height;
    
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
