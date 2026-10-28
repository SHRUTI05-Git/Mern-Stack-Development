var path = require('path');

console.log("Path Module Demonstration");
console.log("-------------------------");

var filePath = "D:\\NodeJS\\project\\student.txt";

console.log("Full Path:", filePath);
console.log("Directory Name:", path.dirname(filePath));
console.log("File Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));
console.log("File Name Without Extension:",
    path.basename(filePath, path.extname(filePath)));

console.log("Joined Path:",
    path.join("D:\\NodeJS", "project", "student.txt"));

console.log("Absolute Path:",
    path.resolve("student.txt"));