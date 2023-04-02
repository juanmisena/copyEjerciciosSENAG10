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
  document.getElementById('formCalc').reset();
}
let demo = document.getElementById('demo');
let formCalc = document.getElementById('formCalc');
formCalc.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ejercicies 14
  let numCalc = parseFloat(document.getElementById('numCalc').value);
  let calcCube = Number(6 * (numCalc**2));
  demo.textContent = (isNaN(calcCube) ? 'Error' : calcCube);
  e.target.reset();
});