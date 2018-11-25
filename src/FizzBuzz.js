function FizzBuzz() {
  var fizzBuzzer = { 3: "Fizz", 5: "Buzz"};
  var numberArray = [];


  for (var number = 1; number <= 100; number++) {
    var output = "";
    for (var key in fizzBuzzer) {
      if (number % key === 0) {
        output += fizzBuzzer[key];
      }
    }
    if (output === "") {
      output = number;
    }
    numberArray.push(output);
  }
  return numberArray;
}
