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

  var icon = document.getElementById("icon");

  if (options.style.display == "block") {
    icon.style.transform = "rotate(180deg)";
  } else {
    icon.style.transform = "rotate(0deg)";
  }
}

function moveSlider(number) {
  var slider = document.getElementById("slider");

  switch (number) {
    case 1:
      slider.style.top = "5px";
      slider.style.display = "block";
      break;
    case 2:
      slider.style.top = "59px";
      slider.style.display = "block";
      break;
    case 3:
      slider.style.top = "109px";
      slider.style.display = "block";
      break;
    case 4:
      slider.style.top = "161px";
      slider.style.display = "block";
      break;
    case 5:
      slider.style.top = "214px";
      slider.style.display = "block";
      break;
  }
}

function outSlider() {
  var slider = document.getElementById("slider");
  slider.style.display = "none";
}

function iconrotate() {
  var icon = document.getElementById("icon");
  var options = document.getElementById("options");

  if (options.style.display == "block") {
    icon.style.transform = "rotate(180deg)";
  } else {
    icon.style.transform = "rotate(0deg)";
  }
}
