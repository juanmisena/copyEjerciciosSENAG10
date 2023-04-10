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
document.addEventListener('DOMContentLoaded', () => {
  let alert = document.getElementById('alert'), checkBasAge = document.getElementById('checkBasAge');
  checkBasAge.addEventListener('change', (e) => {
    if (e.target.checked) {
      document.getElementById('numBasAge').setAttribute("type", "date");
    } else {
      document.getElementById('numBasAge').setAttribute("type", "number");
    }
  });
  let formBas = document.getElementById('formBas');
  formBas.addEventListener('submit', function (e) {
    e.preventDefault();
    let numBasAge = document.getElementById('numBasAge'), numBasTall = parseFloat(document.getElementById('numBasTall').value), numBasWei = parseFloat(document.getElementById('numBasWei').value), isNow = new Date();
    if (numBasAge.attributes[0].nodeValue == "number") {
      numBasAge = parseFloat(numBasAge.value);
      if ((numBasAge <= 18) && (numBasTall >= 180) && (numBasWei <= 80)) {
        alert.classList.remove('alert-primary');
        alert.classList.remove('alert-danger');
        alert.classList.add('alert-success');
        alert.innerText = "welcome to the team!";
      } else {
        alert.classList.remove('alert-primary');
        alert.classList.remove('alert-success');
        alert.classList.add('alert-danger');
        alert.innerText = "i'm sorry you didn't enter to the team!";
      }
    } else if (numBasAge.attributes[0].nodeValue == "date") {
      numBasAge = new Date(numBasAge.value);
      let calcNumBasAge = Number(Math.abs(numBasAge.getFullYear() - isNow.getFullYear()));
      if ((numBasAge.getMonth() + 1) == (isNow.getMonth() + 1)) {
        if (numBasAge.getDate() <= isNow.getDate()) {
          calcNumBasAge = calcNumBasAge;
        } else {
          calcNumBasAge = Math.abs(calcNumBasAge - 1);
        }
      } else if ((numBasAge.getMonth() + 1) <= (isNow.getMonth())) {
        calcNumBasAge = calcNumBasAge;
      } else {
        calcNumBasAge = Math.abs(calcNumBasAge - 1);
      }
      if ((calcNumBasAge <= 18) && (numBasTall >= 180) && (numBasWei <= 80)) {
        alert.classList.remove('alert-primary');
        alert.classList.remove('alert-danger');
        alert.classList.add('alert-success');
        alert.innerText = "welcome to the team!";
      } else {
        alert.classList.remove('alert-primary');
        alert.classList.remove('alert-success');
        alert.classList.add('alert-danger');
        alert.innerText = "i'm sorry you didn't enter to the team!";
      }
    }
    formBas.reset();
  });
});