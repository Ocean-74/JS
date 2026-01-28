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

function updateUserAge(users, id, newAge) {
  let userFound = false;

  const updatedUsers = users.map(user => {
    if (user.id === id) {
      userFound = true;

      return {
        ...user,
        profile: {
          ...user.profile,
          age: newAge,
          isAdult: newAge >= 18
        }
      };
    }
    return user;
  });

  return userFound ? updatedUsers : "User Not Found";
}

console.log(updateUserAge(users , 4 ,20));

function toggleLogin(users, id){
 let userFound = false;

  const updatedUsers = users.map(user => {
    if (user.id === id) {
      userFound = true;

      return {
        ...user,
        login: {
          isLoggedIn : user.isLoggedIn? false : true
        }
      };
    }
    return user;
  });

  return userFound ? updatedUsers : "User Not Found"; 
}

console.log(toggleLogin(users, 2));

function getSummary(){
  let summary = users.reduce((acc,user)=>{
  acc.totalUsers++;
  if(user.profile.age >=18){
    acc.adults++}else{
    acc.minors++}
  if(user.login.isLoggedIn===true){
    acc.loggedIn++
  }
  if(user.profile.age >=18 && user.login.isLoggedIn===true){
    acc.loggedInAdults++}
    return acc;
  },{ totalUsers:0, adults:0,  minors:0,  loggedIn:0, loggedInAdults:0})
  return summary;
}

console.log(getSummary());