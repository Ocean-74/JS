const users = [
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

let result = users.reduce((acc , user)=>{
    if(user.profile.isAdult){
        acc.adults.push(user.name)
    }else{
        acc.minors.push(user.name)
    }return acc;
},{adults: [],minors : []});
console.log(result);
// results and loginResults both work same just syntax difference 
let loginResult = users.reduce((acc , user)=>{
    user.login.isLoggedIn ? acc.loggedIn.push(user.name) : acc.loggedOut.push(user.name);
    return acc;
},{loggedIn: [],loggedOut : []});
console.log(loginResult);

let summary = users.reduce((acc, user)=>{
    if(user.profile.isAdult===true){
        if(user.login.isLoggedIn===true){
            acc.adults.loggedIn.push(user.name);
        }else{
            acc.adults.loggedOut.push(user.name);
        }
    }else{
        if(user.login.isLoggedIn===true){
            acc.minors.loggedIn.push(user.name);
        }else{
            acc.minors.loggedOut.push(user.name);
        }
    }return acc;
},{adults: {loggedIn: [],loggedOut: []},minors: {loggedIn: [],loggedOut: []}});
console.log(summary);