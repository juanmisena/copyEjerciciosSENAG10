document.addEventListener('DOMContentLoaded', () => {
  let alert = document.getElementById('alert'), calcHalf;
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
    } else {
      alert.classList.remove('alert-success');
      alert.classList.remove('alert-dark');
      alert.classList.add('alert-danger');
      alert.innerText = "isn't elder that 100";
    }
    formHalf.reset();
  });
});