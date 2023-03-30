(function () {
  let level = document.getElementById('level'), p_average = document.getElementById('p-average'), p_subject = document.getElementById('p-subject');
  level.addEventListener('change', (e) => {
    if ((e.target.children[1].selected) || (e.target.children[2].selected)) {
      e.target.classList.add("is-valid");
      p_average.children[1].removeAttribute('disabled');
      p_average.style.display = "flex";
    }
  });
  p_average.children[1].addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      if (level.value == 1) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
        if (Number(e.target.value) <= 7) {
          p_subject.children[1].removeAttribute("disabled");
          p_subject.style.display = "flex";
        } else {
          p_subject.children[1].value = "";
          p_subject.children[1].setAttribute("disabled", "");
          p_subject.style.display = "none";
        }
      } else {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
      }
    } else {
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      p_subject.children[1].value = "";
      p_subject.children[1].setAttribute("disabled", "");
      p_subject.style.display = "none";
    }
  });
  p_subject.children[1].addEventListener('keyup', ev => {
    if (ev.target.value.length > 0) {
      ev.target.classList.remove('is-invalid');
      ev.target.classList.add('is-valid');
    } else {
      ev.target.classList.remove('is-valid');
      ev.target.classList.add('is-invalid');
    }
  });
})();
window.onload = function () {
  document.getElementById('formIns').reset();
}
let ale = document.getElementById('ale'), total = 0, discont = 0, units = 0;
let formIns = document.getElementById('formIns');
formIns.addEventListener('submit', ev => {
  if (ev.target.checkValidity()) {
    ev.preventDefault()
    ev.stopPropagation();
    let level = document.getElementById('level').value, average = document.getElementById('average').value;
    level = Number(level);
    average = Number(average);
    if(level == 1) {
      if (average >= 9.5) {
        total = (55/5) * 180;
        discont = total * .25;
        units = 55;
      } else if (average >= 9 && average <= 9.5) {
        total = (50/5) * 180;
        discont = total * .10;
        units = 50;
      } else if (average > 7 &&  average < 9) {
        total = (50/5) * 180;
        discont = 0;
        units = 50;
      } else if (average <= 7) {
        let subject = Number(document.getElementById('subject').value);
        if (subject <= 3) {
          total = (45/5) * 180;
          discont = 0;
          units = 45;
        } else {
          total = (40/5) * 180;
          discont = 0;
          units = 40;
        }
      } 
    } else {
      if (average >= 9.5) {
        total = (55/5) * 300;
        discont = total * .20;
        units = 55;
      } else {
        total = (55/5) * 300;
        discont = 0;
        units = 55;
      }
    }
    ale.innerText = `the total to pay for ${units} units is: ${Math.abs(total - discont)}
    the discont applied is: $${discont}`;
    ev.target.querySelector('#p-level').children[1].classList.remove("is-valid");
    ev.target.querySelector('#p-average').children[1].setAttribute("disabled", "");
    ev.target.querySelector('#p-average').children[1].classList.remove("is-valid");
    ev.target.querySelector('#p-subject').children[1].setAttribute("disabled", "");
    ev.target.querySelector('#p-average').style.display = "none";
    ev.target.querySelector('#p-subject').style.display = "none";
    ev.target.reset();
    if (!ale.classList.contains('animate__fadeInUp')) {
      ale.classList.remove('animate__fadeInDown');
      ale.classList.add('animate__fadeInUp');
    } else {
      ale.classList.remove('animate__fadeInUp');
      ale.classList.add('animate__fadeInDown');
    }
  }
});