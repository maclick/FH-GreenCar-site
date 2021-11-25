var numer=1;
var numer2;
wyswietl(numer)

function zmien(liczba){
	numer += liczba;
	wyswietl(numer);
}

function wyswietlKonkretny(liczba){
	numer = liczba;
	wyswietl(numer);
}

function wyswietl(liczba){
	var zdjecia = document.getElementsByClassName("duzeZdjecie2");
	var styl = document.getElementsByClassName("maleZdjecie");

	if(liczba > zdjecia.length){
		numer = 1;
	}
	if(liczba < 1){
		numer = zdjecia.length;
	}
	for(var pom = 0; pom < zdjecia.length; pom++){
		zdjecia[pom].style.display = "none";
	}
	for(var pom = 0; pom < styl.length; pom++){
		styl[pom].className = styl[pom].className.replace(" wybrany", "");
	}

	zdjecia[numer-1].style.display = "block";
	styl[numer-1].className += " wybrany";
	
}