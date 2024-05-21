var num=document.getElementById("number").value;

function findBinary(num) {
    if (num === 0) {
        return '';
    } 
    else {
        var remainder = num % 2;
        return findBinary(Math.floor(num / 2)) + remainder.toString();
    }
}


function convertToBinary() {
    var inputNumber = document.getElementById("number").value;
    if (isNaN(inputNumber) || inputNumber === '') {
        document.getElementById("explanation").innerHTML = "Please enter a valid number.";
        return;
    }

    var binaryResult = findBinary(parseInt(inputNumber));
    var binaryExplanation = "";

    binaryExplanation += "<b> Step 1: </b> Divide " + inputNumber + " by 2 and note down the Quotient (Q) and Remainder (R). Repeat until you get 0 as the quotient. <br><br>";
    var numberBin = parseInt(inputNumber); 
    while (numberBin > 0) {
        var quotient = Math.floor(numberBin / 2);
        var remainder = numberBin % 2;
        binaryExplanation += numberBin + " / 2 gives Q= " + quotient + " and R= " + remainder + "<br><br>";
        numberBin = quotient; 
    }

    binaryExplanation += "<b> Step 2: </b> Write down the remainders from <b>last to first</b> to get the binary conversion. <br><br>";
    binaryExplanation += " Therefore, the Binary representation is " + binaryResult + "<br>";
    document.getElementById("explanation").innerHTML = binaryExplanation;
}


function findOctal(num) {
    if (num === 0) {
        return '';
    } 
    else {
        var remainder = num % 8;
        return findOctal(Math.floor(num / 8)) + remainder.toString();
    }
}


function convertToOctal() {
    var inputNumber = document.getElementById("number").value;
    if (isNaN(inputNumber) || inputNumber === '') {
        document.getElementById("explanation").innerHTML = "Please enter a valid number.";
        return;
    }

    var octalResult = findOctal(parseInt(inputNumber));
    var octalExplanation = "";

    octalExplanation += "<b> Step 1: </b> Divide " + inputNumber + " by 8 and note down the Quotient (Q) and Remainder (R). Repeat until you get 0 as the quotient. <br><br>";
    var numberOct = parseInt(inputNumber); 
    while (numberOct > 0) {
        var quotientOct = Math.floor(numberOct / 8);
        var remainderOct = numberOct % 8;
        octalExplanation += numberOct + " / 8 gives Q= " + quotientOct + " and R= " + remainderOct + "<br><br>";
        numberOct = quotientOct; 
    }

    octalExplanation += "<b> Step 2: </b> Write down the remainders from <b>last to first</b> to get the octal conversion. <br><br>";
    octalExplanation += " Therefore, the Octal representation is " + octalResult + "<br>";
    document.getElementById("explanation").innerHTML = octalExplanation;
}


function findHexadecimal(num) {
    var hexString='';
    while (num > 0) {
        var remainder = num % 16;
        var hexDigit;
        switch (remainder) {
            case 10: hexDigit = 'A'; break;
            case 11: hexDigit = 'B'; break;
            case 12: hexDigit = 'C'; break;
            case 13: hexDigit = 'D'; break;
            case 14: hexDigit = 'E'; break;
            case 15: hexDigit = 'F'; break;
            default: hexDigit = remainder.toString();  
       }

       hexString = hexDigit + hexString;
       num = Math.floor(num / 16);
                
    }      
    return hexString;
}


function convertToHexadecimal() {
    var inputNumber = parseInt(document.getElementById("number").value);

    if (isNaN(inputNumber)) {
        document.getElementById("explanation").innerHTML = "Please enter a valid number.";
        return; 
    }

    var hexadecimalResult = findHexadecimal(inputNumber);
    var hexadecimalExplanation = "";

    hexadecimalExplanation += "<b> Step 1: </b> Divide " + inputNumber + " by 16 and note down the Quotient (Q) and Remainder (R). Repeat until you get 0 as the quotient. <br><br>";
    
    while (inputNumber > 0) {
        var quotient= Math.floor(inputNumber/16);
        var remainder = inputNumber % 16;
        hexadecimalExplanation += inputNumber + " / 16  gives Q= " + quotient + " and R= " + remainder + "<br><br>";
        inputNumber = Math.floor(inputNumber / 16);
   }

   hexadecimalExplanation+="<b> Step 2: </b> Write down the remainders from <b>last to first</b> to get the hexadecimal conversion. If the remainder is greater than 9, it will produce a hex value as per the corresponding number. <br><br>"
   hexadecimalExplanation += "<b> Hex Values: </b> <br> 10: A <br> 11: B <br> 12: C <br> 13: D <br> 14: E <br> 15: F <br> <br>";
   hexadecimalExplanation += " Therefore, the Hexadecimal representation is " + hexadecimalResult + "<br>";
   document.getElementById("explanation").innerHTML = hexadecimalExplanation;
}