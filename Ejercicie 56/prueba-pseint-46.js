window.onload = function () {
  document.getElementById('formCom').reset();
}
let ale = document.getElementById('ale'), total = 0, discont = 0, arrNum;
let formCom = document.getElementById('formCom');
formCom.addEventListener('submit', ev => {
  ev.preventDefault();
  let n = Number(document.getElementById('n').value);
  total = n * 11000;
  if (n < 5) {
    discont = total * .10;
  } else {
    if (n < 10) {
      discont = total * .20;
    } else {
      discont = total * .40;
    }
  }
  ale.innerText = `the total to pay for ${n} computers is: $${Math.abs(total - discont)}
  the discont applied is: $${discont}`;
  if (!ale.classList.contains('animate__backInUp')) {
    ale.classList.remove('animate__backInDown');
    ale.classList.add('animate__backInUp');
  } else if (!ale.classList.contains('animate__backInDown')) {
    ale.classList.remove('animate__backInUp');
    ale.classList.add('animate__backInDown');
  }
  ev.target.reset();
});