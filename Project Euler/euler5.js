/*2520 is the smallest number that can be divided by each of the numbers from 
1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of 
the numbers from 1 to 20?*/

// http://math.stackexchange.com/questions/58555/what-is-meant-by-evenly-divisible

function smallestEvenlyDivisible() {
	var compare = 20;
	var answer = -1;
	var done = false;
	var isAnswer = function(n) {
		for(i = 2; i <= 20; i++) {
			if(n % i !== 0) {
				return false;
			}
		}
		return true;
	}
	
	while(!done) {
		if(isAnswer(compare)) {
			done = true;
			answer = compare;
		} else {
			compare += 2;
		}
	}
	return answer
}

console.log(smallestEvenlyDivisible());