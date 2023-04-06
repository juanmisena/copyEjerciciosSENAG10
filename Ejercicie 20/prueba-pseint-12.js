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
document.addEventListener("DOMContentLoaded", () => {
  let alert = document.getElementById("alert");
  let html = `
    <input type="number" class="form-control" name="numSal" id="numSal" min="1" placeholder="salary daily" required>
    <br>
    <input type="number" class="form-control" name="cantH" id="cantH" min="1" placeholder="cant hours" required>
  `;
  Swal.fire({
    icon: "question",
    title: "salary empleoyee",
    html: html,
    confirmButtonText: "calculate",
    allowOutsideClick: false,
    allowEscapeKey: false,
    preConfirm: () => {
      const numSal = Swal.getPopup().querySelector('#numSal').value;
      const cantH = Swal.getPopup().querySelector('#cantH').value;
      if (!numSal || !cantH) {
        Swal.showValidationMessage('Please enter salary daily and cant hours');
      } 
      return {numSal: parseFloat(numSal), cantH: parseFloat(cantH)};
    }
  }).then((result) => {
    if (result.isConfirmed) {
      getValCalc(result.value);
    }
  });
  /**
   * @param {any} obj 
   */
  function getValCalc(obj) {
    let {numSal} = obj;
    let {cantH} = obj;
    let subtotalSal = numSal * cantH;
    let porcSal = Math.ceil((subtotalSal * 20) / 100);
    let totalSal = Math.abs(subtotalSal - porcSal);
    alert.classList.remove('alert-light');
    alert.classList.add('alert-success');
    alert.innerText = 'your salary is: $' + totalSal;
  }
});