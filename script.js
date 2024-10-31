function greet(name) {
    return `Welcome2thedungeon, ${name}!`;
}
console.log(greet("some name")); // Outputs: Welcome2thedungeon, some name!

function getCircumference(diameter) { const pi = Math.PI; }
// Pi constant return pi * diameter;

function getCircumference(diameter) {
    const pi = Math.PI; // Pi constant
    return pi * diameter; // Circumference formula: π * diameter
}

function firstFunction(diameter) {
    console.log("Starting first function...");

    // Call to second function
    let circumference = getCircumference(diameter);

    console.log(`The circumference is: ${circumference}`);
    console.log("Finished call to second function.");
}
function causeStackOverflow() {
    return causeStackOverflow(); // Recursive call 
}
// causeStackOverflow();
