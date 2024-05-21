document.addEventListener("DOMContentLoaded", function () {
    var switchState = localStorage.getItem("switchState");
    if (switchState === "true") {
        document.getElementById("switch").checked = true;
    }
    theme();

    document.getElementById("switch").addEventListener("change", function () {
        theme();
        localStorage.setItem("switchState", this.checked);
        
    });

    let links = document.querySelectorAll(".topnav a");
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            links.forEach(function (l) {
                l.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});

function theme() {
    var swtch = document.getElementById("switch");
    var containers = document.querySelectorAll(".container");
    var buttons = document.querySelectorAll(".btns");
    if (swtch.checked == true)
    {
        document.getElementById("header").style.backgroundColor="#491B7B";
        document.getElementById("navbar").style.backgroundColor="#BA93DE";
        document.getElementById("body").style.backgroundColor="black";
        document.getElementById("body").style.color="white";
        
        containers.forEach(function(container) {
            container.style.backgroundColor = "#1F0D4A";
            container.style.color = "#EBC8E8";
            container.style.borderColor = "#4C6793";
        });
        buttons.forEach(function(btns) {
            btns.style.backgroundColor = "#8BBCCC";
            btns.style.color = "white";
            btns.style.borderColor = "#8BBCCC";
        });
        document.getElementById("studyDiv").style.backgroundColor="#4C6793";
        document.getElementById("studyDiv").style.borderColor="#4C6793";
    }
    else
    {
        document.getElementById("header").style.backgroundColor="#BA93DE";
        document.getElementById("navbar").style.backgroundColor="#EBC8E8";
        document.getElementById("body").style.backgroundColor="white";
        document.getElementById("body").style.color="#7e51a8";
        containers.forEach(function(container) {
            container.style.backgroundColor = "";
            container.style.color = "";
            container.style.borderColor = "";
        });
        buttons.forEach(function(btns) {
            btns.style.backgroundColor = "";
            btns.style.color = "";
            btns.style.borderColor = "";
        });
        //document.getElementById("studyDiv").style.backgroundColor = "";
        document.getElementById("studyDiv").style.backgroundColor = "";
    }
}
