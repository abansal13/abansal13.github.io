// Creating The Close Buttons For List That Are Not Created With The Main Function
var myList = document.getElementsByTagName("li");
var index;
for (index = 0; index < myList.length; index++) {
    var aSpanTag = document.createElement("SPAN");
    var someText = document.createTextNode("\u00D7");
    aSpanTag.className = "close";
    aSpanTag.appendChild(someText);
    myList[index].appendChild(aSpanTag);
}

// Close Button

var closeButton = document.getElementsByClassName("close");
for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
        var theDiv = this.parentElement;
        theDiv.style.display = "none";
    }
}


var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event) {
    console.log(event);
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('checked');
    }
}, false);

// Creating To Do Function

function createNewElement() {
    var li = document.createElement('li');
    var theInputValue = document.getElementById("the-input").value;
    var textNode = document.createTextNode(theInputValue);
    li.appendChild(textNode);

    if (theInputValue === '') {
        alert("*This is a required field*")
    } else {
        document.getElementById("the-ul").appendChild(li);
    }

    document.getElementById("the-input").value = "";

    var thePanTag = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    thePanTag.className = "close";
    thePanTag.appendChild(txt);
    li.appendChild(thePanTag);

    // Removing Items When Click On SPAN CLOSE BUTTON

    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
            var theDiv = this.parentElement;
            theDiv.style.display = "none";
        }
    }
}