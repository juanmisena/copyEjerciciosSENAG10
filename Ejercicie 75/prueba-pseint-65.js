let ale = document.getElementById('ale');
let x = 1;
while (x < 100) {
  if (x % 3 == 0) {
    ale.innerText += " " + x + " ";
  }
  x++;
}