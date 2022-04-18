function doLogin() {
  //Marrim vleren e email nga HTML dhe e ruajme tek typedEmail
  var typedEmail = document.getElementById("email").value;

  //Marrim vleren e password nga HTML dhe e ruajme tek typedPassword
  var typedPassword = document.getElementById("pass").value;

  //Lexojme vleren e user-email nga localStorage dhe e ruajme tek savedEmail
  var savedEmail = localStorage.getItem("user-email");
  //Lexojme vleren e user-password nga localStorage dhe e ruajme tek savedPassword
  var savedPassword = localStorage.getItem("user-password");

  if (typedEmail === savedEmail && typedPassword === savedPassword) {
    window.location = "../home/feed.html";
  } else {
    alert("wrong username/password");
  }
}

function goToSignUp() {
  window.location = "../signup/signup.html";
}
