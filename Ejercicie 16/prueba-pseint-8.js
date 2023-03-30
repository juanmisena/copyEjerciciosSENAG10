let formVat = document.getElementById('formVat');
formVat.addEventListener('submit', e => {
  e.preventDefault();
  let numPrice = parseFloat(document.getElementById('numPrice').value), porcVat = Math.floor((numPrice * 16) / 100), demo = document.getElementById('demo');
  demo.textContent = `the vat corresponds --------> 16 % \/\/the value current is : ${numPrice + porcVat}`;
  formVat.reset();
});