//Basic Function to add two Numbers
function add(a,b){
    return a+b;
}
sum= add(4,5);
console.log("Sum = "+ sum);

//Function that return Number is Even or Odd
function check(num){
    if(num===0){
        return "Number is Zero"
    }else if (num%2===0){
        return "Number is Even"
    }else {
        return "Number is Odd"
    }
}
console.log(check(0));
console.log(check(50));
console.log(check(37));

//Fuction that check Truthy Falsy for login
function login(username){
    if(username){
        return "Login Succesful.."
    }else {
        return "Username Doesn't Exist!!"
    }
}
console.log(login("Bnsri"));
console.log(login(""));