let i = 0;
function carrosel() {
  i++;
  if (i >= 5) {
    i = 1;
  }
  radiobtn = document.getElementById("slide" + i);
  radiobtn.checked = true;
  console.log(i);
}
setInterval(carrosel, 1000);
