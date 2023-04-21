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
  document.getElementById('formGr').reset();
}
let ale = document.getElementById('ale'), arrGr = [], mens = 0, woman = 0;
let formGr = document.getElementById('formGr');
formGr.addEventListener('submit', ev => {
  if (ev.target.checkValidity()) ev.preventDefault();
  let n = Number(document.getElementById('n').value), gen = Number(document.getElementById('gen').value);
  arrGr.push(gen);
  ev.target.reset();
  ev.target.querySelector('#n').value = n;
  ev.target.querySelector('#n').setAttribute('disabled', '');
  if (arrGr.length == n) {
    arrGr.forEach((item) => {
      if (item == 1) {
        mens++;
      } else if (item == 2) {
        woman++;
      }
    });
    ale.innerText = `
    the number of male students is: ${mens}
    the number of female students is: ${woman}`;
    ev.target.querySelector('#n').value = '';
    ev.target.querySelector('#n').removeAttribute('disabled');
    arrGr.length = 0;
    mens = 0;
    woman = 0;
  }
});