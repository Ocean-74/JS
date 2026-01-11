let users = [
  { id: 1, name: "A", age: 20 },
  { id: 2, name: "B", age: 17 }
];
function addUser(id,name,age){
    let newuser={
        id : id ,
        name : name,
        age : age
    }
    users.push(newuser);
    return "User added"
}
console.log(addUser(3,"C",45));

function getUsers(){
    let result=[];
    for (let i of users){
        result.push(i.id+"-"+i.name+"("+i.age+")");
    }return result;
    }
let allUsers = getUsers();
for (let user of allUsers) {
  console.log(user);
}

function updateUser(id, newAge){
    for(j of users){
    if(id===j.id){
        j.age=newAge ;
        return "User updated"
    }else{
        return "User not found!"
    }
}
}
console.log(updateUser(1,19));
console.log(updateUser(5,19));

function deleteUser(id) {
    for (let k = 0; k < users.length; k++) {
        if (users[k].id === id) {
            users.splice(k, 1);
            return "User deleted";
        }
    }
    return "User not found!";
}
console.log(deleteUser(3));
