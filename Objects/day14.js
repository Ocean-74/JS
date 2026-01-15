/*TASK 1 — Get all names (map)
TASK 2 — Get only adult users (filter)
TASK 3 — Find user with id = 2 (find)
TASK 4 — Check if any user is under 18 (some)
TASK 5 — Check if all users are adults (every)*/

let users = [
  { id: 1, name: "A", age: 20, isAdult: true },
  { id: 2, name: "B", age: 17, isAdult: false },
  { id: 3, name: "C", age: 25, isAdult: true }
];

let names = users.map(n => n.name);
console.log("Users : ",names)

let adults = users.filter(f=> f.age>=18);
console.log("Adult Users : ",adults)

let finds = users.find(u => u.id===2);
console.log("Details of User : " ,finds)

let check = users.some(c => c.age<18);
console.log("Is any user still under age ? -",check)

let checks = users.every(d => d.isAdult);
console.log("Are all Users adult ? -",checks)
/*Why map/filter are safer than manual loops?
Loops can be complicated some times and also time complexity increses if we use loops*/
/* One mistake I used to make with for-loops:
Most of time i use return statement inside the loop also i call any properties by it's actual name insted of its loop*/