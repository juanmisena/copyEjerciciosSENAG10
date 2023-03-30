window.onload = function () {
  document.getElementById('formSal').reset();
}
let ale = document.getElementById('ale'), chAle = ale.children[0], arrSal = [], salary = 0, extra_hours = 0;
let formSal = document.getElementById('formSal');
formSal.addEventListener('submit', (e) => {
  if (e.target.checkValidity()) {
    e.preventDefault();
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
  }
  e.target.reset();
});