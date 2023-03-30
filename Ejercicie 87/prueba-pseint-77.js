(function () {
  let amount = document.getElementById('amount'), sale = document.getElementById('sale');
  amount.addEventListener('keyup', e => {
    if (e.target.value.length > 0) {
      amount.classList.remove('is-invalid');
      sale.removeAttribute('disabled');
    } else {
      amount.classList.add('is-invalid');
      sale.setAttribute('disabled', '');
      sale.value = null;
    }
  });
  sale.addEventListener('keyup', e => {
    if (e.target.value.length > 0) {
      sale.classList.remove('is-invalid');
    } else {
      sale.classList.add('is-invalid');
    }
  });
})();
window.onload = function () {
  document.getElementById('sale').setAttribute('disabled', '');
  document.getElementById('formStore').reset();
}
let ale = document.getElementById('ale'), arrStore = [], addition = 0, total = 0, vat = 0, change = 0, close_today = 0, stp = false, objStore;
let formStore = document.getElementById('formStore');
formStore.addEventListener('submit', e => {
  if (e.target.checkValidity()) {
    e.preventDefault();
    let amount = Number(document.getElementById('amount').value), sale = Number(document.getElementById('sale').value);
    arrStore.push(sale);
    vat = (sale * .16);
    total = (sale + vat);
    change = Math.abs(amount - total);
    close_today += total;
    ale.innerText = `value of iva: $${vat}
    value of change: $${change}
    value of total to pay: $${total}`;
    e.target.querySelector('#sale').setAttribute('disabled', '');
    e.target.reset();
  }
});