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
let formVat = document.getElementById('formVat');
formVat.addEventListener('submit', e => {
  e.preventDefault();
  let numPrice = parseFloat(document.getElementById('numPrice').value), porcVat = Math.floor((numPrice * 16) / 100), demo = document.getElementById('demo');
  demo.textContent = `the vat corresponds --------> 16 % \/\/the value current is : ${numPrice + porcVat}`;
  formVat.reset();
});