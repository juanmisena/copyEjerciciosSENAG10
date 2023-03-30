(function () {
  let costs = document.getElementById('costs'), income = document.getElementById('income');
  costs.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      income.removeAttribute('disabled');
    } else {
      income.setAttribute('disabled', '');
      income.value = '';
    }
  });
})();
window.onload = function () {
  document.getElementById('formEstate').reset();
}
let ale = document.getElementById('ale'), hooking = 0, partial = 0;
let formEstate = document.getElementById('formEstate');
formEstate.addEventListener('submit', (e) => {
  e.preventDefault();
  let costs = Number(document.getElementById('costs').value), income = Number(document.getElementById('income').value);
  if (income < 800000) {
    hooking = costs * .15;
    partial = (Math.abs(costs - hooking) / (12 * 10));
  } else {
    hooking = costs * .30;
    partial = (Math.abs(costs - hooking) / (12 * 7));
  }
  ale.innerText = `
    the deposit to pay is: $${hooking}
    The payment of each partial is: $${partial}
  `;
  e.target.querySelector('#income').setAttribute('disabled', '');
  e.target.reset();
});