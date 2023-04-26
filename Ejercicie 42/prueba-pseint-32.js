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
  // // //
  let selectForm = document.getElementById('gen'), formartDate = '', now = new Date();
  let toYear = now.getFullYear(), toMonth = ((now.getMonth() + 1) < 10) ? '0' + (now.getMonth() + 1) : now.getMonth() + 1, toDate = (now.getDate() < 10) ? '0' + now.getDate() : now.getDate();
  formartDate = `${toYear}-${toMonth}-${toDate}`;
  document.getElementById('age').setAttribute('max', formartDate);
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
  let gen = Number(document.getElementById('gen').value), age = document.getElementById('age').value;
  let userYear = Number(String(age).substring(0,4)), userMonth = Number(String(age).substring(5,7)), userDate = Number(String(age).substring(8,10));
  if (userMonth <= (new Date().getMonth()+1)) {
    if (userDate <= (new Date().getDate())) {
      age = Math.abs(new Date().getFullYear() - userYear);
    } else {
      age = Math.abs((new Date().getFullYear() - userYear) - 1);
    }
  } else {
    age = Math.abs((new Date().getFullYear() - userYear) - 1);
  }
  switch (gen) {
    case 1:
      pulsations = Math.ceil((220 - age) / 10);
      ale.classList.remove('alert-primary');
      ale.classList.add('alert-pink');
      ale.innerText = `The number of beats you should have is: ${pulsations}`;
      break;
    case 2:
      pulsations = Math.ceil((210 - age) / 10);
      ale.classList.remove('alert-pink');
      ale.classList.remove('alert-secondary');
      ale.classList.add('alert-primary');
      ale.innerText = `The number of beats you should have is: ${pulsations}`;
      break;
  }
  // console.log(pulsations);
  e.target.querySelector('#age').setAttribute('disabled', "");
  e.target.reset();
});