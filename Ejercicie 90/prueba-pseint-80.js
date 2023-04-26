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
  var tbody = document.getElementById('tbody'),
  tr = document.createElement('tr'),
  td = document.createElement('td'),
  cpTr, cpTd;
  for (let row = 0; row < 10; row++) {
    cpTr = tr.cloneNode(true);
    for (let col = 0; col < 5; col++) {
      cpTd = td.cloneNode(true);
      cpTr.appendChild(cpTd);
      tbody.appendChild(cpTr);
    }
  }
})();
window.onload = function () {
  document.getElementById('formOps').reset();
}
let ale = document.getElementById('ale'), op = 0, mess = "", tbody = document.getElementById('tbody'), trTbody = tbody.querySelectorAll('tr'), tdTbody, thead = document.getElementById('thead'), trThead = thead.children[0];
let formOps = document.getElementById('formOps');
formOps.addEventListener('submit', e => {
  e.preventDefault();
  if (e.target.querySelector('#options').options[1].selected || e.target.querySelector('#options').options[2].selected) {
    e.target.querySelector('#options').classList.remove('is-invalid');
    let options = Number(document.getElementById('options').value);
    switch (options) {
      case 1:
        trThead.querySelectorAll('th')[0].innerText = '# Numbers Pairs';
        var arrS = [], arrPairs = [], i = 1;
        while (i <= 100) { if (i % 2 == 0) { arrPairs.push(i); } i++; }
        for (let row = 0; row < 10; row++) { arrS[row] = []; }
        for (let col = 0; col < 5; col++) { 
          if (col <= 4) {
            arrS[0][col] = arrPairs[col];
            arrS[1][col] = arrPairs[col + 5];
            arrS[2][col] = arrPairs[col + 10];
            arrS[3][col] = arrPairs[col + 15];
            arrS[4][col] = arrPairs[col + 20];
            arrS[5][col] = arrPairs[col + 25];
            arrS[6][col] = arrPairs[col + 30];
            arrS[7][col] = arrPairs[col + 35];
            arrS[8][col] = arrPairs[col + 40];
            arrS[9][col] = arrPairs[col + 45];
          }
        }
        for (let tr = 0; tr < trTbody.length; tr++) {
          tdTbody = trTbody[tr].querySelectorAll('td');
          for (let td = 0; td < tdTbody.length; td++) {
            tdTbody[td].textContent = arrS[tr][td];
          }
        }
        break; 
      case 2:
        trThead.querySelectorAll('th')[0].innerText = '# Numbers Odd';
        var arrN = [], arrOdd = [], x = 1;
        while (x <= 100) { if (x % 2 == 1) { arrOdd.push(x); } x++; }
        for (let row = 0; row < 10; row++) { arrN[row] = []; }
        for (let col = 0; col < 5; col++) {
          if (col <= 4) {
            arrN[0][col] = arrOdd[col];
            arrN[1][col] = arrOdd[col + 5];
            arrN[2][col] = arrOdd[col + 10];
            arrN[3][col] = arrOdd[col + 15];
            arrN[4][col] = arrOdd[col + 20];
            arrN[5][col] = arrOdd[col + 25];
            arrN[6][col] = arrOdd[col + 30];
            arrN[7][col] = arrOdd[col + 35];
            arrN[8][col] = arrOdd[col + 40];
            arrN[9][col] = arrOdd[col + 45];
          }
        }
        for (let tr = 0; tr < trTbody.length; tr++) {
          tdTbody = trTbody[tr].querySelectorAll('td');
          for (let td = 0; td < tdTbody.length; td++) {
            tdTbody[td].textContent = arrN[tr][td];
          }
        }
        break;
    }
    e.target.reset();
  } else {
    e.target.querySelector('#options').classList.add('is-invalid');
  }
});