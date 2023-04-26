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
  document.getElementById('formTires').reset();
}
let alerI = document.getElementById('alertI'), valfortires = 0, cnumTires = 0, prfortires = 0;
let formTires = document.getElementById('formTires');
formTires.addEventListener('submit', (e) => {
  e.preventDefault();
  let numTires = document.getElementById('numTires');
  cnumTires = Number(numTires.value);
  if (cnumTires < 5) {
    valfortires = 30000;
    prfortires = (cnumTires * valfortires);
    alerI.innerText = 'total to pay is: ' + prfortires;
  } else if ((cnumTires >= 5) && (cnumTires <= 10)) {
    valfortires = 25000;
    prfortires = (cnumTires * valfortires);
    alerI.innerText = 'total to pay is: ' + prfortires;
  } else if (cnumTires > 10) {
    valfortires = 20000;
    prfortires = (cnumTires * valfortires);
    alerI.innerText = 'total to pay is: ' + prfortires;
  }
  formTires.reset();
});