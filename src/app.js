// All the selectors
const submitButton = document.getElementById('btn');
const dinoGrid = document.getElementById('grid');
const dinoForm = document.querySelector('form');

// utils
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
function dinoConstructor() {

}

// Create Dino Objects


// Create Human Object
function humanGenerator(obj) {
    return Object.assign({}, obj);
}

// Use IIFE to get human data from form
// let humanObj = (humanGenerator(
//     function () {
//         //return the data needed for the human object
//         const data = Object.fromEntries(new FormData(dinoForm).entries());
//         return data;
//     }
// )());


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
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log('formdata', data);
    dinoForm.setAttribute('hidden', 'true')
    const dinos = await fetchDinos('/api/dinos');
    console.log(dinos);
})

// On button click, prepare and display infographic
submitButton.addEventListener('click', () => {
    console.log('TBA');
})
