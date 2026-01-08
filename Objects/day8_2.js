// Array of Objects 
let users = [
  { name: "A", age: 20 },
  { name: "B", age: 17 },
  { name: "C", age: 25 }
];
for(let i=0;i<users.length;i++){
    let userNow = users[i];
    if(userNow.age>18){
        console.log(userNow);
    }
}
function isAdult()
{
    for(let i=0;i<users.length;i++){
        let check = users[i];
        if(check.age>18){
            console.log(check.name+" is Adult");
        }else{
            console.log(check.name + " is Not Adult");
        }
    }
}
isAdult();