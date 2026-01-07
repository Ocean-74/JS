//Array of strings (names)
//Print length of each string
//Print strings longer than 4 chars
//Count vowels in each string

let names = ["bnsri" , "gpt", "chatbot", "maggie"];
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}
console.log("<-----printing length of each element----->");
for(let i=0;i<names.length;i++){
    console.log("Length of "+names[i]+" is "+names[i].length);
}

console.log("<-----printing those elements whose length is longer than 4 characters----->");
for(let i=0;i<names.length;i++){
    if(names[i].length>4){
        console.log(names[i]);
    }
}

console.log("<-----printing numbers of vowels in each elements----->");
for(let i=0;i<names.length;i++){
    let count=0;
    let m = names[i].toLowerCase();
    for(let j=0 ; j<m.length ; j++){
        if(m[j]==='a'||m[j]==='e'||m[j]==='i'||m[j]==='o'||m[j]==='u'){
            count++
        }
    }
    console.log("The word "+names[i]+" contains "+ count+" vowel(s).");
}