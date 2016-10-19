var memory = 0;
var currentNumber = 0;
var lastNumber = 0;
var newNumber = true;

function sendButton(val) {

	newNumber = false;
	display = document.getElementById("display");
	if (display.value == "0"){
		display.value = val;
	} else {
		display.value += val;
	}
}

function sendOperator(val) {
	
	if (val == "+/-") {
		return changeSymbol();
	}
	if (val == "=") {
		return equal();
	}

	if (val == "*") {
		lastOperator = multiply(); 
	}
	if (val == "/") {
		lastOperator = divide();
	}
	if (val == "+") {
		lastOperator = sum();
	}
	if (val == "-") {
		lastOperator = subtract();
	}
	newNumber = false;
	lastNumber = parseInt(document.getElementById("display").value);
	lastOperator;
}

function sendCommand(val) {
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
	
	if (newNumber) {
		lastNumber = parseInt(display.value);
		newNumber = false;
	} else {
		currentNumber *= lastNumber;
	}

	display.value = currentNumber;
}

function divide() {
	console.log("Divide.");

	display = document.getElementById("display");
	
	if (newNumber) {
		lastNumber = parseInt(display.value);
		newNumber = false;
	} else {
		currentNumber /= lastNumber;
		newNumber = true;
	}

	display.value = currentNumber;
}

function sum() {
	console.log("Sum.");

	display = document.getElementById("display");
	
	if (newNumber) {
		lastNumber = parseInt(display.value);
		newNumber = false;
	} else {
		currentNumber += lastNumber;
	}

	display.value = currentNumber;
}

function subtract() {
	console.log("Subtract.");

	display = document.getElementById("display");
	
	if (newNumber) {
		lastNumber = parseInt(display.value);
		newNumber = false;
	} else {
		currentNumber -= lastNumber;
		newNumber = true;
	}

	display.value = currentNumber;
}

function equal(){
	if(lastOperator != "" && lastOperator != "+/-"){
		lastOperator;
	}
}

function changeSymbol() {
	display = document.getElementById("display");
	display.value = parseInt(display.value) * -1;
}

function memorySave() {
	memory.push()
}

function memoryRecall() {
	display = document.getElementById("display");
	display.value = memory;
}

function addMemory() {
	display = document.getElementById("display");
	memory += parseInt(display.value);
}

function cls() {
	display = document.getElementById("display");
	display.value = "0";
}

function memoryClear() {
	memory = 0;
}

function clearEverything() {
	display = document.getElementById("display");
	display.value = "0";
	currentNumber = 0;
	newNumber = true;
	memory = 0;
}
