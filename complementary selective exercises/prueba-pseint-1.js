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
  let num01 = document.getElementById('num01'), p_num02 = document.getElementById('p-num02');
  num01.addEventListener('keyup', (e) => {
    if(e.target.value.length > 0) {
      p_num02.children[1].removeAttribute("disabled");
      p_num02.style.display = "flex";
    } else {
      p_num02.children[1].value = "";
      p_num02.children[1].setAttribute("disabled", "");
      p_num02.style.display = "none";
    }
  });
})();
window.onload = function () {
  document.getElementById('formCSE01').reset();
}
let ale = document.getElementById('ale'), op = 0;
let formCSE01 = document.getElementById('formCSE01');
formCSE01.addEventListener('submit', ev => {
  ev.preventDefault();
  let num01 = Number(document.getElementById('num01').value), num02 = Number(document.getElementById('num02').value);
  op = Math.ceil(num01 / num02);
  ale.innerText = `the result of the divide is: ${op}`;
  ev.target.querySelector('#p-num02').style.display = "none";
  ev.target.reset();
});