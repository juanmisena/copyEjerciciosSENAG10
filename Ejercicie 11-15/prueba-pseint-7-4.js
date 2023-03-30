window.onload = function () {
  document.getElementById('formCalc').reset();
}
let demo = document.getElementById('demo');
let formCalc = document.getElementById('formCalc');
formCalc.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ejercicies 14
  let numCalc = parseFloat(document.getElementById('numCalc').value);
  let calcCube = Number((6 * Math.pow(numCalc, 2)));
  demo.textContent = (isNaN(calcCube) ? 'Error' : calcCube);
  e.target.reset();
});