// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

//Block Scope
console.log(blockVar);
// console.log(blockLet);


// Practice Task
{
    var nameVar = "Bilal";
    let nameLet = "Ahmed";
    const  nameConst = "Ali"

    console.log("Before Reassing");
    console.log(nameVar,nameLet,nameConst);

    nameVar = "Noman"
    nameLet = "Akbar"
    // nameConst = "Khan" // Assignment to constant variable.
    console.log("Block Reassing");
    console.log(nameVar);
    console.log(nameLet);
    console.log(nameConst);
}


var nameVar = "Bilal";
let nameLet = "Ahmed";
const  nameConst = "Ali"


console.log("Outside the block");
console.log(nameVar,nameLet,nameConst);