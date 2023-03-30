window.onload = function () {
  document.getElementById('formRange').reset();
}
let ale = document.getElementById('ale'), arrRange = [], evalRange, cont = 0, stp = false, errorEm, objRange;
for (let i = 1; i <= 15; i++) {
  arrRange.push(i); 
}
let formRange = document.getElementById('formRange');
formRange.addEventListener('submit', e => {
  e.preventDefault();
  if (e.target.querySelector('input').value.length > 0) {
    e.target.querySelector('input').classList.remove('is-invalid');
    let n1 = Number(document.getElementById('n1').value);
    evalRange = arrRange.filter((item) => item == n1);
    (evalRange.length > 0) ? errorEm = true : errorEm = false;
    if (errorEm) {
      ale.classList.remove('alert-primary');
      ale.classList.remove('alert-danger');
      ale.classList.add('alert-success');
      ale.innerText = "Congratulations! is within range......";
    } else {
      ale.classList.remove('alert-primary');
      ale.classList.remove('alert-success');
      ale.classList.add('alert-danger');
      ale.innerText = "I'm Sorry! is not within range......";
    }
    e.target.reset();
  } else {
    e.target.querySelector('input').classList.add('is-invalid');
  }
});