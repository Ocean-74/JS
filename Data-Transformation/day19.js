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