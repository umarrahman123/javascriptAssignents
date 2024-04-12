//              Arthmetic operators of 1 Quetion
var Result = "Result:"
document.write(Result);
var value = 10;
var value1 = "<br>The value of a is:"
var value0 = "<br>The value of ++a is:"
var sum = value1 + value;
document.write(sum);
 var value2 = ++value;
 document.write(value0+value2);


var value = 11;
var value1 = "<br><br>The value of a is:"
var value0 = "<br>The value of ++a is:"
var sum = value1 + value;
document.write(sum);
 var value2 = ++value;
 document.write(value0+value2);

var value = 12;
var value1 = "<br><br>The value of a is:"
var value0 = "<br>The value of --a is:"
var sum = value1 + value;
document.write(sum);
 var value2 = --value;
 document.write(value0+value2);

 var value = 11;
var value1 = "<br><br>The value of a is:"
var value0 = "<br>The value of --a is:"
var sum = value1 + value;
document.write(sum);
 var value2 = --value;
 document.write(value0+value2);



//          Quetion 2 result with console 
var a = 2,b = 1;
var Result = --a - --b + ++b + b--;
var Result = --a;
var aa ="a is "
console.log(aa + Result);

var Result2 = --a - --b;

console.log(Result2);

var Result3 = --a - --b + ++b;
var bb ="b is "
console.log(bb + Result3);

var Result4 = --a - --b + ++b + b--;
var abresult ="result is "
console.log(abresult + Result4);

//          Quetion 3 result with console


// Function to prompt the user for their name
function greetUser() {
    // Prompting the user for their name
    let userName = prompt("What's your name?");
    
    // Checking if the user entered a name
    if (userName) {
        // Greeting the user
        alert("Hello, " + userName + "! Welcome to our website.");
    } else {
        // Handling the case if the user didn't enter a name
        alert("Hello there! Welcome to our website.");
    }
}

// Calling the function to greet the user
greetUser();

//          Quetion 5 result with console

 // Function to display multiplication table
 function displayMultiplicationTable() {
    // Prompting the user for a number
    let userInput = prompt("Enter a number for the multiplication table:");

    // Checking if the user entered a number or canceled
    if (userInput === null || userInput === "") {
        userInput = 5; // Default value if user didn't enter a number
    } else {
        userInput = parseInt(userInput); // Converting user input to integer
        if (isNaN(userInput)) {
            alert("Invalid input! Please enter a valid number."); // Handling non-numeric input
            return;
        }
    }

    // Generating multiplication table
    let table = "<h2>Multiplication Table of " + userInput + "</h2><br>";
    for (let i = 1; i <= 10; i++) {
        table += userInput + " x " + i + " = " + (userInput * i) + "<br>";
    }

    // Displaying the multiplication table on the browser
    document.getElementById("multiplicationTable").innerHTML = table;
}




 

