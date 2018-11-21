describe("FizzBuzz", function() {

  var result;

  beforeEach(function() {
    result = FizzBuzz();
  });

  it("returns Fizz when multiple of 3", function() {
    result = result[5];
    expect(result).toEqual("Fizz");
  });

  it("returns Buzz when multiple of 5", function() {
    result = result[9];
    expect(result).toEqual("Buzz");
  });

  it("returns FizzBuzz when multiple of 15", function() {
    result = result[29];
    expect(result).toEqual("FizzBuzz");
  });

  it("returns the number when neither a multiple of 3, 5, nor 15", function() {
    result = result[6];
    expect(result).toEqual(7);
  });

  it("returns an array of all numbers from 1 to 100", function() {
    expect(result.length).toEqual(100);
  });
});
