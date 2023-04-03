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
let formNote = document.getElementById('formNote');
formNote.addEventListener('submit', (e) => {
  e.preventDefault();
  let numNote = parseFloat(document.getElementById('numNote').value), demo = document.getElementById('demo');
  if (numNote > 3) {
    demo.parentElement.parentElement.classList.remove('alert-primary', 'alert-danger');
    demo.parentElement.parentElement.classList.add('alert-success');
    demo.classList.remove('text-danger');
    demo.classList.add('text-success');
    demo.textContent = 'approved';
  } else {
    demo.parentElement.parentElement.classList.remove('alert-primary', 'alert-success');
    demo.parentElement.parentElement.classList.add('alert-danger');
    demo.classList.remove('text-success');
    demo.classList.add('text-danger');
    demo.textContent = 'reproved';
  }
  formNote.reset();
  window.setTimeout(function () {
    let role = document.querySelector('div[role="alert"]');
    role.classList.remove('alert-success', 'alert-danger');
    role.classList.add('alert-primary');
    demo.classList.remove('text-danger', 'text-success');
    demo.classList.add('text-primary');
    demo.textContent = '';
  }, 3000);
});