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
  let age = document.getElementById('age'), weight = document.getElementById('weight');
  age.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      weight.removeAttribute('disabled');
    } else {
      weight.value = '';
      weight.setAttribute('disabled', '');
    }
  });
})();
window.onload = function () {
  document.getElementById('formWeight').reset();
}
let ale = document.getElementById('ale'), child = 0, young = 0, adult = 0, old = 0, child_weight = 0, young_weight = 0, adult_weight = 0, old_weight = 0, child_average = 0, young_average = 0, adult_average = 0, old_average = 0, n_per = 0, arrPer = [], toY, toM, toD;
let formWeight = document.getElementById('formWeight');
formWeight.addEventListener('submit', ev => {
  if(ev.target.checkValidity()) {
    ev.preventDefault();
  }
  let age = document.getElementById('age').value, weight = Number(document.getElementById('weight').value);
  toY = Number(String(age).slice(0,4)), toM = Number(String(age).slice(5,7)), toD = Number(String(age).slice(8,10));
  age = new Date().getFullYear() - toY;
  if ((new Date().getMonth() + 1) == toM) {
    if (new Date().getDate() >= toD) {
      age = age;
    } else {
      age -= 1;
    }
  } else if ((new Date().getMonth() + 1) > toM) {
    age = age;
  } else {
    age -= 1;
  }
  const objPerson = {person: ++n_per, age, weight};
  arrPer.push(objPerson);
  if (arrPer.length == 5) {
    arrPer.forEach((item) => {
      if (item.age > 0) {
        if (item.age <= 12) {
          child_weight += item.weight;
          child++;
          child_average = child_weight / child;
        } else if (item.age <= 29) {
          young_weight += item.weight;
          young++;
          young_average = young_weight / young;
        } else if (item.age <= 59) {
          adult_weight += item.weight;
          adult++;
          adult_average = adult_weight / adult;
        } else {
          old_weight += item.weight;
          old++;
          old_average = old_weight / old;
        }
      }
    });
    ale.innerText = `
      the average weight of children is: ${child_average}
      the average weight of the young is: ${young_average}
      the average weight of adults is: ${adult_average}
      the average weight of the old is: ${old_average}
    `;
    arrPer.length = 0;
    child = 0;
    young = 0;
    adult = 0;
    old = 0;
    child_weight = 0;
    young_weight = 0;
    adult_weight = 0;
    old_weight = 0;
    child_average = 0;
    young_average = 0;
    adult_average = 0;
    old_average = 0;
  }
  ev.target.reset();
  ev.target.querySelector('#weight').setAttribute('disabled', '');
});