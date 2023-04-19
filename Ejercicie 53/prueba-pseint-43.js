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
  let salary = document.getElementById('salary'), antiquity = document.getElementById('antiquity');
  salary.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      antiquity.removeAttribute('disabled');
    } else {
      antiquity.value = "";
      antiquity.setAttribute('disabled', '');
    }
  });
})();
window.onload = function () {
  document.getElementById('formUtility').reset();
}
let ale = document.getElementById('ale'), utility = 0;
let formUtility = document.getElementById('formUtility');
formUtility.addEventListener('submit', (e) => {
  e.preventDefault();
  let salary = Number(document.getElementById('salary').value), antiquity = Number(document.getElementById('antiquity').value);
  if (antiquity < 1) {
    utility = salary * .05;
  } else {
    if (antiquity >= 1 && antiquity < 2) {
      utility = salary * .07;
    } else {
      if (antiquity >= 2 && antiquity < 5) {
        utility = salary * .10;
      } else {
        if (antiquity >=5 && antiquity < 10) {
          utility = salary * .15;
        } else {
          if (antiquity >= 10) {
            utility = salary * .20;
          }
        }
      }
    }
  }
  ale.innerText = `the utility according to ${antiquity} years of service is: $${utility}`;
  e.target.querySelector('#antiquity').setAttribute('disabled', '');
  e.target.reset();
});