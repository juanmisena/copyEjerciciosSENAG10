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