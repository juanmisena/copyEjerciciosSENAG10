let isVal = false, ranNum = 0;
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
  /**
   ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
   */
  document.getElementById('numBuy').addEventListener('keyup', function (e) {
    if (e.target.value.length > 0) {
      document.querySelector('#toHidden').style.visibility = 'visible';
      document.querySelector('#toHidden>.btn-outline-secondary').addEventListener('click', function (e) {
        ranNum = Math.floor(Math.random() * (100 - 0) + 0);
        isVal = true;
        if (e.bubbles) {
          document.querySelector('#resultAzar').parentElement.parentElement.removeAttribute('hidden');
          document.querySelector('#resultAzar').textContent = '  ' + ranNum;
        }
      });
    } else {
      document.querySelector('.btn-outline-secondary').parentElement.setAttribute('hidden', '');
    }
  });
})();
window.onload = function () {
  document.getElementById('formRan').reset();
  document.getElementById('toHidden').style.visibility = 'hidden';
}
let ale = document.getElementById('ale'), porcDis = '', disRan = 0;
let formRan = document.getElementById('formRan');
formRan.addEventListener('submit', function (e) {
  e.preventDefault();
  let numBuy = Number(document.getElementById('numBuy').value);
  if (isVal) {
    e.target.querySelector('#numBuy').classList.remove('is-invalid');
    document.querySelector('#toHidden').style.visibility = 'hidden';
    document.querySelector('#resultAzar').parentElement.parentElement.setAttribute('hidden', '');
    document.querySelector('#resultAzar').textContent = null;
    isVal = false;
    // this is logic
    porcDis = (ranNum < 74) ? '15%' : '20%';
    if (ranNum < 74) {
      disRan = Math.floor(Math.ceil(numBuy * .15));
    } else {
      disRan = Math.floor(Math.ceil(numBuy * .20));
    }
    ale.innerText = `
      the total to payment for the buy: $${Math.abs(numBuy - disRan)}
      the discont of ${porcDis} applicated is: $${disRan}
    `;
    e.target.reset();
  } else {
    e.target.querySelector('#numBuy').classList.add('is-invalid');
    ale.textContent = `
      pleace press the button indicated!
    `;
  }
});