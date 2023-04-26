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
  document.getElementById('p-age').style.display = "none";
  document.getElementById('p-gen').style.display = "none";
  document.getElementById('formAveAge').reset();
}
let ale = document.getElementById('ale'), arrAveAge = [], addMens = 0, addWoman = 0, mens = 0, woman = 0, stp = false, objAge;
let formAveAge = document.getElementById('formAveAge');
formAveAge.addEventListener('submit', (e) => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let cant = Number(document.getElementById('cant').value), age = parseInt(document.getElementById('age').value), gen = parseInt(document.getElementById('gen').value);
  if (!isNaN(age) && !isNaN(gen)) {
    objAge = {age, gen}
    arrAveAge.push(objAge);
    if (arrAveAge.length == cant) {
      for (const item of arrAveAge) {
        if (item.gen == 1) {
          addMens += item.age;
          mens++;
        } else if (item.gen == 2) {
          addWoman += item.age;
          woman++;
        }
      }
      ale.innerText = `the number of group is: ${cant} students
      the average of group mens is: ${Number((addMens / mens).toFixed(2))}
      the average of group woman is: ${Number((addWoman / woman).toFixed(2))}`;
      stp = true;
      e.target.reset();
      arrAveAge.length = 0;
      addMens = 0;
      addWoman = 0;
      mens = 0;
      woman = 0;
    }
  }
  if (!stp) {
    e.target.querySelector('#p-cant').style.display = "none";
    e.target.querySelector('#cant').removeAttribute('required');
    e.target.querySelector('#cant').setAttribute('disabled', '');
    e.target.querySelector('#cant').value = cant;
    e.target.querySelector('#p-age').style.display = "flex";
    e.target.querySelector('#age').removeAttribute('disabled');
    e.target.querySelector('#age').setAttribute('required', '');
    e.target.querySelector('#age').value = null;
    e.target.querySelector('#p-gen').style.display = "flex";
    e.target.querySelector('#gen').removeAttribute('disabled');
    e.target.querySelector('#gen').setAttribute('required', '');
    e.target.querySelector('#gen').options[0].selected = true;
  } else {
    e.target.querySelector('#p-cant').style.display = "flex";
    e.target.querySelector('#cant').removeAttribute('disabled');
    e.target.querySelector('#cant').setAttribute('required', '');
    e.target.querySelector('#p-age').style.display = "none";
    e.target.querySelector('#age').removeAttribute('required');
    e.target.querySelector('#age').setAttribute('disabled', '');
    e.target.querySelector('#p-gen').style.display = "none";
    e.target.querySelector('#gen').removeAttribute('required');
    e.target.querySelector('#gen').setAttribute('disabled', '');
    stp = false;
  }
});