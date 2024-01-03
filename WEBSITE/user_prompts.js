//crude way: to prompt using basic js window.prompt method

/* commented out A1_begining

let prompt1 = window.prompt("so give me the number 5 here, and it will store what user inputs to this variable");
console.log(prompt1);

commented out A1_end */ 


//professional way to take user input
/* the key here is to set up a text box for user input with a submit key, when user clicks
submit, a function that is listening for that click grabs the value and does
whatever you tell it to do */

let userInput1;

document.getElementById("userSubmit1").onclick = function() {
    userInput1 = document.getElementById("userInput1").value;
    document.getElementById("inputh1").textContent = `${userInput1}`;
}