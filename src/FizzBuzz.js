function FizzBuzz() {
  var numberArray = [];

  for (var count = 1; count <= 100; count++) {
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
