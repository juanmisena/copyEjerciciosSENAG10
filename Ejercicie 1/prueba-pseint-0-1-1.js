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
  document.getElementById('formAd').reset();
}
let demo = document.getElementById('demo'), op = 0;
let formAd = document.getElementById('formAd');
formAd.addEventListener('submit', (e) => {
  e.preventDefault();
  let something = Number(document.getElementById('something').value), something2 = Number(document.getElementById('something2').value);
  op = (something + something2);
  demo.innerText = op;
  e.target.reset();
});