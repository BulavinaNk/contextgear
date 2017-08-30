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

document.addEventListener("DOMContentLoaded", function(event) { 
	for(let i=1; i<4; i++){
		let id = "phone" + i;
		let cleave1 = new Cleave(document.getElementById(id), {
		    phone: true,
		    phoneRegionCode: 'RU'
		});
	}	
});
