function menu(x){
	x.classList.toggle("zmiana");
	if( document.body.style.backgroundColor === "black"){
		document.body.style.backgroundColor = "white";
	}
	else{
		document.body.style.backgroundColor = "black"
	}
}

function pokaz(x){
	if (x.style.display === "none") {
		x.style.display = "block";
	}else {
		x.style.display = "none";
	}
}