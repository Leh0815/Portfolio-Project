let elapsedSeconds = 0;

function updateTimer() {
  // 计算天、小时、分钟和秒
  const days = Math.floor(elapsedSeconds / (24 * 60 * 60));
  const hours = Math.floor((elapsedSeconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;

  // 更新页面上的计时器
  document.getElementById(
    "timer"
  ).innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  // 增加逝去的秒数
  elapsedSeconds++;
}

// 初始调用一次，然后每秒更新一次
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
