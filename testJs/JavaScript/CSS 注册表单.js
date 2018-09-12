var check_ok = false;
function show_form() {
    document.getElementById("id01").style.display = "block";
}

window.onclick = function (event) {
    var modal = document.getElementById("id01");
    if (event.target === modal) {
        modal.style.display = "none";
    }

};

function check_pass() {
    var pass = document.getElementById("pass").value;
    var repass = document.getElementById("repass").value;
    if (pass === repass && pass !== "") {
        document.getElementById("err").innerHTML = "Password correct!";
        check_ok = true;
    }
    else {
        document.getElementById("err").innerText = "Password differnet!"
    }
}

function submitForm() {
    if (check_ok) {
        document.getElementById("myForm").submit();
    }
    else {
        alert("Something wrong!")
    }
}