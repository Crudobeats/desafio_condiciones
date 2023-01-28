// Script Password //

const button = document.querySelector(".boton");
const advice = document.querySelector(".advice");

button.addEventListener("click", () => {
  let select1 = document.querySelector("#select1").value;
  let select2 = document.querySelector("#select2").value;
  let select3 = document.querySelector("#select3").value;

  let clave = select1 + select2 + select3;

  console.log(typeof clave);

  if (clave === "911") {
    advice.textContent = "Password 1 correcto";
  } else if (clave === "714") {
    advice.textContent = "Password 2 correcto";
  } else {
    advice.textContent = "Password incorrecta";
  }
});
