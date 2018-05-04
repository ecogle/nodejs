var averageGrade = 92;

var grades = [98,76,98,75,69];
var result=0;
for(var x : grades){
	result += x;
}
console.log(result);

if(averageGrade > 70){
	console.log('Congrats! You passed the class!');
}
else{
	console.log('Sorry!, You did not pass! :-(');
}