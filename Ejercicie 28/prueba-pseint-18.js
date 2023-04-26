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
let alertI = document.getElementById('alertI'), numValCom, n1, n2;
let formCom = document.getElementById('formCom');
formCom.addEventListener('submit', (e) => {
  e.preventDefault();
  let numCom1 = document.getElementById('numCom1'), numCom2 = document.getElementById('numCom2');
  n1 = parseInt(numCom1.value);
  n2 = parseInt(numCom2.value);
  if (n1 == n2) {
    alertI.innerText = `the values are equals, your substration is: ${Math.abs(n1 - n2)}`;
  } else {
    alertI.innerText = `the values are different, your adition is: ${n1 + n2}`;
  }
  formCom.reset();
});