'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
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
	
	$("#reTestjs").click(function(e) {
		$('.project a').fadeIn();
	});
	
	$("a.thumbnail").click(projectClick);
	
}

function projectClick(e) {
	console.log("Project clicked");
    // prevent the page from reloading
    e.preventDefault();
    // In an event handler, $(this) refers to
    // the object that triggered the event
    $(this).css("background-color", "#7fff00");
    
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    
    var containingProject = $(this).closest(".project");
    containingProject.append("<div class='project-description'> <p>Description of the project.</p></div>");
}
    
}