//Fetch data from json
const getDinoData = async () => {
  const fetchedData = await fetch("./dino.json");
  const data = await fetchedData.json();
  return data.Dinos;
};

// Create Human Object
const humanData = {};

// Use IIFE. to get human data from form
const compareBtn = document.getElementById("btn");

function getHumanData() {
  humanData.fact = document.getElementById("name").value;
  humanData.height =
    document.getElementById("feet").value * 12 +
    document.getElementById("inches").value * 1;
  humanData.weight = document.getElementById("weight").value;
  humanData.diet = document.getElementById("diet").value;
  humanData.species = "Human";
}

compareBtn.addEventListener("click", async function (event) {
  const dinos = await getDinoData();
  getHumanData();

  dinos.splice(4, 0, humanData);

  //Set form to hidden here
  document.getElementById("dino-compare").style.display = "none";
  //Generate tiles here

  var imageSource = [
    "triceratops.png",
    "tyrannosaurus rex.png",
    "anklyosaurus.png",
    "brachiosaurus.png",
    "human.png",
    "stegosaurus.png",
    "elasmosaurus.png",
    "pteranodon.png",
    "pigeon.png",
  ];

  for (i = 0; i < dinos.length; i++) {
    //Declare tile elements here
    var dinoTile = document.createElement("div");
    var dinoTitle = document.createElement("h3");
    var dinoImage = document.createElement("img");
    var dinoFact = document.createElement("p");

    //Assign values from array to tiles
    var dinoTitleText = document.createTextNode(dinos[i].species);
    dinoImage.src = "./images/" + imageSource[i];
    var dinoFactText = document.createTextNode(dinos[i].fact);

    dinoTitle.appendChild(dinoTitleText);
    dinoFact.appendChild(dinoFactText);

    dinoTile.appendChild(dinoTitle);
    dinoTile.appendChild(dinoImage);
    dinoTile.appendChild(dinoFact);

    document.getElementById("grid").appendChild(dinoTile);

    //Apply css to tiles
    dinoTile.className = "grid-item";
  }

  //Calling the compare methods here

  //Create title
  var compareTitleDiv = document.createElement("div");
  var compareTitle = document.createElement("h2");
  var compareTitleText = document.createTextNode("Dinosaur VS. Human");
  compareTitle.appendChild(compareTitleText);
  compareTitleDiv.appendChild(compareTitle);
  document.getElementById("compare").appendChild(compareTitleDiv);

  (function CompareHeight() {
    //Create containers for data
    var compareBoxContainer = document.createElement("div");
    compareBoxContainer.className = "boxContainer";
    var compareBox1 = document.createElement("div");
    compareBox1.className = "box1";
    var compareBox2 = document.createElement("div");
    compareBox2.className = "box2";
    var compareBox3 = document.createElement("div");
    compareBox3.className = "box3";
    var compareBox4 = document.createElement("div");
    compareBox4.className = "box4";

    compareBoxContainer.appendChild(compareBox1);
    compareBoxContainer.appendChild(compareBox2);
    compareBoxContainer.appendChild(compareBox3);
    compareBoxContainer.appendChild(compareBox4);

    //Add values
    var boxTitle = document.createElement("h2");
    var boxTitleText = document.createTextNode("Name");
    boxTitle.appendChild(boxTitleText);
    compareBox1.appendChild(boxTitle);

    var boxTitle2 = document.createElement("h2");
    var boxTitleText2 = document.createTextNode("Height");
    boxTitle2.appendChild(boxTitleText2);
    compareBox2.appendChild(boxTitle2);

    var boxTitle3 = document.createElement("h2");
    var boxTitleText3 = document.createTextNode("Height");
    boxTitle3.appendChild(boxTitleText3);
    compareBox3.appendChild(boxTitle3);

    var boxTitle4 = document.createElement("h2");
    var boxTitleText4 = document.createTextNode("Name");
    boxTitle4.appendChild(boxTitleText4);
    compareBox4.appendChild(boxTitle4);

    for (i = 0; i < dinos.length; i++) {
      if (i != 4) {
        var compareName = document.createElement("h3");
        var compareNameText = document.createTextNode(dinos[i].species);
        compareName.appendChild(compareNameText);
        compareBox1.appendChild(compareName);

        var compareValue = document.createElement("h3");
        var compareValueText = document.createTextNode(
          dinos[i].height + " inches"
        );
        compareValue.appendChild(compareValueText);
        compareBox2.appendChild(compareValue);
      }
    }

    for (i = 0; i < dinos.length - 1; i++) {
      var compareName = document.createElement("h3");
      var compareNameText = document.createTextNode(dinos[4].species);
      compareName.appendChild(compareNameText);
      compareBox4.appendChild(compareName);

      var compareValue = document.createElement("h3");
      var compareValueText = document.createTextNode(
        dinos[4].height + " inches"
      );
      compareValue.appendChild(compareValueText);
      compareBox3.appendChild(compareValue);
    }

    document.getElementById("compare").appendChild(compareBoxContainer);
  })();

  (function CompareWeight() {
    //Create containers for data
    var compareBoxContainer = document.createElement("div");
    compareBoxContainer.className = "boxContainer";
    var compareBox1 = document.createElement("div");
    compareBox1.className = "box1";
    var compareBox2 = document.createElement("div");
    compareBox2.className = "box2";
    var compareBox3 = document.createElement("div");
    compareBox3.className = "box3";
    var compareBox4 = document.createElement("div");
    compareBox4.className = "box4";

    compareBoxContainer.appendChild(compareBox1);
    compareBoxContainer.appendChild(compareBox2);
    compareBoxContainer.appendChild(compareBox3);
    compareBoxContainer.appendChild(compareBox4);

    //Add values
    var boxTitle = document.createElement("h2");
    var boxTitleText = document.createTextNode("Name");
    boxTitle.appendChild(boxTitleText);
    compareBox1.appendChild(boxTitle);

    var boxTitle2 = document.createElement("h2");
    var boxTitleText2 = document.createTextNode("Weight");
    boxTitle2.appendChild(boxTitleText2);
    compareBox2.appendChild(boxTitle2);

    var boxTitle3 = document.createElement("h2");
    var boxTitleText3 = document.createTextNode("Weight");
    boxTitle3.appendChild(boxTitleText3);
    compareBox3.appendChild(boxTitle3);

    var boxTitle4 = document.createElement("h2");
    var boxTitleText4 = document.createTextNode("Name");
    boxTitle4.appendChild(boxTitleText4);
    compareBox4.appendChild(boxTitle4);

    for (i = 0; i < dinos.length; i++) {
      if (i != 4) {
        var compareName = document.createElement("h3");
        var compareNameText = document.createTextNode(dinos[i].species);
        compareName.appendChild(compareNameText);
        compareBox1.appendChild(compareName);

        var compareValue = document.createElement("h3");
        var compareValueText = document.createTextNode(
          dinos[i].weight + " pounds"
        );
        compareValue.appendChild(compareValueText);
        compareBox2.appendChild(compareValue);
      }
    }

    for (i = 0; i < dinos.length - 1; i++) {
      var compareName = document.createElement("h3");
      var compareNameText = document.createTextNode(dinos[4].species);
      compareName.appendChild(compareNameText);
      compareBox4.appendChild(compareName);

      var compareValue = document.createElement("h3");
      var compareValueText = document.createTextNode(
        dinos[4].weight + " pounds"
      );
      compareValue.appendChild(compareValueText);
      compareBox3.appendChild(compareValue);
    }

    document.getElementById("compare").appendChild(compareBoxContainer);
  })();

  (function CompareDiet() {
    //Create containers for data
    var compareBoxContainer = document.createElement("div");
    compareBoxContainer.className = "boxContainer";
    var compareBox1 = document.createElement("div");
    compareBox1.className = "box1";
    var compareBox2 = document.createElement("div");
    compareBox2.className = "box2";
    var compareBox3 = document.createElement("div");
    compareBox3.className = "box3";
    var compareBox4 = document.createElement("div");
    compareBox4.className = "box4";

    compareBoxContainer.appendChild(compareBox1);
    compareBoxContainer.appendChild(compareBox2);
    compareBoxContainer.appendChild(compareBox3);
    compareBoxContainer.appendChild(compareBox4);

    //Add values
    var boxTitle = document.createElement("h2");
    var boxTitleText = document.createTextNode("Name");
    boxTitle.appendChild(boxTitleText);
    compareBox1.appendChild(boxTitle);

    var boxTitle2 = document.createElement("h2");
    var boxTitleText2 = document.createTextNode("Diet");
    boxTitle2.appendChild(boxTitleText2);
    compareBox2.appendChild(boxTitle2);

    var boxTitle3 = document.createElement("h2");
    var boxTitleText3 = document.createTextNode("Diet");
    boxTitle3.appendChild(boxTitleText3);
    compareBox3.appendChild(boxTitle3);

    var boxTitle4 = document.createElement("h2");
    var boxTitleText4 = document.createTextNode("Name");
    boxTitle4.appendChild(boxTitleText4);
    compareBox4.appendChild(boxTitle4);

    for (i = 0; i < dinos.length; i++) {
      if (i != 4) {
        var compareName = document.createElement("h3");
        var compareNameText = document.createTextNode(dinos[i].species);
        compareName.appendChild(compareNameText);
        compareBox1.appendChild(compareName);

        var compareValue = document.createElement("h3");
        var compareValueText = document.createTextNode(
          dinos[i].diet.charAt(0).toUpperCase() + dinos[i].diet.slice(1)
        );
        compareValue.appendChild(compareValueText);
        compareBox2.appendChild(compareValue);
      }
    }

    for (i = 0; i < dinos.length - 1; i++) {
      var compareName = document.createElement("h3");
      var compareNameText = document.createTextNode(dinos[4].species);
      compareName.appendChild(compareNameText);
      compareBox4.appendChild(compareName);

      var compareValue = document.createElement("h3");
      var compareValueText = document.createTextNode(dinos[4].diet);
      compareValue.appendChild(compareValueText);
      compareBox3.appendChild(compareValue);
    }

    document.getElementById("compare").appendChild(compareBoxContainer);
  })();
});
