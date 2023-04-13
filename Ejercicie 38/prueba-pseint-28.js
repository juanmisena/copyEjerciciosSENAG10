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
  document.getElementById('formSh').reset();
}
let aler = document.getElementById('aler'), totalSh = 0, discSh = 0;
let formSh = document.getElementById('formSh');
formSh.addEventListener('submit', (e) => {
  e.preventDefault();
  let prSh = Number(document.getElementById('prSh').value);
  let cantSh = Number(document.getElementById('cantSh').value);
  totalSh = (cantSh * prSh);
  if (cantSh < 3) {
    discSh = (totalSh * .10).toFixed(2);
  } else {
    discSh = (totalSh * .20).toFixed(2);
  }
  aler.innerText = `
    The total to pay is: $${(totalSh - discSh).toFixed(2)}
    The applied discount is: $${discSh}
  `;
  // console.log(`The total to pay is: $${totalSh - discSh}`);
  // console.log(`The applied discount is: $${discSh}`);
  e.target.reset();
});