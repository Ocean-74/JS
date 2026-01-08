// Objects in JS

let user = {name:"bnsri", 
            age:25, 
            isloggedin:false,
            greet: function(){
                return "Hello, my name is "+ user.name ;
            }
        };
console.log("Name:"+ user.name);
console.log("Age: "+ user.age);
console.log("Login Status: "+ user.isloggedin);

console.log("<-----Updated Object----->")
user.age = user.age+ 1;
user.isloggedin = true ;
console.log("Name:"+ user.name);
console.log("Age: "+ user.age);
console.log("Login Status: "+ user.isloggedin);

console.log(user.greet());
 