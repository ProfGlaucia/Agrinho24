// Espera at� que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {

    // Fun��o para navega��o suave para �ncoras
    function smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Fun��o para alternar a visibilidade de uma se��o ao clicar em um bot�o
    function toggleSectionVisibility() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Mostrar/Ocultar';
            section.prepend(toggleButton);

            toggleButton.addEventListener('click', () => {
                section.querySelector('p, ul').classList.toggle('hidden');
                toggleButton.textContent = section.querySelector('p, ul').classList.contains('hidden') ? 'Mostrar' : 'Ocultar';
            });
        });
    }

    // Fun��o para atualizar o conte�do do rodap� com o ano atual
    function updateFooterYear() {
        const footer = document.querySelector('footer p');
        const currentYear = new Date().getFullYear();
        footer.textContent = `&copy; ${currentYear} Visando o Futuro. Todos os direitos reservados.`;
    }

    // Fun��o para exibir uma mensagem de boas-vindas ao carregar a p�gina
    function welcomeMessage() {
        alert('Bem-vindo ao projeto "Visando o Futuro"!');
    }

    // Inicializa as fun��es
    smoothScroll();
    toggleSectionVisibility();
    updateFooterYear();
    welcomeMessage();
});

// Adiciona uma classe oculta ao CSS para controle de visibilidade
// Voc� deve adicionar isso ao seu arquivo style.css:
// .hidden {
//     display: none;
// }
