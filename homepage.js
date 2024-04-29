var username = document.getElementById("username");
var password = document.querySelector("#password");
var button = document.querySelector("#btn");

button.addEventListener("click", login)

function login(){
    if(username.value == "admin" && password.value == "123"){
        window.alert("Successful Logged In!")
        open("homepage.html");
    }else{
        window.alert("Invalid username/password! Please Try Again!");
    }
}