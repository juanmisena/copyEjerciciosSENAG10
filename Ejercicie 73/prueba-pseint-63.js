window.onload = function () {
  startTime();
}
let ale = document.getElementById('ale'), outHours, outMinutes, outSeconds;
function startTime() {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let ap = (hr < 12) ? "AM" : "PM";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  ale.innerHTML = `${hr} : ${min} : ${sec} ${ap}`;
  let time = setTimeout(function() { startTime(); }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}