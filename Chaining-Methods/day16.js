//reduce()
/*
 SYNTAX 
array.reduce((accumulator, current) => {
  return updatedAccumulator;
}, initialValue);
 */

let users = [
  { name: "A", age: 20, isAdult: true,  isLoggedIn: true },
  { name: "B", age: 17, isAdult: false, isLoggedIn: false },
  { name: "C", age: 25, isAdult: true,  isLoggedIn: true },
  { name: "D", age: 16, isAdult: false, isLoggedIn: false }
];

let totalAge = users.reduce((sum , user) => {
    sum += user.age ;
    return sum;
},0);
console.log("Total Age: ",totalAge);

let loggedInUsers = users.reduce((count,user)=>{
    if(user.isLoggedIn){
        return count+1;
    }return count;
},0);
console.log("Logged in Users : ",loggedInUsers);

let summary = users.reduce((count,user)=>{
    count.totalUsers++;
    if(user.age >= 18){
        count.adultUsers++ ;
    }
    if(user.isLoggedIn){
        count.loggeUsers++;
    }
    return count;
},{totalUsers : 0 , adultUsers:0 , loggeUsers:0 });

console.log("TOtal Users :"+ summary.totalUsers, "Adult Users : "
    + summary.adultUsers + 
    "Logged in Users : "+ summary.loggeUsers);