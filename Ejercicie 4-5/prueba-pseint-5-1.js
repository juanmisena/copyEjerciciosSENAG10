(function () {
  function changeWindow(x) {
    if (x.matches) {
      console.log(true);
      document.querySelector('#p-btn').classList.add('col-12', 'btn-group');
    } else {
      document.querySelector('#p-btn').classList.remove('col-12', 'btn-group');
    }
  }
  let x = window.matchMedia("(max-width: 768px)");
  changeWindow(x);
  x.addEventListener("change", changeWindow);
})();
window.onload = function () {
  document.getElementById('formSpeed').reset();
}
let tx_dist = "", tx_tm = "", anyTm = 0, anyConvTm = 0;
let formSpeed = document.getElementById('formSpeed');
formSpeed.addEventListener('submit', function (e) {
  e.preventDefault();
  let distance = document.getElementById('distance'), time = document.getElementById('time'), dist_uni = document.getElementById('dist_uni'), tim_uni = document.getElementById('tim_uni'), demo = document.getElementById('demo'), conv = document.getElementById('conv');
  let disN = parseFloat(distance.value), timN = parseFloat(time.value), dis_uniN = parseInt(dist_uni.value), tm_uniN = parseInt(tim_uni.value), d = 0;
  switch (dis_uniN) {
    case 1:
      tx_dist = "km";
      break;
    case 2:
      tx_dist = "m";
      break;
  }
  switch (tm_uniN) {
    case  1:
      tx_tm = "h";
      break; 
    case  2:
      tx_tm = "m";
      break;
    case  3:
      tx_tm = "s";
      break;
  }
  if ((tx_dist == "km") && (tx_tm == "h")) {
    d = parseFloat((disN / timN).toFixed(2));
    demo.textContent = d + " km/h";
    anyConvTm = (d * (1000 / 3600));
    conv.textContent = (anyConvTm).toFixed(2) + " m/s";
    // console.log("your value is---> " + d + " km/h");
  } else if ((tx_dist == "m") && (tx_tm == "s")) {
    d = parseFloat((disN / timN).toFixed(2));
    demo.textContent = d + " m/s";
    anyConvTm = (d * (3600 / 1000));
    conv.textContent = anyConvTm + " km/h";
    // console.log("your value is---> " + d + " km/h");
  } else if ((tx_dist == "km") && (tx_tm == "m")) {
    anyTm = (timN * (1 / 60));
    d = parseFloat((disN / anyTm).toFixed(2));
    demo.textContent = d + " km/h";
    anyConvTm = (d * (1000 / 3600));
    conv.textContent = (anyConvTm).toFixed(2) + " m/s";
    // console.log("your value is---> " + d + " km/h");
  } else if ((tx_dist == "m") && (tx_tm == "m")) {
    anyTm = timN * 60;
    d = parseFloat((disN / anyTm).toFixed(2));
    demo.textContent = d + " m/s";
    anyConvTm = (d * (3600 / 1000));
    conv.textContent = anyConvTm + " km/h";
    // console.log("your value is---> " + d + " km/h");
  } else if ((tx_dist == "m") && (tx_tm == "h")) {
    anyTm = (timN * 3600);
    d = parseFloat((disN / anyTm).toFixed(2));
    demo.textContent = d + " m/s";
    anyConvTm = (d * (3600 / 1000));
    conv.textContent = anyConvTm + " km/h";
    // console.log("your value is---> " + d + " km/h");
  } else if ((tx_dist == "km") && (tx_tm == "s")) {
    anyTm = (timN / 3600);
    d = parseFloat((disN / anyTm).toFixed(2));
    demo.textContent = d + " km/h";
    anyConvTm = (d * (1000 / 3600));
    conv.textContent = (anyConvTm).toFixed(2) + " m/s";
    // console.log("your value is---> " + d + " km/h");
  }
  formSpeed.reset();
});