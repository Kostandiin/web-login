function doLogin(){
                
    
    //2. krijojme ne variabel qe marrim objektin e email input
    var email = document.getElementById("email").value
    console.log(email)

    var password = document.getElementById("password").value
    console.log(password)
    
    //krahasojme nese vlera e shkruar 3. me vleren e kredencialit te sakte 1.
    // if(email === emailISakte && password === pswISakte){
    //     alert("logged in")
    // }else{
    //     alert("wrong username/password")
    // }


    if(email === email && password === password){
        window.location = "../home/home.html";
    }else{
         alert("wrong username/password")
     }

    localStorage.setItem("emaili", email);
    localStorage.setItem("passwordi",password);
}

function goToSignUp(){
window.location = "../signup/signup.html";
}