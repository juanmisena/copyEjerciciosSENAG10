// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();
// script of form
(function () {
  let formCalcAge = document.getElementById('formCalcAge');
  formCalcAge.addEventListener('submit', e => {
    e.preventDefault();
    let inputValid = document.getElementById('inputValid');
    let isValidatedDate = new Date(inputValid.value);
    if (isNaN(isValidatedDate)) {
      inputValid.classList.remove('is-valid');
      inputValid.classList.add('is-invalid');
      console.log(true);
    } else {
      inputValid.classList.remove('is-invalid');
      inputValid.classList.add('is-valid');
      const date_target = isValidatedDate;
      const span_days = document.getElementById('days');
      const span_hours = document.getElementById('hours');
      const span_minutes = document.getElementById('minutes');
      const span_seconds = document.getElementById('seconds');
      const milliseconds_of_a_second = 1000;
      const milliseconds_of_a_minute = milliseconds_of_a_second * 60;
      const milliseconds_of_a_hour = milliseconds_of_a_minute * 60;
      const milliseconds_of_a_day = milliseconds_of_a_hour * 24;
      //==
      // Functions
      //==
      function updateCountDown() {
        const now = new Date();
        const duration = (date_target - now);
        const remaining_days = Math.abs(Math.floor((duration / milliseconds_of_a_day)));
        const remaining_hours = Math.abs(Math.floor((duration % milliseconds_of_a_day) / milliseconds_of_a_hour));
        const remaining_minutes = Math.abs(Math.floor((duration % milliseconds_of_a_hour) / milliseconds_of_a_minute));
        const remaining_seconds = Math.abs(Math.floor((duration % milliseconds_of_a_minute) / milliseconds_of_a_second));
        span_days.textContent = remaining_days;
        span_hours.textContent = remaining_hours;
        span_minutes.textContent = remaining_minutes;
        span_seconds.textContent = remaining_seconds;
      }
      updateCountDown();
      const start = setInterval(updateCountDown, milliseconds_of_a_second);
    }
    formCalcAge.reset();
  });
})();