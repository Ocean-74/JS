// Arrays in Js
// creating basic one dimentional array 
let a=[2,5,8,14,11];
console.log("<----Printing all elements.----->")
for (i=0;i<a.length;i++){
    console.log(a[i]);
}
console.log("<----Printing all even position elements.----->")
for (let i=0;i<a.length;i++){
    if(i%2===0){
        console.log(a[i]);
    }
}
console.log("<----Printing all odd position elements.----->")
for (i=0;i<a.length;i++){
    if(i%2===1){
        console.log(a[i]);
    }
}

console.log("<----Printing even numbers from array----->")
let count=0;
for(i=0;i<a.length;i++){
    if(a[i]%2===0){
        console.log(a[i]);
        count++;
    }
}
console.log("<----Printing odd numbers from array----->")
for(i=0;i<a.length;i++){
    if(a[i]%2===1){
        console.log(a[i]);
    }
}

console.log("<----calculating sum of all elements of array----->")
let sum=0;
for(i=0;i<a.length;i++){
    sum+= a[i];
}
console.log("Sum of all elements of array is "+ sum);

console.log("Number of Even elements= "+ count);