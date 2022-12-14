var options = document.getElementById("options");
var text = document.getElementById("text");
text.innerHTML = document.getElementById("option1").innerHTML;

function dropdown() {
  var options = document.getElementById("options");
  options.style.display == "none"
    ? (options.style.display = "block")
    : (options.style.display = "none");
}

function selectOption(number) {
  var options = document.getElementById("options");
  var text = document.getElementById("text");
  text.innerHTML = document.getElementById("option" + number).innerHTML;

  options.style.display == "none"
    ? (options.style.display = "block")
    : (options.style.display = "none");
}
