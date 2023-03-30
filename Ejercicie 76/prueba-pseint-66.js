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