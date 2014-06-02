
var boxSize = $(".sketchpad").width();
var defaultSquares = 25;
var defaultColor = "white";
var CurrentColor;

$(document).ready(function() {
	// initialize board
    $(':input#borders').prop('checked', false);
    createSketchPad(defaultSquares);

    // listeners for all buttons
	$('input#borders').change( function() {
	    if($(this).is(':checked')) {
	    	$('.square').css('outline', '1px solid white');
	    } 
	    else {
	        $('.square').css('outline', "none");
	    }
	});

	$("#newSize").click(function() {
		newSize();
	});

	$("#default").click(function() {
		defaultOption();
	});

	$("#colorChoice").click(function() {
		colorOption();
	});

    $("#random").click(function() {
        randomOption();
    });

    $("#trail").click(function() {
        trailOption();
    });
});

function newSize() {
	$(".sketchpad").html("");
	var numSquares = parseFloat(prompt("How many boxes (1-128) do you want on each side? " + 
		"RETURN for default sides."));
	// Check for valid input
	if(isNaN(numSquares) ||  (numSquares < 1 || numSquares > 128)) {
		numSquares = defaultSquares;
	}
	createSketchPad(numSquares);
}

function createSketchPad(userBoxes) {
	var squareSize = boxSize / userBoxes;
	for(var i = 0; i < (userBoxes * userBoxes); i++) {
		$('.sketchpad').append('<div class="square"></div>');
	}
	$(".square").width(squareSize);
	$(".square").height(squareSize);
	// reset the option to default
	defaultOption();
}

function clearBoard() {
	$(".square").unbind(); // unbind to remove other event listeners on squares
	// reset all elements to black and opaque
	$(".square").css("background-color", "black");
	$(".square").css("opacity", 1);
}

function defaultOption() {
	clearBoard();
	$(".square").mouseover(function() {
		$(this).css("background-color", defaultColor);
	});
}

// generates hex values to use in changing the color
function getRandomColor() {
	return (Math.random().toString(16) + '000000').slice(2, 8);
}

function colorOption() {
	var userColor = prompt("Input a hex value to change the color to, " + 
		"RETURN for random color.", "#");
	// http://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
	// dat regex tho
	var isHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(userColor);
	if(!isHexColor) {
		userColor = getRandomColor();
	}
	$(".square").mouseover(function() {
		$(this).css("background-color", userColor);
	});
}

function randomOption() {
	clearBoard();
	$(".square").mouseover(function() {
		$(this).css("background-color", getRandomColor());
	});
}

function trailOption() {
	clearBoard();
	$(".square").mouseenter(function() {
		$(this).fadeTo(0, 0);
	});
	$(".square").mouseleave(function() {
		$(this).fadeTo(600, 1);
	});
}

