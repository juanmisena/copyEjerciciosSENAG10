(function () {
  let hours = document.getElementById('hours'), paymentxhours = document.getElementById('paymentxhours');
  hours.addEventListener('keyup', function (e) {
    if (e.target.value.length > 0) {
      paymentxhours.removeAttribute('disabled');
    } else {
      paymentxhours.value = '';
      paymentxhours.setAttribute('disabled', '');
    }
  });
})();
window.onload = function () {
  document.getElementById('formAmount').reset();
}
let ale = document.getElementById('ale'), triples = 0, salary = 0, double = 0;
let formAmount = document.getElementById('formAmount');
formAmount.addEventListener('submit', (e) => {
  e.preventDefault();
  let hours = Number(document.getElementById('hours').value), paymentxhours = Number(document.getElementById('paymentxhours').value);
  if (hours > 48) {
    triples = hours - 48;
    salary = 40 * paymentxhours + (8 * paymentxhours * 2) + (triples * paymentxhours * 3);
  } else {
    if (hours > 40) {
      double = hours - 40;
      salary = 40 * paymentxhours + (double * paymentxhours * 2);
    } else {
      salary = hours * paymentxhours;
    }
  }
  ale.innerText = `the total salary for the ${hours} hours worked is: $${salary}`;
  e.target.querySelector('#paymentxhours').setAttribute('disabled', '');
  e.target.reset();
});