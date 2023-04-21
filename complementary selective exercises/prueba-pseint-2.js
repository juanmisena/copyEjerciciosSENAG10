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
  let p_price = document.getElementById('p-price'), p_increment = document.getElementById('p-increment'), p_decrement = document.getElementById('p-decrement');
  p_price.children[1].addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      p_increment.children[1].removeAttribute("disabled");
    } else {
      p_increment.children[1].value = "";
      p_decrement.children[1].value = "";
      p_increment.children[1].setAttribute("disabled", "");
      p_decrement.children[1].setAttribute("disabled", "");
    }
  });
  p_increment.children[1].addEventListener('keyup', ev => {
    if (ev.target.value.length > 0) {
      p_decrement.children[1].removeAttribute("disabled");
    } else {
      p_decrement.children[1].value = "";
      p_decrement.children[1].setAttribute("disabled", "");
    }
  });
})();
window.onload = function () {
  document.getElementById('formCSE02').reset();
}
let ale = document.getElementById('ale'), mess01 = "", mess02 = "";
let formCSE02 = document.getElementById('formCSE02');
formCSE02.addEventListener('submit', (e) => {
  e.preventDefault();
  let price = Number(document.getElementById('price').value), increment = Number(document.getElementById('increment').value), decrement = Number(document.getElementById('decrement').value);
  increment = Math.ceil((((price * increment) / 100) * 3) / 2);
  decrement = Math.ceil(((price * decrement) / 100) * 3);
  mess01 = `half of the increase in the house in 3 years is: $${increment}
  the devaluation of the car in 3 years is: $${decrement}`;
  if (decrement < increment) {
    mess02 = `you should buy the car`;
  } else {
    mess02 = `you should buy the land`;
  }
  ale.innerText = `${mess01}
  ${mess02}`;
  e.target.querySelector('#increment').setAttribute('disabled', '');
  e.target.querySelector('#decrement').setAttribute('disabled', '');
  e.target.reset();
});