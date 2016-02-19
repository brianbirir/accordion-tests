//custom js code
$(document).ready(function(){


var blocks_accordion = ["#accordion-one","#accordion-two","#accordion-three"];
/*
	var block;

	for (block in blocks) {

	  block_prop = blocks[block];

	  for (i = 0; i < block_prop.length; i++) {
	    //text += cars[i] + "<br>";
	    //console.log(block_prop[i]);
	    $(block_prop[i]).accordion({
	      collapsible: true,
				header: "h3",
				activated: true,
				animated: true
	    });
	  }
	}*/

	//------OPEN PANEL-----
	/*
	This Function opens an accordion panel based on the URL
	*/

	//get path name from URL
	var pathName = window.location.pathname;

	// initiate variable to store active panel value
	var active_panel;

	// Using the jQuery library
	$('.results').html(pathName);

	switch(pathName) {
		case "/~brianbirir/accordion-tests/index.html":
			active_panel = 0;
			break;
		case "/~brianbirir/accordion-tests/about.html":
			active_panel = 1;
			break;
		case "/~brianbirir/accordion-tests/contact.html":
			active_panel = 2;
			break;
	}

	$(".accordion-sidebar").accordion(
		{
		collapsible: true,
		header: "h3",
		active: active_panel,
		animated: false
	});

	//------END OF FUNCTION----

});
