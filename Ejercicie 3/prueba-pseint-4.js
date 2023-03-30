(function () {
  function changeWindow(x) {
    if (x.matches) {
      document.querySelector('#p-btn').classList.add('col-12', 'btn-group');
    } else {
      document.querySelector('#p-btn').classList.remove('col-12', 'btn-group');
    }
  }
  let x = window.matchMedia("(max-width: 768px)");
  changeWindow(x);
  x.addEventListener("change", changeWindow);
})();
let formDistance = document.getElementById('formDistance'), speed = document.getElementById('speed'), time = document.getElementById('time'), demo = document.getElementById('demo'), fspeed = document.getElementById('fspeed'), ftime = document.getElementById('ftime');
let d = 0;
formDistance.addEventListener('submit', function (e) {
  e.preventDefault();
  let spN = parseInt(speed.value), tmN = parseInt(time.value), fspN = parseInt(fspeed.value), ftmN = parseInt(ftime.value);
  let anySp, anyTm, anySpN = 0, anyTmN = 0;
  if (isNaN(spN) || isNaN(tmN)) {
    alert("empty!! field(s)");
  } else {
    switch (fspN) {
      case 1:
        anySp = "km/h";
        break;
      case 2:
        anySp = "m/s";
        break;
      default:
        anySp = "none";
    }
    switch (ftmN) {
      case  1:
        anyTm = "h";
        break;
      case 2:
        anyTm = "m";
      break;
      case 3:
        anyTm = "s";
      break;
      default:
        anyTm = "none";
        break;
    }
    if ((anySp == "km/h") && (anyTm == "h")) {
      d = spN * tmN;
      demo.textContent = d + ' km';
      // const text = node.textContent;
      console.log("this result is-------->" + d + " km");
    } else if ((anySp == "m/s") && (anyTm == "s")) {
      d = spN * tmN;
      demo.textContent = d + ' m';
      console.log("this result is-------->" + d + " m");
    }else if ((anySp == "km/h") && (anyTm == "m")) {
      anyTmN = parseFloat((tmN * (1/60)).toFixed(4));
      d = spN * anyTmN;
      demo.textContent = d + ' km';
      console.log("this result is-------->" + d + " km");
    }else if ((anySp == "km/h") && (anyTm == "s")) {
      if (confirm('you need it in km or m \\if press acept is (km) or cancel is (m)')) {
        anyTmN = parseFloat((tmN * (1/3600)).toFixed(4));
        d = spN * anyTmN;
        demo.textContent = d + ' km';
        console.log("this result is-------->" + d + " km");
      } else {
        anySpN = parseFloat((spN * (1/3.6)).toFixed(4));
        d = anySpN * tmN;
        demo.textContent = d + ' m';
        console.log("this result is-------->" + d + " m");
      }
    } else if ((anySp == "m/s") && (anyTm == "h")) {
      anyTmN = tmN * 3600;
      d = spN * anyTmN;
      demo.textContent = d + ' km';
      console.log("this result is-------->" + d + " m");
    } else if ((anySp == "m/s") && (anyTm == "m")) {
      anyTmN = tmN * 60;
      d = spN * anyTmN;
      demo.textContent = d + ' m';
      console.log("this result is-------->" + d + " m");
    }
  }
  formDistance.reset();
});