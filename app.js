const data = [

    {

        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
]
const button = document.getElementById("btn");
const container = document.getElementById("grid");

// Create Dino Constructor
function Dinosaur(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.getHeightDif = function() {       
        
        if (human.height < this.height) {
            console.log("human shorter")
            return `${human.name} is ${this.height - human.height} inches shorter than ${this.species}!`;
        } else(human.height > this.height) 
        {
            console.log("human taller")
            return `${human.name} is ${this.height - human.height} inches taller than ${this.species}!`;
    
        }
    
    };
    

}



// Create Dino Objects

const dinosaur = data.map((data) =>
    new Dinosaur(
        data.species,
        data.weight,
        data.height,
        data.diet,
        data.where,
        data.when,
        data.fact
    ))


    Dinosaur.prototype.compareHeight= function compareHeight(human){
        

        if(human.height<this.weight){
           return `${human.name} is ligher than this dinosaur.`
       }
       else{
           return `${human.name} is heavier than this dinosaur!`
       }
      
   }

   Dinosaur.prototype.compareWeight= function compareWeight(human){
        
 
    if(human.weight<this.weight){
       return `${human.name} weighs less than this dinosaur.`
   }
   else{
       return `${human.name} weighs more than this dinosaur!`
   }
  
}

Dinosaur.prototype.compareDiet= function compareDiet(human){

    if(human.diet!==this.diet){
       return 'Your diet is '+ human.diet
   }
  
}



// Generate Tiles for each Dino in Array
function getHumanInfo () {
    const name = document.getElementById("name").value
    const feet = parseInt(document.getElementById("feet").value)
    const inches = parseInt(document.getElementById("inches").value)
    const height = feet*12+inches
    const weight = Number.parseFloat(document.getElementById("weight").value)
    const diet = document.getElementById("diet").value
    let human = new Dinosaur("Human", weight, height, diet)
    human.name = name
    return human
}

const dinoTiles = function() {
    let human = getHumanInfo()
 
    const shuffledboard = dinosaur.slice(0, 4).concat(human).concat(dinosaur.slice(4, 8))
    

    let grid = document.getElementById("grid")

    // loops over compiled results array and generates tiles
    // Add tiles to DOM
    for (var i = 0; i < shuffledboard.length; i++) {
        
        if (i == 4) {
            
            grid.innerHTML += `
        <div class="grid-item">
        <h3>${human.species}</h3>
        <img src="images/${(human.species.toLowerCase())}.png" alt="image of ${human.species}">
        <p>${human.name}
        ${human.height}
        ${human.weight}
        ${human.diet}</p>
        </div>

    `
        } else {
            
            
            grid.innerHTML += `
        <div class="grid-item">
        <h3>${shuffledboard[i].species}</h3>
        <img src="images/${(shuffledboard[i].species.toLowerCase())}.png" alt="image of ${shuffledboard[i].species}">
        <p>${shuffledboard[i].fact}
       ${shuffledboard[i].compareHeight(human)}
       ${shuffledboard[i].compareWeight(human)}
       ${shuffledboard[i].compareDiet(human)}
        </p>
        </div>

    `
        }
    }
    
    
}


button.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("dino-compare").style.display = "none";
    dinoTiles()
    debugger
})

