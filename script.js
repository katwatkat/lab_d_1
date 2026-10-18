var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;

    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  

    setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } 
    else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Alert when clicking SEND contact button
var sendButton = document.querySelector("button[type='submit']");

if (sendButton) {
    sendButton.onclick = function() {
        if (sendButton.innerText === "SEND") {
            alert("Thank you for your message!");
        }
    };
}

// Highlight form input fields when clicking into them

var formInputs = document.querySelectorAll("form input");

for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].onfocus = function() {
        this.style.backgroundColor = "#ffffcc"; 
    };
    formInputs[i].onblur = function() {
        this.style.backgroundColor = "#ffffff";
    };
}

// Change button background color to red on hover
var buttons = document.querySelectorAll("#tour button");

for (var j = 0; j < buttons.length; j++) {
    buttons[j].onmouseover = function() {
        this.style.setProperty("background-color", "#880707", "important");
    };
    buttons[j].onmouseout = function() {
        this.style.setProperty("background-color", "#09e52d", "important");
    };
}


