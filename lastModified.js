/*
JavaScript for Last modified
Author: Lukas Elner
E-mail: lukas@elner.cz
Web: lukas.elner.cz
Version: CZECH/translated
Revision: 0.2
*/
var lMod = new Date(document.lastModified);
var yrLMod = lMod.getFullYear();
var dayLMod = ((lMod.getDate()<10) ? "" : "") + lMod.getDate();
var mName = lMod.getMonth() + 1;
if(mName == 1) {
	moLMod = "1";
}
if(mName == 2) {
	moLMod = "2";
}
if(mName == 3) {
	moLMod = "3";
}
if(mName == 4) {
	moLMod = "4";
}
if(mName == 5) {
	moLMod = "5";
}
if(mName == 6) {
	moLMod = "6";
}
if(mName == 7) {
	moLMod = "7";
}
if(mName == 8) {
	moLMod = "8";
}
if(mName == 9) {
	moLMod = "9";
}
if(mName == 10) {
	moLMod = "10";
}
if(mName == 11) {
	moLMod = "11";
}
if(mName == 12) {
	moLMod = "12";
}
function addZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
var hrLMod = lMod.getHours();
var miLMod = addZero(lMod.getMinutes());
var todaysDate = (dayLMod + ". " + moLMod + ". " + yrLMod + ", " + hrLMod + ":" + miLMod);
document.getElementById("txtLMod").innerHTML = todaysDate;
