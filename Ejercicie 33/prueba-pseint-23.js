window.onload = function () {
  document.getElementById('formDis').reset();
}
let alert1 = document.getElementById('alert1'), calcPorc = 0;
let formDis = document.getElementById('formDis');
formDis.addEventListener('submit', (e) => {
  e.preventDefault();
  let numDis = Number(document.getElementById('numDis').value);
  if (numDis > 1000) {
    calcPorc = (numDis * .20);
  }
  alert1.innerText = `The amount to pay with the discount applied is: $${numDis - calcPorc}
  The discount applied is: $${calcPorc}`;
  formDis.reset();
});