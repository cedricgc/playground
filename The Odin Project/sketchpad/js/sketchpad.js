
var boxSize = $(".sketchpad").width();
var defaultSquares = 25;

$(document).ready(function() {
	// initialize board
    $(':input#borders').prop('checked', false);
    newSize();

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

    $("#random").click(function() {
        randomOption();
    });

    $("#trail").click(function() {
        trailOption();
    });

    $("#default").click(function() {
		defaultOption();
	});
});

function newSize() {
	$(".sketchpad").html("");
	var numSquares = parseFloat(prompt("How many boxes (1-128) do you want on each side? " + 
		"RETURN for default sides."));
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
		$(this).css("background-color", "white");
	});
}

function randomOption() {
	clearBoard();
	$(".square").mouseover(function() {
		$(this).css("background-color", getRandomColor());
	});
}

// generates hex values to use in changing the color
function getRandomColor() {
	return (Math.random().toString(16) + '000000').slice(2, 8);
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

