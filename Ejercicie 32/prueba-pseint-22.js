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
  document.getElementById('formLear').reset();
}
let alert1 = document.getElementById('alert1'), cnumLear = 0, accLear, aveLear = 0, arrLear = [];
let formLear = document.getElementById('formLear');
formLear.addEventListener('submit', (e) => {
  e.preventDefault();
  let numLear = document.getElementById('numLear').value;
  cnumLear = Number(numLear);
  arrLear.push(cnumLear);
  accLear = arrLear.reduce((acc, val) => acc + val, 0);
  if(arrLear.length == 3) {
    formLear.innerHTML = "";
    aveLear = Number((accLear / 3).toFixed(2));
    if (aveLear > 70) {
      alert1.classList.remove('alert-primary');
      alert1.classList.remove('alert-danger');
      alert1.classList.add('alert-success');
      alert1.innerText = `your average is : ${aveLear} aprovated the course!`;
    } else {
      alert1.classList.remove('alert-primary');
      alert1.classList.remove('alert-success');
      alert1.classList.add('alert-danger');
      alert1.innerText = `your average is : ${aveLear} reprovated the course!`;
    }
    window.setTimeout(function () {window.location.reload();}, 10000);
  }
  formLear.reset();
});