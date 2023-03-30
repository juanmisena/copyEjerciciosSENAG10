window.onload = function () {
  document.getElementById('formCalc').reset();
}
let demo = document.getElementById('demo');
let formCalc = document.getElementById('formCalc');
formCalc.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ejercicies 13
  let numCalc = parseFloat(document.getElementById('numCalc').value), numCalc2 = parseFloat(document.getElementById('numCalc2').value);
  let calcRectangle = Number(numCalc * numCalc2);
  demo.textContent = (isNaN(calcRectangle) ? 'Error' : calcRectangle);
  e.target.reset();
});