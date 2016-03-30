$(document).ready(function() {
  // Add css transform when clicked
  $(".container").on("click", ".panel", function() {
    $(this).toggleClass("flipped");
    // When panel clicked change h1 to bg color of panel
    var bgColor = $(this).find(".front").css("background-color");
    $("h1").css({
      "color": bgColor,
      "text-shadow": "0px 0px 8px " + bgColor
    });
  });
});
