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
  document.getElementById('formLoan').reset();
}
let ale = document.getElementById('ale'), investment = 0;
let formLoan = document.getElementById('formLoan');
formLoan.addEventListener('submit', (e) => {
  e.preventDefault();
  let total = Number(document.getElementById('total').value), mortgage = Number(document.getElementById('mortgage').value);
  if(mortgage < 1000000) {
    investment = (total * .50);
    ale.innerText = `
      the 50% of the investment of each partner is: $${investment}
    `;
  } else {
    if (mortgage < total) {
      investment = (Math.abs(total - mortgage) / 2);
      ale.innerText = `
        the investment total of the mortgage is: $${mortgage}
        the investment that corresponds to each partner is: $${investment}
      `;
    } else {
      ale.innerText = `
        reconsider the investment
      `;
    }
  }
  e.target.reset();
});