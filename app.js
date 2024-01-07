let elapsedSeconds = localStorage.getItem("elapsedSeconds")
  ? parseInt(localStorage.getItem("elapsedSeconds"))
  : 0;

function updateTimer() {
  const days = Math.floor(elapsedSeconds / (24 * 60 * 60));
  const hours = Math.floor((elapsedSeconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;

  document.getElementById(
    "timer"
  ).innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  elapsedSeconds++;
  localStorage.setItem("elapsedSeconds", elapsedSeconds);
}

updateTimer();
setInterval(updateTimer, 1000);

function toggleImageAndParagraph(element) {
  var image = element.querySelector("img");
  var paragraph = element.querySelector("p.hidden");

  if (image.style.display === "none") {
    image.style.display = "block";
    paragraph.style.display = "block";
  } else {
    image.style.display = "none";
    paragraph.style.display = "none";
  }
}
