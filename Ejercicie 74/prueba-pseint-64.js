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
  document.getElementById('p-note').style.display = "none";
  document.getElementById('formNote').reset();
}
let ale = document.getElementById('ale'), arrNote = [], ave = 0, addition = 0, len, count = 1, stp = false;
let formNote = document.getElementById('formNote');
formNote.addEventListener('submit', ev => {
  if (ev.target.checkValidity()) {
    ev.preventDefault();
  }
  let cant = Number(document.getElementById('cant').value), note = parseFloat(document.getElementById('note').value);
  len = cant;
  if (!isNaN(note)) {
    ev.target.querySelector('#note').setAttribute('placeholder', `enter the note ${++count}`);
    ev.target.querySelector('#note').value = null;
    arrNote.push(note);
    if (arrNote.length == len) {
      addition = arrNote.reduce((acc, note) => acc + note, 0);
      ave = Number((addition / len).toFixed(2));
      ale.innerText = `the average of the ${len} grade is: ${ave}`;
      stp = true;
      ev.target.querySelector('#note').setAttribute('placeholder', `enter the note 1`);
      ev.target.querySelector('#cant').value = null;
      ev.target.querySelector('#note').value = null;
      arrNote.length = 0;
      addition = 0;
      ave = 0;
      count = 1;
    }
  }
  if (!stp) {
    ev.target.querySelector('#p-cant').style.display = "none";
    ev.target.querySelector('#cant').removeAttribute('required');
    ev.target.querySelector('#cant').setAttribute('disabled', '');
    ev.target.querySelector('#p-note').style.display = "flex";
    ev.target.querySelector('#note').removeAttribute('disabled');
    ev.target.querySelector('#note').setAttribute('required', '');
  } else {
    ev.target.querySelector('#p-cant').style.display = "flex";
    ev.target.querySelector('#cant').removeAttribute('disabled');
    ev.target.querySelector('#cant').setAttribute('required', '');
    ev.target.querySelector('#p-note').style.display = "none";
    ev.target.querySelector('#note').removeAttribute('required');
    ev.target.querySelector('#note').setAttribute('disabled', '');
    stp = false;
  }
});