console.log('checkpoint')


/*
#### Assume your present working directory is `$ ~/buffy`

1. Make two directories inside `~/buffy`: `scoobies` and `vamps`

pwd
mkdir scoobies vamps

2. Make files in `scoobies` named `buffy.txt`, `giles.txt` and `angel.txt`

cd scoobies 
touch buffy.txt giles.txt angle.txt

3. Copy `angel.txt` into the `vamps` directory

pwd // assume I'm in scoobies directory
cp angle.txt ~/wdi17/checkpoint/checkpoint1/vamps/


4. Delete the `vamps` directory and everything inside it

cd ..
rm -rf vamps 
*/


// JS Variables

1. 

var captain;

captain = 'Jack';

2. 

var phrase = 'Oh ' + captain + ', my ' + captain + "!";

// JS conditionals 

1. 

var souls = 3;
var lifeRafts = 2;

if (souls > lifeRafts) {
	console.log ("SOS");
}

// Data Structures - JS Arrays

var weekend = ['Saturday'];

weekend.push('Sunday');

weekend.unshift('Friday');

var day = weekend[1];

weekend.shift();


// Data Structures - JS Objects

var brain = {
	energyLevel: 10
};

var energy = brain.energyLevel;

brain.dream = 'electric sheep';

brain.dayDream = { 
	lunch: ['burger', 'beer'] 
};

brain.dayDream.lunch.push('pudding');


// JS Functions

function areaOfRect(height, width) {
	return height * width;
}

var result = areaOfRect(3, 4);







