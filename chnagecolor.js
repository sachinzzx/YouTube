
document.getElementById("color-btn").onclick = function () {
  document.body.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
};

