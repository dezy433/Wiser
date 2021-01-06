window.addEventListener("DOMContentLoaded", () => {
  console.log("ready");
});


 var x = document.getElementById("text");
x.style.display = "none";

function buttonexpand() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}