    const dinos = [
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
            "when": "Late Jurassic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbivore",
            "where": "North America, Europe, Asia",
            "when": "Late Jurassic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate plates and flat spines."
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
    ];

    // Dino Constructor
    function DinoConstructor(dino, human) {
        this.species = dino.species;
        this.weight = dino.weight;
        this.height = dino.height;
        this.diet = dino.diet;
        this.where = dino.where;
        this.when = dino.when;
        this.fact = dino.fact;
        let funFact = '';

        const comparedWeight = (function() {
            const weightComparison = Math.round(this.weight/human.weight);
            return `${this.species} weighed ${weightComparison} times more than you!`;
        })(human);

        const comparedHeight = (function() {
            const weightComparison = Math.round(this.height/human.height);
            return `${this.species} was ${weightComparison} times taller than you!`;
        })(human);

        const comparedDiet = (function() {
            const dinoDiet = this.diet;
            const humanDiet = human.diet;
            const sameDiet = dinoDiet === humanDiet;
            return sameDiet ?
                `You are a ${dinoDiet} and so was ${this.species}!` :
                `${this.species} was a ${dinoDiet} but you are a ${humanDiet}!`;
        })(human);

        const funFacts = [this.fact, comparedWeight, comparedHeight, comparedDiet];

        if (this.species === 'Pigeon') {
            funFact = this.fact;
        } else {
            // Generate a random number between 0 and 3 in order to select funFact
            const funFactIndex = Math.floor(Math.random() * 4);
            funFact = funFacts[funFactIndex];
        }

        const image = `./images/${this.species.toLowerCase()}.png`;

        return {
            name: this.species,
            image,
            funFact,
        };
    }
    // Generate Tiles for each Dino in Array
    const createTile = (dino) => {
        const newDiv = document.createElement('div');
        newDiv.className = 'grid-item';
        newDiv.innerHTML = `<h3>${dino.name}</h3><img src="${dino.image}" alt="Placeholder image"><p>${dino.funFact}</p>`;
        return newDiv;
    };

    const compareButton = document.getElementById('btn');
    compareButton.addEventListener('click', () => {
        // Remove form from screen
        const form = document.getElementById('dino-compare');
        form.style.display = 'none';

        // Capture human info into a human object
        const human = (function() {
            const name = document.getElementById('name').value;
            const weight = Number(document.getElementById('weight').value);
            const heightFeet = Number(document.getElementById('feet').value);
            const heightInches = Number(document.getElementById('inches').value);
            const diet = document.getElementById('diet').value.toLowerCase();
            const height = (heightFeet * 12) + heightInches;
            
            return {
                name,
                weight,
                height,
                diet,
                image: './images/human.png',
                funFact: '',
            }
        })();

        // Construct an array of dino objects
        const dinoObjects = dinos.map(dino => DinoConstructor(dino, human));
        // Insert the human object into dinoObjects on index 4, then treat it as any other dino :)
        dinoObjects.splice(4, 0, human);

        // Add tiles to DOM
        const dinoGrid = document.getElementById('grid')
        dinoObjects.forEach(dino => {
            const gridSquare = createTile(dino);
            dinoGrid.appendChild(gridSquare);
        })
    });
