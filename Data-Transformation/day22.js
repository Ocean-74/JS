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