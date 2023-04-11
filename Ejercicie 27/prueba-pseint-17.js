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
  document.getElementById('numShop').value = '';
}
document.addEventListener('DOMContentLoaded', () => {
  let regex = /(\d)+/g;
  let alertI = document.getElementById('alert');
  let btn_shop = document.querySelector('.btn-outline-primary');
  btn_shop.addEventListener('click', (e) => {
    let numShop = document.getElementById('numShop'), valid, discontShop = 0, mess = "";
    valid = regex.test(numShop.value);
    if ((numShop.value == '') || (Number(numShop.value) < 0)) {
      numShop.classList.remove('is-valid');
      alertI.classList.remove('alert-primary');
      alertI.classList.remove('alert-success');
      numShop.classList.add('is-invalid');
      alertI.classList.add('alert-danger');
      alertI.innerText = 'field empty!, please write a positive number!...';
    } else {
      if(valid) {
        numShop.classList.remove('is-invalid');
        alertI.classList.remove('alert-primary');
        alertI.classList.remove('alert-danger');
        numShop.classList.add('is-valid');
        alertI.classList.add('alert-success');
        numShop = parseFloat(numShop.value);
        if ((numShop >= 10000) && (numShop <= 20000)) {
          discontShop = Math.ceil((numShop * 10) / 100);
          mess = `
            discont: 10%
            total value to pay is: ${Math.abs(numShop - discontShop)}
          `;
        } else if ((numShop >= 20000) && (numShop <= 50000)) {
          discontShop = Math.ceil((numShop * 30) / 100);
          mess = `
            discont: 30%
            total value to pay is: ${Math.abs(numShop - discontShop)}
          `;
        } else if (numShop > 50000) {
          discontShop = Math.ceil((numShop * 50) / 100);
          mess = `
            discont: 50%
            total value to pay is: ${Math.abs(numShop - discontShop)}
          `;
        } else {
          alertI.classList.remove('alert-success');
          alertI.classList.remove('alert-danger');
          alertI.classList.add('alert-primary');
          mess = `please enter a corresponding value equal to or greater than 10000`;
        }
        alertI.innerText = mess;
      } else {
        numShop.classList.remove('is-valid');
        alertI.classList.remove('alert-primary');
        alertI.classList.remove('alert-success');
        numShop.classList.add('is-invalid');
        alertI.classList.add('alert-danger');
        alertI.innerText = 'please write only numbers!...';
      }
    }
    if (e.bubbles) {
      document.getElementById('numShop').value = '';
    }
  });
});