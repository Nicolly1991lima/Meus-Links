const botaoTema = document.getElementById('btn-tema');

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
});