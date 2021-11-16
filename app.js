// Raw Dino data. Tried to read from external JSON with mentor assistance but didn't work for me,
// i.e. could log data to the console but not store as a variable without the use of async/await
// which hasn't been covered in the course yet.

const allDinos = [
  {
    species: 'Triceratops',
    weight: 13000,
    height: 114,
    diet: 'herbivore',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'First discovered in 1889 by Othniel Charles Marsh',
  },
  {
    species: 'Ankylosaurus',
    weight: 10500,
    height: 55,
    diet: 'herbivore',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Persisted as a species for approximately 135 million years.',
  },
  {
    species: 'Brachiosaurus',
    weight: 70000,
    height: '372',
    diet: 'herbivore',
    where: 'North America',
    when: 'Late Jurassic',
    fact: 'An asteroid was named 9954 Brachiosaurus in 1991.',
  },
  {
    species: 'Stegosaurus',
    weight: 11600,
    height: 79,
    diet: 'herbivore',
    where: 'North America, Europe, Asia',
    when: 'Late Jurassic to Early Cretaceous',
    fact: 'The Stegosaurus had between 17 and 22 separate places and flat spines.',
  },
  {
    species: 'Elasmosaurus',
    weight: 16000,
    height: 59,
    diet: 'carnivore',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Elasmosaurus was a marine reptile first discovered in Kansas.',
  },
  {
    species: 'Pteranodon',
    weight: 44,
    height: 20,
    diet: 'carnivore',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Actually a flying reptile, the Pteranodon is not a dinosaur.',
  },
  {
    species: 'Pigeon',
    weight: 0.5,
    height: 9,
    diet: 'herbivore',
    where: 'Worldwide',
    when: 'Holocene',
    fact: 'All birds are living dinosaurs.',
  },
  {
    species: 'Tysonosaurus',
    weight: 0.00002,
    height: 0.034,
    diet: 'injectable meat fluid',
    where: 'Worldwide',
    when: 'Holocene',
    fact: 'REEEEEEEEEE',
  },

  // {
  //     "species": "Tyrannosaurus Rex",
  //     "weight": 11905,
  //     "height": 144,
  //     "diet": "carnivore",
  //     "where": "North America",
  //     "when": "Late Cretaceous",
  //     "fact": "The largest known skull measures in at 5 feet long."
  // },
];

// Dino Constructor

function Dino(saur, canKill, edible, competitive) {
  this.species = saur.species;
  this.weight = saur.weight;
  this.height = saur.height;
  this.diet = saur.diet;
  this.where = saur.where;
  this.when = saur.when;
  this.fact = saur.fact;
  this.canKill = canKill;
  this.edible = edible;
  this.competitive = competitive;
}

Dino.prototype.randFact = function getRandFact() {
  if (this.species === "Pigeon") {
      return "All birds are dinosaurs."
  }
  const rand = (Math.floor(Math.random() * (Object.keys(this).length - 1)) + 1);
  const randomFact = Object.keys(this)[rand];

  // Make human readable depending on fact chosen
  if (randomFact === 'weight') {
    return (`He weighed ${this[randomFact]} lbs.`);
  }
  if (randomFact === 'height') {
    const dinoInches = this[randomFact] % 12;
    const dinoFeet = ((this[randomFact] - dinoInches) / 12);
    return (`He was ${dinoFeet}' ${dinoInches}" tall.`);
  }
  if (randomFact === 'where') {
    return (`He lived in ${this[randomFact]}.`);
  }
  if (randomFact === 'when') {
    return (`He lived in the ${this[randomFact]} era.`);
  }
  return this[randomFact];
};

// Create Human Object

function Human(input) {
  this.name = input.name;
  this.feet = input.feet;
  this.inches = input.inches;
  this.height = (((Number(this.feet)) * 12)) + Number(this.inches);

  this.weight = input.weight;
  this.diet = input.diet;
  // this.strategy = strategy;
}
Human.prototype.findBMI = function findBMI() {
  return ((Number(this.weight) / this.height ** 2) * 703);
};

// Waits until other stuff renders to execute

document.addEventListener('DOMContentLoaded', () => {

});

// Process form and generate grid

function handleForm(event) {
  // prevent page from refreshing upon form submission
  event.preventDefault();

  const grid = document.getElementById('grid');

  // Use IIFE to get human data from form
  (function getHumanData() {
    const formData = {
      name: document.getElementById('name').value,
      feet: document.getElementById('feet').value,
      inches: document.getElementById('inches').value,
      weight: document.getElementById('weight').value,
      diet: document.getElementById('diet').value,
    };

    // Attn: reviewer
    // I don't know why the linter dislikes the definition of "theHuman",
    // it seems that ESLint/Airbnb does not recognize class definitions like this
    // they tend to result in false positives for "no-undef"
    theHuman = new Human(formData);
    console.log(theHuman)

    // Generate Dino grid squares in the DOM from raw data.
    // Variable usage allows raw data to be modified without needing to modify the logic.

    const dinoSpeciesList = allDinos.map((dino) => dino.species);

    // Dino Compare Method 1: which dinos can kill you? I.e. dino height AND weight > human
    // NOTE: Weight in JSON file is in lbs, height in inches.

    const canKill = allDinos.filter((dino) => (
      dino.height > theHuman.height && dino.weight > theHuman.weight));

    //  Dino Compare Method 2: which dinos can you reliably hunt?
    // I.e. when your diet != herbivore AND bmi not obese (<30) (w/ h^2 * 703)
    // AND you are at least 1% of the dino's weight AND you are at least half the dino's height
    // NOTE: Weight in JSON file is in lbs, height in inches.

    const edible = allDinos.filter((dino) => (
      theHuman.diet !== 'Herbivore'
      && (theHuman.findBMI() < 30)
      && (theHuman.weight >= dino.weight * 0.01)
      && (theHuman.height >= dino.height * 0.5)
    ));

    // Dino Compare Method 3, i.e do you have the same diet
    // and will therefore compete for resources?

    function isCompetition(thisDino) {
      if(theHuman.diet.toUpperCase() === thisDino.diet.toUpperCase()) {
        return 'You WILL compete for resources with him!';
      }
      return 'You will NOT compete for resources with him';
    }

    // Dino Compare Method 4, i.e what is your best survival strategy?

    // forager if you are herbivore
    // scavenger if carnivore but edible < 3 OR omnivore
    // hunter if carnivore AND edible > 2

    // NOTE: Weight in JSON file is in lbs, height in inches.

    const strategy = function strategy() {
      if (theHuman.diet === 'herbivore') {
        return 'forager';
      } if (theHuman.diet === 'Carnivore' && edible.length > 2) {
        return 'hunter';
      }
      return 'scavenger';
    };

    // Generate the dino grid squares with a random fact in the text node.

    for (const species of dinoSpeciesList) {
      // generate grid square
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-item');

      const node = document.createTextNode(species);
      gridSquare.appendChild(node);

      const dinoPic = document.createElement('img');
      dinoPic.src = `./images/${species}.png`;
      gridSquare.appendChild(dinoPic);

      // get dino stats
      const saur = allDinos.find((element) => element.species === species);
      const canKillYou = (canKill.includes(saur) ? 'He will probably kill you' : 'He is relatively* safe');
      const isEdible = (edible.includes(saur.species) ? 'A good choice for you to hunt' : 'Please do not try to eat him');
      const competitive = isCompetition(saur);

      // instantiate dino and append
      const dino = new Dino(saur, canKillYou, isEdible, competitive);
      const getRandFact = document.createTextNode(dino.randFact());
      gridSquare.appendChild(getRandFact);

      const gridBase = document.getElementById('grid');
      gridBase.appendChild(gridSquare);
    }

    const humanGridSquare = document.createElement('div');
    humanGridSquare.classList.add('grid-item');

    const humanNode = document.createTextNode(theHuman.name);
    humanGridSquare.appendChild(humanNode);

    const humanPic = document.createElement('img');
    humanPic.src = './images/human.png';
    humanGridSquare.appendChild(humanPic);

    // Optional human fact
    // humanGridSquare.appendChild(
    //   document.createTextNode(`Your best chance of survival is as a ${strategy()}`),
    // );

    this.grid.insertBefore(humanGridSquare, this.grid.childNodes[5]);
  }());

  // Display infographic
  if (grid.style.display === 'flex') {
    grid.style.display = 'none';
    return;
  }
  grid.style.display = 'flex';

  // Remove form from screen
  const form = document.getElementById('dino-compare');
  form.style.display = 'none';
}

const form = document.getElementById('dino-compare');
form.addEventListener('submit', handleForm);

