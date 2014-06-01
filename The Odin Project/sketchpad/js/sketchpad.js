var DEFAULT_BACKGROUND = "#000000";
var DEFAULT_COLOR = "#FFFFFF";
var DEFAULT_SIDE = 10;
var padWidth = $(".sketchpad").width();
var padHeight = $(".sketchpad").height();
var state = 1;
var numberOfSquares;
var currentColor;

$(document).ready(function() {
	setDefault();
	// $(".square").mouseenter(function() {
	// 	$(this).css("background-color", currentColor);
	// });
	$("#dimensions").click(function() {
		var newSide = prompt("How many squares per side? return is default.").parseInt();
		if ( isNaN(newSide)  || newSide < 1) {
			newSide = 10;
		}
		setDimensions(newSide);
	});
	$("#color").click(function() {
		clear();
		state = 1;
	});
	$("#trail").click(function() {
		clear();
		state = 2;
		console.log(state);
	})
	$("#random").click(function() {
		clear();
		state = 3;
		console.log(state);
	})
	$(".square").mouseenter(function() {
		if(state === 1) {
			$(this).css("background-color", currentColor);
		} else if(state === 2) {
			$(this).fadeTo(0,0);
		} else if(state === 3) {
			currentColor = randomColor();
			$(this).css("background-color", currentColor);
		}
	})
});

function setDefault() {
	// calculate the length of each side of the square and
	// the number of squares to add
	setDimensions(DEFAULT_SIDE);
	currentColor = DEFAULT_COLOR;
}

function clear() {
	$(".square").css("background-color", DEFAULT_BACKGROUND);
}

function setDimensions(side) {
	var squareSide = padWidth / side;
	numberOfSquares = (padWidth * padHeight) / (squareSide * squareSide);
	addSquares(squareSide, numberOfSquares);
	clear();
}

function addSquares(side, numberOfSquares) {
	$(".square").remove()
	for(var i = 0; i < numberOfSquares; i++) {
		$(".sketchpad").append("<div class=\"square\"></div>");
	}
	$(".square").height(side).width(side);
}

function randomColor() {
	var red = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random() * 256)
	var green = Math.floor(Math.random() * 256)
	return "#" + red.toHex() + blue.toHex() + green.toHex();
}