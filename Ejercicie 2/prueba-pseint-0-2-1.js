(function () {
  function changeWindow(x) {
    if (x.matches) {
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
  document.getElementById('formAge').reset();
}
let demo = document.getElementById('demo'), val_date_b = 0;
let formAge = document.getElementById('formAge');
formAge.addEventListener('submit', (e) => {
  e.preventDefault();
  // prueba-pseint-2
  let age = document.getElementById('age'), date_b = new Date(age.value), now = new Date();
  val_date_b = Math.abs(date_b.getFullYear() - now.getFullYear());
  demo.innerText = val_date_b;
  e.target.reset();
});