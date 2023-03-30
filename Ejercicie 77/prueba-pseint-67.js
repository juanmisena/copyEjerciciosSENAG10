window.onload = function () {
  document.getElementById('formTemp').reset();
}
let ale = document.getElementById('ale'), arrTemp = [], addition = 0, ave = 0, count = 1;
let formTemp = document.getElementById('formTemp');
formTemp.addEventListener('submit', ev => {
  if (ev.target.checkValidity()) {
    ev.preventDefault();
  }
  let temp = Number(document.getElementById('temp').value);
  ev.target.querySelector('#temp').setAttribute('placeholder', `enter the temperature of day ${++count}`);
  arrTemp.push(temp);
  if (arrTemp.length == 7) {
    addition = arrTemp.reduce((acc, temp) => acc + temp, 0);
    ave = Number((addition / 7).toFixed(2));
    ale.innerText = `the average of the temperature of the 7 days is: ${ave}°C`;
    ev.target.querySelector('#temp').setAttribute('placeholder', `enter the temperature of day 1`);
    count = 1;
    addition = 0;
    ave = 0;
    arrTemp.length = 0;
  }
  ev.target.reset();
});