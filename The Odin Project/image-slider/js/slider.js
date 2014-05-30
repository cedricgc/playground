var sliderInt = 1;
var sliderNext = 2;

// This is the functions that can run once the page is loaded
// .ready is the event listener
$(document).ready(function() {
	$("#slider > img#1").fadeIn(300);
	startSlider();
});


function startSlider() {
	count = $("#slider > img").size();
	loop = setInterval(function() {
		if(sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
		}
		$("#slider > img").fadeOut(300);
		$("#slider > img#" + sliderNext).fadeIn(300);
		sliderInt = sliderNext;
		sliderNext++;
	}, 3000);
}

function prev() {
	newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next() {
	newSlide = sliderInt + 1;
	showSlide(newSlide);
}

function stopLoop() {
	window.clearInterval(loop);
}

function showSlide(id) {
	stopLoop(); /*Resets the interval timing*/
	if(id > count) {
		id = 1;
	} else if(id < 1) {
		id = count;
	}
	$("#slider > img").fadeOut(300);
	$("#slider > img#" + id).fadeIn(300);
	sliderInt = id;
	sliderNext = id + 1;
	startSlider();
}