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
  document.getElementById('formAdd').reset();
}
let ale = document.getElementById('ale'), arrAdd = [], x = 1, addition = 0;
let formAdd = document.getElementById('formAdd');
formAdd.addEventListener('submit', (e) => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let n = Number(document.getElementById('n').value);
  while (x <= n) {
    arrAdd.push(x);
    x++;
  }
  addition = arrAdd.reduce((acc, n) => acc + n, 0);
  ale.innerText = `the addition of natural number is: ${addition}`;
  e.target.reset();
});