(function () {
  const today = new Date();
  const yesterday = new Date(today);
  let fmtMonth = yesterday.getMonth() + 1, fmtDay = yesterday.getDate() - 1;
  fmtMonth = (fmtMonth < 10) ? "0" + fmtMonth : fmtMonth;
  fmtDay = (fmtDay < 10) ? "0" + fmtDay : fmtDay;
  let format = `${yesterday.getFullYear()}-${fmtMonth}-${fmtDay}`;
  document.getElementById('date_user').setAttribute('max', format);
})();
let formToDate = document.getElementById('formToDate');
formToDate.addEventListener('submit', function (e) {
  e.preventDefault();
  let date_user = document.getElementById('date_user').value;
  let demo = document.getElementById('demo');
  calculateAge(date_user, demo);
  formToDate.reset();
});
/**
 * @param {Date} date
 * @param {any} demo
 * @param {any} month
 */
function calculateAge (date, demo) {
  date = date.replace(/-0/g, '-');
  let toDate = new Date();
  let birthday = new Date(date);
  let timePass = toDate - birthday;
  let segs = 1000, mins = segs * 60, hours = mins * 60, days = hours * 24, months = days * 30, years = months * 12;
  let remYears = Math.floor(timePass / years);
  timePass = timePass - (remYears * years);
  let remMonths = Math.floor(timePass / months);
  timePass = timePass - (remMonths * months);
  let remDays = Math.floor(timePass / days);
  timePass = timePass - (remDays * days);
  let remHours = Math.floor(timePass / hours);
  timePass = timePass - (remHours * days);
  let remMinutes = Math.floor(timePass / mins);
  timePass = timePass - (remMinutes * mins);
  let remSeconds = Math.floor(timePass / segs);
  if (remYears > 0) {
    if (remYears >= 18) {
      demo.classList.remove('alert-primary');
      demo.classList.remove('alert-danger');
      demo.classList.add('alert-success');
      demo.innerHTML = `you are ${remYears} years old <br> you're of age`;
    } else {
      demo.classList.remove('alert-primary');
      demo.classList.remove('alert-success');
      demo.classList.add('alert-danger');
      demo.innerHTML = `you are ${remYears} years old <br> you are underage`;
    }
  } else {
    if (remMonths > 0) {
      demo.classList.remove('alert-primary');
      demo.classList.remove('alert-success');
      demo.classList.add('alert-danger');
      demo.innerHTML = `you are ${remMonths} months and ${remDays} days <br> you are underage`;
    } else {
      if ((remDays > 0) && (remDays <= 30)) {
        demo.classList.remove('alert-primary');
        demo.classList.remove('alert-success');
        demo.classList.add('alert-danger');
        demo.innerHTML = `you have ${remDays} days <br> your are underage`;
      } 
    }
  }
  // console.log(remYears + " " + remMonths + " " + remDays + " " + remHours + " " + remSeconds);
  return;
}