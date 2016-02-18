//custom js code
$(document).ready(function(){

	var blocks = {
		eh_block:["#block-views-environmental-block-block",
		"#block-views-environmental-block-block-1",
		"#block-views-environmental-block-block-2",
		"#block-views-environmental-block-block-3",
		"#block-views-environmental-block-block-4",
		"#block-views-environmental-block-block-5",
		"#block-views-environmental-block-block-6"
		],
		hh_block:["#block-views-human-health-block-block",
		"#block-views-human-health-block-block-1",
		"#block-views-human-health-block-block-2",
		"#block-views-human-health-block-block-3",
		"#block-views-human-health-block-block-4",
		"#block-views-human-health-block-block-5"
		],
		ph_block:["#block-views-human-health-block-block",
		"#block-views-plant-health-block-block-1",
		"#block-views-plant-health-block-block-2",
		"#block-views-plant-health-block-block-3",
		"#block-views-plant-health-block-block-4",
		"#block-views-plant-health-block-block-5"
		],
		ah_block:["#block-views-human-health-block-block",
		"#block-views-44aa55dca045975da7896dc71c0382e8",
		"#block-views-2b151148690a02693efe039c326b79c1",
		"#block-views-4aa1ab5340547c488b1e33f254266a0b",
		"#block-views-68f7d7b8da7869a27a98e331bc1be93d",
		"#block-views-8dba4ab004b610cb50fb476de7a99451"
		]
	};

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
	$(".accordion-sidebar").accordion(
		{
		collapsible: true,
		header: "h3",
		activated: 3,
		animated: false
	});

	//get url

	var pathName = window.location.pathname;

	// Using the jQuery library
	$('.results').html(pathName);

	/*Health Block*/
	/*
			$("#block-views-human-health-block-block").accordion({
				collapsible: true,
				active: true,
				header: "h3",
				animated: true
			});
			$("#block-views-human-health-block-block-1").accordion({
				collapsible: true,
				active: true,
				header: "h3",
				animated: true
			});
			$("#block-views-human-health-block-block-2").accordion({
				collapsible: true,
				active: true,
				header: "h3",
				animated: true
			});
			$("#block-views-human-health-block-block-3").accordion({
				collapsible: true,
				active: true,
				header: "h3",
				animated: true
			});
			$("#block-views-human-health-block-block-4").accordion({
				collapsible: true,
				active: true,
				header: "h3",
				animated: true
			});
			$("#block-views-human-health-block-block-5").accordion({
				collapsible: true,
				active: true,
				header: "h3",
				animated: true
			});*/

});
