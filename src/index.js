const frente = document.getElementById("frente");

document.addEventListener("mousemove", (e) => {
  let x = `${e.pageX}px`;
  let y = `${e.pageY}px`;

  frente.style.webkitMaskImage = `radial-gradient(circle at ${x} ${y}, transparent 50px, black 0%)`;
});
