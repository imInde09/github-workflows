/**
 * A simple script to demonstrate CodeQL analysis.
 * This function calculates the sum of two numbers.
 */
function add(a, b) {
    return a + b;
}

console.log("2 + 3 =", add(2, 3));

// Intentionally unused variable to see if validation picks it up (CodeQL might not flag this specific one as security, but it's code)
const unused = "I am not used";
