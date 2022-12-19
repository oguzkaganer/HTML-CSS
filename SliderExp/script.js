
var imgs = document.getElementsByTagName("img");
var i = 0;
function slideRight() {
  if (imgs[i].classList.contains("img-on") && i < imgs.length - 1) {
    imgs[i].classList.remove("img-on");
    imgs[i].classList.add("img-left");
    imgs[i + 1].classList.remove("img-right");
    imgs[i + 1].classList.add("img-on");
    i++;
  } else {
    imgs[0].classList.remove("img-left");
    imgs[0].classList.remove("img-right");
    imgs[0].classList.add("img-on");

    imgs[1].classList.remove("img-on");
    imgs[1].classList.remove("img-left");
    imgs[1].classList.add("img-right");

    imgs[2].classList.remove("img-on");
    imgs[2].classList.remove("img-left");
    imgs[2].classList.add("img-right");

    imgs[3].classList.remove("img-on");
    imgs[3].classList.remove("img-left");
    imgs[3].classList.add("img-right");
    i=0;
  }
  console.log(i);
}

function slideLeft() {
  if (imgs[i].classList.contains("img-on") && i > 0) {
    imgs[i].classList.remove("img-on");
    imgs[i].classList.add("img-right");
    imgs[i - 1].classList.remove("img-left");
    imgs[i - 1].classList.add("img-on");
    i--;
  }
  console.log(i);
}

var points = document.getElementById("points");
for (var j = 0; j < imgs.length; j++) {
  var point = document.createElement("div");
  //point.classList.add("point");
  point.setAttribute("class","point");
  point.setAttribute("onclick", "goPage(" + j + ")");
  points.appendChild(point);
}

function goPage(index) {
  i = index;
  switch (index) {
    case 0:
      imgs[0].classList.remove("img-left");
      imgs[0].classList.remove("img-right");
      imgs[0].classList.add("img-on");

      imgs[1].classList.remove("img-on");
      imgs[1].classList.remove("img-left");
      imgs[1].classList.add("img-right");

      imgs[2].classList.remove("img-on");
      imgs[2].classList.remove("img-left");
      imgs[2].classList.add("img-right");

      imgs[3].classList.remove("img-on");
      imgs[3].classList.remove("img-left");
      imgs[3].classList.add("img-right");
      break;

    case 1:
      imgs[0].classList.remove("img-on");
      imgs[0].classList.remove("img-right");
      imgs[0].classList.add("img-left");

      imgs[1].classList.remove("img-left");
      imgs[1].classList.remove("img-right");
      imgs[1].classList.add("img-on");

      imgs[2].classList.remove("img-on");
      imgs[2].classList.remove("img-left");
      imgs[2].classList.add("img-right");

      imgs[3].classList.remove("img-on");
      imgs[3].classList.remove("img-left");
      imgs[3].classList.add("img-right");
      break;

    case 2:
      imgs[0].classList.remove("img-on");
      imgs[0].classList.remove("img-right");
      imgs[0].classList.add("img-left");

      imgs[1].classList.remove("img-on");
      imgs[1].classList.remove("img-right");
      imgs[1].classList.add("img-left");

      imgs[2].classList.remove("img-left");
      imgs[2].classList.remove("img-right");
      imgs[2].classList.add("img-on");

      imgs[3].classList.remove("img-on");
      imgs[3].classList.remove("img-left");
      imgs[3].classList.add("img-right");
      break;

    case 3:
      imgs[0].classList.remove("img-on");
      imgs[0].classList.remove("img-right");
      imgs[0].classList.add("img-left");

      imgs[1].classList.remove("img-on");
      imgs[1].classList.remove("img-right");
      imgs[1].classList.add("img-left");

      imgs[2].classList.remove("img-on");
      imgs[2].classList.remove("img-right");
      imgs[2].classList.add("img-left");

      imgs[3].classList.remove("img-left");
      imgs[3].classList.remove("img-right");
      imgs[3].classList.add("img-on");
      break;
  }
}
