window.onload = function () {
  document.getElementById('formWor').reset();
}
let aler = document.getElementById('aler'), h_ext = 0, payment = 0;
let formWor = document.getElementById('formWor');
formWor.addEventListener('submit', (e) => {
  e.preventDefault();
  let numWor = Number(document.getElementById('numWor').value);
  if (numWor > 40) {
    h_ext = Math.abs(numWor - 40);
    payment = (40 * 16) + (h_ext * 20);
  } else {
    payment = numWor * 16;
  }
  aler.innerText = `The weekly payment for the ${numWor} hours worked is: $${payment} payment`;
  // console.log(`The weekly payment for the ${numWor} hours worked is: $${payment} payment`);
  formWor.reset();
});