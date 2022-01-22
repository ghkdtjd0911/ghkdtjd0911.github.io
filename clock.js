const clockHtml = document.getElementById("clock");

function ClockBuilding() {
  const date = new Date();
  const hour = padCheck(date.getHours());
  const minute = padCheck(date.getMinutes());
  const sec = padCheck(date.getSeconds());
  const time = `${hour}:${minute}:${sec}`;
  clockHtml.innerHTML = time;
}

function padCheck(data) {
  if (data.toString.length != 2) {
    return data.toString().padStart(2, 0);
  } else {
    return data.toString();
  }
}

ClockBuilding();
setInterval(ClockBuilding, 1000);
