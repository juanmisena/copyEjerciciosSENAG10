let formNote = document.getElementById('formNote');
formNote.addEventListener('submit', (e) => {
  e.preventDefault();
  let numNote = parseFloat(document.getElementById('numNote').value), demo = document.getElementById('demo');
  if (numNote > 3) {
    demo.classList.remove('text-danger');
    demo.classList.add('text-success');
    demo.textContent = 'approved';
  } else {
    demo.classList.remove('text-success');
    demo.classList.add('text-danger');
    demo.textContent = 'reproved';
  }
  formNote.reset();
});