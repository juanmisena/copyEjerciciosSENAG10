window.onload = function () {
  document.getElementById('formGrade').reset();
}
let ale = document.getElementById('ale'), arrGrade = [], addition;
let formGrade = document.getElementById('formGrade');
formGrade.addEventListener('submit', ev => {
  if (ev.target.checkValidity()) {
    ev.preventDefault();
  }
  let grade = Number(document.getElementById('grade').value);
  arrGrade.push(grade);
  if (arrGrade.length == 7) {
    addition = arrGrade.reduce((acc, value) => acc + value, 0);
    ale.innerText = `the average of the 7 grades is: ${Number((addition / 7).toFixed(2))}`;
    if (!ale.classList.contains('animate__backInUp')) {
      ale.classList.remove('animate__backInDown');
      ale.classList.add('animate__backInUp');
    } else {
      ale.classList.remove('animate__backInUp');
      ale.classList.add('animate__backInDown');
    }
    arrGrade.length = 0;
  }
  ev.target.reset();
});