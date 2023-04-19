(function () {
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
  /**
   * Block End
   */
  let age = document.getElementById('age'), antiquity = document.getElementById('antiquity'), ale = document.getElementById('ale');
  age.addEventListener('keyup', ev => {
    if (ev.target.value.length > 0) {
      antiquity.removeAttribute('disabled');
    } else {
      antiquity.value = "";
      antiquity.setAttribute('disabled', '');
    }
  });
})();
window.onload = function () {
  document.getElementById('formRetirement').reset();
}
let ale = document.getElementById('ale'), mess = "";
let formRetirement = document.getElementById('formRetirement');
formRetirement.addEventListener('submit', (e) => {
  e.preventDefault();
  let age = document.getElementById('age').value, antiquity = Number(document.getElementById('antiquity').value), toY, toM, toD;
  toY = Number(String(age).substring(0,4)), toM = Number(String(age).substring(5,7)), toD = Number(String(age).substring(8,10));
  if (toM == new Date().getMonth() + 1) {
    if (toD <= new Date().getDate()) {
      age = Number(new Date().getFullYear() - toY);
    } else {
      age = Number((new Date().getFullYear() - toY) - 1);
    }
  } else if (toM < (new Date().getMonth() + 1)) {
    age = Number(new Date().getFullYear() - toY);
  } else {
    age = Number((new Date().getFullYear() - toY) - 1);
  }
  if (age >= 60 && antiquity < 25) {
    mess = "you are entitled to a pension by age";
  } else {
    if (age < 60 && antiquity >= 25) {
      mess = "you deserve a young retirement";
    } else {
      if (age >= 60 && antiquity >= 25) {
        mess = "you have an old retirement";
      } else {
        mess = "it's not your turn to retire yet";
      }
    }
  }
  ale.innerText = mess;
  e.target.querySelector('#antiquity').setAttribute('disabled', '');
  e.target.reset();
  if (!ale.classList.contains('animate__backInLeft')) {
    ale.classList.remove('animate__backInRight');
    ale.classList.add('animate__backInLeft');
  } else if (!ale.classList.contains('animate__backInRight')) {
    ale.classList.remove('animate__backInLeft');
    ale.classList.add('animate__backInRight');
  }
});