var defaultSquares = 25;
var boxSize = $(".sketchpad").width();

$(document).ready(function() {
	createSketchPad(defaultSquares);
	draw();
	clear();
	trail();
	random();
});

function createSketchPad(userBoxes) {
	var squareSize = boxSize / userBoxes;
	for(var i = 0; i < (userBoxes * userBoxes); i++) {
		$('.sketchpad').append('<div class="square"></div>');
	}
	$(".square").width(squareSize);
	$(".square").height(squareSize);
}

function draw() {
	$(".square").mouseover(function() {
		$(this).css("background-color", "blue");
	});
}

// wrapper for the button option
function clear() {
	$("#clear").click(function() {
		clearBoard();
		draw();
	});
}

function clearBoard() {
	$(".square").unbind(); // unbind to remove other event listeners on squares
	$(".square").css("background-color", "black");
	$(".square").css("opacity", 1);
}

// function outline() {
// 	$("#borders").change(function() {
// 		$(".square").addClass(".outline");
// 	}));
// }

function newSize() {
	$("#newSize").click(function() {
		$(".sketchpad").html("");
		var numSquares = prompt("How many boxes (1-128) do you want on each side? " + 
			"Return for default sides.");
		if(isNaN(numSquares) || numSquares < 1 || numSquares > 128) {
			numSquares = defaultSquares;
		}
		createSketchPad(numSquares);
	});
}

function random() {
	$("#random").click(function() {
		clearBoard();
		$(".square").mouseover(function() {
			$(this).css("background-color", getRandomColor());
		});
	});
}

function getRandomColor() {
	return (Math.random().toString(16) + '000000').slice(2, 8);
}

function trail() {
	$("#trail").click(function() {
		clearBoard();
		$(".square").mouseenter(function() {
			$(this).fadeTo(0, 0);
		});
		$(".square").mouseleave(function() {
			$(this).fadeTo(1000, 1);
		});
	});
}
