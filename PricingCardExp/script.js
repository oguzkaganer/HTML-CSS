function show(option) {
  var kayakingbtn = document.getElementById("btn-kayaking");
  var campingbtn = document.getElementById("btn-camping");
  var kayaking = document.getElementsByClassName("activity-kayaking")[0];
  var camping = document.getElementsByClassName("activity-camping")[0];
  var cards = document.getElementsByClassName("cards")[0];

  switch (option) {
    case 0:
      cards.style.transform = "rotateY(0deg)";
      kayaking.style.opacity = "1";
      camping.style.opacity = "0";
      kayakingbtn.style.backgroundColor = "#00ccff";
      kayakingbtn.style.color = "antiquewhite";
      campingbtn.style.backgroundColor = "antiquewhite";
      campingbtn.style.color = "#00ff95";
      break;
    case 1:
      cards.style.transform = "rotateY(180deg)";
      camping.style.opacity = "1";
      kayaking.style.opacity = "0";
      campingbtn.style.backgroundColor = "#00ff95";
      campingbtn.style.color = "antiquewhite";
      kayakingbtn.style.backgroundColor = "antiquewhite";
      kayakingbtn.style.color = "#00ccff";
      break;
  }
}
