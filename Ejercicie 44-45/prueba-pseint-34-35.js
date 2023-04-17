// Ejercicies 44 And 45
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
  // // // //
  // // // //
  let subjects = document.getElementById('subjects'), costs = document.getElementById('costs'), average = document.getElementById('average');
  subjects.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      costs.removeAttribute('disabled');
    } else {
      costs.setAttribute('disabled', '');
      costs.value = '';
      average.setAttribute('disabled', '');
      average.value = '';
    }
  });
  costs.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      average.removeAttribute('disabled');
    } else {
      average.setAttribute('disabled', '');
      average.value = '';
    }
  });
})();
window.onload = function () {
  document.getElementById('formSch').reset();
}
let ale = document.getElementById('ale'), tuition = 0, discont = 0, total = 0;
let formSch = document.getElementById('formSch');
formSch.addEventListener('submit', (e) => {
  e.preventDefault();
  let subjects = Number(document.getElementById('subjects').value), costs = Number(document.getElementById('costs').value), average = Number(document.getElementById('average').value);
  tuition = subjects * costs;
  if (average >= 9) {
    discont = tuition * .30;
    total = tuition - discont;
  } else {
    total = tuition + (tuition * .10);
  }
  ale.classList.add('pb-5');
  ale.innerText = `
    The total to pay is: $${total}
    The applied discount is: $${discont}
  `;
  e.target.querySelector('#costs').setAttribute('disabled', '');
  e.target.querySelector('#average').setAttribute('disabled', '');
  e.target.reset();
});