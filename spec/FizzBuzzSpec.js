describe("FizzBuzz", function() {
  it("returns Fizz when multiple of 3", function() {
    expect(FizzBuzz(6)).toEqual("Fizz");
  });

  it("returns Buzz when multiple of 5", function() {
    expect(FizzBuzz(10)).toEqual("Buzz");
  });
});
