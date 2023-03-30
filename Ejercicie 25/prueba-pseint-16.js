window.onload = function () {
  document.getElementById('formSt').reset();
}
document.addEventListener('DOMContentLoaded', () => {
  let alert = document.getElementById('alert'), arrNote = [], calcNote = 0, addNote;
  let formSt = document.getElementById('formSt');
  formSt.addEventListener('submit', e => {
    e.preventDefault();
    let numCodeSt = parseFloat(document.getElementById('numCodeSt').value), nameSt = document.getElementById('nameSt').value, nameMatterSt = document.getElementById('nameMatterSt').value, numNoteSt = parseFloat(document.getElementById('numNoteSt').value);
    nameSt = nameSt.trim();
    nameMatterSt = nameMatterSt.trim();
    let arr = nameSt.split(" ");
    let arr2 = nameMatterSt.split(" ");
    for (let i = 0; i < arr.length; i++) {
     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    for (let j = 0; j < arr2.length; j++) {
     arr2[j] = arr2[j].charAt(0).toUpperCase() + arr2[j].slice(1);
    }
    let str2 = arr.join(" ");
    let str3 = arr2.join(" ");
    const objLS = {codeStudent: numCodeSt, nameStudent: str2, nameMatter: str3};
    arrNote.push(numNoteSt);
    if (arrNote.length > 0) {
      let clf = document.getElementsByClassName('input-group')[0].children[1];
      let cls = document.getElementsByClassName('input-group')[1].children[1];
      let clt = document.getElementsByClassName('input-group')[2].children[1];
      clf.removeAttribute("required");
      cls.removeAttribute("required");
      clt.removeAttribute("required");
      clf.setAttribute("value", objLS.codeStudent);
      cls.setAttribute("value", objLS.nameStudent);
      clt.setAttribute("value", objLS.nameMatter);
      clf.setAttribute("disabled", "disabled");
      clf.setAttribute("readonly", "readonly");
      cls.setAttribute("disabled", "disabled");
      cls.setAttribute("readonly", "readonly");
      clt.setAttribute("disabled", "disabled");
      clt.setAttribute("readonly", "readonly");
    }
    addNote = arrNote.reduce((acc, numNote) => acc + numNote, 0);
    calcNote = Number((addNote / 3).toFixed(1));
    if (arrNote.length == 3) {
      formSt.innerHTML = "";
      if (calcNote >= 4.0) {
        alert.classList.remove('alert-primary');
        alert.classList.remove('alert-danger');
        alert.classList.add('alert-success');
        alert.innerText = `
        code of student: ${objLS.codeStudent}
        name student: ${objLS.nameStudent}
        name of the matter: ${objLS.nameMatter}
        note definitive: ${calcNote} ¡Aproved!
        `;
      } else {
        alert.classList.remove('alert-primary');
        alert.classList.remove('alert-success');
        alert.classList.add('alert-danger');
        alert.innerText = `
        code of student: ${objLS.codeStudent}
        name student: ${objLS.nameStudent}
        name of the matter: ${objLS.nameMatter}
        note definitive: ${calcNote} ¡Reproved!
        `;
      }
    }
    formSt.reset();
  });
});