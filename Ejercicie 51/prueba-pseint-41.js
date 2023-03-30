function load() {
  window.location.href = 'http://localhost:5500/Ejercicie%2051/prueba-pseint-41.html';
}
window.onload = function () {
  document.getElementById('formOlder').reset();
}
let ale = document.getElementById('ale'), arrNums = [], a, b, c, mess = "";
let formOlder = document.getElementById('formOlder');
formOlder.addEventListener('submit', (e) => {
  e.preventDefault();
  let nums = Number(document.getElementById('nums').value);
  arrNums.push(nums);
  if (arrNums.length == 3) {
    a = arrNums[0];
    b = arrNums[1];
    c = arrNums[2];
    if ((a != b) && (a != c) && (b != c)) {
      if (a > b) {
        if (a > c) {
          mess = `the number ${a} is greatter of the three`;
          // console.log(`the number ${a} is greatter of the three`);
        } else {
          mess = `the number ${c} is greatter of the three`;
          // console.log(`the number ${c} is greatter of the three`);
        }
      } else {
        if (b > c) {
          mess = `the number ${b} is greatter of the three`;
          // console.log(`the number ${b} is greatter of the three`);
        } else {
          mess = `the number ${c} is greatter of the three`;
          // console.log(`the number ${c} is greatter of the three`);
        }
      }
    } else {
      mess = `enter three numbers different`;
      // console.log(`enter three numbers different`);
    }
    ale.innerText = mess;
    e.target.querySelector('#nums').setAttribute('disabled', '');
  }
  e.target.reset();
});