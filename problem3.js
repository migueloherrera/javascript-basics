/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

function isPrime(num) {
    var result = true;
    var iterations = (num/2) | 0;
    for (var i = 2; i < iterations; i++) {
        if (num % i === 0) {
            result = false;
		}
	}
	return result;
}

function getLargestPrimeFactor(num) {
	var i = num/2;
	while (true) {
		if (isPrime(i) && num % i === 0) {
			return i;
		}
		i--;
	}
}

console.log(getLargestPrimeFactor(600851475143)); 
// Expected result: 6857
