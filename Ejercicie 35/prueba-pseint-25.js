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
  document.getElementById('formAsc').reset();
}
let aler = document.getElementById('aler'), arrAsc = [], a, b;
let formAsc = document.getElementById('formAsc');
formAsc.addEventListener('submit', (e) => {
  e.preventDefault();
  let numAsc = Number(document.getElementById('numAsc').value);
  arrAsc.push(numAsc);
  if (arrAsc.length == 2) {
    a = arrAsc[0];
    b = arrAsc[1];
    if (a < b) {
      aler.innerText = `${a}
      ${b}`;
      // console.log(a);
      // console.log(b);
    } else {
      aler.innerText = `${b}
      ${a}`;
      // console.log(b);
      // console.log(a);
    }
    formAsc.innerHTML = '';
    window.setTimeout(function () {window.location.reload();}, 7000);
  }
  formAsc.reset();
});