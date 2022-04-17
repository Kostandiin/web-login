function doSignUp() {
  //Marrim vleren e email nga HTML dhe e ruajme tek variable signupEmail
  var signupEmail = document.getElementById("email").value;
  //Ruajme vleren e signupEmail ne localStorage me key: user-email
  localStorage.setItem("user-email", signupEmail);

  //Marrim vleren e password nga HTML dhe e ruajme tek variable signupPassword
  var signupPassword = document.getElementById("pass").value;
  //Ruajme vleren e signupPassword ne localStorage me key: user-password
  localStorage.setItem("user-password", signupPassword);

  goToLogIn();
}

function goToLogIn() {
  window.location = "../login/login.html";
}
