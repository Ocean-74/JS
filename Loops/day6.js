// Loops concept in JS
// printing odd or even using for loop
console.log("<-------Even or Odd using for loop------->")
for (let num=1;num<11;num++){
    if(num%2===0){
        console.log(num + " Even");
    }else{
        console.log(num + " Odd");
    }
}

// printing odd or even using while loop
console.log("<-------Even or Odd using while loop------->")
let num = 1
while(num<11){
    if(num%2===0){
        console.log(num + " Even");
    }else{
        console.log(num + " Odd");
    }
    num++;
}

// loop with condition statement
console.log("<-----Looops with condition statement-----> ")
for(let num=1;num>0;num++){
    if(num%7===0){
        console.log(num);
        break;
    }
    console.log(num);
}

// loops with functions
console.log("<-----Numbers with limits using function in loops---->");
let limit;
function setLimit(limit){
    console.log("Numbers from 1 to "+ limit);
    for(let i=1; i<=limit ; i++){
        console.log(i);
    }
}
setLimit(5);
setLimit(9);