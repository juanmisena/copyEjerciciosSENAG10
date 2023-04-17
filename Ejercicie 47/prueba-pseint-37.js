(function () {
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
  // // // //
  // // // //
  let x = document.getElementById('x'), parent_something = document.getElementById('parent-something'), input_something = parent_something.childNodes[3], label_something = parent_something.childNodes[1], i_something = label_something.childNodes.item(0);
  x.addEventListener('change', (e) => {
    if (e.target.options[1].selected) {
      i_something.classList.remove('fa-percent');
      i_something.classList.add('fa-credit-card');
      input_something.setAttribute('name', 'sar');
      input_something.setAttribute('id', 'sar');
      input_something.setAttribute('placeholder', 'enter the fixed quota for the SAR');
      parent_something.style.display = 'flex';
    } else {
      i_something.classList.remove('fa-credit-card');
      i_something.classList.add('fa-percent');
      input_something.setAttribute('name', 'percent');
      input_something.setAttribute('id', 'percent');
      input_something.setAttribute('max', '100');
      input_something.setAttribute('placeholder', 'enter a Porcentage for SAR');
      parent_something.style.display = 'flex';
    }
  });
})();
window.onload = function () {
  document.getElementById('formSar').reset();
}
let ale = document.getElementById('ale'), sar, percent;
let formSar = document.getElementById('formSar');
formSar.addEventListener('submit', (e) => {
  e.preventDefault();
  let salary = Number(document.getElementById('salary').value), x = Number(document.getElementById('x').value);
  switch (x) {
    case 1:
      sar = Number(document.getElementById('sar').value);
      break;
    case 2:
      percent = Number(document.getElementById('percent').value);
      sar = (salary * percent) / 100;
      break;
  }
  ale.innerText = `
    The amount of money you deposit each month for SAR is: $${sar}
    Your monthly payment is: $${Math.abs(salary - sar)}
  `;
  e.target.querySelector('#parent-something').style.display = 'none';
  e.target.reset();
});