(function () {
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
  let age = Number(document.getElementById('age').value), antiquity = Number(document.getElementById('antiquity').value);
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