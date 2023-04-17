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
  document.getElementById('formCap').reset();
}
let ale = document.getElementById('ale'), interest = 0, mess = "";
let formCap = document.getElementById('formCap');
formCap.addEventListener('submit', (e) => {
  e.preventDefault();
  let capital = Number(document.getElementById('capital').value);
  if (capital < 50000) {
    interest = (capital * .03);
    mess = "a 3% of interest was applied";
  } else {
    interest = (capital * .02);
    mess = "a 2% of interest was applied";
  }
  ale.classList.add('pb-5');
  ale.innerText = `
    ${mess}
    the interest to payment is: $${interest}
    the total share to pay, you must payment is: $${(capital + interest)}
  `;
  e.target.reset();
});