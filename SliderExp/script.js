var imgs = document.getElementsByTagName("img");
var i = 0;
function slideRight() {
  if (imgs[i].classList.contains("img-on") && i < imgs.length - 1) {
    imgs[i].classList.remove("img-on");
    imgs[i].classList.add("img-left");
    imgs[i + 1].classList.remove("img-right");
    imgs[i + 1].classList.add("img-on");
    i++;
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
