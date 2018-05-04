/*
grades.push(90);

console.log(grades);

grades.unshift(82);
console.log(grades);

var grade = grades.pop();

console.log(grade);
console.log(grades);

var grade1 = grades.shift();
console.log(grade1);
console.log(grades);

grades.forEach(function(grade){
	console.log(grade);
})

console.log(grades[1]);

console.log(grades.length);
*/

var grades = [100,50,75];

var totalGrades=0;

grades.forEach(function(grade){
	totalGrades += grade;
});

console.log(totalGrades/grades.length);