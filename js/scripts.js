var triangleTracker = function(sideA, sideB, sideC) {
  var sideA = parseInt($('input#sideA').val());
  var sideB = parseInt($('input#sideB').val());
  var sideC = parseInt($('input#sideC').val());

  if ((sideA === sideB) && (sideB === sideC)) {
    $('#triangleResult').show();
    return "equilateral ";
  } else if ((sideA === sideB) && (sideA !== sideC)) {
    $('#triangleResult').show();
    return "isosceles ";
  } else if ((sideA !== sideB) && (sideA !== sideC) && (sideB !== sideC)) {
    $('#triangleResult').show();
    return "scalene ";
  } else {
    return "Your side lengths do not make a valid triangle.";
  }
}



$(document).ready(function() {
  $('.finalTriangle').click(function(event) {
    var result = triangleTracker(sideA, sideB, sideC);

    $('.triangle').text(result);



    event.preventDefault();
  });


});
