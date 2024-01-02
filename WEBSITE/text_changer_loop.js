//coded on 2024 01 02
//coded with minimal use of GPT code refactoring, only asked how to use
//the syntax and then I used trial and error to get it working;
// what I learned - you can make a function run itself again, making a loop this way;
// tik veliau suzinojau, kad setTimeout nera gera praktika ir priveda prie didesniu problemu veliau


let H1_ELEMENT =document.getElementById("h1element").textContent = "Hello";
let texterTracker = 0;

function texter(){
    console.log('texter running');
    let H1_ELEMENT = document.getElementById("h1element");
    if (H1_ELEMENT.textContent === "Hello") 
    {
        H1_ELEMENT.textContent = "hEllo";
    } 
};

function texter1(){
    let H1_ELEMENT = document.getElementById("h1element");
    if (H1_ELEMENT.textContent === "hEllo") {
        H1_ELEMENT.textContent = "heLlo";
    }
}; 

function texter2(){
    let H1_ELEMENT = document.getElementById("h1element");
    if (H1_ELEMENT.textContent === "heLlo") {
        H1_ELEMENT.textContent = "helLo";
    }
}; 

function texter3(){
    let H1_ELEMENT = document.getElementById("h1element");
    if (H1_ELEMENT.textContent === "helLo") {
        H1_ELEMENT.textContent = "hellO";
    }
}; 

function texter4(){
    let H1_ELEMENT = document.getElementById("h1element");
    if (H1_ELEMENT.textContent === "hellO") {
        H1_ELEMENT.textContent = "Hello";
    }

}; 

function starter(){

        setTimeout(texter, 500);
        setTimeout(texter1, 1000);
        setTimeout(texter2, 1500);
        setTimeout(texter3, 2000);
        setTimeout(texter4, 2500);
        setTimeout(starter, 2501);
        
    }

starter();




