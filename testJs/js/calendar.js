var today = new Date();
var get_year = today.getFullYear();
var get_month = today.getMonth() + 1;
var get_day = today.getDate();
var toDay = "M" + get_day;
document.getElementById("getMonth").innerHTML = get_year.toString() + " - " + get_month.toString();
document.getElementById(toDay).innerHTML = "<span class=\"active\">" + get_day + "</span>";







