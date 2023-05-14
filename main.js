// Chapter 1 

// Looping a triangle 
/**
 *  Write a loop that makes seven calls to console.log to output the following triangle:
 */

for (let i = "#"; i.length <= 7; i+= "#") {
    console.log(i);
}
/**
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */
//------------------------------------------------------------------------------------------------------------------
// FizzBuzz 

/*
    Write a program that uses console.log to print all the numbers from 1
    to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
    instead of the number, and for numbers divisible by 5 (and not 3), print
    "Buzz" instead.
    When you have that working, modify your program to print "FizzBuzz
    " for numbers that are divisible by both 3 and 5 (and still print "Fizz"
    or "Buzz" for numbers divisible by only one of those).
 */
for ( let i = 1; i <= 100; i++) {
    
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i +" FizzBuzz"); // 15 30 45 60 75 90
    }
    else if (i % 3 === 0) {
        console.log(i +" Fizz"); // 3 6 9 12 18 21 24 27 33 36 39 ... 99
    }
    else if ( i % 5 === 0) {
        console.log(i +" Buzz"); // 5 10 15 20 ... 100
    } 
    else {
        console.log(i); // 1 2 4 7 ... 98
    }
}
//------------------------------------------------------------------------------------------------------------------
// Chessboard
/**
 *  Write a program that creates a string that represents an 8×8 grid, using
    newline characters to separate lines. At each position of the grid there
    is either a space or a "#" character. The characters should form a
    chessboard.
 */
let chessTriangles = "# # # #";

for (let i = 1; i <=8 ; i++) {
    if ( i % 2 === 0) {
        console.log(chessTriangles);
    } else {
        console.log(" " +chessTriangles);
    }
}
/**
 *   # # # #
 *  # # # #
 *   # # # #
 *  # # # #
 *   # # # #
 *  # # # #
 *   # # # #
 *  # # # #
 */

//------------------------------------------------------------------------------------------------------------------
