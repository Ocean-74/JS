//reusable calculator
function calculate(a,b,operator){
    if(operator==="+") return a + b ;
    if(operator==="-") return a - b ;
    if(operator==="*") return a * b ;
    if(operator==="/") return b!== 0? a/b : "Cannot divided by 0";
}

console.log(calculate(72,12,"+"));
console.log(calculate(72,12,"-"));
console.log(calculate(72,12,"*"));
console.log(calculate(72,12,"/"));
// nested fuction
// number is even
function isEven(num) {
    return num%2===0;
}
console.log(isEven(10));
console.log(isEven(87));

function describeNum (num){
    if (num === 0 ) return "zero";
    if (isEven(num)) return "even";
    return "odd";
}
console.log(describeNum(0));
console.log(describeNum(56));
console.log(describeNum(45));

// login logic with user
function isLoggedId(userName){
    return Boolean(userName)
}
function loginMessage(userName) {
    return isLoggedId(userName)
    ?"login Succesfull":"login denied";
}
console.log(isLoggedId("bnsri"));
console.log(isLoggedId(""));
console.log(loginMessage("bnsri"));
console.log(loginMessage(""));