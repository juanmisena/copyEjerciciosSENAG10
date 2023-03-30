window.onload = function () {
  document.getElementById('formPower').reset();
}
let ale = document.getElementById('ale'), tbody = document.getElementById('tbody'), arrPower = [], cube = 0, fourth = 0, fifth = 0;
let formPower = document.getElementById('formPower');
formPower.addEventListener('submit', (e) => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let power = Number(document.getElementById('power').value);
  arrPower.push(power);
  if (arrPower.length == 10) {
    let trTbody = tbody.children[0];
    tbody.innerHTML = '';
    for (const item of arrPower) {
      cube = Math.pow(item, 2);
      fourth = Math.pow(item, 4);
      fifth = Math.pow(item, 5);
      trTbody.querySelector('th').innerText = item;
      trTbody.querySelectorAll('td')[0].innerText = cube;
      trTbody.querySelectorAll('td')[1].innerText = fourth;
      trTbody.querySelectorAll('td')[2].innerText = fifth;
      const clone = trTbody.cloneNode(true);
      tbody.appendChild(clone);
    }
    if (ale.classList.contains('hide')) {
      ale.classList.remove('hide');
      ale.classList.add('show');
    }
    arrPower.length = 0;
  }
  e.target.reset();
});