function updateTimer() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(
    seconds
  )}`;
  document.getElementById("time-container").innerText = formattedTime;
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

setInterval(updateTimer, 1000);

updateTimer();

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

// const zoomImage = document.querySelector(".skillImgs");
// zoomImage.src = "your-new-image.jpg";
