// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  var sum = 0;
  for (var i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }

  return sum;
}

// original code for freeCodeCamp check.
multiplesOf3and5(1000);

// should return 543
console.log(multiplesOf3and5(49));

// should return 233168
console.log(multiplesOf3and5(1000));

// should return 16687353
console.log(multiplesOf3and5(8456));

//should return 89301183
console.log(multiplesOf3and5(19564));