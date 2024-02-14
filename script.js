function showCheesecake() {
  window.location.replace("./landing.html");
}

function moveNoButton() {
  let xPos = Math.random() * (window.innerWidth - 100);
  let yPos = Math.random() * (window.innerHeight - 50);

  document.getElementById("noButton").style.position = "absolute";
  document.getElementById("noButton").style.left = `${xPos}px`;
  document.getElementById("noButton").style.top = `${yPos}px`;
}
