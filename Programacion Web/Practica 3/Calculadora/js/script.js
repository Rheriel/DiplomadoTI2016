var memory = 0;
var currentNumber = 0;
var lastNumber = 0;
var newNumber = false;

function sendButton(val) {

	display = document.getElementById("display");
	
	if (!newNumber || display.value == "0" || display.value == "") {
		display.value = val;
	} else {
		display.value += val;
	}

	newNumber = true;

}

function sendOperator(val) {
	
	if (val == "+/-") {
		return changeSymbol();
	}
	if (val == "=") {
		return equal(lastOperator);
	}

	if (newNumber) {
		lastNumber = parseInt(document.getElementById("display").value);
	}

	// If lastOperator is not undefined it means there is an operation queued,
	// we need to return the result of that operation before we can do the new one.
	if (typeof lastOperator != "undefined"){
		equal(lastOperator);
	}

	if (val == "*") {
		lastOperator = multiply; 
	}
	if (val == "/") {
		lastOperator = divide;
	}
	if (val == "+") {
		lastOperator = sum;
	}
	if (val == "-") {
		lastOperator = subtract;
	}
	
	lastOperator();
}

function sendCommand(val) {
	
	newNumber = false;
	lastOperator = window.undefined;

	if (val == "MS") {
		return memorySave();
	}
	if (val == "MR") {
		return memoryRecall();
	}
	if (val == "M+") {
		return addMemory();
	}
	if (val == "C") {
		return cls();
	}
	if (val == "MC") {
		return memoryClear();
	}
	if (val == "CE") {
		return clearEverything();
	}
}

function multiply() {
	console.log("Multiply.");

	display = document.getElementById("display");
	
	if (newNumber){
		currentNumber *= lastNumber;
	} else {
		console.log("Nothing to do...");
	}

	newNumber = false;
	display.value = currentNumber;
}

function divide() {
	console.log("Divide.");

	display = document.getElementById("display");
	
	if (newNumber){
		currentNumber /= lastNumber;
	} else {
		console.log("Nothing to do...");
	}

	newNumber = false;
	display.value = currentNumber;
}

function sum() {
	console.log("Sum.");

	display = document.getElementById("display");
	
	if (newNumber){
		currentNumber += lastNumber;
	} else {
		console.log("Nothing to do...");
	}

	newNumber = false;
	display.value = currentNumber;
}

function subtract() {
	console.log("Subtract.");

	display = document.getElementById("display");
	
	if (newNumber){
		currentNumber -= lastNumber;
	} else {
		console.log("Nothing to do...");
	}

	newNumber = false;
	display.value = currentNumber;
}

function equal(lastOperator){
	if (newNumber) {
		lastNumber = parseInt(document.getElementById("display").value);
	}

	if(lastOperator != "" && lastOperator != "+/-"){
		newNumber = true;
		lastOperator();
	}
}

function changeSymbol() {
	display = document.getElementById("display");
	display.value = parseInt(display.value) * -1;
}

function memorySave() {
	display = document.getElementById("display");
	memory = parseInt(display.value);
}

function memoryRecall() {
	display = document.getElementById("display");

	currentNumber = memory;

	display.value = currentNumber;
}

function addMemory() {
	display = document.getElementById("display");

	currentNumber += memory;

	display.value = currentNumber;
}

function cls() {
	display = document.getElementById("display");
	newNumber = false;
	display.value = "0";
}

function memoryClear() {
	memory = 0;
}

function clearEverything() {
	display = document.getElementById("display");
	display.value = "0";
	currentNumber = 0;
	lastNumber = 0;
	newNumber = false;
	lastOperator = window.undefined;
	memory = 0;
}
