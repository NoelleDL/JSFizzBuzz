function FizzBuzz() {
  var numberArray = [];

  for (var count = 1; count <= 100; count++) {
    switch (true) {
      case count % 15 == 0:
        numberArray.push("FizzBuzz");
        break;
      case count % 3 == 0:
        numberArray.push("Fizz");
        break;
      case count % 5 == 0:
        numberArray.push("Buzz");
        break;
      default:
        numberArray.push(count);
        break;
    }
  }
  return numberArray;
}
