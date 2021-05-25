async function displayGrid() {

    // Load data from Dino.json
    const url = 'https://api.jsonbin.io/b/609ddee8ed60487e5bb4941e';
    let data = null;
    try {
        const response = await fetch(url);
        data = await response.json();
    } catch (error) {
        console.log(error);
    }

    // Create Human Object
    function Human(name, feet, inches, weight, diet) {
        this.name   = name;
        this.feet   = feet;
        this.inches = inches;
        this.weight = weight;
        this.diet   = diet;
    }

    var human = new Human( {} );

    // Use IIFE to get human data from form
    (function () {
        human.name   = document.getElementById('name').value;
        human.feet   = document.getElementById('feet').value;
        human.inches = document.getElementById('inches').value;
        human.weight = document.getElementById('weight').value;
        human.diet   = document.getElementById('diet').value;
    })();

    // Create Dino Constructor
    function Dino(dino) {
        this.species = dino.species;
        this.weight  = dino.weight;
        this.height  = dino.height;
        this.diet    = dino.diet;
        this.where   = dino.where;
        this.when    = dino.when;
        this.facts   = [dino.fact];
    }

    // Create Dino Objects
    var dinos = [];
    data.Dinos.forEach(function (dino) {
        var newDino = new Dino(dino);
        newDino.facts.push(compareName(dino.species, human.name));
        newDino.facts.push(compareWeight(dino.weight, human.weight));
        newDino.facts.push(compareHeight(dino.height, human.feet, human.inches));
        newDino.facts.push(`I am from the ${dino.when} period.`);
        newDino.facts.push(`I lived in ${dino.where}.`)
        dinos.push(newDino);
    });

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareName(dinoName, humanName) {
        if (dinoName.length > humanName.length) {
            return 'My name is longer than your name.'
        } else {
            return 'Your name is longer than my name.'
        }
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareWeight(dinoWeight, humanWeight) {
        if (dinoWeight > humanWeight) {
            return 'I weigh more than you.'
        } else {
            return 'You weigh more than me.'
        }
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareHeight(dinoHeight, humanFeet, humanInches) {
        var humanHeight = humanFeet * 12 + humanInches;
        if (dinoHeight > humanHeight) {
            return 'I am taller than you.'
        } else {
            return 'I am shorter than you.'
        }
    }

    // Generate random integer
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // Generate Tiles for each Dino in Array
    (function generateTiles() {
        dinos.forEach(function (dino) {
            const div = document.createElement('div');
            div.className = 'grid-item';

            const h3 = document.createElement('h3');
            h3.textContent = dino.species;
            div.appendChild(h3);

            const img = document.createElement('img');
            img.src = `images/${dino.species}.png`;
            div.appendChild(img);

            const p = document.createElement('p');
            var randomInt = 0;
            if (dino.species != 'Pigeon') randomInt = getRandomInt(5);
            p.textContent = dino.facts[randomInt];
            div.appendChild(p); 

            // Add tiles to DOM
            document.getElementById('grid').appendChild(div);
        });
        
    })();

    // Remove form from screen
    (function removeForm() {
        document.getElementById('dino-compare').innerHTML = '';
    })();
}

// On button click, prepare and display infographic
var button = document.getElementById('btn');
button.onclick = function () {
    displayGrid();
}
