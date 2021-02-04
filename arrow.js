// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;

const userName = (fName, lName) => fName + lName ;

const fullName = userName("Roni", "Islam");
//console.log(fullName);

const yourName = () => "Mitu Islam";
const myName = yourName();
//console.log(myName);

const doMath = (x,y) => {
    const sum = x + y;
    const sub = x - y;
    const result = sum * sub;
    return result;
};

const result = doMath(7,5);

console.log(result);