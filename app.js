
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

// Create Dino Objects
var tricera = new Dino("Triceratops", 13000, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh.");
var tyranosaurusRex = new Dino("Tyranosaurus Rex", 11905, 144, "Carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.");
var ankylo = new Dino("Ankylosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Ankylosaurus survived for approximately 135 million years.");
var brachio = new Dino("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurassic", "An asteroid was named 9954 Brachiosaurus in 1991.");
var stego = new Dino("Stegosaurus", 11600, 79, "herbavor", "North Americca, Europe, Asia", "Late Jurassic to Early Cretaceous", "The Stegosaurus had between 17 and 22 separate places and flat spines.");
var elasmo = new Dino("Elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.");
var ptera = new Dino("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.");
var pigeon = new Dino("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.");
var dinoArray = [tricera, tyranosaurusRex, ankylo, brachio, stego, elasmo, ptera, pigeon] 
// Create Human Object
// Use IIFE to get human data from form
humanData = (function () {

    return Object.assign({}, {
        name: document.getElementById("name").value,
        height: (document.getElementById("feet").value * 12) + document.getElementById("inches").value,
        weight: document.getElementById("weight").value,
        diet: document.getElementById("diet").value
    });
})

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
Dino.weightCompare = function(){
    var compareWeight = this.weight - humanData.weight;
    return compareWeight;
}; 
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
Dino.heightCompare = function(){
    var compareHeight = this.height - humanData.height;
    return compareHeight
}


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
Dino.dietCompare = function(){
    var compareDiet;
    if(Dino.diet == humanData.diet){
        compareDiet = "Your diet is the same with this dinosaur";
        return compareDiet;
    }
    else{
        compareDiet = "Your diet is different from this dinosaur";
        return compareDiet;
    }
}

    // Generate Tiles for each Dino in Array
    for(var i = 0; i < dinoArray.length; i++){
        num = Math.random(0,3)
        var fact;
        switch(num){
            case 0:
                fact = dinoArray[i].weightCompare;
            case 1:
                fact = dinoArray[i].heightCompare;
            case 2:
                fact = dinoArray[i].compareDiet;
            case 3:
                fact = dinoArray[i].fact;
        }
        var dinoTile = {
            f: fact,
            name: dinoArray[i].name,
            png: "images/" + dinoArray[i].name + ".png"
        }
        var parser = new DOMParser();
        dinoTile.png = parser.parseFromString(str, 'text/html')
    }
        // Add tiles to DOM
    
    // Remove form from screen


// On button click, prepare and display infographic
