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
  let alert = document.getElementById('alert');
  let formGrade = document.getElementById('formGrade');
  formGrade.addEventListener('submit', e => {
    e.preventDefault();
    let numGrade = parseInt(document.getElementById('numGrade').value);
    if (numGrade <= 6) {
      alert.classList.remove('alert-light');
      alert.classList.remove('alert-danger');
      alert.classList.add('alert-success');
      alert.innerText = 'requires snack!';
    } else {
      alert.classList.remove('alert-light');
      alert.classList.remove('alert-success');
      alert.classList.add('alert-danger');
      alert.innerText = 'not requires snack!';
    }
    formGrade.reset();
    window.setTimeout(function () {
      alert.classList.remove('alert-success', 'alert-danger');
      alert.classList.add('alert-light');
      alert.innerText = 'Content';
    }, 3000);
  });
});