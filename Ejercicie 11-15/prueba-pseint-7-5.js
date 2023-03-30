window.onload = function () {
  document.getElementById('formCalc').reset();
}
let demo = document.getElementById('demo');
let formCalc = document.getElementById('formCalc');
formCalc.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ejercicies 15
  let numCalc = parseFloat(document.getElementById('numCalc').value), numCalc2 = parseFloat(document.getElementById('numCalc2').value), numCalc3 = document.getElementById('numCalc3').value;
  if (numCalc3 == 'lb') {
    let conv = Number((numCalc / 2.2046).toFixed(2));
    let calcForce = Number((conv * numCalc2));
    demo.textContent = (isNaN(calcForce) ? 'Error' : calcForce + 'N');
  } else if (numCalc3 == 'n') {
    let conv = Number((numCalc / 9.8).toFixed(1));
    let calcForce = Number((conv * numCalc2));
    demo.textContent = (isNaN(calcForce) ? 'Error' : calcForce + 'N');
  } else {
    let calcForce = Number((numCalc * numCalc2));
    demo.textContent = (isNaN(calcForce) ? 'Error' : calcForce + 'N');
  }
  e.target.reset();
});