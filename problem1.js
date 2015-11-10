/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sum(number){
    var c = 1;
    var ac = 0;
    for (c = 1; c < number; c++){
        if (c % 3 === 0 || c % 5 === 0){
            ac += c;
        }
    }
    return ac;
}
console.log(sum(1000));

// Expected result: 
