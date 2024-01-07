const targetDate = new Date("2024-01-31T00:00:00");

function updateElapsedTime() {
  const currentDate = new Date();

  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById(
    "time"
  ).innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

updateElapsedTime();
setInterval(updateElapsedTime, 1000);

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
