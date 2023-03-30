(function () {
  let weight =  document.getElementById('weight'), height = document.getElementById('height'), n = document.getElementById('n');
  weight.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      weight.classList.remove('is-invalid');
      height.removeAttribute('disabled');
      height.setAttribute('required', '');
    } else {
      weight.classList.add('is-invalid');
      height.removeAttribute('required');
      height.setAttribute('disabled', '');
      height.value = null;
      n.removeAttribute('required');
      n.setAttribute('disabled', '');
      n.value = null;
    }
  });
  height.addEventListener('keyup', e => {
    if (e.target.value.length > 0) {
      height.classList.remove('is-invalid');
      n.removeAttribute('disabled');
      n.setAttribute('required', '');
    } else {
      height.classList.add('is-invalid');
      n.removeAttribute('required');
      n.setAttribute('disabled', '');
      n.value = null;
    }
  });
  n.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      n.classList.remove('is-invalid');
    } else {
      n.classList.add('is-invalid');
      n.value = null;
    }
  });
})();
window.onload = function () {
  document.getElementById('formFarm').reset();
}
let ale = document.getElementById('ale'), arrFarm = [], quality = 0, kilo = 0, dis = 0, stp = false, objFarm;
let formFarm = document.getElementById('formFarm');
formFarm.addEventListener('submit', e => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let weight = Number(document.getElementById('weight').value), height = Number(document.getElementById('height').value), n = Number(document.getElementById('n').value);
  quality = (weight * height) / n;
  if (quality >= 15) {
    kilo = Number((1200 * quality).toFixed(3));
  } else if (quality > 8) {
    kilo = Number((1000 * quality).toFixed(3));
  } else {
    kilo = Number((800 * quality).toFixed(3));
  }
  ale.innerText = `the average of quality is: ${quality}
  the kilo of egg is of $${kilo}`;
  e.target.reset();
  e.target.querySelector('#height').removeAttribute('required');
  e.target.querySelector('#height').setAttribute('disabled', '');
  e.target.querySelector('#n').removeAttribute('required');
  e.target.querySelector('#n').setAttribute('disabled', '');
});