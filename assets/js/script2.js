// Script Stickers //
const info = document.querySelector("#info");

function revisar() {
  let stickerA = Number(document.querySelector("#model1").value);
  let stickerB = Number(document.querySelector("#model2").value);
  let stickerC = Number(document.querySelector("#model3").value);

  let total = stickerA + stickerB + stickerC;

  if (total <= 10) {
    info.textContent = `Llevas ${total} stickers en total`;
  } else if (total > 10) {
    info.textContent = `Llevas demasiados stickers en total`;
  }
}

let boton = document.querySelector(".boton-v");

boton.addEventListener("click", revisar);