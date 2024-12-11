function checkScreenSize() {
    const screenMessage = document.getElementById("screenMessage");
    const mainContent = document.querySelector("main");
    
    if(window.innerWidth <= 950) {
      screenMessage.classList.remove("invisible"); // Mostra a mensagem
      mainContent.style.visibility = "hidden"; // Esconde o conteúdo principal
    } else {
      screenMessage.classList.add("invisible"); // Esconde a mensagem
      mainContent.style.visibility = "visible"; // Mostra o conteúdo principal
    }
  }
  
  // Verifica o tamanho da tela ao carregar a página
  window.addEventListener("load", checkScreenSize);
  
  // Verifica o tamanho da tela ao redimensionar a janela
  window.addEventListener("resize", checkScreenSize);