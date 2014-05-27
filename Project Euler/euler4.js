// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


// http://en.wikipedia.org/wiki/Palindromic_number
// 1800 possible numbers between 100*100 and 999*999 that are palindromes

function isPalindrome(n) {
	n = String(n);
	// Only need to check half the word
	for(i = 0; i < Math.ceil(n.length / 2); i++) {
		if(n[i] !== n[(n.length - 1) - i]) {
			return false;
		}
	}
	return true;
}


function largestPalindrome() {
	var big = 0;
	var compare = 0;
	for(j = 999; j >= 100; j--) {
		for(k = 999; k >= 100; k--) {
			compare = j * k;
			if(isPalindrome(compare)) {
				if(compare > big) {
					big = compare;
				}
			}
		}
	}
	return big;
}

var biggest = largestPalindrome();
console.log(biggest);

// for(i = 10000; i <= 999999; i++) {
// 	compare = i;
// 	if(isPalindrome(compare)) {
// 		largestPalindrome = compare;
// 	}
// }

// function compare(a, b) {
// 	a = parseInt(a);
// 	b = parseInt(b);
// 	if (a < b)
// 	 return -1;
// 	if (a > b)
// 	 return 1;
// 	// a must be equal to b
// 	return 0;
// }