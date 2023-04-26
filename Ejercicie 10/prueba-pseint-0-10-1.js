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
  document.getElementById('formCom').reset();
}
let formCom = document.getElementById('formCom');
formCom.addEventListener('submit', (e) => {
  e.preventDefault();
  // prueba-pseint-10
  let some = document.getElementById('something'), some2 = document.getElementById('something2'), demo = document.getElementById('demo'), someVal = Number(some.value), someVal2 = Number(some2.value), p_demo = demo.parentElement.parentElement;
  if (someVal > someVal2) {
    p_demo.classList.remove('alert-primary');
    p_demo.classList.remove('alert-danger');
    p_demo.classList.add('alert-success');
    demo.textContent = `the number ${someVal} is greater than ${someVal2}`;
  } else if (someVal < someVal2)  {
    p_demo.classList.remove('alert-primary');
    p_demo.classList.remove('alert-success');
    p_demo.classList.add('alert-danger');
    demo.textContent = `the number ${someVal} is smaller than ${someVal2}`;
  } else {
    p_demo.classList.remove('alert-primary');
    p_demo.classList.remove('alert-success');
    p_demo.classList.remove('alert-danger');
    p_demo.classList.add('alert-secondary');
    demo.textContent = `both values are equals`;
  }
  e.target.reset();
});