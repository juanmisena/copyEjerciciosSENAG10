window.onload = function () {
  document.getElementById('formN').reset();
}
let ale = document.getElementById('ale'), arrN = [], short = 0, addition = 0, count = 40;
let formN = document.getElementById('formN');
formN.addEventListener('submit', (e) => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let n = Number(document.getElementById('n').value);
  arrN.push(n);
  document.querySelector('#n').setAttribute('placeholder', `enter ${--count} grade...`);
  if(arrN.length == 40) {
    short = Math.min(...arrN);
    addition = arrN.reduce((acc, n) => acc + n, 0);
    ale.innerText = `
    the average rating of the group is: ${Number((addition / 40).toFixed(2))}
    the lowest rating of the group is: ${short}
    `;
    if (!ale.classList.contains('animate__fadeInBottomLeft')) {
      ale.classList.remove('animate__fadeInBottomRight');
      ale.classList.add('animate__fadeInBottomLeft');
    } else {
      ale.classList.remove('animate__fadeInBottomLeft');
      ale.classList.add('animate__fadeInBottomRight');
    }
    count = 40;
    document.querySelector('#n').setAttribute('placeholder', `enter ${count} grade...`);
    arrN.length = 0;
    short = 0;
    addition = 0;
  }
  e.target.reset();
});
