const timeline = document.getElementById("timeline");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

right.onclick = () => {
  timeline.scrollBy({
    left: 300,
    behavior: "smooth"
  });
}

left.onclick = () => {
  timeline.scrollBy({
    left: -300,
    behavior: "smooth"
  });
}
