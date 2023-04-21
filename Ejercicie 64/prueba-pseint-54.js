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
let tbodyP = document.getElementById('tbodyP'), tr1TbodyP = tbodyP.children[0];
tbodyP.innerHTML = "";
for (let i = 1; i <= 200; i++) {
  if (i % 2 == 0) {
    tr1TbodyP.querySelectorAll('td')[1].innerText = i;
    const clone = tr1TbodyP.cloneNode(true);
    tbodyP.appendChild(clone);
  } else {
    tr1TbodyP.querySelectorAll('td')[0].innerText = i;
  }
}
