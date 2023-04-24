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
  document.getElementById('p-n').style.display = "none";
  document.getElementById('formFN').reset();
}
let ale = document.getElementById('ale'), n = 0, len = 0, arrN = [], stp = false, min = 0, max = 0;
let formFN = document.getElementById('formFN');
formFN.addEventListener('submit', (e) => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let total = Number(document.getElementById('total').value);
  len = total;
  n = parseInt(document.getElementById('n').value);
  if (!isNaN(n)) {
    arrN.push(n);
    if (arrN.length == len) {
      max = Math.max(...arrN);
      min = Math.min(...arrN);
      stp = true;
      ale.innerText = `the number smaller entered is: ${min}
      the number greatter entered is: ${max}`;
      e.target.reset();
      arrN.length = 0;
      max = 0;
      min = 0;
    }
  }
  if (!stp) {
    e.target.querySelector('#p-total').style.display = "none";
    e.target.querySelector('#total').setAttribute('disabled', '');
    e.target.querySelector('#p-n').style.display = "flex";
    e.target.querySelector('#n').removeAttribute('disabled');
    e.target.querySelector('#n').setAttribute('required', '');
    e.target.querySelector('#n').value = null;
  } else {
    e.target.querySelector('#p-total').style.display = "flex";
    e.target.querySelector('#total').removeAttribute('disabled');
    e.target.querySelector('#p-n').style.display = "none";
    e.target.querySelector('#n').setAttribute('disabled', '');
    e.target.querySelector('#n').removeAttribute('required');
    stp = false;
  }
});