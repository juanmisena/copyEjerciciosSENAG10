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
  /**
   * Block End
   */
  let ale = document.getElementById('ale'), tr = document.createElement('tr'), td = document.createElement('td');
  let row = 11, col = 3, cpTr, cpTd;
  for (let r = 0; r < row; r++) {
    cpTr = tr.cloneNode(true);
    for (let c = 0; c < col; c++) {
      cpTd = td.cloneNode(true);
      cpTr.appendChild(cpTd);
      ale.appendChild(cpTr);
    }
  }
})();
let ale = document.getElementById('ale'), tdA = ale.querySelectorAll('td');
let x = 1, arr = [];
while (x < 100) {
  if (x % 3 == 0) {
    arr.push(x);
  }
  x++;
}
for (let i = 0; i < arr.length; i++) {
  tdA[i].textContent = arr[i];
}