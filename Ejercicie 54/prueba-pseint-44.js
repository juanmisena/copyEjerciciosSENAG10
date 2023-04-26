(function () {
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
  /**
   * Block End
   */
  let purchase = document.getElementById('purchase'), color = document.getElementById('color');
  purchase.addEventListener('keyup', ev => {
    if (ev.target.value.length > 0) {
      color.removeAttribute('disabled');
    } else {
      color.children[0].selected = true;
      color.setAttribute('disabled', '');
    }
  });
})();
window.onload = function () {
  document.getElementById('formStore').reset();
}
let ale = document.getElementById('ale'), discont, mess = "";
let formStore = document.getElementById('formStore');
formStore.addEventListener('submit', (e) => {
  e.preventDefault();
  ale.classList.add('slow');
  let purchase = Number(document.getElementById('purchase').value), color = document.getElementById('color').value;
  switch (color) {
    case "white":
      discont = 0;
      break;
    case "green":
      discont = purchase * .10;
      break;
    case "yellow":
      discont = purchase * .25;
      break;
    case "blue":
      discont = purchase * .50;
      break;
    case "red":
      discont = purchase * 1;
      break;
    default:
      discont = NaN;
      break;
  }
  mess = 
  `
    the total to pay already with him the discont applied is: $${Math.abs(purchase - discont)}  
    the discont applied is: $${discont}
  `;
  ale.innerText = mess;
  e.target.querySelector('#color').children[0].selected = true;
  e.target.querySelector('#color').setAttribute('disabled', '');
  e.target.reset();
});