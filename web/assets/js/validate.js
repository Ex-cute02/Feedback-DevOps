function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let mobile = document.getElementById("mobile").value;
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirm").value;

if(name == ""){
alert("Name cannot be empty");
return false;
}

if(email == ""){
alert("Enter email");
return false;
}

if(mobile != "" && !/^\d{10}$/.test(mobile)){
alert("Invalid mobile number");
return false;
}

if(password.length < 6){
alert("Password must be at least 6 characters");
return false;
}

if(password != confirm){
alert("Passwords do not match");
return false;
}

alert("Registration Successful");

return true;
}
