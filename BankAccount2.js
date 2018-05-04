var accounts = [];



function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(userName){
	var matchedAccount;
	accounts.forEach(function(account){
		if(account.username === userName){
			matchedAccount = account;
		}
	})
	return matchedAccount;
}

function deposit(account,amount){
	account.balance += amount;
}

function withdraw(account,amount){
	account.balance -=amount;
}

function getBalance(account){
	return account.balance;
}

var chadsAccount = createAccount({balance:0,username:"Chad"});

deposit(chadsAccount,175);

console.log(accounts);

var oldAccount = getAccount("Chad");
console.log(oldAccount);

