$(document).scroll(function(){
	"use strict";
	handleTopNavAnimation();
});

$(document).load(function(){
	"use strict";
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	"use strict";
	var top=$(document).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}