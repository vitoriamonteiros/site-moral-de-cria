function carregarNavEFooter() {
  const navHtml = `
    <header>
      <img class="logo" src="assets/img/logo.png" alt="Logo Moral de Cria">
      <nav>
        <a href="index.html">HOME</a>
        <a href="sobrenos.html">SOBRE NÓS</a>
        <a href="projetos.html">PROJETOS</a>
        <a href="participe.html">PARTICIPE</a>
        <a href="contato.html">CONTATO</a>
        <a href="https://" target="_blank" rel="noopener noreferrer" id="btn-header">DOE AGORA</a>
      </nav>
    </header>
  `;

  const footerHtml = `
    <footer>
      <section class="footer-logo">
        <img src="assets/img/logo white.png" alt="Logo Moral de Cria">
        <p>Somos motivados a fazer de tudo para tornar o mundo um lugar melhor</p>
      </section>
      <section class="redes-sociais">
        <div class="nav-bar">
          <a href="index.html">HOME</a>
          <a href="sobrenos.html">SOBRE NÓS</a>
          <a href="projetos.html">PROJETOS</a>
          <a href="participe.html">PARTICIPE</a>
          <a href="contato.html">CONTATO</a>
        </div>
        <div class="redes">
          <p>Nos acompanhe</p>
          <div class="redes-container">
            <a href="https://www.instagram.com/moraldecria2" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.instagram.com/casa_deformacaoprofissionalmdc" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://youtube.com/@ongmoraldecria" target="_blank" rel="noopener"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://www.facebook.com/coletivomoraldecria" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
        </div>
      </section>
      <section class="direitos">
        <p>© 2024 ONG Moral de Cria - CNPJ: 54.610.631/0001-51 | Todos os direitos reservados</p>
      </section>
    </footer>
  `;

  document.getElementById('nav-container').innerHTML = navHtml;
  document.getElementById('footer-container').innerHTML = footerHtml;
}

window.onload = carregarNavEFooter;
