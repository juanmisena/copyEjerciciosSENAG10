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