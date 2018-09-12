var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        // console.log(ev.target.tagName);
        // console.log(ev.target);
        // console.log(ev);
        ev.target.classList.toggle("checked");
    }
}, false);
//
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("You must write something!");
    }
    else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}