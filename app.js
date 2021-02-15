class Dino{
    constructor(species,weight,height,diet,where,when,fact,image){
        this.species=species;
        this.weight=weight;
        this.height=height;
        this.diet=diet;
        this.where=where;
        this.when=when;
        this.fact=fact;
        this.image=image;
    }

     /**
     * Creat Dine compare methods:
     * Method1:
     * NOTE:Weight in JSON file is in lbs,height is in inches.
     * The highest object from comparing two heights*/
    compareHeight(human,dino){
        if(human.height<dino.height){
            return dino.species+"is higher than"+human.species;
        } else{ 
            return human.species + "is higher than"+dino.species;
    }
}

/**
 * Method 2:
 * The weightiest object from comparing two weights*/
compareWeight(human,dino){
    if(human.weight<dino.weight){
        return dino.species+"is fatter than"+human.species;
    } else{ 
        return human.species +"is fatter than"+dino.species;
  }
}

/**
 * Method 3:
 * NOTE:Diet in JSON file is in lbs,height is in inches*/
compareDiet(human,dino){
    if (human.diet<dino.diet){
        return dino.species+"has"+dino.diet;
    }else{
        return human.species+"has"+human.diet;
    } 
  }
}
// Create Human Object
    class Human{
        constructor(species,weight,height,diet,name){
            this.species=species;
            this.weight=weight;
            this.height=height;
            this.diet=diet;
            this.name=name;
        }
    }

//Random method to get Dino acts

function getRandomFact(human,dino){
    const dinoFacts=[]
    dinoFacts.push(dino.fact);
    dinoFacts.push(dino.compareHeight(human,dino));
    dinoFacts.push(dino.compareWeight(human,dino));
    dinoFacts.push(dino.compareDiet(human,dino));

    return dinoFacts[Math.floor(Math.random()*Math.floor(4))];
}

let humanInfo=function(){
    const name=document.getElementById("name").value;
    const feet=parseFloat(document.getElementById("feet").value);
    const inches=parseFloat(document.getElementById("inches").value);
    const weight=parseFloat(document.getElementById("weight").value);
    const diet=document.getElementById("diet").value;
    const height=(feet*12)+inches;
    const human=new Human("human",weight,height,diet,name);

    return human;
};

    // Generate Tiles for each Dine in Array 
    function makeTiles(){

        const getDinosData=async()=>{
            let dinos=[];
            const getDinosInfo=await fetch ("dino.json");
            let response=await getDinosInfo.json();
            response.Dinos.map((item)=>{
                dinos.push(new Dino(item.species,item.weight,item.height,item.diet,item.where,item.when,item.fact,item.image))
            });
            return dinos;
        }

    (async()=>{
        const grid=document.getElementById("grid");
        const dinosArray=await getDinosData();

        for (let i=0;i<dinosArray.length;i++){
            if(i===4){
                const name=humanInfo().species;
                const image="images/human.png";
                const humanTile=bulidTile(name,image,'');

                grid.appendChild(humanTile);
            }
            const species=dinosArray[i].species;
            const image=dinosArray[i].image;
            let fact;
            if(dinosArray[i].species==="pigeon"){
        
             fact="all birds are living dinasours."
    }
              else{
                  fact=getRandomFact(humanInfo(),dinosArray[i]);
              }
              const dinoTile=bulidTile(species,image,fact);
              grid.appendChild(dinoTile);
            }
    })();
}

//build tiles
//h3 name of animalls, p facts of animals

function bulidTile(h3,img,p){
    const gridHtml=document.createElement("div");
    gridHtml.className="grid-item";
    const innerP=document.createElement("p");
    const innerH3=document.createElement("h3");
    const innerImg=document.createElement("img");
    innerH3.innerHTML=h3;
    innerP.innerHTML=p;
    innerImg.innerHTML=img;
    gridHtml.appendChild(innerH3);
    gridHtml.appendChild(innerImg);
    gridHtml.appendChild(innerP);
    
    return gridHtml;
}

        // Add tiles to DOM

    // Remove form from screen
document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("dino-compare").style.display="none";

    if (document.getElementById("grid").childNodes.length===0){
        makeTiles();
    }
    document.getElementById("grid").style.display="flex";
});

// On button click, prepare and display infographic
    document.getElementById("restart").addEventListener("click",function(){
    document.getElementById("name").value="";
    document.getElementById("feet").value="";
    document.getElementById("inches").value="";
    document.getElementById("weight").value="";

    document.getElementById("grid").style.display="none";
    document.getElementById("dino-compare").style.display="block";
});

