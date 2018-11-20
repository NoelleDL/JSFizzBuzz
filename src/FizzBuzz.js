function FizzBuzz(number) {
  var numberArray = [];
  var count;

  for (count = 1; count <= number; count++) {
    if (count % 15 == 0) {
      numberArray.push("FizzBuzz");
    }
    else if (count % 3 == 0) {
      numberArray.push("Fizz");
    }
    else if (count % 5 == 0) {
      numberArray.push("Buzz");
    }
    else numberArray.push(count);
  }
  return numberArray;
}
