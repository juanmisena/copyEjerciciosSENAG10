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
  // Ejercicies 15
  let numCalc = parseFloat(document.getElementById('numCalc').value), numCalc2 = parseFloat(document.getElementById('numCalc2').value);
  let calcForce = numCalc * numCalc2;
  demo.textContent = (isNaN(calcForce)) ? 'Error' : calcForce + ' N';
  /* if (numCalc3 == 'lb') {
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
  } */
  e.target.reset();
});