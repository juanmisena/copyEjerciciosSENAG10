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
  let level = document.getElementById('level'), p_age = document.getElementById('p-age'), p_gender = document.getElementById('p-gender'), b_date, op = 0, now = new Date(), p_button = document.getElementById('p-button'), ch_gender;
  level.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      p_age.children[1].removeAttribute('disabled');
      p_age.style.display = "flex";
    } else {
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      p_age.children[1].value = "";
      p_age.children[1].setAttribute('disabled', '');
      p_age.style.display = "none";
      p_gender.children[1].value = "";
      p_gender.children[3].value = "";
      p_gender.children[1].setAttribute('disabled', '');
      p_gender.children[3].setAttribute('disabled', '');
      p_gender.style.display = "none";
    }
  });
  p_age.children[1].addEventListener('keyup', (e) => {
    if (e.target.checkValidity()) {
      p_age.children[2].classList.remove("span-invalid");
      p_age.children[2].classList.add("span-valid");
    } else {
      p_age.children[2].classList.remove("span-valid");
      p_age.children[2].classList.add("span-invalid");
      p_gender.children[1].value = "";
      p_gender.children[3].value = "";
      p_gender.children[1].setAttribute('disabled', '');
      p_gender.children[3].setAttribute('disabled', '');
      p_gender.style.display = "none";
    }
    let regxDate = /\d{4}\-\d{2}\-\d{2}/g;
    b_date = new Date(e.target.value).toISOString();
    b_date = b_date.slice(0, 10);
    if (regxDate.test(b_date)) {
      p_age.children[1].classList.remove("is-invalid");
      p_age.children[2].classList.remove("span-invalid");
      p_age.children[1].classList.add("is-valid");
      p_age.children[2].classList.add("span-valid");
      let fullYear = parseFloat(b_date.slice(0,4));
      if (fullYear.toString().length == 4) {
        op = Math.abs(fullYear - now.getFullYear());
        if (op > 15) {
          p_gender.children[1].removeAttribute('disabled');
          p_gender.children[3].removeAttribute('disabled');
          p_gender.style.display = "flex";
          p_button.style.display = "none";
          p_button.children[0].setAttribute("disabled", "");
        } else {
          p_gender.children[1].value = "";
          p_gender.children[3].value = "";
          p_gender.children[1].setAttribute('disabled', '');
          p_gender.children[3].setAttribute('disabled', '');
          p_gender.style.display = "none";
        }
      } else {
        // console.log("please complete the field year that is missing " + Math.abs(Number(fullYear.toString().length) - 4));
        p_age.children[1].classList.remove("is-valid");
        p_age.children[2].classList.remove("span-valid");
        p_age.children[1].classList.add("is-invalid");
        p_age.children[2].classList.add("span-invalid");
        p_gender.style.display = "none";
      }
    } else {
      p_age.children[1].classList.remove("is-valid");
      p_age.children[2].classList.remove("span-valid");
      p_age.children[1].classList.add("is-invalid");
      p_age.children[2].classList.add("span-invalid");
      p_gender.style.display = "none";
    }
  });
  document.querySelectorAll('input[name="gender"]').forEach((item, i) => {
    item.addEventListener('click', ev => {
      if (ev.target.checked) {
        if (i == 0) {
          item.value = 1;
        } else if (i == 1) {
          item.value = 2;
        }
        p_button.style.display = "flex";
        p_button.children[0].removeAttribute("disabled");
      } else {
        p_button.style.display = "none";
      }
    });
  });
})();
window.onload = function () {
  document.getElementById('formLab').reset();
}
let ale = document.getElementById('ale'), anemia = "", b_date_year = 0, b_date_month = 0, b_date_day = 0, op = 0;
let formLab = document.getElementById('formLab');
formLab.addEventListener('submit', ev => {
  ev.preventDefault();
  let level = Number(document.getElementById('level').value), age = document.getElementById('age').value;
  b_date_year = Number(age.slice(0, 4)), b_date_month = Number(age.slice(5,7)), b_date_day = Number(age.slice(8,10));
  op = Math.abs(new Date().getFullYear() - b_date_year);
  if (b_date_month == (new Date().getMonth() + 1)) {
    if (b_date_day <= new Date().getDate()) {
      op = op;
    } else {
      op -= 1;
    }
  } else if (b_date_month < (new Date().getMonth() + 1)) {
    op = op;
  } else {
    op -= 1;
  }
  op = op * 12; // se multiplica por 12, para calcular el mes transcurrido
  anemia = "negative";
  if ((op <= 1) && (level < 13)) {
    anemia = "positive";
  } else if ((op > 1 && op <= 6) && (level < 10)) {
    anemia = "positive";
  } else if ((op > 6 && op <= 12) && (level < 11)) {
    anemia = "positive";
  } else if ((op > 12 && op <= 60) && (level < 11.5)) {
    anemia = "positive";
  } else if ((op > 60 && op <= 120) && (level < 12.6)) {
    anemia = "positive";
  } else if ((op > 120 && op <= 180) && (level < 13)) {
    anemia = "positive";
  } else if (op > 180) {
    let female = document.getElementById('female').value;
    let male = document.getElementById('male').value;
    if (female) {
      if (level < 12) {
        anemia = "positive";
      }
    } else if (male) {
      if (level < 14) {
        anemia = "positive";
      }
    } 
  }
  if (anemia == "positive") {
    ale.classList.remove('alert-danger');
    ale.classList.add('alert-success');
    ale.innerText = `the person are a hemoglobin of ${level} the result is ${anemia}`;
    // console.log(`the person are a hemoglobin of ${level} the result is ${anemia}`);
  } else {
    ale.classList.remove('alert-success');
    ale.classList.add('alert-danger');
    ale.innerText = `the person are a hemoglobin of ${level} the result is ${anemia}`;
    // console.log(`the person are a hemoglobin of ${level} the result is ${anemia}`);
  }
  ev.target.querySelector('#p-age').children[1].value = "";
  ev.target.querySelector('#p-age').children[1].setAttribute('disabled', '');
  ev.target.querySelector('#p-age').style.display = "none";
  ev.target.querySelector('#p-gender').children[1].setAttribute('disabled', '');
  ev.target.querySelector('#p-gender').children[3].setAttribute('disabled', '');
  ev.target.querySelector('#p-gender').style.display = "none";
  ev.target.querySelector('#level').classList.remove('is-valid');
  ev.target.reset();
});