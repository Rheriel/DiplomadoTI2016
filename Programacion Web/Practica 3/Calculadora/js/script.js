function sendButton(val) {
	display = document.getElementById("display");
	display.value += val;
}

function sendOperator(val) {
	if (val == "*") {
		return multiply();
	}
	if (val == "/") {
		return divide();
	}
	if (val == "+") {
		return sum();
	}
	if (val == "-") {
		return subtract();
	}
	if (val == "+/-") {
		return changeSymbol();
	}
	if (val == "=") {
		return equal();
	}
}

function sendCommand(val) {
	if (val == "MS") {
		return memorySave();
	}
	if (val == "MR") {
		return memoryReset();
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

}

function divide() {
	
}

function sum() {
	
}

function subtract() {
	
}

function changeSymbol() {
	
}

function memorySave() {
	
}

function memoryReset() {
	
}

function addMemory() {
	
}

function cls() {
	
}

function memoryClear() {
	
}

function clearEverything() {
	
}
