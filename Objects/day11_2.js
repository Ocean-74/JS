let account ={
    owner : "Bnsri",
    balance : 1000,
    deposite (amount){
         if(amount<= 0){
         return "Invalid deposite amount"
    }else{
        this.balance += amount;
        return "Deposite Successful."
    }
    },
    withdraw(amount){
           if(amount<= 0){
         return "Invalid withdrawal amount"
        }
        if(amount>this.balance){
            return "Insufficient balance"
        }
        this.balance -= amount;
        return "Withdrawal Successful."
    }
};
console.log(account.deposite(500));
console.log(account.withdraw(300));
console.log(account.withdraw(2000));
console.log("Final balance:", account.balance);