const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let click1, click2, clicks = 0;

// TODO: Implement this function!
function handleCardClick(event) {
  event.preventDefault();
  // you can use event.target to see which element was clicked
  if(clicks > 1) return;
  event.target.style.backgroundColor = event.target.classList;

  if(clicks == 0) {
    clicks++;
    click1 = event.target;
  } else if (clicks == 1) {
    clicks++;
    click2 = event.target;
    if(click1.style.backgroundColor == click2.style.backgroundColor) {
      console.log("Match");
      clicks = 0;
    } else {
      console.log("Not a Match");
      setTimeout(function() {
        click1.style = null;
        click2.style = null;
        clicks = 0;
      }, 1000);
    }
    console.log(clicks);
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);