let alertI = document.getElementById('alertI');
// question 1
Swal.fire({
  title: '¿SENA significa servicio nacional de aprendizaje?',
  showDenyButton: true,
  showCancelButton: false,
  allowOutsideClick: false,
  allowEscapeKey: false,
  confirmButtonText: 'Yes',
  denyButtonText: `No`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below response 1 */
  if (result.isConfirmed) {
    // question 2
    Swal.fire({
      title: '¿El nivel “Tecnologo” sigue inmediatamente después del nivel técnico?',
      showDenyButton: true,
      showCancelButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below response 2 */
      if (result.isConfirmed) {
        // question 3
        Swal.fire({
          title: '¿La formación en Programación de software se ve dentro del proceso de articulación SENA?',
          showDenyButton: true,
          showCancelButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          confirmButtonText: 'Yes',
          denyButtonText: `No`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below response 3 */
          if (result.isConfirmed) {
            Swal.fire('Correct, ¡Very Good!', '', 'success');
            alertI.classList.remove('alert-primary');
            alertI.classList.remove('alert-danger');
            alertI.classList.add('alert-success');
            alertI.innerText = 'congratulation!, thank you by participating...';
          } else if (result.isDenied) {
            Swal.fire('Incorrect Response', '', 'error');
            alertI.classList.remove('alert-primary');
            alertI.classList.remove('alert-success');
            alertI.classList.add('alert-danger');
            alertI.innerText = 'game over!, thank you by participating...';
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Incorrect Response', '', 'error');
        alertI.classList.remove('alert-primary');
        alertI.classList.remove('alert-success');
        alertI.classList.add('alert-danger');
        alertI.innerText = 'game over!, thank you by participating...';
      }
    });
  } else if (result.isDenied) {
    Swal.fire('Incorrect Response', '', 'error');
    alertI.classList.remove('alert-primary');
    alertI.classList.remove('alert-success');
    alertI.classList.add('alert-danger');
    alertI.innerText = 'game over!, thank you by participating...';
  }
});