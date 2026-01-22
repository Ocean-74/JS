let users = [
  {
    id: 1,
    name: "A",
    profile: { age: 20 },
    login: { isLoggedIn: true }
  },
  {
    id: 2,
    name: "B",
    profile: { age: 17 },
    login: { isLoggedIn: false }
  },
  {
    id: 3,
    name: "C",
    profile: { age: 25 },
    login: { isLoggedIn: true }
  },
  {
    id: 4,
    name: "D",
    profile: { age: 16 },
    login: { isLoggedIn: true }
  }
];

function isAdult(age){
    let status = age>= 18? "true" : "false" ; 
    return status
}
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

function formatUser(user){
        let group = user.profile.age>=18 ? "adult" : "minor" ;
        let status = user.login.isLoggedIn? "loggedIn":"loggedOut";
    return user.name+"("+group +","+status+ ")";
}
console.log(formatUser(users[2]));

let summary = users.reduce((acc,user)=>{
    acc.totalUsers++;
    if(user.profile.age>=18){
        acc.adults++
    }else{
        acc.minors++
    }
    if(user.login.isLoggedIn===true){
        acc.loggedIn++;
    }
    if(user.login.isLoggedIn===true && user.profile.age >=18){
        acc.loggedInAdults++;
    }return acc;
},{totalUsers:0,adults:0,minors:0,loggedIn:0,loggedInAdults:0});

console.log(summary);
