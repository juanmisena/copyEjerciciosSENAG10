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
document.addEventListener('DOMContentLoaded', () => {
  let alert = document.getElementById('alert'), calcHalf, toFin = false;
  let formHalf = document.getElementById('formHalf');
  formHalf.addEventListener('submit', e => {
    e.preventDefault();
    let numHalf = parseFloat(document.getElementById('numHalf').value);
    calcHalf = Number(Math.ceil(numHalf / 2));
    if (calcHalf > 100) {
      alert.classList.remove('alert-dark');
      alert.classList.remove('alert-danger');
      alert.classList.add('alert-success');
      alert.innerText = 'is elder that 100';
      toFin = true;
    } else {
      alert.classList.remove('alert-success');
      alert.classList.remove('alert-dark');
      alert.classList.add('alert-danger');
      alert.innerText = "isn't elder that 100";
      toFin = true;
    }
    if (toFin) window.setTimeout(function () {window.location.reload(); toFin = false}, 3000);
    e.target.reset();
  });
});