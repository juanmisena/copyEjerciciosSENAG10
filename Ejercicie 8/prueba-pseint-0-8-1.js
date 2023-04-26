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
window.onload = function () {
  document.getElementById('formVol').reset();
}
let formVol = document.getElementById('formVol');
formVol.addEventListener('submit', (e) => {
  e.preventDefault();
  // prueba-pseint-8
  let inpLetter = document.getElementById('something'), vocal = "aeiou", demo = document.getElementById('demo');
  // console.log(vocal.includes(inpLetter.value.charAt(0)));
  let p_demo = demo.parentElement.parentElement;
  if (vocal.includes(inpLetter.value.charAt(0))) {
    p_demo.classList.remove('alert-primary');
    p_demo.classList.remove('alert-danger');
    p_demo.classList.add('alert-success');
    demo.textContent = 'the value added is vocal!!';
  } else {
    p_demo.classList.remove('alert-primary');
    p_demo.classList.remove('alert-success');
    p_demo.classList.add('alert-danger');
    demo.textContent = "the value added isn't vocal!!";
  }
  e.target.reset();
});