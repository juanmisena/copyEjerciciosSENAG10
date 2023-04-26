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
  document.getElementById('formSal').reset();
}
let ale = document.getElementById('ale'), chAle = ale.children[0], arrSal = [], salary = 0, extra_hours = 0, booS = false, contW = 1;
let formSal = document.getElementById('formSal');
formSal.addEventListener('submit', (e) => {
  if (e.target.checkValidity()) {
    e.preventDefault();
    booS = false;
  }
  let hours = Number(document.getElementById('hours').value);
  arrSal.push(hours);
  if (arrSal.length == 10) {
    ale.innerHTML = '';
    arrSal.forEach((item, i) => {
      if (item <= 40) {
        salary = item * 2000;
      } else {
        extra_hours = Math.abs(item - 40);
        salary = item * 2000 + (extra_hours * 2500);
      }
      let br = document.createElement('br');
      chAle.textContent = `the salary of the worker ${i + 1} is: $${salary} \n`;
      chAle.appendChild(br);
      const clone = chAle.cloneNode(true);
      ale.appendChild(clone);
      // console.log(`the salary of the worker ${i + 1} is: $${salary}`);
    });
    arrSal.length = 0;
    booS = true;
  }
  if (booS) { contW = 1; } else { contW++; }
  console.log(booS, contW, arrSal.length);
  e.target.reset();
  e.target.querySelector('#hours').setAttribute('placeholder', e.target.querySelector('#hours').getAttribute('placeholder').replace(/\d+/g, contW));
});