const fields = ["Musculos", "Huesos", "Nervios"];
const musculos = ["musculos dorso", "brazo", "antebrazo", "mano", "Musculos cintura pelvica", "muslo", "pierna", "pie"];
const huesos = ["esqueleto axial", "esqueleto apendicular"]
const nervios = ["nervios dorso", "miembro superior(plexo braquial)", "Nervios cintura pelvica (plexo lumbo-sacro)", "miembro inferior"]



const displayDiv = document.getElementById('displayD');
const displayDiv2 = document.getElementById("displayD2")
const displayDiv3 = document.getElementById("imageDiv");


// displayDiv.textContent = "Hi dude!";

// displayDiv.textContent = randomSelector + " Hi Dude!";

function generalTopicSelection() {
  const randomSelector = Math.floor(Math.random() * 3);


  if (randomSelector === 0) {
    displayDiv.textContent = fields[0];
    mSelection();
  } else if (randomSelector === 1) {
    displayDiv.textContent = fields[1];
    hSelection();
  } else {
    displayDiv.textContent = fields[2];
    nSelection();

  }

  function mSelection() {
    const mRandomSelector = Math.floor(Math.random() * 8)

    if (randomSelector === 0) {
      displayDiv2.textContent = musculos[mRandomSelector];
     MimgSelection(musculos[mRandomSelector]);
    }
  }

  function hSelection() {
    const hRandomSelector = Math.floor(Math.random() * 2)

    if (randomSelector === 1) {
      displayDiv2.textContent = huesos[hRandomSelector]
       HimgSelection(huesos[hRandomSelector]);
    }
  }

  function nSelection() {
    const nRandomSelector = Math.floor(Math.random() * 4)

    if (randomSelector === 2) {
      displayDiv2.textContent = nervios[nRandomSelector]
      NimgSelection(nervios[nRandomSelector]);
    }
  }


  function NimgSelection(nervio){

const img = document.createElement("img")
img.src = ("/Users/cesarperez/Desktop/Programming/JoyMed/images/" + nervio + ".png")
img.className = "image-class";
displayDiv3.innerHTML = "";
displayDiv3.appendChild(img);
  }

  function MimgSelection(musculo){

const img = document.createElement("img")
img.src = ("/Users/cesarperez/Desktop/Programming/JoyMed/images/" + musculo + ".png")
img.className = "image-class";
displayDiv3.innerHTML = "";
displayDiv3.appendChild(img);
  }

  function HimgSelection(hueso){

const img = document.createElement("img")
img.src = ("/Users/cesarperez/Desktop/Programming/JoyMed/images/" + hueso + ".png")
img.className = "image-class";
displayDiv3.innerHTML = "";
displayDiv3.appendChild(img);
  }



// function imageSelection(img){
//
// switch {
//
// }


}






generalTopicSelection();




const button = document.getElementById("generator");
button.addEventListener("click", generalTopicSelection);
