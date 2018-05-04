var ChadAccount = {
	balance:0,
	name:"Chad Account"
}
var AshleyAccount = {
	balance:0,
	name:"Ashley Account"
}

var BankAccountActions = {
	

	getBalance: function(account){
		console.log(account.name + " $" + account.balance);
	},

	withdraw: function(account,amount){
		account.balance -= amount;
		console.log("$"+amount + " was withdrawn")
	},

	deposit: function(account,amount){
		account.balance += amount
		console.log("$"+amount + " was deposited")
	}
}

BankAccountActions.deposit(ChadAccount,100.00);
BankAccountActions.getBalance(ChadAccount);
