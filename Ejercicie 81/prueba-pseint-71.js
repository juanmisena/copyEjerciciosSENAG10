window.onload = function () {
  document.getElementById('p-purchase').style.display = "none";
  document.getElementById('formPur').reset();
}
let ale = document.getElementById('ale'), arrPur = [], addition = 0, cont = 0, stp = false;
let formPur = document.getElementById('formPur');
formPur.addEventListener('submit', e => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let client = Number(document.getElementById('client').value), purchase = parseInt(document.getElementById('purchase').value);
  if (!isNaN(purchase)) {
    arrPur.push(purchase);
    if (arrPur.length == client) {
      for (const item of arrPur) {
        addition += item;
      }
      ale.innerText = `sales made to ${client} clients is
      the total amount of sales is: $${addition}`;
      stp = true;
      e.target.reset();
      arrPur.length = 0;
      addition = 0;
      cont = 0;
    }
  }
  if (!stp) {
    e.target.querySelector('#p-client').style.display = "none";
    e.target.querySelector('#client').removeAttribute('required');
    e.target.querySelector('#client').setAttribute('disabled', '');
    e.target.querySelector('#client').value = client;
    e.target.querySelector('#p-purchase').style.display = "flex";
    e.target.querySelector('#purchase').removeAttribute('disabled');
    e.target.querySelector('#purchase').setAttribute('required', '');
    e.target.querySelector('#purchase').setAttribute('placeholder', `enter the total amount of your purchase ${++cont}`);
    e.target.querySelector('#purchase').value = null;
  } else {
    e.target.querySelector('#p-client').style.display = "flex";
    e.target.querySelector('#client').removeAttribute('disabled');
    e.target.querySelector('#client').setAttribute('required', '');
    e.target.querySelector('#p-purchase').style.display = "none";
    e.target.querySelector('#purchase').removeAttribute('required');
    e.target.querySelector('#purchase').setAttribute('disabled', '');
    e.target.querySelector('#purchase').setAttribute('placeholder', `enter the total amount of your purchase 1`);
    stp = false;
  }
});