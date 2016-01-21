'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	onclick();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("#testjs").click(function(e) {
		$("#project1").fadeOut();
		$("#project2").fadeOut();
		$("#project3").fadeOut();
		$("#project4").fadeOut();
		$("#project5").fadeOut();
		$("#project6").fadeOut();
		$("#project7").fadeOut();
		$("#project8").fadeOut();
	});
	
}
function onclick() {
	$("#reTestjs").click(function(e) {
			$("#project1").fadeIn();
			$("#project2").fadeIn();
			$("#project3").fadeIn();
			$("#project4").fadeIn();
			$("#project5").fadeIn();
			$("#project6").fadeIn();
			$("#project7").fadeIn();
			$("#project8").fadeIn();
		});
}