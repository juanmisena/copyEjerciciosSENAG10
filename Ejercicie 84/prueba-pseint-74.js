window.onload = function () {
  document.getElementById('p-quest').style.display = "none";
  document.getElementById('formQuest').reset();
}
let ale = document.getElementById('ale'), arrQuest = [], contOne = 0, contThrow = 0, stp = false, contThree = 0;
let formQuest = document.getElementById('formQuest');
formQuest.addEventListener('submit', e => {
  if (e.target.checkValidity()) {
    e.preventDefault();
  }
  let amount = Number(document.getElementById('amount').value), quest = parseInt(document.getElementById('quest').value);
  if (!isNaN(quest)) {
    arrQuest.push(quest);
    if (arrQuest.length == amount) {
      for (const item of arrQuest) {
        switch (item) {
          case  1:
            contOne++;
            break;
          case 2:
            contThrow++;
            break;
          case 3:
            contThree++;
            break; 
        }
      }
      ale.innerText = `in the following questionnaire it is calculated:
      the percentage of the ${amount} senators are:
      the ${Number(((contOne * 100) / amount).toFixed(2))}% are treated by FTA to USA
      the ${Number(((contThrow * 100) / amount).toFixed(2))}% they are against
      the ${Number(((contThree * 100) / amount).toFixed(2))}% they refrain from giving an opinion`;
      e.target.reset();
      stp = true;
      arrQuest.length = 0;
      contOne = 0;
      contThrow = 0;
      contThree = 0;
    }
  }
  if (!stp) {
    e.target.querySelector('#p-amount').style.display = "none";
    e.target.querySelector('#amount').removeAttribute('required');
    e.target.querySelector('#amount').setAttribute('disabled', '');
    e.target.querySelector('#amount').value = amount;
    e.target.querySelector('#p-quest').style.display = "flex";
    e.target.querySelector('#quest').removeAttribute('disabled');
    e.target.querySelector('#quest').setAttribute('required', '');
    e.target.querySelector('#quest').options[0].selected = true;
  } else {
    e.target.querySelector('#p-amount').style.display = "flex";
    e.target.querySelector('#amount').removeAttribute('disabled');
    e.target.querySelector('#amount').setAttribute('required', '');
    e.target.querySelector('#p-quest').style.display = "none";
    e.target.querySelector('#quest').removeAttribute('required');
    e.target.querySelector('#quest').setAttribute('disabled', '');
    stp = false;
  }
});