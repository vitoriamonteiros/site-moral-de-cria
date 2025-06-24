function copiarPix() {
  const chave = document.querySelector(".chave").innerText;
  navigator.clipboard.writeText(chave)
    .then(() => {
      alert("Chave PIX copiada com sucesso!");
    })
    .catch(() => {
      alert("Erro ao copiar a chave PIX. Tente manualmente.");
    });
}