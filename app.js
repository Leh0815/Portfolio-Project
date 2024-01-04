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
