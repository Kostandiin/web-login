//lexo vleren qe ka key "name" dhe ruaje tek variabli savedValue
var savedValue = localStorage.getItem("user-email");

//printo vleren qe ka savedValue
console.log(savedValue);

document.getElementById("Titulli").innerHTML = "Hello, " + savedValue + "!";
