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
  document.getElementById('formCSE03').reset();
}
let ale = document.getElementById('ale'), arrNumber = [], a = 0, b = 0, c = 0, mess = "";
let formCSE03 = document.getElementById('formCSE03');
formCSE03.addEventListener('submit', ev => {
  if (ev.target.checkValidity()) {
    ev.preventDefault();
  }
  let number = Number(document.getElementById('number').value);
  arrNumber.push(number);
  a = arrNumber[0];
  b = arrNumber[1];
  c = arrNumber[2];
  if (arrNumber.length == 3) {
    if (a != b && a != c && b != c) {
      if ((a > b && a < c) || (a < b && a > c)) {
        mess = `the middle number is: ${a}`;
      } else if ((b > a && b < c) || (b < a && b > c)) {
        mess = `the middle number is: ${b}`;
      } else if ((c > a && c < b) || (c < a && c > b)) {
        mess = `the middle number is: ${c}`;
      } 
    } else {
      mess = `the numbers must be different`;
    }
    arrNumber.length = 0;
  }
  ale.innerText = mess;
  ev.target.reset();
});