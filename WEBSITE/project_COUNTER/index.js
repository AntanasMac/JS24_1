// this simple excersize can be used to make for example a increase 
// the count of a item in a shopping cart in a e-commerce website;

const DECREASE_BTN = document.getElementById("decreaseBtn");
const RESET_BTN = document.getElementById("resetBtn");
const INCREASE_BTN = document.getElementById("increaseBtn");
const COUNT_LABEL = document.getElementById("countLabel");
const RANDOM_BTN = document.getElementById("randomBtn");

//my additions
const MULTIPLY_BTN = document.getElementById("multiplyBtn");

let count = 0;

// three functions (for each button a function)

INCREASE_BTN.onclick = function(){
    count++;
    COUNT_LABEL.textContent = count;
};

DECREASE_BTN.onclick = function(){
    count--;
    COUNT_LABEL.textContent = count;
};

RESET_BTN.onclick = function(){
    count = 0;
    COUNT_LABEL.textContent = count;
};

//my additions

MULTIPLY_BTN.onclick = function(){
    count = count * 99;
    COUNT_LABEL.textContent = count;
};

// random number generation

RANDOM_BTN.onclick = function(){
    count = Math.trunc(Math.random() * 5 * Math.PI * Math.ceil(Math.random()) );
    COUNT_LABEL.textContent = count;
};

