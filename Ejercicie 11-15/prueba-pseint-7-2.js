window.onload = function () {
  document.getElementById('formCalc').reset();
}
let demo = document.getElementById('demo');
let formCalc = document.getElementById('formCalc');
formCalc.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ejercicies 12
  let numCalc = parseFloat(document.getElementById('numCalc').value);
  let calcSphere = Number((4 * Math.PI * Math.pow(numCalc, 2)).toFixed(2));
  demo.textContent = calcSphere;
  e.target.reset();
});