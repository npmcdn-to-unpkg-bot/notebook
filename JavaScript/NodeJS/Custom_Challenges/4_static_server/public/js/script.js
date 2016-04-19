window.onload = function() {
  var inputPhrase = document.getElementById("inputPhrase");
  inputPhrase.addEventHandler("click", function() {
    if (inputPhrase.innerHTML === "Enter a phrase...") {
      // Holding point
      inputPhrase.innerHTML = "";
    }
  });
  console.log("Successful load");
}
