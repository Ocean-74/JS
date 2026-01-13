// this vs Arrow function
let carA = {
  brand: "Toyota",
  speed: 0,
  accelerate(amount) {
    this.speed += amount;
    return "speed after accelaration :"+ this.speed
  }
};
console.log(carA.accelerate(235));

let carB = {
  brand: "Toyota",
  speed: 0,
  accelerate: (amount)=> {
    this.speed += amount;
    return "speed after accelaration :"+ this.speed
    //here 'this' function can't be able to track the value of speed of carB
  }
};
console.log(carB.accelerate(235));

/*   Why arrow functions should not be used as object methods?
    ===>arrow function can not able to handle keywords like 'this' , that's why we prefer object methods  
  */
/* One mistake I made earlier with `this`:
  ===> at the moment of logging i always forgot to call function by object and call function directly*/