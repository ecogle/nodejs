var Person = {

	gender: 'Male',
	'eyeColor':'brown';

};

Person.firstName='Chad';
Person.lastName = 'Ogle';
Person.printName = function (){
	console.log(this.firstName + " " +this.lastName);
}

Person.printName();

console.log(Person);

