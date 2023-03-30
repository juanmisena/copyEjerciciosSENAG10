(function () {
  let selectForm = document.getElementById('gen');
  selectForm.addEventListener('change', (e) => {
    if (e.target.options[1].selected) {
      document.getElementById('age').removeAttribute('disabled');
    } else {
      document.getElementById('age').removeAttribute('disabled');
    }
  });
})();
window.onload = function () {
  document.getElementById('formPress').reset();
}
let ale = document.getElementById('ale'), pulsations = 0;
let formPress = document.getElementById('formPress');
formPress.addEventListener('submit', (e) => {
  e.preventDefault();
  let gen = Number(document.getElementById('gen').value), age = Number(document.getElementById('age').value);
  if(gen == 1) {
    pulsations = Math.ceil((220 - age) / 10);
    ale.classList.remove('alert-primary');
    ale.classList.add('alert-pink');
    ale.innerText = `The number of beats you should have is: ${pulsations}`;
  } else {
    pulsations = Math.ceil((210 - age) / 10);
    ale.classList.remove('alert-pink');
    ale.classList.remove('alert-secondary');
    ale.classList.add('alert-primary');
    ale.innerText = `The number of beats you should have is: ${pulsations}`;
  }
  // console.log(pulsations);
  e.target.querySelector('#age').setAttribute('disabled', "");
  e.target.reset();
});