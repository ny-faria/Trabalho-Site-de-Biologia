
document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.card-nav');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            botao.style.transform = 'scale(0.97)';
        });
    });
});
