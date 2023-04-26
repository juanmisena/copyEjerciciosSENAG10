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
  document.getElementById('formConv').reset();
}
let ale = document.getElementById('ale'), fatalCount = 12, arrConv = [], mess = "";
let formConv = document.getElementById('formConv');
formConv.addEventListener('submit', ev => {
  if (ev.target.checkValidity()) {
    ev.preventDefault();
  }
  let number = document.getElementById('number'), n;
  number.setAttribute('placeholder', `enter ${--fatalCount} numbers...`);
  n = Number(number.value);
  arrConv.push(n);
  if (arrConv.length == 12) {
    ale.innerText = "";
    arrConv.forEach((item) => {
      if (item > 0) {
        mess += - Math.abs(item) + "\n";
      } else {
        mess += Math.abs(item) + "\n";
      } 
    });
    ale.innerText = mess;
    if (number.getAttribute('placeholder').includes("0")) {
      number.setAttribute('placeholder', `enter ${fatalCount = 12} numbers...`);
    }
    ev.target.querySelector('.btn-outline-primary').children[0].classList.remove('fa-send-o');
    ev.target.querySelector('.btn-outline-primary').children[0].classList.add('fa-circle-o-notch');
    ev.target.querySelector('.btn-outline-primary').setAttribute('type', 'button');
    ev.target.querySelector('.btn-outline-primary').addEventListener('click', function (e) {
      if (e.bubbles) window.location.href = "http://127.0.0.1:5500/Ejercicie%2063/prueba-pseint-53.html";
    });
  }
  ev.target.reset();
});