(function () {
  function changeWindow(x) {
    if (x.matches) {
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
  document.getElementById('formAge').reset();
}
let demo = document.getElementById('demo'), val_date_b = 0;
let formAge = document.getElementById('formAge');
formAge.addEventListener('submit', (e) => {
  e.preventDefault();
  // prueba-pseint-2
  /* let age = document.getElementById('age'), date_b = new Date(age.value), now = new Date();
  val_date_b = Math.abs(date_b.getFullYear() - now.getFullYear());
  demo.innerText = val_date_b; */
  var year = Number(document.getElementById('age').value.substring(0,4));
  var month = Number(document.getElementById('age').value.substring(5,7));
  var day = Number(document.getElementById('age').value.substring(8,10));
  var dateNow = new Date();
  var yearNow = dateNow.getFullYear();
  var monthNow = dateNow.getMonth() + 1;
  var dayNow = dateNow.getDate();
  var age = 0;
  if (month == monthNow) {
    age = yearNow - year;
    if (day <= dayNow) {
      demo.innerHTML = age;
    } else {
      age -= 1;
      demo.innerHTML = age;
    }
  } else if (month < monthNow) {
    age = yearNow - year;
    demo.innerHTML = age;
  } else {
    age = yearNow - year;
    age -= 1;
    demo.innerHTML = age;
  }
  e.target.reset();
});