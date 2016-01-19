describe('triangleTracker', function() {
  it("will have equal side lengths", function() {
    expect(triangleTracker(30, 30, 30)).to.equal("equilateral");
  });
  it("will have two equal sides", function() {
    expect(triangleTracker(30, 30, 10)).to.equal("isosceles");
  });
});
