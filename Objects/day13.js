let users = [
  { id: 1, name: "A", age: 20 },
  { id: 2, name: "B", age: 17 },
  { id: 3, name: "C", age: 25 }
];
for (let user of users) {
  user.isAdult = user.age >= 18;
}

function addUser(id, name, age) {
  let isAdult = age >= 18;
  users.push({ id, name, age, isAdult });
  return "User added";
}

function getUsers() {
  let result = [];

  for (let user of users) {
    result.push(`${user.id}-${user.name}(${user.age})(${user.isAdult})`);
  }
  return result;
}
function updateUser(id, newAge) {
  for (let user of users) {
    if (user.id === id) {
      user.age = newAge;
        user.isAdult = newAge >= 18;
      return "User updated";
    }
  }
  return "User not found";
}
function deleteUser(id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
      return "User deleted";
    }
  }
  return "User not found";
}
console.log(addUser(4, "D", 30));
console.log(getUsers());

console.log(updateUser(2, 18));
console.log(getUsers());

console.log(deleteUser(1));
console.log(getUsers());

