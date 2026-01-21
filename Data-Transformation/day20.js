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

function isAdult(age){
    return age>=18
}
console.log(isAdult(25));
console.log(isAdult(15));

function isLoggedIn(user){
    if(user.login.isLoggedIn===true){
        return true;
    }else{
        return false;
    }
};
console.log(isLoggedIn(users[0]));

function formatUser(user){
    let status =  user.login.isLoggedIn ? "loggedIn" : "loggedOut";
    let group = user.profile.isAdult? "adult" : "minor" ;
    return (user.name +"("+group+","+status+")")
}
console.log(formatUser(users[0]));

function updateUserAge(id,newAge){
    for(user of users){
        if(user.id===id){
            user.profile.age = newAge;
            user.profile.isAdult = user.profile.age >= 18? true : false ;
            return "updated";
        }
    }
    return "User Not found";
}
console.log(updateUserAge(2,18));
console.log(updateUserAge(99, 20));

let summary = users.reduce((acc,user)=>{
    acc.totalUsers++;
    if(user.profile.isAdult=== true){
        acc.adults++
    }else{
        acc.minors++
    }
    if(user.login.isLoggedIn===true){
        acc.loggedIn++;
    }
    if(user.login.isLoggedIn===true && user.profile.isAdult===true){
        acc.loggedInAdults++;
    }return acc;
},{totalUsers:0,adults:0,minors:0,loggedIn:0,loggedInAdults:0});

console.log(summary);
