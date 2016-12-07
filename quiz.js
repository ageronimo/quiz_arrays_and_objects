/*
  Angela Geronimo
  December 7, 2016
  Quiz : Objects and Arrays
*/


// Create var named myArray
var myArray = ["What is an array?", " Hmm, I wonder.", 10, true];
console.log(myArray[2]);

function coolio(one) {
  if (one == true) {
    console.log(myArray[0] + myArray[1] + " Her grade will be a " + myArray[2] + "/10. :)");
  } else {
    console.log("You Shall Not Pass (this class)!");
  }
}

coolio(myArray[3]);


var batman = {
  man : true,
  utilityBelt : ["batarang", "grappling hook", "staff"],
  vehicle : "batmobile",
  sidekick : "Robin"
};

function bats(hero) {
  if (batman.man == true){
    console.log("Batman's got a cool sidekick named " + batman.sidekick + ", his trusty " + batman.utilityBelt[0] + ", and his sleek " + batman.vehicle + ".");
  } else {
    console.log("No, I'm the Bat");
  }
}

bats(batman);