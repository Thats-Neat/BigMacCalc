// learn how to layout pages
// mess with width % to make it not go over
// add like "thats alot of diebeties" after clicking random chance
// add how much weight you would gain or if you would diebeties
// add secret pages
// make it deeper then just a one page joke site
// clean it all up
// fix it for bigger numbers
// add more quotes
// change widths of boxes
// add mini games

var text;
var macValue;
var round;


// Big Mac $3.99
var styleLink = document.getElementById("pagestyle");
if (window.innerWidth < 900){
	styleLink.setAttribute("href", "mobile.css")
}
	
//window.onresize = function(){ location.reload(); }



function buttonPress(){
	
	textAmount = document.getElementById("textField").value;
	macAmount = textAmount / 3.99;
	macAmount = Math.floor(macAmount); // test this for feedback
	
	macAmountPlace = macAmount.toLocaleString();
	document.getElementById("macNum").innerHTML = macAmountPlace;
	console.log("Amount: " + macAmountPlace);
	
	textWeight = macAmount * 8.5
	textWeight = textWeight / 16
	textWeightFinal = textWeight.toLocaleString()
	textWeightFinal = textWeightFinal + " lb"
	document.getElementById("macWeight").innerHTML = textWeightFinal
	console.log("Weight: " + textWeightFinal)
	
	macCal = macAmount * 540
	macCalFinal = macCal.toLocaleString()
	document.getElementById("macCal").innerHTML = macCalFinal
	console.log("Calories: " + macCalFinal)
	
	rand = Math.floor(Math.random() * 5) + 1;
	if (rand == 1){
		quote = "'Slow down on the food!'"
	}
	
	if (rand == 2){
		quote = "'Thats alot of food!'"
	}
	
	if (rand == 2){
		quote = "'Dont eat it all in one day'"
	}
	
	if (rand == 3){
		quote = "'You only live once'"
	}
	
	if (rand == 4){
		quote = "'ill just eat a little bit'"
	}
	
	if (rand == 5){
		quote = "'Looks Tasty'"
	}
	
	if (textAmount == 69){
		quote = "'You're Funny'"
	}
	
	if (textAmount == 420){
		quote = "'Smoke and eat responsibly'"
	}
	
	document.getElementById("quotes").innerHTML = quote
}

function clearNum(){
	document.getElementById("textField").value = null;
	document.getElementById("macNum").innerHTML = 0;
	document.getElementById("macWeight").innerHTML = 0 + " lb";
	document.getElementById("macCal").innerHTML = 0;
	document.getElementById("quotes").innerHTML = "'Enter a value to get started'";
	console.log("Numbers Cleared")
}



function formatValue(){
	//var number = Number(document.getElementById("textField").value);
	//document.getElementById("textField").value = number.toLocaleString();
}




