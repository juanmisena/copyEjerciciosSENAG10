window.onload = function () {
  document.getElementById('formZoo').reset();
}
let ale = document.getElementById('ale'), total = 0, category1 = 0, category2 = 0, category3 = 0, animal = "", arrZoo = [], count = 1;
let formZoo = document.getElementById('formZoo');
formZoo.addEventListener('submit', ev => {
  if (ev.target.checkValidity()) {
    ev.preventDefault();
  }
  let n = Number(document.getElementById('n').value), age = parseInt(document.getElementById('age').value);
  switch (n) {
    case 1:
      animal = "elephants";
      total = 20;
      break;
    case 2:
      animal = "giraffes";
      total = 15;
      break;
    case 3:
      animal = "chimpanzees";
      total = 40;
      break;
    default:
      
      break;
  }
  ev.target.querySelector('#n').setAttribute('disabled', '');
  if (ev.target.querySelector('#n').options[1].selected || ev.target.querySelector('#n').options[2].selected || ev.target.querySelector('#n').options[3].selected) {
    ev.target.querySelector('#age').removeAttribute('disabled');
    ev.target.querySelector('#age').setAttribute('required', '');
    if (!isNaN(age)) {
      arrZoo.push(age);
      ev.target.querySelector('#age').setAttribute('placeholder', `enter the age ${++count}`);
      ev.target.querySelector('#age').value = '';
      if (arrZoo.length == total) {
        arrZoo.forEach(function(item) {
          if (item >=0 && item <= 1) {
            category1++;
          } else if (item < 3) {
            category2++;
          }
        });
        ale.innerText = `Percentage of ages of ${animal}
        ${Number(((category1 / total) * 100).toFixed(2))} % of 0 to 1 year
        ${Number(((category2 / total) * 100).toFixed(2))} % of more than 1 year and less than 3
        ${Number(((category3 / total) * 100).toFixed(2))} % of 3 years or more`;
        ev.target.querySelector('#n').removeAttribute('disabled');
        ev.target.querySelector('#age').setAttribute('disabled', '');
        ev.target.querySelector('#age').setAttribute('placeholder', `enter the age 1`);
        ev.target.reset();
        arrZoo.length = 0;
        count = 1;
      }
    }
  }
});