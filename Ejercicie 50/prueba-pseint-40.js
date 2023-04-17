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
  document.getElementById('formFactory').reset();
}
let ale = document.getElementById('ale'), arrPoint = [], arrGain = [], total = 0, fine = 0, average = 0, accPoint = 0;
let formFactory = document.getElementById('formFactory');
formFactory.addEventListener('submit', (e) => {
  e.preventDefault();
  let point = Number(document.getElementById('point').value),
  gain = parseFloat(document.getElementById('gain').value);
  arrPoint.push(point);
  accPoint = arrPoint.reduce((acc, point) => acc + point, 0);
  average = accPoint / 5;
  if (arrPoint.length == 5) {
    document.getElementById('point').setAttribute('disabled', '');
    document.getElementById('gain').removeAttribute('disabled');
  }
  if (!isNaN(gain)) {
    arrGain.push(gain);
    total = arrGain.reduce((acc, gain) => acc + gain, 0);
    if (arrGain.length == 5) {
      if (average > 170) {
        fine = total * .50;
      } else {
        fine = 0;
      }
      ale.innerText = `
        The average imeca points is: ${average}
        The total profit for one week is: ${Math.abs(total - fine)}
        The loss of money for the review is: ${fine}
      `;
      e.target.querySelector('#point').removeAttribute('disabled');
      e.target.querySelector('#gain').setAttribute('disabled', '');
    }
  }
  e.target.reset();
});