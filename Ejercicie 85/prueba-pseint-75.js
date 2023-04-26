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
  document.getElementById('p-age').style.display = "none";
  document.getElementById('formTheater').reset();
}
let ale = document.getElementById('ale'), arrTheater = [], dis = 0, total = 0, cat1 = 0, cat2 = 0, cat3 = 0, cat4 = 0, cat5 = 0, stp = false, objTheater, mess = "", dist = 0;
let cate1 = 0, cate2 = 0, cate3 = 0, cate4 = 0, cate5 = 0, totals = 0;
let formTheater = document.getElementById('formTheater');
formTheater.addEventListener('submit', e => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let price = Number(document.getElementById('price').value), age = parseInt(document.getElementById('age').value);
  if (!isNaN(age)) {
    if (age < 5) {
      ale.classList.remove('alert-primary');
      ale.classList.remove('alert-success');
      ale.classList.add('alert-danger');
      mess = "not allowed under 5 years";
      stp = true;
      e.target.reset();
    } else {
      arrTheater.push(age);
      for (const item of arrTheater) {
        if (item <= 14) {
          dist = (price * .35);
          cate1 = cate1 + dist;
        } else if (item <= 19) {
          dist = (price * .25);
          cate2 += dist;
        } else if (item <= 45) {
          dist = (price * .10);
          cate3 += dist;
        } else if (item <= 65) {
          dist = (price * .25);
          cate4 += dist;
        } else {
          dist = (price * .35);
          cate5 += dist;
        }
        totals += dis;
        mess = `the discont applied is: $${dist}`;
      }
      ale.classList.remove('alert-success');
      ale.classList.remove('alert-danger');
      ale.classList.add('alert-primary');
      if (confirm("do you want to finish?")) {
        for (const item of arrTheater) {
          if (item <= 14) {
            dis = (price * .35);
            cat1 = cat1 + dis;
          } else if (item <= 19) {
            dis = (price * .25);
            cat2 += dis;
          } else if (item <= 45) {
            dis = (price * .10);
            cat3 += dis;
          } else if (item <= 65) {
            dis = (price * .25);
            cat4 += dis;
          } else {
            dis = (price * .35);
            cat5 += dis;
          }
          total += dis;
        }
        ale.classList.remove('alert-primary');
        ale.classList.remove('alert-danger');
        ale.classList.add('alert-success');
        mess = `the total discont in the category 1 is: $${cat1}
        the total discont in the category 2 is: $${cat2}
        the total discont in the category 3 is: $${cat3}
        the total discont in the category 4 is: $${cat4}
        the total discont in the category 5 is: $${cat5}
        the total discont is: $${total}`;
        stp = true;
        e.target.reset();
        arrTheater.length = 0;
        dis = 0;
        cat1 = 0;
        cat2 = 0;
        cat3 = 0;
        cat4 = 0;
        cat5 = 0;
        total = 0;
      }
    }
    ale.innerText = mess; 
  }
  if (!stp) {
    e.target.querySelector('#p-price').style.display = "none";
    e.target.querySelector('#price').removeAttribute('required');
    e.target.querySelector('#price').setAttribute('disabled', '');
    e.target.querySelector('#price').value = price;
    e.target.querySelector('#p-age').style.display = "flex";
    e.target.querySelector('#age').removeAttribute('disabled');
    e.target.querySelector('#age').setAttribute('required', '');
    e.target.querySelector('#age').value = null;
  } else {
    e.target.querySelector('#p-price').style.display = "flex";
    e.target.querySelector('#price').removeAttribute('disabled');
    e.target.querySelector('#price').setAttribute('required', '');
    e.target.querySelector('#p-age').style.display = "none";
    e.target.querySelector('#age').removeAttribute('required');
    e.target.querySelector('#age').setAttribute('disabled', '');
    stp = false;
  }
});