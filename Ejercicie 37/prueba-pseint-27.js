window.onload = function () {
  document.querySelector('#formProd').reset();
}
let aler = document.getElementById('aler'), disProd = 0;
let formProd = document.querySelector('#formProd');
formProd.addEventListener('submit', (e) => {
  e.preventDefault();
  let namProd = document.querySelector('#namProd').value;
  let pricProd = Number(document.querySelector('#pricProd').value);
  let keyProd = document.querySelector('#keyProd').value;
  if(keyProd == "01") {
    disProd = (pricProd * .10);
  } else {
    disProd = (pricProd * .20);
  }
  aler.innerText = `
    name product: ${namProd}
    key: ${keyProd}
    original price: ${pricProd}
    discont with price: ${(pricProd - disProd).toFixed(2)}
  `;
  /* console.log(`name product: ${namProd}`);
  console.log(`key: ${keyProd}`);
  console.log(`original price: ${pricProd}`);
  console.log(`discont with price: ${(pricProd - disProd).toFixed(2)}`); */
  formProd.reset();
});