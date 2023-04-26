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
  document.getElementById('formForest').reset();
}
let ale = document.getElementById('ale'), meters = 0, pine, oyamel, cedar;
let formForest = document.getElementById('formForest');
formForest.addEventListener('submit', (e) => {
  e.preventDefault();
  let hectare = Number(document.getElementById('hectare').value);
  meters = hectare * 10000;
  if (meters > 1000000) {
    pine = meters * .70;
    oyamel = meters * .20;
    cedar = meters * .10;
  } else {
    pine = meters * .50;
    oyamel = meters * .30;
    cedar = meters * .20;
  }
  ale.innerText = `
    trees that can be sown
    ${Math.ceil(Math.floor((pine / 10) * 8))} pines in ${pine}m²
    ${Math.ceil(oyamel)} oyamel in: ${oyamel}m²
    ${Math.ceil(Math.floor((cedar / 18) * 10))} cedars in: ${cedar}m²
  `;
  e.target.reset();
});