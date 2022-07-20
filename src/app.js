/**
 * All the selectors
 */
const submitButton = document.getElementById('btn');
const dinoGrid = document.getElementById('grid');
const dinoForm = document.querySelector('form');

/**
 * @description fetch raw dino data from .json file
 * @param {string} the api endpoint to fetch raw dino data
 * @returns raw dino data
 */
async function fetchDinos(url) {
    try {
        const res = await fetch(url);
        const { Dinos } = await res.json();
        console.log('dinos', Dinos);
        return Dinos;
    } catch (err) {
        console.log(err);
    }
}

// Create Dino Constructor


// Create Dino Objects


/**
 * @description get human data from the form
 * @returns human object based on user input
 */
function getHumanData(formData) {
    const raw  = Object.fromEntries(new FormData(formData).entries());
    const formattedHeight = Number(raw.feet) * 12 + Number(raw.inches);
    const formattedWeight = Number(raw.weight);

    return {
        diet: raw.diet,
        height: formattedHeight,
        weight: formattedWeight,
        name: raw.name
    }
}


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array
function generateTiles() {
    console.log('TBA')
}

// Add tiles to DOM

// Remove form from screen

// Event listeners
// On form submit
dinoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const humanInfo = getHumanData(e.target);
    console.log('humanInfo', humanInfo);
    dinoForm.setAttribute('hidden', 'true')
    const dinos = await fetchDinos('/api/dinos');
    console.log(dinos);
})
