/*
JavaScript for Last modified
Author: Lukas Elner
E-mail: lukas@elner.cz
Web: lukas.elner.cz
Version: CUSTOM
Revision: 0.31
*/
var lMod = new Date(document.lastModified);
function addZero(i) {
	if (i < 10) {
		return "0" + i;
	}
	return i;
}
function getMonthName(month) {
	var monthNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
	return monthNames[month - 1] || ''; // Pokud zadané číslo měsíce není platné, vrátí prázdný řetězec
}
var yrLMod = lMod.getFullYear();
var dayLMod = addZero(lMod.getDate());
var moLMod = addZero(lMod.getMonth() + 1);
var hrLMod = addZero(lMod.getHours());
var miLMod = addZero(lMod.getMinutes());
var todaysDate = dayLMod + ". " + moLMod + ". " + yrLMod + ", " + hrLMod + ":" + miLMod;
document.getElementById("txtLMod").innerHTML = todaysDate;
