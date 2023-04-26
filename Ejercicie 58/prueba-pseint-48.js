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
  document.getElementById('formOwner').reset();
}
let ale = document.getElementById('ale'), loan = 0, new_balance = 0, ince_purchase = 0;
let formOwner = document.getElementById('formOwner');
formOwner.addEventListener('submit', ev => {
  ev.preventDefault();
  let salary = Number(document.getElementById('salary').value);
  if (salary < 0) {
    loan = Math.abs(10000 - salary);
    new_balance = loan + salary;
  } else if (salary < 20000) {
    loan = Math.abs(20000 - salary);
    new_balance = loan + salary;
  } else {
    new_balance = salary;
  }
  new_balance = new_balance - 7000;
  ince_purchase = Math.floor(new_balance / 2);
  ale.innerText = `the budget will be distributed in the following manner:
  for computer equipment: $5000
  for furniture: $2000
  for the purchase of supplies: $${ince_purchase}
  for incentives: $${ince_purchase}
  the loan that was requested to the bank is: $${loan}`;
  ev.target.reset();
  if (!ale.classList.contains('animate__fadeInBottomLeft')) {
    ale.classList.remove('animate__fadeInBottomRight');
    ale.classList.add('animate__fadeInBottomLeft');
  } else {
    ale.classList.remove('animate__fadeInBottomLeft');
    ale.classList.add('animate__fadeInBottomRight');
  }
});