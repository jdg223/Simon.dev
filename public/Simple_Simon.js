//assign variables to hold html elements
var pink = document.getElementById('box-1')
var purple = document.getElementById('box-2')
var black = document.getElementById('box-3')
var yellow = document.getElementById('box-4')
var button = document.getElementsByClassName('btn')
var startButton = document.getElementById('start-game')
var sequence = []
var simon  = []
var lastSimon = simon[simon.length - 1]
var lastSequence = sequence[sequence.length - 1]
var text = document.getElementById('text')
var round = document.getElementById('round')


function squareAnimation() {
var random = rand();
	sequence.push(random);
	
	for(var i = 0; i < sequence.length; i++) {
		animateTest(sequence[i], i);
	}

}

function animateTest(div, i) {
	setTimeout(function () {
		div.style.opacity = "0.5";

		setTimeout(function() {
			div.style.opacity = "1.0"
		}, 500);
	}, 1000 * i);			
}

function ifCorrect (){
	simon = []
	roundChange();
	squareAnimation();
}

function userChoice(event) {
	console.log(event.target)
	var choice =  event.target;
	simon.push(choice)
}

function rand() {
 	var selection = Math.floor(Math.random() * 4);
 		return button[selection];
 	};
 



//attach event listeners to each element
	pink.addEventListener('click',userChoice,false)
	purple.addEventListener('click',userChoice,false)
	black.addEventListener('click',userChoice,false)
	yellow.addEventListener('click',userChoice,false)
	startButton.addEventListener('click',startGame,false)
//check if user selection matches simon's sequence
function checkIfMatch () {
		i = 0;
		i++;
	if (simon[i] == sequence[i]) {
	ifCorrect()
	
	}
}


function compareSequences () {
	setInterval(function() {
	var check = checkIfMatch();
		return check;
	},3000)

	}

function startGame () {
	i = 0
	i++
	squareAnimation();
	if (simon.length !== sequence[i]) {
		compareSequences();	
	};

	r = sequence.length ;
	round.innerHTML = "Round:" + r	
	
	//changeText();

}

// function changeText() {
// 	var sequencePlus = sequence.slice(i++, sequence.length);
// 	var i = 3;
// 	// if (sequence.length >= 1 * sequence.length) {	
// 	// 	text.innerHTML = "watch This Sequence"	
// 	// }
// 	 if(sequencePlus)
// 	{
// 		text.innerHTML = "Repeat This sequence" 
// 	}
// }

function roundChange () {
	r = sequence.length +1;
	round.innerHTML = "Round:" + r 
}


// generate a new random square choice
// pushes the new random choice into existing array
// returns a new array

//continue randomly selecting squares,add selection to sequence

//count the number of rounds the user has gone
//this is the array.length for the simonsequence