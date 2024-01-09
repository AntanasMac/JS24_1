let RandomNum = Math.trunc(Math.random() * 5 * Math.PI * Math.ceil(Math.random()) );

/* bellow is a block of code that checks the random
    number, it uses the switch statement which checks against
    the condition 'true', if true that RandomNum is less than 10, 
    the gun shoots, if true that RandomNum is more than 10, the gun jams

*/

switch(true){
    case RandomNum < 10 :
        console.log('Gun shoots');
        break;
    
    case RandomNum > 10 : 
        console.log('Gun jams');
        break;
    
}

