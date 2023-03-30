window.onload = function () {
  document.getElementById('formOps').reset();
}
let ale = document.getElementById('ale'), op = 0, mess = "", tbody = document.getElementById('tbody'), trTbody = tbody.children[0], thead = document.getElementById('thead'), trThead = thead.children[0];
let formOps = document.getElementById('formOps');
formOps.addEventListener('submit', e => {
  e.preventDefault();
  if (e.target.querySelector('#options').options[1].selected || e.target.querySelector('#options').options[2].selected) {
    e.target.querySelector('#options').classList.remove('is-invalid');
    let options = Number(document.getElementById('options').value);
    switch (options) {
      case 1:
        trThead.querySelectorAll('th')[0].innerText = '# Numbers Pairs';
        tbody.innerHTML = '';
        for (let i = 1; i <= 100; i++) {
          if (i % 2 == 0) {
            trTbody.querySelectorAll('td')[0].innerText = i;
            const clone = trTbody.cloneNode(true);
            tbody.appendChild(clone);
          }
        }
        break; 
        case 2:
          trThead.querySelectorAll('th')[0].innerText = '# Numbers Odd';
          tbody.innerHTML = '';
          for (let i = 1; i <= 100; i++) {
            if (i % 2 == 1) {
              trTbody.querySelectorAll('td')[0].innerText = i;
              const clone = trTbody.cloneNode(true);
              tbody.appendChild(clone);
            }
          } 
        break;
    }
    e.target.reset();
  } else {
    e.target.querySelector('#options').classList.add('is-invalid');
  }
});