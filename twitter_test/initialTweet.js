var gpio = require("pi-gpio");
var piblaster = require('pi-blaster.js');

var track = "javascript";
var isOn = false; //keeps track if led is on and doesn't allow new connection to be opened if it is
var startValue = .1; //initial starting value, also modified by 'i'
var i = .03;// +/- direction in which the light moves
var begin = true;
var timer = 1;
var rR;
var rG;
var rB;

var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: 'TroyIuC1l3i3laNlwl5mg',
    consumer_secret: 'qYRSTEHzHhTsL0CBcMnXxjqeY5UQ6U4C0kNvmPSG4K4',
    access_token_key: '1230084602-UtUB4QdlhNkv1aLqrjS3eYoZ96APon5IhjOqBFt',
    access_token_secret: 'wscl1nV8gFO4kMhtJy7DjhQKkpJHB1fW5Jzb4RXZq8'
});
//void
function loop(){
    if(begin == true){
        start();        
    }else{
    	console.log("listen to twitter");
        //begin to listen to twitter
        twit.stream('filter', { track: track }, function(stream) {
			//event
   			stream.on('data', function(data) {
    			if(output(data) && !isOn){
    				setTimeout(function(){
		    		//here is where the colorGradient should go. colorGradient() will swirl colors then turn to white. 	    		    	
		    	   	colorGradient();
		    		isOn = false;
		    }, timeOn);    	   	
		}
	});
});
    }
}

//This is the initial behavior that the lamp does 
function start(){
    //fade in LEDs on startup
    piblaster.setPwm(2, startValue);
    piblaster.setPwm(3, startValue);
    piblaster.setPwm(4, startValue);
    startValue += i;
    console.log(startValue, begin);
    if(startValue >= 1) //if light is fully on, stay on
    {        
        startValue = 1; // light is on, probably redundant but will keep the setPwm at 1
        console.log(startValue);
        delay(); //wait 5 seconds, then continue in loop().
    }
}

function delay(){
setTimeout(function(){
   begin = false;   
}, 5000);
}

function colorGradient(){
	//do something nice with our random generated rgb values (rR,rG,rB)
	//increase piblaster.setPwm(n,x) x to 1 at the end.
}

function output(data){
	if(typeof data !== 'undefined' &&
	   typeof data.user !== 'undefined'){
		printFragment("Created at", data.created_at);
		printFragment("Created by", data.user.name);
		printFragment("Tweet:", data.text);
		console.log("");
		//generate random rgb starting points for colorGradient()
		rR = Math.random();
		rG = Math.random();
		rB = Math.random();
		return true;
	}else return false; //error receiving tweet	
}

function printFragment(prefixMessage, value){
	if(typeof value !== 'undefined') console.log(prefixMessage+" "+value);
}




