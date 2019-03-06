function formatTime(seconds) {
  var result = seconds % 60;

  if (result < 10) {
    result = "0" + result + "s";
  } else {
    result += "s";
  }
  if (seconds >= 60) {
    if ((seconds / 60) % 60 < 10) {
      result = "0" + Math.floor((seconds / 60) % 60) + "m" + result;
    } else {
      result = Math.floor((seconds / 60) % 60) + "m" + result;
    }
  }
  if (seconds >= 3600) {
    result = Math.floor(seconds / 3600) + "h" + result;
  }
  return result;
}
exports.format = formatTime;
