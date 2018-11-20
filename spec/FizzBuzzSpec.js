describe("FizzBuzz", function() {
  it("returns Fizz when multiple of 3", function() {
    result = FizzBuzz(6);
    result = result[5];
    expect(result).toEqual("Fizz");
  });

  it("returns Buzz when multiple of 5", function() {
    result = FizzBuzz(10);
    result = result[9];
    expect(result).toEqual("Buzz");
  });

  it("returns FizzBuzz when multiple of 15", function() {
    expect(FizzBuzz(30)).toEqual("FizzBuzz");
  });

  it("returns the number when neither a multiple of 3, 5, nor 15", function() {
    expect(FizzBuzz(7)).toEqual(7);
  });

  it("returns an array of all numbers from 1 to 20", function() {
    result = FizzBuzz(20);
    expect(result.length).toEqual(20);
  });
});
