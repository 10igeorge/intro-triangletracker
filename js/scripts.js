var triangleTracker = function(sideA, sideB, sideC) {
  if ((sideA === sideB) && (sideB === sideC)) {
    return "equilateral";
  } else if ((sideA === sideB) && (sideA !== sideC)) {
    return "isosceles";
  } else {
    return "Your side lengths do not make a valid triangle.";
  }
}
