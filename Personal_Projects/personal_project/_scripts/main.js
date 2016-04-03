$(document).ready(function() {
  // Fade in html body
  $("body").fadeTo(500, 1);
  // Add css transform when clicked
  $(".container").on("click", ".panel", function() {
    $(this).toggleClass("flipped");
  });
  // Create and Attach Modal Elmt
  $("h1").on("click", function(e) {
    if (e.shiftKey) {
      var wrapper = document.createElement("div");
      $(wrapper).addClass("modal-wrapper");

      $(wrapper).append("<img src='assets/images/excited.gif' alt='Bill Murray celebration' class='giphy-embed'><button id='exit'>Close</button>");

      $("body").append(wrapper);
      // Remove the elmt from DOM
      $("#exit").on("click", function() {
        $(wrapper).remove();
      });
    }
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
