window.onload = function() {
  var inputPhrase = document.getElementById("inputPhrase");
  var submitPhrase = document.getElementById("submitPhrase");
  var translation = document.getElementById("translation");
  // Reset value of inputPhrase on click
  inputPhrase.addEventListener("click", function() {
    if (inputPhrase.getAttribute("value") === "Enter a phrase...") {
      inputPhrase.setAttribute("value", "");
    }
  });
  submitPhrase.addEventListener("click", function(e) {
    e.preventDefault();
    translation.style.opacity = 1;
  });
  console.log("Successful load");
}
