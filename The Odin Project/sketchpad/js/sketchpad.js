var defaultBoxes = 10;

var generatePadType = function(option){
	$('.sketchpad').html("");

	var boxesPerSide = parseInt(prompt("Choose a number between 1 and 128? " 
		+ "RETURN for default."));
	if(isNaN(boxesPerSide) || boxesPerSide < 1 || boxesPerSide > 128) {
		boxesPerSide = defaultBoxes;
	}
	console.log(boxesPerSide);
	// At this point boxesPerSide is guaranteed to be an integer
	var squareSide = $(".sketchpad").width() / boxesPerSide;
	// Insert square class and break into sketchpad and set dimensions
	for(var i = 0; i < boxesPerSide; i++) {
		for(var j = 0; j < boxesPerSide; j++) {
			$(".sketchpad").append('<div class="square"></div>');
		}
		$(".sketchpad").append('<div class="break"></div>');
	}
	$(".square").width(boxesPerSide).height(boxesPerSide);
}