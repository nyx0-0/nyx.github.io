
var quesQty, genNum, ans;
var ctr = 0;
var history = [];

function test() {
    var qtyInput = document.getElementById("quesNum").value;
    if (qtyInput === "" || isNaN(qtyInput)) {
        alert("Enter the number of questions first.");
        return;
    } else {
        document.getElementById("submitBtn").style.display = "inline";
        document.getElementById("skipBtn").style.display = "inline";
        quesQty = parseInt(qtyInput); 
        console.log("quesQty: " + quesQty);
        var randBase = Math.floor(Math.random() * 3);
        var num = document.getElementById("genNumber");
        var base = document.getElementById("baseRep");
        if (randBase === 0) {
            base.innerHTML = "BINARY";
            genNum = Math.floor(Math.random() * 101);
            num.innerHTML = genNum;
            history[ctr] = genNum.toString(2);
        } else if (randBase === 1) {
            base.innerHTML = "OCTAL";
            genNum = Math.floor(Math.random() * 101);
            num.innerHTML = genNum;
            history[ctr] = genNum.toString(8);
        } else if (randBase === 2) {
            base.innerHTML = "HEXADECIMAL";
            genNum = Math.floor(Math.random() * 101);
            num.innerHTML = genNum;
            history[ctr] = genNum.toString(16).toUpperCase();
        }
        console.log("answer: " + history[ctr]);
        ctr++; //increment after question generation
        console.log("ctr: " + ctr);
    }
}
var score = document.getElementById("score");
var scoreCtr=0;
var dispCor = "<img src='cor.PNG'>";
var dispInc = "<img src='inc.PNG'>";
function submit() {
    ans = document.getElementById("quizAns").value;
    if ((ans == "") || (ans == isNaN))
        {
            alert("Enter your answer.");
            return;
        }
    else { 
    
    console.log("user: " + ans);
    if (ans == history[ctr-1])
        {
            //scoreCtr++;
            document.getElementById("dispPig").innerHTML = dispCor;
            score.innerHTML = "SCORE: " + (++scoreCtr) + "/" +quesQty;
            //document.getElementById("score").innerHTML
        }
    else 
    {
        document.getElementById("dispPig").innerHTML = dispInc;
        score.innerHTML = "SCORE: " + scoreCtr + "/" + quesQty;
    }
    if (ctr == quesQty)
        {
            alert("You scored " + scoreCtr + " out of " + quesQty);
            reset();
            return;
        }
    
    test();
    document.getElementById("quizAns").value = "";
}
console.log("ctr: " + ctr);
}

function skip() {
    console.log("ctr: " + ctr);
    console.log("ques: " + quesQty);
    if (ctr >= quesQty) {
        alert("You scored " + scoreCtr + " out of " + quesQty);
        reset();
        return;
    } else {
        test();
        document.getElementById("quizAns").value = "";
    }
}



function reset() {
    //document.getElementById("quesNum").setAttribute('readonly', false); 
    document.getElementById("dispPig").innerHTML = "";
    document.getElementById("submitBtn").style.display = "";
    document.getElementById("skipBtn").style.display = "";
    document.getElementById("quesNum").value = "";
    ctr = 0;
    scoreCtr = 0;
    history = [];
    document.getElementById("score").innerHTML = "SCORE: ";
    document.getElementById("baseRep").innerHTML = "*Base Representation*";
    document.getElementById("genNumber").innerHTML = "*Generated Number*";
    document.getElementById("quizAns").value = "";
}
