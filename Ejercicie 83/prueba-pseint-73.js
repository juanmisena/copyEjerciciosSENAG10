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
  /**
   * Block End
   */
  let amount =  document.getElementById('amount'), ball = document.getElementById('ball');
  amount.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      ball.removeAttribute('disabled');
      ball.setAttribute('required', '');
    } else {
      ball.removeAttribute('required');
      ball.setAttribute('disabled', '');
      ball.options[0].selected = true;
    }
  });
})();
window.onload = function () {
  document.getElementById('formStore').reset();
}
let ale = document.getElementById('ale'), arrStore = [], addition = 0, cont = 0, dis = 0, stp = false, objStore;
let formStore = document.getElementById('formStore');
formStore.addEventListener('submit', e => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let amount = Number(document.getElementById('amount').value), ball = parseInt(document.getElementById('ball').value);
  switch (ball) {
    case  1:
      dis = amount * .40;
      break;
    case 2:
      dis = amount * .25;
      break;
    case 3:
      dis = 0;
      break; 
  }
  ale.innerText = `the total to pay is: $${Math.abs(amount - dis)}
  the discont applied is: $${dis}`;
  e.target.reset();
  e.target.querySelector('#ball').removeAttribute('required');
  e.target.querySelector('#ball').setAttribute('disabled', '');
});
function stopStore() {
  return true;
}