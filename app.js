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
  const dinoData = fetch("dino.json")
  .then((response) => response.json())
  .then((data) => {
    const dinosaurs = data.Dinos.map(
      (dino) =>
        new Dinosaur(
          dino.species,
          dino.weight,
          dino.height,
          dino.diet,
          dino.where,
          dino.when,
          dino.fact
        )
    );
  });

    // Create Human Object
    function Human(humanName, weight, feet, inches, diet) {
        this.species = human;
        this.humanName = humanName;
        this.weight = weight;
        this.feet = feet;
        this.inches = inches;
        this.diet = diet;
        this.fact = "";
    }

    // Use IIFE to get human data from form

    function getHumanData(){
      const humanName = document.getElementById("myName").value;
      const humanInches = document.getElementById("inches").value;
      const humanFeet = document.getElementById("feet").value;
      const humanWeight = document.getElementById("weight").value;
      const humanDiet = document.getElementById("diet").value;
      const human = new Human(humanName, humanInches, humanFeet, humanWeight, humanDiet); 
      console.log(human);
      return human;
    };

    // On click, make human object with form data, then hide form, show grid
    const button = document.getElementById('btn');
  
    function hideForm() {document.getElementById("dino-compare").style.display = "none";
    document.getElementById("grid").style.display = "";}

    button.addEventListener('click', event => {
      console.log("click");
      hideForm();
      getHumanData();
    });

    function getHeightInMeters(feet, inches) {return ((feet * .3048) + (inches * .0254)) };

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareWeight (weight, humanWeight) {
      const weightMessage = "";
      if (weight > humanWeight) weightMessage = "ways more than you";
      if (weight < humanWeight) weightMessage = "ways less than you";
      if (weight === humanWeight) weightMessage = "you both weigh the same";
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareDiet (diet, humanDiet) {
      const dietMessage = "";
      if (diet === humanDiet) dietMessage = "you have the same diet";
      else dietMessage = "you don't eat the same";
      return dietMessage;
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareHeight (height, humanHeight) {
      const heightMessage = "";
      if (height > humanHeight) heightMessage = "taller than you";
      if (height < humanHeight) heightMessage = "less tall than you";
      if (height === humanHeight) heightMessage = "you are the same height";
      return heightMessage;
    }

    // Generate Tiles for each Dino in Array

    function createTiles (human, dinosaurs) {
      const tile = document.createElement('div');
      tile.classList.add('grid-item');
 
    tile.innerHTML = `
    <h3>${animal.species}</h3>
    <img src="images/${animal.image}">
    `;
      const humanHeight = getHeightInMeters(human.feet, human.inches);
      dinosaurs.map(dinosaur => { tile.appendChild(dinsoaur.species) })

      

    };
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
