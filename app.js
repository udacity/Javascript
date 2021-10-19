
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
// 
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

// Raw Dino data. Tried to read from external JSON with mentor assistance but didn't work for me, 
// i.e. could log data to the console but not store as a variable without the use of async/await
// which hasn't been covered in the course yet.

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
        "species": "Ankylosaurus",
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
    },
    {
        "species": "Tysonosaurus",
        "weight": 0.00002,
        "height": 0.034,
        "diet": "injectable meat fluid",
        "where": "Worldwide",
        "when": "Holocene",
        "fact": "REEEEEEEEEE"
    }
    
    // {
        //     "species": "Tyrannosaurus Rex",
        //     "weight": 11905,
    //     "height": 144,
    //     "diet": "carnivore",
    //     "where": "North America",
    //     "when": "Late Cretaceous",
    //     "fact": "The largest known skull measures in at 5 feet long."
    // },
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
    let randomFact = Object.keys(this)[rand];
    // console.log(randomFact)
    // console.log(this[randomFact])
    // console.log("A Fact About:")
    // console.log(this.species)
    // console.log(Object.keys(this)[rand])
    return (this[randomFact])
}

// Generate Dino grid squares in the DOM from raw data. 
// Variable usage allows raw data to be modified without needing to modify the logic.

const dinoSpeciesList = [];
for(let dino of allDinos) {
    dinoSpeciesList.push(dino.species)
}

document.addEventListener("DOMContentLoaded", function() {
    for(let species of dinoSpeciesList) {
        
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-item");
        
        const node = document.createTextNode(species);
        gridSquare.appendChild(node);
        
        const dinoPic = document.createElement("img")
        dinoPic.src = `./images/${species}.png`;
        gridSquare.appendChild(dinoPic);
        
        const dino = new Dino(allDinos.find(element => element.species === species));
        const fact = document.createTextNode(dino.fact);
        gridSquare.appendChild(fact)
    
        const grid = document.getElementById("grid");
        grid.appendChild(gridSquare)
    };

})



// Create Human Object

function Human (input) {
    this.name = input.name;
    this.weight = input.weight;
    this.height = input.height;
    this.diet = input.diet;
}





// Remove form from screen
// coming soon


function handleForm(event) { 
    // prevent page from refreshing upon form submission
    event.preventDefault();
    
    const grid = document.getElementById("grid");

    // Use IIFE to get human data from form
    (function() {
        let user = {
            name: document.getElementById("name").value,
            feet: document.getElementById("feet").value,
            inches: document.getElementById("inches").value,
            weight: document.getElementById("weight").value,
            diet: document.getElementById("diet").value
        };
        console.log(user)
        theHuman = new Human(user)

        const humanGridSquare = document.createElement("div");
        humanGridSquare.classList.add("grid-item");
        
        const humanNode = document.createTextNode(user.name);
        humanGridSquare.appendChild(humanNode);
        
        const humanPic = document.createElement("img")
        humanPic.src = "./images/human.png";
        humanGridSquare.appendChild(humanPic);
        
        const humanFact = document.createTextNode("Test");
        humanGridSquare.appendChild(humanFact);

        console.log(this.grid.childNodes);
    
        this.grid.insertBefore(humanGridSquare, this.grid.childNodes[7]); // Position 4 if using this.grid.children
    } () );


    // Prepare and display infographic
    if (grid.style.display === "flex") {
        grid.style.display = "none";
        return;
    };
    grid.style.display = "flex";
}; 

var form = document.getElementById("dino-compare");
form.addEventListener('submit', handleForm);

    


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.



