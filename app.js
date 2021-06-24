
// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = "This dinosaur lived in " + where;
    this.when = "This dinosaur lived in the " + when + " time period";
    this.fact = fact;
}

// Create Dino Objects
var tricera = new Dino("triceratops", 13000, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh.");
var tyranosaurusRex = new Dino("tyrannosaurus rex", 11905, 144, "Carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.");
var ankylo = new Dino("anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Ankylosaurus survived for approximately 135 million years.");
var brachio = new Dino("brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurassic", "An asteroid was named 9954 Brachiosaurus in 1991.");
var stego = new Dino("stegosaurus", 11600, 79, "herbavor", "North Americca, Europe, Asia", "Late Jurassic to Early Cretaceous", "The Stegosaurus had between 17 and 22 separate places and flat spines.");
var elasmo = new Dino("elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.");
var ptera = new Dino("pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.");
var pigeon = new Dino("pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.");
var dinoArray = [tricera, tyranosaurusRex, ankylo, brachio, stego, elasmo, ptera, pigeon];
// Create Human Object
// Use IIFE to get human data from form
function makeHumanData () {
    return (function () {
        return Object.assign({}, {
            name: document.getElementById("name").value,
            height: (Number(document.getElementById("feet").value) * 12) + Number(document.getElementById("inches").value),
            weight: Number(document.getElementById("weight").value),
            diet: document.getElementById("diet").value
        });
    })();   
}
humanData = {}
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
Dino.prototype.weightCompare = function () {
    var compareWeight = this.weight - humanData.weight;
    return "This dinosaur is " + compareWeight + " pounds heavier than you.";
};
// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.heightCompare = function () {
    var compareHeight = this.height - humanData.height;
    return "This dinosaur is " + compareHeight + " inches taller than you";
}


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.dietCompare = function () {
    var compareDiet;
    if (Dino.diet === humanData.diet) {
        compareDiet = "Your diet is the same with this dinosaur";
        return compareDiet;
    }
    else {
        compareDiet = "Your diet is different from this dinosaur";
        return compareDiet;
    }
}

// Generate Tiles for each Dino in Array
function getTiles() {
    var newArray = dinoArray.map(function (elem) {
        num = Math.floor(Math.random() * 6);
        var fact;
        switch (num) {
            case 0:
                fact = elem.weightCompare();
                break;
            case 1:
                fact = elem.heightCompare();
                break;
            case 2:
                fact = elem.dietCompare();
                break;
            case 3:
                fact = elem.fact;
                break;
            case 4:
                fact = elem.where;
                break;
            case 5:
                fact = elem.when;
        }
        return dinoTile = {
            f: fact,
            name: elem.species,
            png: "images/" + elem.species + ".png"
        }
    })
    console.log(newArray);
    return newArray;
}

function addingTiles() {
    humanData = makeHumanData();
    newArray = getTiles();
    var humanTile = {
        name: humanData.name,
        png: "images/human.png"
    }
    newArray.splice(newArray.length / 2, 0, humanTile);
    

    for (let i = 0; i < newArray.length; i++) {
        let til = document.createElement('div');
        const head = document.createElement('h3');
        head.append(newArray[i].name);
        const img = document.createElement("img");
        img.src = newArray[i].png;
        til.append(head, img);
        const underline = document.createElement('p');
        if (i !== Math.floor(newArray.length/2)) {
            if (newArray[i].name === "pigeon") {
                underline.append("All birds are living dinosaurs");
            } else {
                underline.append(newArray[i].f);
            }
            til.append(underline);
        }
        til.className = "grid-item";
        grid = document.getElementById("grid");
        grid.append(til);
    }
}
// Remove form from screen
function formRemove() {
    let form = document.getElementById("dino-compare");
    form.remove();
}
// On button click, prepare and display inforgraphic
button = document.getElementById("btn");
button.onclick = function () {
    addingTiles();
    formRemove();
}

