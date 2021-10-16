
// let data = null
// fetch("dino.json").then(response => response.json()).then(json => (data = json));
// console.log(data)

// async function createDinoArray() {
//     const response = await fetch("./dino.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     let dinos = data.Dinos;
    //     console.log(dinos)
    //     // return dinos;
    //     getDinos(dinos);
    //   });
// }

// const allDinos = createDinoArray().then(cleanDinos => {cleanDinos})
// console.log(allDinos)

// let dinos = [];
// fetch("./dino.json")
//   .then((res) => res.json())
//   .then((data) => {
//     let dinos = data.Dinos;
//     console.log(dinos)
//     // return dinos;
//     getDinos(dinos);
//   });
// // console.log(dinos)
// function getDinos(dinos) {
//   dinos.map((dino) => console.log(dino));
// }

// console.log(cleanDinos)
// console.log(cleanDinos.result[0])


// Mentor suggested this approach but didn't work
// (async function (){
//    cleanDinos = await fetch("./dino.json")
//      .then((res) => res.json())
//      .then((data) => {
//        let dinos = data.Dinos;
//     //    console.log(dinos)
//        return dinos;
//      });
//    })()

// console.log("cleanDinos")
// console.log(cleanDinos)


const allDinos = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbivore",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 separate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbivore",
        "where": "Worldwide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
]



// Create Dino Constructor

function Dino (saur) {
    this.species = saur.species;
    this.weight = saur.weight;
    this.height = saur.height;
    this.diet = saur.diet;
    this.where = saur.where;
    this.when = saur.when;
    this.fact = saur.fact;
}

Dino.prototype.randFact = function () {
    let rand = (Math.floor(Math.random() * (Object.keys(this).length - 1)) + 1);
    let randFact = Object.keys(this)[rand];
    console.log("A Fact About:")
    console.log(this.species)
    console.log(Object.keys(this)[rand])
    console.log(allDinos[rand][randFact])
}



let thisDino = "Pteranodon"
thisDino = allDinos.find(element => element.species = thisDino)
console.log(thisDino)


let testosaurus = new Dino(thisDino);

testosaurus.randFact()


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


// On button click, prepare and display infographic


var form = document.getElementById("dino-compare");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


let submitButton = document.getElementById("btn")

submitButton.onclick = function () {
    if (document.getElementById("grid").style.display === "flex") {
        document.getElementById("grid").style.display = "none";
        return;
    };
    document.getElementById("grid").style.display = "flex";

}

