(function () {
  let price = document.getElementById('price'), p_brand = document.getElementById('p_brand'), p_percentage = document.getElementById('p_percentage');
  price.addEventListener('keyup', ev => {
    if (ev.target.value.length > 0) {
      p_brand.style.display = "flex";
      p_brand.children[1].removeAttribute('disabled');
    } else {
      p_brand.children[1].value = "";
      p_percentage.children[1].value = "";
      p_brand.children[1].setAttribute('disabled', '');
      p_percentage.children[1].setAttribute('disabled', '');
      p_brand.style.display = "none";
      p_percentage.style.display = "none";
    }
  });
  p_brand.children[1].addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
      p_percentage.style.display = "flex";
      p_percentage.children[1].removeAttribute('disabled');
    } else {
      p_percentage.children[1].value = "";
      p_percentage.children[1].setAttribute('disabled', '');
      p_percentage.style.display = "none";
    }
  });
})();
window.onload = function () {
  document.getElementById('formProvider').reset();
}
let ale = document.getElementById('ale'), discont = 0, vat = 0, total = 0;
let formProvider = document.getElementById('formProvider');
formProvider.addEventListener('submit', (e) => {
  e.preventDefault();
  let price = Number(document.getElementById('price').value), brand = document.getElementById('brand').value, percentage = Number(document.getElementById('percentage').value);
  if (price >= 2000) {
    discont = price * .10;
  }
  if ((brand == "NOSY") || (brand == "Nosy") || (brand == "nosy")) {
    discont = discont + (price * .05);
  }
  total = Math.abs(price - discont);
  vat = Math.ceil((total * percentage) / 100);
  ale.innerText = `the total to pay is: $${price}
  the discont applied is: $${discont}
  the VAT applied is: $${vat}
  the total to pay already with VAT the included is: $${total + vat}`;
  e.target.querySelector('#p_brand').children[1].setAttribute('disabled', '');
  e.target.querySelector('#p_percentage').children[1].setAttribute('disabled', '');
  e.target.querySelector('#p_brand').style.display = "none";
  e.target.querySelector('#p_percentage').style.display = "none";
  e.target.reset();
  if (!ale.classList.contains('animate__bounceInUp')) {
    ale.classList.remove('animate__bounceInDown');
    ale.classList.add('animate__bounceInUp');
  } else {
    ale.classList.remove('animate__bounceInUp');
    ale.classList.add('animate__bounceInDown');
  }
});