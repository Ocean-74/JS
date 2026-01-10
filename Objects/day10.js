//FUNCTIONS + OBJECTS (API-STYLE LOGIC)
let user = {
  username: "admin",
  password: "1234",
  isLoggedIn: false
};
function login(inputUsername, inputPassword){
    if(user.username===inputUsername && user.password === inputPassword){
        user.isLoggedIn=true;
        return "Login successful";
    }else{
        return "Invalid credentials";
    }
}
console.log(login("admin","1234"));
console.log(accessDashboard());
console.log(logout());
console.log(login("admin",12340));

function logout(){
    user.isLoggedIn = false;
    return ("Logged out");
}
console.log(accessDashboard());

function accessDashboard(){
    if(user.isLoggedIn===true){
        return "Welcome to dashboard";
    }else{
        return "Access denied";
    }
}