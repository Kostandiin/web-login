function show(){
                
    //1. Krijojme 2 variabla qe ruajme kredencialet e sakta
    var emailISakte1 = "kosta"
    var pswISakte1 = "111"
    var emailISakte2 = "Dori"
    var pswISakte2 = "222"
    
    //2. krijojme ne variabel qe marrim objektin e email input
    var inputiEmailit = document.getElementById("email")
    //3. krijojme nje variabel qe marrim vleren e shkruar tek email input
    var email = inputiEmailit.value
    //4. printojme vleren e variables
    console.log(email)

    var inputiPasswordit = document.getElementById("password")
    var password = inputiPasswordit.value
    console.log(password)
    
    //krahasojme nese vlera e shkruar 3. me vleren e kredencialit te sakte 1.
    // if(email === emailISakte && password === pswISakte){
    //     alert("logged in")
    // }else{
    //     alert("wrong username/password")
    // }


    if(email === emailISakte1 && password === pswISakte1){
        window.location = "../home/home.html";
    }else if(email === emailISakte2 && password === pswISakte2){
        window.location = "../home/home.html";
    }else{
         alert("wrong username/password")
     }

    localStorage.setItem("emaili", email);
    localStorage.setItem("passwordi",password);
}