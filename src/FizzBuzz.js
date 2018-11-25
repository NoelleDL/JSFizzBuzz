/*jshint esversion: 6*/

const FizzBuzz = () => {
  const fizzBuzzer = { 3: "Fizz", 5: "Buzz"};
  let numberArray = [];


  for (let number = 1; number <= 100; number++) {
    let output = "";
    for (let key in fizzBuzzer) {
      if (number % key === 0) { output += fizzBuzzer[key]; }
    }
    if (output === "") { output = number; }
    numberArray.push(output);
  }
  return numberArray;
};
