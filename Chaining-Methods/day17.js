//Nested Objects & Arrays

let users = [
  {
    id: 1,
    name: "A",
    profile: { age: 20, isAdult: true },
    login: { isLoggedIn: true }
  },
  {
    id: 2,
    name: "B",
    profile: { age: 17, isAdult: false },
    login: { isLoggedIn: false }
  },
  {
    id: 3,
    name: "C",
    profile: { age: 25, isAdult: true },
    login: { isLoggedIn: true }
  }
];

//TASK A — Print names of logged-in users
let result =[];
for(let user of users){
    if(user.login.isLoggedIn){
        result.push(user.name)
    }
}
console.log(result);

//TASK B — Increase age of user B by 1
for (user of users){
if(user.name==="B"){
    user.profile.age = 18;
    user.profile.isAdult = true ;
    }
}
console.log(users);

//TASK C — Create summary using reduce
/*{
  totalUsers: ,
  adultUsers: ,
  loggedInUsers: 
}*/

let summary = users.reduce((count , x) => {
    count.totalUsers++;
    if(x.profile.isAdult===true){
        count.adultUsers++;
    }
    if(x.login.isLoggedIn){
        count.loggedInUsers++;
    }
    if(x.login.isLoggedIn===true && x.profile.isAdult===true){
        count.loggedInAdults++;
    }
    return count;
},{totalUsers:0,adultUsers:0,loggedInUsers:0,loggedInAdults:0});
console.log(summary);
