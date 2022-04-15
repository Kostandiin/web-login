function doSignUp() {

    var email = document.getElementById("email").value
    localStorage.setItem("email", email);

    var password = document.getElementById("psw").value
    localStorage.setItem("psw", password);
}