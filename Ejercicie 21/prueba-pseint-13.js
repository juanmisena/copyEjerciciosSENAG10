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
  document.getElementById('formClim').reset();
}
document.addEventListener('DOMContentLoaded', () => {
  let alert = document.getElementById('alert'), arrCli = [], mess = "", arrWeeks = ["monday", "thuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], caseDay;
  let formClim = document.getElementById('formClim');
  formClim.addEventListener('submit', (e) => {
    e.preventDefault();
    let numClim = parseFloat(document.getElementById('numClim').value);
    arrCli.push(numClim);
    if(arrCli.length == 7) {
      let aveClim = arrCli.reduce((acc, numClim) => acc + numClim, 0);
      let resCli = Number(Math.ceil(aveClim / 7).toFixed(2));
      if (resCli > 35) {
        mess = "¡Que semana Tan Calurosa!";
      } else if ((resCli >= 15) && (resCli <= 35)) {
        mess = "¡Que clima tan delicioso!";
      } else if (resCli < 15) {
        mess = "¡Que semana tan fría!";
      }
      formClim.innerHTML = '';
      alert.classList.remove('alert-light');
      alert.classList.add('alert-success');
      alert.innerText = mess;
      window.setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
    formClim.reset();
    caseDay = e.target.querySelector('input[type="number"]').getAttribute('placeholder');
    switch (caseDay) {
      case "monday":
          caseDay = arrWeeks[1];
          e.target.querySelector('input[type="number"]').setAttribute('placeholder', caseDay);
        break;
      case "thuesday":
          caseDay = arrWeeks[2];
          e.target.querySelector('input[type="number"]').setAttribute('placeholder', caseDay);
        break;
      case "wednesday":
          caseDay = arrWeeks[3];
          e.target.querySelector('input[type="number"]').setAttribute('placeholder', caseDay);
        break;
      case "thursday":
          caseDay = arrWeeks[4];
          e.target.querySelector('input[type="number"]').setAttribute('placeholder', caseDay);
        break;
      case "friday":
          caseDay = arrWeeks[5];
          e.target.querySelector('input[type="number"]').setAttribute('placeholder', caseDay);
        break;
      case "saturday":
          caseDay = arrWeeks[6];
          e.target.querySelector('input[type="number"]').setAttribute('placeholder', caseDay);
        break;
      case "sunday":
          caseDay = arrWeeks[0];
          e.target.querySelector('input[type="number"]').setAttribute('placeholder', caseDay);
        break;
    }
  });
});