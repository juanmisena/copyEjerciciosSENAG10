window.onload = function () {
  document.getElementById('formFab').reset();
}
let ale = document.getElementById('ale'), ownInvestment = 0, bankLoan = 0, factoryCredit = 0, investFab = 0, totalBuy = 0;
let formFab = document.getElementById('formFab');
formFab.addEventListener('submit', (e) => {
  e.preventDefault();
  let shopFab = Number(document.getElementById('shopFab').value);
  if (shopFab <= 500000) {
    ownInvestment = Math.ceil(shopFab * .55);
    bankLoan = Math.ceil(shopFab * .30);
    factoryCredit = Math.ceil(shopFab * .15);
    investFab = Math.ceil(shopFab * .20);
    totalBuy = Number(Math.ceil(ownInvestment + bankLoan + factoryCredit + investFab));
  } else if (shopFab > 500000) {
    ownInvestment = Math.ceil(shopFab * .70);
    factoryCredit = Math.ceil(shopFab * .30);
    investFab = Math.ceil(shopFab * .20);
    totalBuy = Number(Math.ceil(ownInvestment + factoryCredit + investFab));
  }
  ale.innerText = `
    amount of own investment $${ownInvestment} dollars
    amount of bank loan $${bankLoan} dollars
    amount of factory credit $${factoryCredit} dollars
    total of the buy $${totalBuy} dollars
  `;
  // console.log(`amount of own investment $${ownInvestment} dollars`);
  // console.log(`amount of bank loan $${bankLoan} dollars`);
  // console.log(`amount of factory credit $${factoryCredit} dollars`);
  // console.log(`amount of factory invest $${investFab} dollars`);
  // console.log(`total of the buy $${totalBuy} dollars`);
  e.target.reset();
});