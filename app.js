// // Q1
//   var a = 10;
//     console.log("Result:");
//     console.log("The value of a is: " + a);
//     console.log("....................................");

//     console.log("The value of ++a is: " + (++a));
//     console.log("Now the value of a is: " + a);

//     console.log("The value of a++ is: " + (a++));
//     console.log("Now the value of a is: " + a);

//     console.log("The value of --a is: " + (--a));
//     console.log("Now the value of a is: " + a);

//     console.log("The value of a-- is: " + (a--));
//     console.log("Now the value of a is: " + a);

// // Q2
// var a = 10;

// console.log("Result:");
// console.log("The value of a is: " + a);
// console.log("--------------------------------");

// console.log("The value of ++a is: " + (++a));
// console.log("Now the value of a is: " + a + "\n");

// console.log("The value of a++ is: " + (a++));
// console.log("Now the value of a is: " + a + "\n");

// console.log("The value of --a is: " + (--a));
// console.log("Now the value of a is: " + a + "\n");

// console.log("The value of a-- is: " + (a--));
// console.log("Now the value of a is: " + a);

// // Question 3 
// var userName = prompt("Enter your name:");
// alert("Welcome " + userName + "!");
// console.log("User name entered: " + userName);

// // Question 4 
// // Nothing in question 4 to implement

// // Question 5 
// var tableNumber = prompt(
//   "Enter a number to show its multiplication table (default is 5):"
// );
// if (tableNumber === null || tableNumber.trim() === "") {
//   tableNumber = 5;
// } else {
//   tableNumber = parseInt(tableNumber);
// }
// console.log("Multiplication Table of " + tableNumber + ":");
// for (var i = 1; i <= 10; i++) {
//   console.log(tableNumber + " x " + i + " = " + tableNumber * i);
// }

// // Question 6
// var subject1 = prompt("Enter the name of subject 1:");
// var subject2 = prompt("Enter the name of subject 2:");
// var subject3 = prompt("Enter the name of subject 3:");
// var totalMarksPerSubject = 100;
// var marks1 = prompt("Enter marks obtained in " + subject1 + ":");
// var marks2 = prompt("Enter marks obtained in " + subject2 + ":");
// var marks3 = prompt("Enter marks obtained in " + subject3 + ":");

// var totalObtainedMarks = parseInt(marks1) + parseInt(marks2) + parseInt(marks3);
// var totalMarks = totalMarksPerSubject * 3;
// var percentage = (totalObtainedMarks / totalMarks) * 100;
// console.log("Subject\tTotal Marks\tObtained Marks\tPercentage");
// console.log(
//   subject1 +
//     "\tF" +
//     totalMarksPerSubject +
//     "\t\t" +
//     marks1 +
//     "\t\t" +
//     ((marks1 / totalMarksPerSubject) * 100).toFixed(2) +
//     "%"
// );
// console.log(
//   subject2 +
//     "\t" +
//     totalMarksPerSubject +
//     "\t\t" +
//     marks2 +
//     "\t\t" +
//     ((marks2 / totalMarksPerSubject) * 100).toFixed(2) +
//     "%"
// );
// console.log(
//   subject3 +
//     "\t" +
//     totalMarksPerSubject +
//     "\t\t" +
//     marks3 +
//     "\t\t" +
//     ((marks3 / totalMarksPerSubject) * 100).toFixed(2) +
//     "%"
// );
// console.log(
//   "Total\t" +
//     totalMarks +
//     "\t\t" +
//     totalObtainedMarks +
//     "\t\t" +
//     percentage.toFixed(2) +
//     "%"
// );

