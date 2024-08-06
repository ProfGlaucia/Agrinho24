// Espera até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {

    // Função para navegação suave para âncoras
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

    // Função para alternar a visibilidade de uma seção ao clicar em um botão
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

    // Função para atualizar o conteúdo do rodapé com o ano atual
    function updateFooterYear() {
        const footer = document.querySelector('footer p');
        const currentYear = new Date().getFullYear();
        footer.textContent = `&copy; ${currentYear} Visando o Futuro. Todos os direitos reservados.`;
    }

    // Função para exibir uma mensagem de boas-vindas ao carregar a página
    function welcomeMessage() {
        alert('Bem-vindo ao projeto "Visando o Futuro"!');
    }

    // Inicializa as funções
    smoothScroll();
    toggleSectionVisibility();
    updateFooterYear();
    welcomeMessage();
});

// Adiciona uma classe oculta ao CSS para controle de visibilidade
// Você deve adicionar isso ao seu arquivo style.css:
// .hidden {
//     display: none;
// }
