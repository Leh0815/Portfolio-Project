const targetDate = new Date("2024-01-31T00:00:00");

function updateElapsedTime() {
  // 当前时间
  const currentDate = new Date();

  // 计算时间差
  const timeDifference = targetDate - currentDate;

  // 转换为天、小时和秒
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // 更新页面上的时间段落
  document.getElementById(
    "time"
  ).innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// 初始调用一次，然后每秒更新一次
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
