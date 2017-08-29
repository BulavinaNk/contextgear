document.addEventListener("DOMContentLoaded", function(event) { 
	console.log(document.getElementById("phone"));
	var cleave = new Cleave(document.getElementById("phone"), {
	    phone: true,
	    phoneRegionCode: 'RU'
	});

	function modalFunction(){
		var element = document.getElementById("modalf");
		var shadeElem = document.getElementById("shade");
	  	element.classList.add("visible");
	  	shadeElem.classList.add("visible");
	}
	  
	function disableModal(){
		var element = document.getElementById("modalf");
		var shadeElem = document.getElementById("shade");
	  	element.classList.remove("visible");
	  	shadeElem.classList.remove("visible");
	}
});