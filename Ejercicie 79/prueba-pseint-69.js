window.onload = function () {
  document.getElementById('p-gen').style.display = "none";
  document.getElementById('formGen').reset();
}
let ale = document.getElementById('ale'), arrGen = [], mens = 0, woman = 0, stp = false;
let formGen = document.getElementById('formGen');
formGen.addEventListener('submit', e => {
  if(e.target.checkValidity()) {
    e.preventDefault();
  }
  let cant = Number(document.getElementById('cant').value), gen = parseInt(document.getElementById('gen').value);
  if (!isNaN(gen)) {
    arrGen.push(gen);
    if (arrGen.length == cant) {
      for (const item of arrGen) {
        if (item == 1) {
          mens++;
        } else if (item == 2) {
          woman++;
        }
      }
      ale.innerText = `in a group of ${cant} people
      the number of mens is: ${mens}
      the number of womans is: ${woman}`;
      stp = true;
      e.target.reset();
      arrGen.length = 0;
      mens = 0;
      woman = 0;
    }
  }
  if (!stp) {
    e.target.querySelector('#p-cant').style.display = "none";
    e.target.querySelector('#cant').removeAttribute('required');
    e.target.querySelector('#cant').setAttribute('disabled', '');
    e.target.querySelector('#cant').value = cant;
    e.target.querySelector('#p-gen').style.display = "flex";
    e.target.querySelector('#gen').removeAttribute('disabled');
    e.target.querySelector('#gen').setAttribute('required', '');
    e.target.querySelector('#gen').options[0].selected = true;
  } else {
    e.target.querySelector('#p-cant').style.display = "flex";
    e.target.querySelector('#cant').removeAttribute('disabled');
    e.target.querySelector('#cant').setAttribute('required', '');
    e.target.querySelector('#p-gen').style.display = "none";
    e.target.querySelector('#gen').removeAttribute('required');
    e.target.querySelector('#gen').setAttribute('disabled', '');
    stp = false;
  }
})