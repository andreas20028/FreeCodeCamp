function goback(){
	document.getElementById("navbar").style.backgroundColor="#d8d8b3";
}

function flash(){
	document.getElementById("navbar").style.backgroundColor="red";
	setTimeout(goback,500);
}

