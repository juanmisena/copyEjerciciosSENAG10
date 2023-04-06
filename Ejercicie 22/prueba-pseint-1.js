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
document.addEventListener("DOMContentLoaded", function () {
  let formSend = document.getElementById('formSend');
  formSend.addEventListener('submit', (e) => {
    e.preventDefault();
    let empl = document.getElementById('empl');
    let demo = document.getElementById('demo');
    let empleoye_name = document.getElementById('empleoye').value;
    let cant_work_daytime = parseFloat(document.getElementById('cant_work_daytime').value);
    let cant_work_night = parseFloat(document.getElementById('cant_work_night').value);
    let value_of_a_hour = 5000, salaryNight = 0, salaryDateTime = 0, salary = 0, discont = 0, regx = /([\d|°"#$%&/()='¿¡/*\-+._,;:<>]+)/g;
    if ((!empleoye_name.length > 0) || (isNaN(cant_work_daytime)) || (isNaN(cant_work_night))) {
      Swal.fire({icon: "error", title: "Upps...", text: "please insert the fields required"});
    } else {
      if (regx.test(empleoye_name)) {
        Swal.fire({icon: "error", title: "Upps...", text: "please enter text only...", footer: "<span class='text-danger'>you do not have permission to enter numbers and special characters</span>"});
      } else {
        Swal.fire({icon: "success", title: "Sending...", timer: 1500});
        salaryDateTime = cant_work_daytime * value_of_a_hour;
        salaryNight = Math.ceil(cant_work_night * ((value_of_a_hour * 35) / 100));
        salary = salaryDateTime + salaryNight;
        if (salary < 40000) {
          empl.textContent = empleoye_name;
          demo.textContent = "$" + salary;
        } else if(salary >= 40000 && salary <= 200000) {
          discont = Math.ceil((salary * 10) / 100);
          empl.textContent = empleoye_name;
          demo.textContent = "$" + (salary - discont);
        } else if(salary > 200000) {
          discont = Math.ceil((salary * 15.33) / 100);
          empl.textContent = empleoye_name;
          demo.textContent = "$" + (salary - discont);
        }
      }
    }
    formSend.reset();
  });
}, true);