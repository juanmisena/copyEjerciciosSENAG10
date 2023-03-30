window.onload = function () {
  document.getElementById('formTires2').reset();
}
let ale = document.getElementById('ale'), prForTires = 0;
let formTires2 = document.getElementById('formTires2');
formTires2.addEventListener('submit', (e) => {
  e.preventDefault();
  let numTires2 = Number(document.getElementById('numTires2').value);
  if (numTires2 < 5) {
    prForTires = (numTires2 * 800);
  } else if (numTires2 >= 5) {
    prForTires = (numTires2 * 700);
  }
  ale.innerText = `the total value is: $${prForTires}`;
  e.target.reset();
});