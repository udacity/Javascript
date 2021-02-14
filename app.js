document.body.onload=generateDiopSpecs;
    // Create Dino Constructor
  function DinoConstructor (species,weight,height,diet,where,when,fact){
      this.species=species;
      this.weight=weight;
      this.height=height;
      this.diet=diet;
      this.where=where;
      this.when=when;
      this.fact=[
      fact,
      '${this.species} lived in ${where}',
      '${this.species} lived during ${when}',
      ]

  }
    // Load Dino Objects form dino.json
    let dinoSpecs=[];
        async function generateDiopSpecs(){
            const dataJson=await fetch ("./dino.json");
            const spec=await dataJson.json();
        }
        dinoSpecs= spec.DinoConstructor.map(dino=>new DinoConstructor(dino))

    // Create Human Object
    function generateHumanSpecs(){
        return(function(){
            let humanObjectdiet= document.getElementById('diet').value;

        }
        )
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
