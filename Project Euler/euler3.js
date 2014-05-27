// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


// Check out http://en.wikipedia.org/wiki/Primality_test
// Can skip even numbers since if they are divisible they can be divided by 2 also

var primes = [],
	daNumber = 600851475143,
	divider = 3;

while(divider <= daNumber) {
	while(daNumber % divider === 0) {
		daNumber /= divider;
		primes.push(divider);
	}
	// Skip even numbers
	divider += 2
}

// The last element in the array is the largest prime factor
console.log(primes[primes.length - 1]);