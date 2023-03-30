window.onload = function () {
  document.getElementById('formOps').reset();
}
let ale = document.getElementById('ale'), op = 0, mess = "";
let formOps = document.getElementById('formOps');
formOps.addEventListener('submit', e => {
  e.preventDefault();
  if (e.target.querySelector('#options').value.length > 0 && e.target.querySelector('#n1').value.length > 0 && e.target.querySelector('#n2').value.length > 0) {
    e.target.querySelector('input').classList.remove('is-invalid');
    let options = Number(document.getElementById('options').value), n1 = Number(document.getElementById('n1').value), n2 = Number(document.getElementById('n2').value);
    switch (options) {
      case 1:
        op = (n1 + n2);
        mess = `the result of the addition is: ${op}`;
        break; 
      case 2:
        op = Math.abs(n1 - n2);
        mess = `the result of the substract is: ${op}`;
        break;
      case 3:
        op = n1 * n2;
        mess = `the result of the multiply is: ${op}`;
        break;
      case 4:
        op = Math.ceil(n1 / n2);  
        mess = `the result of the divide is: ${op}`;
        break;
    }
    ale.innerText = mess;
    e.target.reset();
  } else {
    e.target.querySelector('input').classList.add('is-invalid');
  }
});