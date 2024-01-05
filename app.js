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

// 更新时间每秒钟一次
setInterval(updateTimer, 1000);

// 初始更新
updateTimer();

// 获取元素
function toggleImageAndParagraph(element) {
  var image = element.querySelector("img");
  var paragraph = element.querySelector("p.hidden");

  // 切换图片和段落的显示状态
  if (image.style.display === "none") {
    image.style.display = "block";
    paragraph.style.display = "block";
  } else {
    image.style.display = "none";
    paragraph.style.display = "none";
  }
}
