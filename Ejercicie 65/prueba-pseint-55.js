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
  document.getElementById('formFor').reset();
}
let tbody = document.getElementById('tbody'), trTbody = tbody.children[0];
let ale = document.getElementById('ale'), ranNum, arrNum = [], toIndex;
let formFor = document.getElementById('formFor');
formFor.addEventListener('submit', (e) => {
  if (e.target.checkValidity()) e.preventDefault();
  let num = Number(document.getElementById('num').value);
  for (let i = 1; i <= 30; i++) {
    ranNum = Math.ceil(Math.random() * i);
    arrNum.push(ranNum);
  }
  if (arrNum.length == 30) {
    toIndex = Math.ceil(Math.random() * 29);
    tbody.innerHTML = '';
    arrNum.forEach((item, i) => {
      if (toIndex == i) {
        item = num + " <<";
      }
      trTbody.querySelectorAll('td')[0].innerText = item;
      const clone = trTbody.cloneNode(true);
      tbody.appendChild(clone);
    });
    arrNum.length = 0;
  }
  e.target.reset();
});