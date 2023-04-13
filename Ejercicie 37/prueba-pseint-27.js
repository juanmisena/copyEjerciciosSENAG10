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
  // if(keyProd == "01") {
  //   disProd = (pricProd * .10);
  // } else {
    //   disProd = (pricProd * .20);
    // }
  switch (keyProd) {
    case "01":
      disProd = (pricProd * .10);
      break;
    case "02":
      disProd = (pricProd * .20);
      break;
  }
  namProd = String(namProd).split(' ');
  for (let i = 0; i < namProd.length; i++) {
    namProd[i] = String(namProd[i]).charAt(0).toUpperCase() + String(namProd[i]).slice(1).toLowerCase();
  }
  namProd = Array.from(namProd).join(' ');
  aler.innerText = `
    name product: ${namProd}
    key: ${keyProd}
    original price: $${pricProd}
    discont with price: $${(pricProd - disProd).toFixed(2)}
  `;
  /* console.log(`name product: ${namProd}`);
  console.log(`key: ${keyProd}`);
  console.log(`original price: ${pricProd}`);
  console.log(`discont with price: ${(pricProd - disProd).toFixed(2)}`); */
  formProd.reset();
});