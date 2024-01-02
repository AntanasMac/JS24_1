
//<p id="par1element"></p>

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
    if (H1_ELEMENT.textContent === "heLlo") {
        H1_ELEMENT.textContent = "helLo";
    }
}; 

function texter4(){
    let H1_ELEMENT = document.getElementById("h1element");
    if (H1_ELEMENT.textContent === "helLo") {
        H1_ELEMENT.textContent = "hellO";
    }
}; 

function texter5(){
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
        setTimeout(texter4, 2000);
        setTimeout(texter5, 2500);
        setTimeout(starter, 2501);
        
        
    }


starter();


// setTimeout(starter, 3500);

