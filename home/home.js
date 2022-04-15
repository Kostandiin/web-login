//lexo vleren qe ka key "name" dhe ruaje tek variabli savedValue
var savedValue = localStorage.getItem("emaili");

//printo vleren qe ka savedValue
console.log(savedValue);

document.getElementById("Titulli").innerHTML = savedValue;
