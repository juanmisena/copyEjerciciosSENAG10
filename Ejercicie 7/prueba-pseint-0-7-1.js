window.onload = function () {
  document.getElementById('formPorc').reset();
}
let formPorc = document.getElementById('formPorc');
formPorc.addEventListener('submit', (e) => {
  e.preventDefault();
  // prueba-pseint-7
  let porcent = document.getElementById('porcent'), porcN30 = 0, porcN50 = 0, porcN80 = 0, convN = parseFloat(porcent.value), demo = document.getElementById('demo');
  porcN30 = Math.ceil((convN * 30) / 100);
  // console.log("the 30% is-----> " + porcN);
  porcN50 = Math.ceil((convN * 50) / 100);
  // console.log("the 50% is-----> " + porcN);
  porcN80 = Math.ceil((convN * 80) / 100);
  // console.log("the 80% is-----> " + porcN);
  demo.innerText = `
    the 30% is----->  ${porcN30}
    the 50% is----->  ${porcN50}
    the 80% is----->  ${porcN80}
  `;
  e.target.reset();
});