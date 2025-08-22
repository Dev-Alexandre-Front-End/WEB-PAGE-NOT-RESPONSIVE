let y = document.body;
const canvas = document.getElementsByClassName("canvas")[0];
const cx = canvas.getContext("2d");
let pst = {
  f: 10,
  x: 1
};
let grafic = new Image();
grafic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3zZZ3n860PGfVnkoBI-dDLuWgkleClHpDw&usqp=CAU";
grafic.onload = () => {
  cx.drawImage(grafic, pst.f, pst.x, canvas.width, canvas.height);
};
document.addEventListener("DOMContentLoaded", () => {
  const m = document.getElementById("menu");
  const b = document.getElementsByClassName("user-user")[0];
  b.addEventListener('click', function() {
    m.classList.toggle("active");
  });
});
let f = false;
let s;

function active() {
  setTimeout(() => {
    f = true;
    y.style.backgroundImage = "url('https://cdn.dribbble.com/users/1103017/screenshots/4671007/ezgif.com-optimize.gif')";
    y.style.backgroundRepeat = "no-repeat";
    y.style.backgroundSize = "cover";
    s = setTimeout(() => {
      remove();
    }, 5000);
  }, 100);
};
let remove = () => {
  if (f) {
    s = false;
    y.style.backgroundImage = "none";
    y.style.backgroundRepeat = "none";
    y.style.backgroundSize = "none";
  } else {
    window.prompt("no-no");
  };
};