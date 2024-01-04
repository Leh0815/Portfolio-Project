// 计算总秒数
const totalSeconds = 6566140147;

// 将总秒数转换为年、月、日、小时、分钟、秒
const years = Math.floor(totalSeconds / (365.25 * 24 * 60 * 60));
const remainingSeconds = totalSeconds % (365.25 * 24 * 60 * 60);
const days = Math.floor(remainingSeconds / (24 * 60 * 60));
const hours = Math.floor((remainingSeconds % (24 * 60 * 60)) / (60 * 60));
const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
const seconds = remainingSeconds % 60;

// 构建消息
const message = `I've been programming for ${years} years, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds!`;

// 将消息显示在 HTML 中
