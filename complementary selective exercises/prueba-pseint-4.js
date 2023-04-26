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
  document.getElementById('formCSE04').reset();
}
let ale = document.getElementById('ale'), arrNumber = [], a = 0, b = 0, op = 0, mess = "";
let formCSE04 = document.getElementById('formCSE04');
formCSE04.addEventListener('submit', (e) => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let number = Number(document.getElementById('number').value);
  arrNumber.push(number);
  a = arrNumber[0];
  b = arrNumber[1];
  if (arrNumber.length == 2) {
    if (a == b) {
      op = a * b;
      mess = `the numbers are equals, its mulplication is: ${op}`;
    } else if (a > b) {
      op = Math.abs(a - b);
      mess = `the number ${a} greatter that ${b}, its substration is: ${op}`;
    } else {
      op = a + b;
      mess = `the number ${a} smaller that ${b}, its addition is: ${op}`;
    }
    arrNumber.length = 0;
  }
  ale.innerHTML = mess;
  e.target.reset();
});