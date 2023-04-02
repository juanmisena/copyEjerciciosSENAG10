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
  // Ejercicies 13
  let numCalc = parseFloat(document.getElementById('numCalc').value), numCalc2 = parseFloat(document.getElementById('numCalc2').value);
  let calcRectangle = Number(numCalc * numCalc2);
  demo.textContent = (isNaN(calcRectangle) ? 'Error' : calcRectangle);
  e.target.reset();
});