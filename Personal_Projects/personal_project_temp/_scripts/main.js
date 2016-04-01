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

// Add onload for scroll-fade effect
$(window).on("load", function () {
  $(window).scroll(function() {
    $(".row").each(function() {
      var columnA = $(this).children(".col-1");
      var columnB = $(this).children(".col-2");
      var rowBottom = $(this).offset().top + ($(this).outerHeight() / 2);
      var scrollBottom = $(window).scrollTop() + $(window).innerHeight();

      if (rowBottom < scrollBottom) {
        $(columnA).fadeTo(500, 1);
        $(columnB).fadeTo(500, 1);
      }
    });
  });
});
