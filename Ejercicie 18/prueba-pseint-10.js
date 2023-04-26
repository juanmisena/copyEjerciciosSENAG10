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
document.addEventListener("DOMContentLoaded", () => {
  let demo, numAve, arrAve = [], calcAve, resultAve;
  let formSaveAge = document.getElementById('formAve');
  formSaveAge.addEventListener('submit', (e) => {
    e.preventDefault();
    demo = document.getElementById('demo');
    numAve = parseFloat(document.getElementById('numAve').value);
    arrAve.push(numAve);
    calcAve = arrAve.reduce((acc, item) => (acc + item), 0);
    resultAve = calcAve / 5;
    if (arrAve.length == 5) {
      formSaveAge.innerHTML = '';
      demo.innerText = 'your average is: ' + resultAve;
    }
    formSaveAge.reset();
  });
});
