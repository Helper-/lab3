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
		$('.project a').fadeOut();
	});
	
	$("#project1").click(function(e) {
		$("#project1").fadeToggle();
	})
	
}
function onclick() {
	$("#reTestjs").click(function(e) {
			$('.project a').fadeIn();
		});
		

}