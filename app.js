
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object
    const createHuman = () => {
        const name = document.getElementById('name').value;
        const weight = document.getElementById('weight').value;
        const heightFeet = document.getElementById('feet').value;
        const heightInches = document.getElementById('inches').value;
        const diet = document.getElementById('diet').value;
        const height = heightFeet * 12 + heightInches;
        return {
            name,
            weight,
            height,
            diet,
        }
    }

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    const createTile = () => {
        const newDiv = document.createElement('div');
        newDiv.className = 'grid-item';
        newDiv.innerHTML = `<h3>Placeholder dino title</h3><img src="images/tracks.png" alt="Placeholder image"><p>Dino fact</p>`;
        return newDiv;
    };

        // Add tiles to DOM
        const dinoGrid = document.getElementById('grid')
        for (let i = 0; i < 9; i++) {
            const gridSquare = createTile();
            dinoGrid.appendChild(gridSquare);
        }
        dinoGrid.style.display = 'none';

    // Remove form from screen
    const compareButton = document.getElementById('btn');
    const form = document.getElementById('dino-compare');
    const showCompareGrid = () => {
        form.style.display = 'none';
        dinoGrid.style.display = null;
    };
    compareButton.addEventListener('click', () => {
        showCompareGrid();
        const human = createHuman();
        console.log('human ', human);
    });


// On button click, prepare and display infographic
