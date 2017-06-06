$(document).ready(function() {
  $("#count-form").submit(function() {

    $("ul#counting").children("li").remove();

    var stop = parseInt($("input#number1").val());
    var add = parseInt($("input#number2").val());

    if (add >= stop) {
      alert("Your Count By number must be less than Count To");
      $("#count-form").reset();
    }

    for (var i = 0; i <= stop; i+= add) {
      $("ul#counting").append('<li>' + i + '</li>');
    }
    $(".results").show();
    event.preventDefault();
  });
});
