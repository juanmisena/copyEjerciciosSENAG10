let formKilos = document.getElementById('formKilos');
formKilos.addEventListener('submit', function (e) {
  e.preventDefault();
  let cant_kilos = document.getElementById('cant_kilos'), demo = document.getElementById('demo'), text = document.getElementById('text');
  let numCantKilos = parseFloat(cant_kilos.value), discont = 0, messageDiscont = "";
  if (isNaN(numCantKilos)) {
    Swal.fire({icon: "error", title: "Upss...", text: "Please added a value"});
  } else {
    Swal.fire({icon: "success", title: "Send", timer: 1500});
    if (numCantKilos >= 0 && numCantKilos <= 2) {
      discont = 0;
      messageDiscont = "se aplico un 0% de descuento";
    } else if (numCantKilos >= 2.01 && numCantKilos <= 5) {
      discont = Math.ceil((numCantKilos * 10) / 100);
      messageDiscont = "se aplico un 10% de descuento";
    } else if (numCantKilos >= 5.01 && numCantKilos <= 10) {
      discont = Math.ceil((numCantKilos * 15) / 100);
      messageDiscont = "se aplico un 15% de descuento";
    } else if (numCantKilos > 10.1) {
      discont = Math.ceil((numCantKilos * 20) / 100);
      messageDiscont = "se aplico un 20% de descuento";
    }
    text.textContent = messageDiscont;
    demo.textContent = "$" + (numCantKilos - discont);
  }
  formKilos.reset();
});