function login(){

let email = document.getElementById("email").value
let password = document.getElementById("password").value

let correctEmail = "Jeanjacques.B2026@gmail.com"
let correctPassword = "Nabil2026B"

if(email === correctEmail && password === correctPassword){

document.getElementById("loginPage").style.display = "none"
document.getElementById("app").style.display = "flex"

}else{

document.getElementById("error").innerHTML = "Email ou mot de passe incorrect"

}

}

console.log("Application bancaire en ligne ")
