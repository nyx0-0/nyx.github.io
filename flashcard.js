var ctr = 0;
var qty = 0;
var cardCtr = 0;
var history = [];


function play() {
    var timeInput = document.getElementById("timerInput").value;
    var numQues = document.getElementById("qtyQues").value;


    if (timeInput === "" || numQues === "") {
        alert("Please enter a timer value and the number of questions");
    } 
    else {
        qty = parseInt(numQues, 10);
        generateAndStart();
    }
}


function generateAndStart() {
    if (cardCtr < qty) {
        generate();
        startTimer();
        cardCtr++;
    }
    else {
        displayHistory(); 
    }
}

function generate(){
    var randBase = Math.floor(Math.random() * 3);
    var base = document.getElementById("base");
    var num = document.getElementById("num");
    var genNum;

    if (randBase === 0){
        base.innerHTML = "BINARY";
        genNum = Math.floor(Math.random() * 101);
        num.innerHTML = genNum;
        history[ctr] = "Binary of " + genNum + ": " +genNum.toString(2); // temporary, long method to be inserted
        ctr++;
    }
    else if (randBase === 1) {
        base.innerHTML = "OCTAL";
        genNum = Math.floor(Math.random() * 101);
        num.innerHTML = genNum;
        history[ctr] = "Octal of " + genNum + ": " +genNum.toString(8);
        ctr++;
    }
    else if (randBase === 2) {
        base.innerHTML = "HEXADECIMAL";
        genNum = Math.floor(Math.random() * 101);
        num.innerHTML = genNum;
        history[ctr] = "Hexadecimal of " + genNum + ": " +genNum.toString(16).toUpperCase();
        ctr++;
    }
}

var timerInterval;
var secondsInput, timerDisplay;
function startTimer() {
    clearInterval(timerInterval);
    secondsInput = document.getElementById("timerInput");
    timerDisplay = document.getElementById("timerDisp");

    var seconds = parseInt(secondsInput.value);
    if (isNaN(seconds) || seconds <= 0) {
        alert("Enter a valid positive number of seconds.");
        return;
    }

    timerInterval = setInterval(function() {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;
        var displayMinutes = String(minutes).padStart(2, '0');
        var displaySeconds = String(remainingSeconds).padStart(2, '0');

        timerDisplay.textContent = displayMinutes + ':' + displaySeconds;

        if (seconds <= 0) {
            clearInterval(timerInterval);
            generateAndStart(); 
        }

        seconds--;
    }, 1000);
}

function displayHistory(){
    var testElement = document.getElementById("test");
    //testElement.innerHTML = ""; 
    for (var i = 0; i < ctr; i++){
        testElement.innerHTML += history[i] + "<br>";
    }
    //document.getElementById("result").style.display = "block";
}

function reset() {
    document.getElementById('next').style.display = 'block';
    clearInterval(timerInterval); 
    var timerDisplay = document.getElementById("timerDisp");
    timerDisplay.innerHTML = "00:00"; 

    var testElement = document.getElementById("test");
    testElement.innerHTML = "FINAL ANSWERS<br>"; 

    ctr = 0;
    cardCtr = 0;
    history = [];
    document.getElementById("timerInput").value = "";
    document.getElementById("qtyQues").value = "";
    document.getElementById("base").innerHTML = "*Base Representation*";
    var num = document.getElementById("num").innerHTML = "*Number*";
}  

function nextCard() {
    var timeInput = document.getElementById("timerInput").value;
    var numQues = document.getElementById("qtyQues").value;
    var numQuesInt = parseInt(numQues, 10);

    if (timeInput === "" || numQues === "") {
        alert("Please enter a timer value and the number of questions");
    } 
    else {
        if (cardCtr < numQuesInt) {
            generate();
            startTimer();
            cardCtr++; 
	} 
        else {
            clearInterval(timerInterval);
            document.getElementById('next').style.display = 'none';
            displayHistory();  
        }
    }
}

