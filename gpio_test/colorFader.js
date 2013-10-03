var gpio = require("pi-gpio");
var piblaster = require('pi-blaster.js');

<<<<<<< HEAD
var cRed = Math.random();
var cGreen = Math.random();
var cBlue = Math.random();
var changePerLoop = 0.05;
var threshold = 0.1;

var tRed = Math.random();
var tGreen = Math.random();
var tBlue = Math.random();
=======
var cRed = Math.floor(Math.random());
var cGreen = Math.floor(Math.random());
var cBlue = Math.floor(Math.random());

var tRed = Math.floor(Math.random());
var tGreen = Math.floor(Math.random());
var tBlue = Math.floor(Math.random());
>>>>>>> 012f2b2f62207a87a0ca3c9e10973f32f3598d27

var signRed;
var signGreen;
var signBlue;

  if (cRed > tRed) {
<<<<<<< HEAD
    signRed = -changePerLoop;
  } 
  else {
    signRed = changePerLoop;
  }

  if (cGreen > tGreen) {
    signGreen = -changePerLoop;
  } 
  else {
    signGreen = changePerLoop;
  }

  if (cBlue > tBlue) {
    signBlue = -changePerLoop;
  } 
  else {
    signBlue = changePerLoop;
=======
    signRed = -0.05;
  } 
  else {
    signRed = 0.05;
  }

  if (cGreen > tGreen) {
    signGreen = -0.05;
  } 
  else {
    signGreen = 0.05;
  }

  if (cBlue > tBlue) {
    signBlue = -0.05;
  } 
  else {
    signBlue = 0.05;
>>>>>>> 012f2b2f62207a87a0ca3c9e10973f32f3598d27
  }

var maxRed;
var minRed;
var maxGreen;
var minGreen;
var maxBlue;
var minBlue;
var test = 0.9;

setInterval(loop, 1);

function loop(){
    colorPick();
    
    // set R G B with current values
<<<<<<< HEAD
    piblaster.setPwm(0, cRed);
    piblaster.setPwm(2, cGreen);
    piblaster.setPwm(3, cBlue);
    console.log("The value of cRed is: " + cRed);
    console.log("The value of cGreen is: " + cGreen);
    console.log("The value of cBlue is: " + cBlue);
    var difference = Math.abs(cRed - tRed);
    console.log("The difference between cRed and tRed is " + difference);
    
=======
    piblaster.setPwm(2, test);
    piblaster.setPwm(3, test);
    piblaster.setPwm(4, test);
    console.log(test);
>>>>>>> 012f2b2f62207a87a0ca3c9e10973f32f3598d27
    
}

function mapRange(value, low1, high1, low2, high2){
    return low2 + (high2 - low2) * ((value - low1) / (high1 - low1));
}

function colorPick(){

    cRed += (1 * signRed);  
    cGreen += (1 * signGreen);
    cBlue += (1 * signBlue);
  
    // RED
    // check to see if current = target
    if (cRed == tRed) {
        tRed = Math.floor(Math.random());
    }
    // decide to fade up or down, depending where target is
    if (cRed < tRed) {
<<<<<<< HEAD
        signRed = changePerLoop;
    } else {
      signRed = -changePerLoop;
=======
        signRed = 0.05;
    } else {
      signRed = -0.05;
>>>>>>> 012f2b2f62207a87a0ca3c9e10973f32f3598d27
    }
  
    // GREEN
    // check to see if current = target
    if (cGreen == tGreen) {
        tGreen = Math.floor(Math.random());
    }
    // decide to fade up or down, depending where target is
    if (cGreen < tGreen) {
<<<<<<< HEAD
      signGreen = changePerLoop;
    } else {
      signGreen = -changePerLoop;
=======
      signGreen = 0.05;
    } else {
      signGreen = -0.05;
>>>>>>> 012f2b2f62207a87a0ca3c9e10973f32f3598d27
    }
  
    // BLUE
    // check to see if current = target
    if (cBlue == tBlue) {
        tBlue = Math.floor(Math.random());
    }
    // decide to fade up or down, depending where target is
    if (cBlue < tBlue) {
<<<<<<< HEAD
      signBlue = changePerLoop;
    } else {
      signBlue = -changePerLoop;
=======
      signBlue = 0.05;
    } else {
      signBlue = -0.05;
>>>>>>> 012f2b2f62207a87a0ca3c9e10973f32f3598d27
    }

}
