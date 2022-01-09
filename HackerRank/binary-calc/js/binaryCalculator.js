const res = document.querySelector("#res");
let operand1 = "";
let operand2 = "";
let operator = "";

const renderResult = () => {
	res.innerHTML = operand1 + operator + operand2;
};

const add = value => {
	if (operator) operand2 += value;
	else operand1 += value;
	renderResult();
};

const clearResult = () => {
	operand1 = "";
	operator = "";
	operand2 = "";
	renderResult();
};

const assignOperator = value => {
	operator = value;
	renderResult();
};

const equal = () => {
	operand1 = parseInt(operand1, 2);
	operand2 = parseInt(operand2, 2);
	switch (operator) {
		case "+":
			operand1 += operand2;
			break;
		case "-":
			operand1 -= operand2;
			break;
		case "*":
			operand1 *= operand2;
			break;
		case "/":
			if (operand2) operand1 /= operand2;
			break;
		default:
			break;
	}
	operand1 = parseInt(operand1).toString(2);
	operator = "";
	operand2 = "";
	renderResult();
};
