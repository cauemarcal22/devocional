
  const botao = document.getElementById('botaoSegredo');
  const mensagem = document.getElementById('mensagemSegredo');

  botao.addEventListener('click', () => {
    mensagem.style.display = 'block';
    setTimeout(() => {
      mensagem.style.opacity = 1;
    }, 50);
  });
