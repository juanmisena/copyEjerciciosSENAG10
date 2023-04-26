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
  document.getElementById('p-salary').style.display = "none";
  document.getElementById('p-sale').style.display = "none";
  document.getElementById('formCom').reset();
}
let ale = document.getElementById('ale'), arrCom = [], addition = 0, commission = 0, cont = 0, stp = false, stpd = false;
let formCom = document.getElementById('formCom');
formCom.addEventListener('submit', e => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let n = Number(document.getElementById('n').value), salary = parseFloat(document.getElementById('salary').value), sale = parseFloat(document.getElementById('sale').value);
  if ((!isNaN(salary))) {
    stpd = true;
    if (!isNaN(sale)) {
      arrCom.push(sale);
      if (arrCom.length == n) {
        addition = arrCom.reduce((acc, sale) => acc + sale, 0);
        commission = addition * .10;
        ale.innerText = `the base salary is: ${salary}
        the commission of the month is: $${commission}
        the total salary with the commission is $${(salary + commission)}`;
        e.target.reset();
        stp = true;
        arrCom.length = 0;
        addition = 0;
        commission = 0;
        cont = 0;
      }
    }
  }
  if (!stp) {
    e.target.querySelector('#p-n').style.display = "none";
    e.target.querySelector('#n').removeAttribute('required');
    e.target.querySelector('#n').setAttribute('disabled', '');
    e.target.querySelector('#n').value = n;
    e.target.querySelector('#p-salary').style.display = "flex";
    e.target.querySelector('#salary').removeAttribute('disabled');
    e.target.querySelector('#salary').setAttribute('required', '');
    e.target.querySelector('#salary').value = salary;
  } else {
    e.target.querySelector('#p-n').style.display = "flex";
    e.target.querySelector('#n').removeAttribute('disabled');
    e.target.querySelector('#n').setAttribute('required', '');
    e.target.querySelector('#p-salary').style.display = "none";
    e.target.querySelector('#salary').removeAttribute('required');
    e.target.querySelector('#salary').setAttribute('disabled', '');
    e.target.querySelector('#p-sale').style.display = "none";
    e.target.querySelector('#sale').removeAttribute('required');
    e.target.querySelector('#sale').setAttribute('disabled', '');
    e.target.querySelector('#sale').setAttribute('placeholder', `enter the 1 sale of the month`);
    stp = false;
    stpd = false;
  }
  if (stpd) {
    e.target.querySelector('#p-salary').style.display = "none";
    e.target.querySelector('#salary').removeAttribute('required');
    e.target.querySelector('#salary').setAttribute('disabled', '');
    e.target.querySelector('#p-sale').style.display = "flex";
    e.target.querySelector('#sale').removeAttribute('disabled');
    e.target.querySelector('#sale').setAttribute('required', '');
    e.target.querySelector('#sale').setAttribute('placeholder', `enter the ${++cont} sale of the month`);
    e.target.querySelector('#sale').value = null;
  }
});