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
  });
});