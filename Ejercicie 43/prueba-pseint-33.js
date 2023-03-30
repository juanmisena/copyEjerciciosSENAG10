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
  ale.innerText = `
    ${mess}
    the interest to payment is: $${interest}
    the total share to pay, you must payment is: $${(capital + interest)}
  `;
  e.target.reset();
});