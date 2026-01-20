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
    profile: { age: 16, isAdult: false },
    login: { isLoggedIn: false }
  },
  {
    id: 3,
    name: "C",
    profile: { age: 25, isAdult: true },
    login: { isLoggedIn: true }
  },
  {
    id: 4,
    name: "D",
    profile: { age: 17, isAdult: false },
    login: { isLoggedIn: true }
  }
];

let result = users.map(user => {
  let group = user.profile.isAdult ? "adult" : "minor";
  let status = user.login.isLoggedIn ? "loggedIn" : "loggedOut";
  return `${user.name} (${group}, ${status})`;
});

console.log(result);

let names = users
    .filter(user=>user.profile.isAdult && user.login.isLoggedIn)
    .map(user => user.name)
console.log(names);

let summary = users.reduce((acc,user)=>{
    acc.totalUsers++
    if(user.profile.isAdult){
        acc.adults++
    }else{
        acc.minors++
    }
    if(user.login.isLoggedIn){
        acc.loggedIn++
    }
    if(user.login.isLoggedIn && user.profile.isAdult){
        acc.loggedInAdults++
    }return acc;
},{totalUsers:0,adults:0,minors:0,loggedIn:0,loggedInAdults:0})
console.log(summary);