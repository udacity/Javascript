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
        this.humanName = humanName;
        this.weight = weight;
        this.feet = feet;
        this.inches = inches;
        this.diet = diet;
    }

    // Use IIFE to get human data from form

    function getHumanData(){
      const humanName = document.getElementById("myName").value;
      const inches = document.getElementById("inches").value;
      const feet = document.getElementById("feet").value;
      const weight = document.getElementById("weight").value;
      const diet = document.getElementById("diet").value;
      const human = new Human(humanName, inches, feet, weight, diet); 
      console.log(human);
      return human;
    };

    const button = document.getElementById('btn');
  
    function hideForm() {document.getElementById("dino-compare").style.display = "none";
    document.getElementById("grid").style.display = "block";}

    button.addEventListener('click', event => {
      console.log("click");
      hideForm();
      getHumanData();
    });


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
