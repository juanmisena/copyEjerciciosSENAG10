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
(function () {
  var actualizarHora = function () {
    var fecha = new Date(),
    hora = fecha.getHours(),
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds(),
    diaSemana = fecha.getDay(),
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    anio = fecha.getFullYear(),
    ampm;
    var $pHoras = document.querySelector("#horas"),
    $pSegundos = document.querySelector("#segundos"),
    $pMinutos = document.querySelector("#minutos"),
    $pAMPM = document.querySelector("#ampm"),
    $pDiaSemana = document.querySelector("#diaSemana"),
    $pDia = document.querySelector("#dia"),
    $pMes = document.querySelector("#mes"),
    $pAnio = document.querySelector("#anio");
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    var messes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    $pDiaSemana.textContent = semana[diaSemana];
    $pDia.textContent = dia;
    $pMes.textContent = messes[mes];
    $pAnio.textContent = anio;
    if (hora >= 12) {
      hora -= 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }
    if (hora == 0) {
      hora = 12;
    }
    if (hora < 10) {
      $pHoras.textContent = "0" + hora;
    } else {
      $pHoras.textContent = hora;
    }
    if (minutos < 10) {
      $pMinutos.textContent = "0" + minutos;
    } else {
      $pMinutos.textContent = minutos;
    }
    if (segundos < 10) {
      $pSegundos.textContent = "0" + segundos;
    } else {
      $pSegundos.textContent = segundos;
    }
    $pAMPM.textContent = ampm;
  }
  actualizarHora();
  var intervalo = setInterval(actualizarHora, 1000);
})();
/* window.onload = function () {
  startTime();
}
let ale = document.getElementById('ale'), outHours, outMinutes, outSeconds;
function startTime() {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let ap = (hr < 12) ? "AM" : "PM";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  ale.innerHTML = `${hr} : ${min} : ${sec} ${ap}`;
  let time = setTimeout(function() { startTime(); }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
} */