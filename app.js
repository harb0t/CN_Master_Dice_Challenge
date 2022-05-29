// THE DICE ROLL
function getRndInteger(min, max) {
  let result =  Math.floor(Math.random() * (max - min)) + min;
  array.push(result)
  showDiceTotal();
  return result;
};

let pOnecheck = playerOneDieResult;

// PLAYER ONE DICE ROLL
function playerOneRoll(){
  document.getElementById('playerOneDieResult').innerHTML = getRndInteger(1,1);
};

// PLAYER ONE COUNT
let array = []; // the array is empty but gets populated over time

function showDiceTotal() {
  let playOneDieTotal = 0; // re-sets total to 0 so the array of numbers can be summed up again
  for (let i = 0; i < array.length; i++) {
    playOneDieTotal += array[i];
    }; // goes through the array (length method)

    console.log(playOneDieTotal); // logs array in console
  
    document.getElementById('displayPlayerOneResult').innerHTML = playOneDieTotal;
}; // gives an id to result for HTML to print


// NEW DRAFT CODE BELOW (not for use yet)

function pOneWinOrLose(){
  if (pOnecheck === [1]){
    console.log("loser");
  }
}
