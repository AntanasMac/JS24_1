

let age = 33;

if (age === 30 || age === 31 || age === 32 || age === 33){console.log
(`all i can tell you is that the age is somewhere between 30 and 33`)} 
else if (age !== 30 && age !== 31 && age !== 32 || age !== 33){
    console.log("i am sure age is not between 30 and 33")
};

// idomus dalykas, kad jeigu age = true;
// tai sauna else if salyga, nes age nera skaicius?!

/* chat gtp sako, ka reikejo taip rasyti:

let age = true;

if (age === 30 || age === 31 || age === 32 || age === 33) {
  console.log(`all I can tell you is that the age is somewhere between 30 and 33`);
} else if (!(age >= 30 && age <= 33)) {
  console.log("I am sure age is not between 30 and 33");
}

*/
