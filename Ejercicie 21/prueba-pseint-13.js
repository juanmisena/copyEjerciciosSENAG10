window.onload = function () {
  document.getElementById('formClim').reset();
}
document.addEventListener('DOMContentLoaded', () => {
  let alert = document.getElementById('alert'), arrCli = [], mess = "";
  let formClim = document.getElementById('formClim');
  formClim.addEventListener('submit', (e) => {
    e.preventDefault();
    let numClim = parseFloat(document.getElementById('numClim').value);
    arrCli.push(numClim);
    let aveClim = arrCli.reduce((acc, numClim) => acc + numClim, 0);
    let resCli = Number(Math.ceil(aveClim / 7).toFixed(2));
    if (resCli > 35) {
      mess = "¡Que semana Tan Calurosa!";
    } else if ((resCli >= 15) && (resCli <= 35)) {
      mess = "¡Que clima tan delicioso!";
    } else if (resCli < 15) {
      mess = "¡Que semana tan fría!";
    }
    if(arrCli.length == 7) {
      formClim.innerHTML = '';
      alert.classList.remove('alert-light');
      alert.classList.add('alert-success');
      alert.innerText = mess;
    }
    formClim.reset();
  });
});