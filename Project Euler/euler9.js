/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

// A: 31875000

// http://en.wikipedia.org/wiki/Pythagorean_triple

// Improved brute force
function tripletFinder() {
	for(var b = 500; b >= 1; b--) {
		for (var a = 500; a >= 1; a--) {
			if(a < b) {
				var c = Math.sqrt((a * a) + (b * b));
				if(a + b + c === 1000) {
					return (a * b * c);
				}
			}
		}
	}
}

console.log(tripletFinder());

/*// First implementation, Pretty inefficent about 30s
function isPythagoreanTriplet(a, b, c) {
	console.log(a + " " + b + " " + c);
	return ((a * a) + (b * b)) === (c * c);
}

function tripletFinder() {
	for(var i = 1; i <= 500; i++) {
		for (var j = 1; j <= 500; j++) {
			for(var k = 1; k <= 1000; k++) {
				if(i < j && j < k) {
					if((i + j + k) === 1000) {
						if(isPythagoreanTriplet(i, j, k)) {
							return (i * j * k);
						}
					}
				}
			}
		}
	}
}

console.log(tripletFinder());*/