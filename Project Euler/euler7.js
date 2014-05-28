/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/

// TODO Sieve Implementation

// Improved isPrime function
function isPrime2(n) {
	if(n === 1) {return false;}
	else if(n < 4) {return true;}
	else if(n % 2 === 0) {return false;}
	else if(n < 9) {return true;}
	else if(n % 3 === 0) {return false;}
	else {
		var root = Math.floor(Math.sqrt(n));
		for(i = 5; i <= root; i += 6) {
			if(n % i === 0) { return false;}
			else if(n % (i + 2) === 0) {return false;}
		}
		return true;
	}
}

// First implementation
function isPrime(n) {
	if(n < 2) {return false;}
	var root = Math.floor(Math.sqrt(n));
	for(i = 2; i <= root; i++) {
		if(n % i === 0) { return false;}
	}
	return true;
}

function nthPrime(place) {
	var counter = 1;
	var current = 3;
	while(counter < place) {
		if(isPrime2(current)) {
			counter++;
		}
		// Skip even numbers
		current += 2;
	}
	// undo the last addition
	return current - 2;
}

console.log(nthPrime(10001));