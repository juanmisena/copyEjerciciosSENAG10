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
  }
  formAsc.reset();
});