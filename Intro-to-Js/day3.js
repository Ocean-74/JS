// truthy or falsy
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean([]));
console.log(Boolean({}));

//3.2 If–else with falsy value
let a;
if (0){
    console.log("Truthly")
}else{
    console.log("Falsy")
}

//3.3 Login check using truthy/falsy
let username= "hi";
if(username){
    console.log("Login Succesfull");
}else{
    console.log("User Didn't exists!")
}
