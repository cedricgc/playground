/*The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.*/


// var sumOfSquares = function(max) {
// 	var total = 0;
// 	for(i = 1; i <= max; i++) {
// 		total += i * i;
// 	}
// 	console.log(total);
// 	return total;
// }

// var squareOfSums = function(max) {
// 	var total = 0;
// 	for(i = 1; i <= max; i++) {
// 		total += i;
// 	}
// 	total = total * total;
// 	console.log(total);
// 	return total;
// }


// http://en.wikipedia.org/wiki/Square_pyramidal_number
var sumOfSquares = function(max) {
	return ((2 * (Math.pow(max, 3)) + (3 * (Math.pow(max, 2))) + max) / 6;
}

// http://en.wikipedia.org/wiki/Summation
var squareOfSums = function(max) {
	var total = (max * (max + 1)) / 2;
	total = total * total;
	return total;
}

console.log(sumOfSquares(100));
console.log(squareOfSums(100));
console.log(squareOfSums(100) - sumOfSquares(100));