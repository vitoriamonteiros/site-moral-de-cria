const popup = document.getElementById("popup");
const popupNome = document.getElementById("popup-nome");
const popupCargo = document.getElementById("popup-cargo");
const popupTexto = document.getElementById("popup-texto");
const popupImg = document.querySelector("#popup .popup-img img");

function openPopup(button) {
  const nome = button.dataset.nome;
  const cargo = button.dataset.cargo;
  const imagem = button.dataset.img;
  const texto = button.dataset.texto;

  popupNome.textContent = nome;
  popupCargo.textContent = cargo;
  popupImg.src = imagem;
  popupTexto.textContent = texto;

  popup.classList.add("open-popup");

  document.addEventListener('click', handleOutsideClick);
}

function closePopup() {
  popup.classList.remove("open-popup");
  document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(e) {
  if (!popup.contains(e.target) && !e.target.classList.contains("membro-box-btn")) {
    closePopup();
  }
}
