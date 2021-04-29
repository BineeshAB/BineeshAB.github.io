let five = window.matchMedia("(max-width: 540px)");

function openNav(){
	
	document.getElementById("bars").style.display = "none";
	document.getElementById("close").style.display = "block";
	document.getElementById("slideIcon").style.display = "none";
	document.getElementById("slider").style.width = "260px";

	if(five.matches){
		document.getElementById("home").style.marginLeft = "0px";
		document.getElementById("about").style.marginLeft = "0px";
		document.getElementById("profile").style.marginLeft = "0px";
		document.getElementById("education").style.marginLeft = "0px";
		document.getElementById("experience").style.marginLeft = "0px";
		document.getElementById("project").style.marginLeft = "0px";
		document.getElementById("footer").style.marginLeft = "0px";
		document.getElementById("gallery").style.marginLeft = "0px";
	}
	else{
		document.getElementById("home").style.marginLeft = "260px";
		document.getElementById("about").style.marginLeft = "260px";
		document.getElementById("profile").style.marginLeft = "260px";
		document.getElementById("education").style.marginLeft = "260px";
		document.getElementById("experience").style.marginLeft = "260px";
		document.getElementById("project").style.marginLeft = "260px";
		document.getElementById("footer").style.marginLeft = "260px";
		document.getElementById("gallery").style.marginLeft = "260px";
	}

	
}
function closeNav(){

	document.getElementById("bars").style.display = "block";
	document.getElementById("close").style.display = "none";
	document.getElementById("slider").style.width = "0px";
	
	if(five.matches){
		document.getElementById("slideIcon").style.display = "none";

		document.getElementById("home").style.marginLeft = "0px";
		document.getElementById("about").style.marginLeft = "0px";
		document.getElementById("profile").style.marginLeft = "0px";
		document.getElementById("education").style.marginLeft = "0px";
		document.getElementById("experience").style.marginLeft = "0px";
		document.getElementById("project").style.marginLeft = "0px";
		document.getElementById("footer").style.marginLeft = "0px";
		document.getElementById("gallery").style.marginLeft = "0px";
	}
	else{
		document.getElementById("slideIcon").style.display = "block";

		document.getElementById("home").style.marginLeft = "85px";
		document.getElementById("about").style.marginLeft = "85px";
		document.getElementById("profile").style.marginLeft = "85px";
		document.getElementById("education").style.marginLeft = "85px";
		document.getElementById("experience").style.marginLeft = "85px";
		document.getElementById("project").style.marginLeft = "85px";
		document.getElementById("footer").style.marginLeft = "85px";
		document.getElementById("gallery").style.marginLeft = "85px";
	}

}