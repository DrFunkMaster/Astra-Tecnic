function validar(){
    var user, password, expresion;

    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    //Estructura que tendran los correos
    expresion= /\w+@\w+\.+[a-z]/;

    if(user === "" || password === ""){
        alert("Error. Los datos introducidos no son válidos");
        return false;
    }
    else if(user.length > 50){
        alert("Error. La longitud de su correo electronico supera el limite permitido.");
        return false;
    }
    else if (!expresion.test(user)){
        alert("Error. El correo introducido no es válido.")
        return false;
    }
    else if(password.length < 4 || password.length > 8){
        alert("Error. El password introducido no es un parametro valido, numero de caracteres minimo 4 y maximo 8")
        return false
    }
    else{
        alert("Bienvenido!")
        window.location.replace = "index.html";
    }
}
/********************************************************************************************************************************/
function registro(){
    var user, password, rpassword, expresion;
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    rpassword = document.getElementById("rpassword").value;
    //Estructura que tendran los correos
    expresion= /\w+@\w+\.+[a-z]/;
if(user === "" || password === "" || rpassword === ""){
    alert("Error. Los datos introducidos no son válidos");
    return false;
}else if(user.length > 50){
    alert("Error. La longitud de su correo electronico supera el limite permitido.");
    return false;
}else if (!expresion.test(user)){
    alert("Error. El correo introducido no es válido.")
    return false;
}
else if(password.length < 4 || password.length > 8){
    alert("Error. El password introducido no es un parametro valido, numero de caracteres minimo 4 y maximo 8")
    return false;
}
else if(rpassword.length < 4 || rpassword.length > 8){
    alert("Error. El password introducido no es un parametro valido, numero de caracteres minimo 4 y maximo 8")
    return false;
}
if(password != rpassword){
    alert("Error. Las contraseñas introducidas no son iguales. Por favor introduzca valores validos.")
    return false
}
else{
    alert("Muchas gracias por registrarse. En un momento recibirá un mail donde confirmar su registro.")
}
}
