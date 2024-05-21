var nums = [], disp = "", Oper = "", Bin = "", Oct = "", Hex = "";

    function btnDisp(num) {
        disp += num;
        document.getElementById('display').innerHTML += num;
    }

    function MathOperation(oper) {
    	if (disp !== "") {
   		 nums[nums.length] = parseFloat(disp);
	}

    	if (!"+-*/%²".includes(disp.slice(-1))) { 
        	document.getElementById('display').innerHTML += oper;
    	}
    	Oper = oper;
    	disp = "";
     }
 
   function Compute() {
    	const display = document.getElementById('display');
    	const expression = display.innerText;
    
    	if (disp !== "") {
    		nums[nums.length] = parseFloat(disp);
    		disp = "";
	}

    	let result = nums[0];

    	if (Oper == "²") {
        	result = Math.pow(result, 2);
    	} else {
        	result = eval(expression);
    	}

    	display.innerText = result;
    	displayAnswer(result);
   }

    function displayAnswer(result) {
        Bin = ""; Oct = ""; Hex = "";
        convertBinary(result);
        convertOctal(result);
        convertHex(result);
        document.getElementById('baseRes').innerHTML ="<br>Binary: " + Bin + "<br>Octal: " + Oct + "<br>Hexadecimal: " + Hex;
    }

    function Clear() {
        nums = [];
        disp = "";
        document.getElementById('display').innerHTML = disp;
        document.getElementById('baseRes').innerHTML = "";
    }

  function ClearEntry() {
    let display = document.getElementById("display");
    let currentValue = display.innerText;

    if (currentValue === "") {
        return; 
    }

    let lastCharacter = currentValue[currentValue.length - 1];
    let isOperator = ("+-*/%²").indexOf(lastCharacter) !== -1;

    if (isOperator) {
        display.innerText = currentValue.slice(0, -1);
    } else {
        let index = currentValue.length - 1;
        while (index >= 0) {
            if ("+-*/%²".indexOf(currentValue[index]) === -1) {
                index--;
            } else {
                break;
            }
        }
        display.innerText = currentValue.slice(0, index + 1);
    }
}


    function convertBinary(result) {
        if (result > 0) {
            Bin = (result % 2) + Bin;
            result = Math.floor(result / 2);
            convertBinary(result);
        }
    }

    function convertOctal(result) {
        if (result > 0) {
            Oct = (result % 8) + Oct;
            result = Math.floor(result / 8);
            convertOctal(result);
        }
    }

    function convertHex(result) {
        if (result > 0) {
            var remainder = result % 16;
            switch (remainder) {
                case 10: Hex = "A" + Hex; break;
                case 11: Hex = "B" + Hex; break;
                case 12: Hex = "C" + Hex; break;
                case 13: Hex = "D" + Hex; break;
                case 14: Hex = "E" + Hex; break;
                case 15: Hex = "F" + Hex; break;
                default: Hex = remainder + Hex;
            }
            convertHex(Math.floor(result / 16));
        }
    }
