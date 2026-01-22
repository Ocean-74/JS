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
  },
  {
    id: 4,
    name: "D",
    profile: { age: 16, isAdult: false },
    login: { isLoggedIn: true }
  }
];

function formatUser(user){
        let group = user.profile.age>=18 ? "adult" : "minor" ;
        let status = user.login.isLoggedIn? "loggedIn":"loggedOut";
    return user.name+"("+group +","+status+ ")";
}
console.log(formatUser(users[2]));

function updateUserAge(id, newAge){
    for(user of users){
        if(user.id === id){
            user.profile.age = newAge;
            user.profile.isAdult = newAge >= 18
            return "Updated";
        }
    }
    return "User not Found!!"
}
console.log(updateUserAge(4,21));

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