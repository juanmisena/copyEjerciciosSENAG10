window.onload = function () {
  document.getElementById('formRan').reset();
}
let ale = document.getElementById('ale'), numRan = 0, disRan = 0;
let formRan = document.getElementById('formRan');
formRan.addEventListener('submit', function (e) {
  e.preventDefault();
  let numBuy = Number(document.getElementById('numBuy').value);
  numRan = Math.ceil(Math.random() * 100);
  if (numRan < 74) {
    disRan = Math.floor(Math.ceil(numBuy * .15));
  } else {
    disRan = Math.floor(Math.ceil(numBuy * .20));
  }
  ale.innerText = `
    the total to payment for the buy: $${Math.abs(numBuy - disRan)}
    the discont applicated is: $${disRan}
  `;
  // console.log(`the total to payment for the buy: $${Math.abs(numBuy - disRan)}`);
  // console.log(`the discont applicated is: $${disRan}`);
  e.target.reset();
});