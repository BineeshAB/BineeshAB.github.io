var d = new Date();
var y = d.getFullYear();
var m = d.getMonth() + 1;
var day = d.getDate();

var mdob = y - 1999;
if(m == 5){
	if(day < 22){
		document.getElementById("mdob").innerHTML = mdob - 1;
	} else if(day >= 22){
		document.getElementById("mdob").innerHTML = mdob;
	}			
} else if(m < 5){
	document.getElementById("mdob").innerHTML = mdob - 1;
} else if(m > 5 ){
	document.getElementById("mdob").innerHTML = mdob;
}
document.getElementById("year").innerHTML = y;