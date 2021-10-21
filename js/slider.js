let slider = document.getElementById('slider');
let sliderBg = document.getElementById('sliderBg');
let phoneView = window.matchMedia("(max-width: 540px)");
let tabletView = window.matchMedia("(max-width: 768px)");

function openNav(){
	sliderBg.style.width = "100vw";
	if(phoneView.matches){
		slider.style.width = "80vw";
		slider.style.padding = "5px 10px";
	}
	else if(tabletView.matches){
		slider.style.width = "40vw";
		slider.style.padding = "5px 20px";
	}
	else{
		slider.style.width = "20vw";
		slider.style.padding = "5px 20px";
	}
}
function closeNav(){
	sliderBg.style.width = "0vw";
	slider.style.width = "0px";
	slider.style.padding = "0px";
}