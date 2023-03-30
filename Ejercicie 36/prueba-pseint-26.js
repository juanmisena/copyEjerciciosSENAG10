(function () {
  let Select = document.querySelector('#numCal'), inputCal = document.querySelector('#actCal');
  let childSelect = Select.children;
  Select.addEventListener('change', (e) => {
    if (childSelect.item(1).selected) {
      inputCal.removeAttribute("disabled");
    } else if (childSelect.item(2).selected) {
      inputCal.removeAttribute("disabled");
    }
    // console.log(childSelect.item(2).selected);
  });
})();
window.onload = function () {
  document.getElementById('formCal').reset();
}
let aler = document.getElementById('aler'), arrCal = [], coact = 0, calRes = 0;
let formCal = document.getElementById('formCal');
formCal.addEventListener('submit', (e) => {
  e.preventDefault();
  let numCal = Number(document.getElementById('numCal').value);
  let actCal = document.getElementById('actCal');
  coact = Number(actCal.value);
  if (numCal == 1) {
    calRes = (coact * 1.08).toFixed(2);
  } else {
    calRes = (coact * 1.66).toFixed(2);
  }
  aler.innerText = `Calories burned per ${coact} minutes is: ${calRes}`;
  // console.log(`Calories burned per ${coact} minutes is: ${calRes}`);
  formCal.reset();
});