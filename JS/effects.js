// ============================================================
// effects.js
// Efeitos visuais globais independentes de página:
// 1. Cursor personalizado (só em desktop com rato)
// 2. Partículas geométricas animadas de fundo
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------
    // 1. CURSOR PERSONALIZADO
    // Substitui o cursor padrão por um triângulo verde
    // Só ativo em dispositivos com rato (não touch)
    // Estilo definido em index.css — #custom-cursor
    // --------------------------------------------------------
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
        // Cria o elemento do cursor se não existir
        if (!document.getElementById('custom-cursor')) {
            const cursorDiv = document.createElement('div');
            cursorDiv.id = 'custom-cursor';
            document.body.appendChild(cursorDiv);
        }

        const cursor = document.getElementById('custom-cursor');
        
        // Segue o rato com requestAnimationFrame para performance
        window.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            });
        });

        // Elementos interativos que fazem o cursor crescer e ficar branco
        const targetSelectors = 'a, button, details summary, .lang-btn, .btn-cta, .btn-candidata, video, .saida-row, .parceiro-link';
        
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest(targetSelectors)) {
                cursor.style.transform = 'scale(1.6)';
                cursor.style.backgroundColor = '#ffffff'; 
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest(targetSelectors)) {
                cursor.style.transform = 'scale(1)';
                cursor.style.backgroundColor = '#00ff66'; 
            }
        });
    }

    // --------------------------------------------------------
    // 2. PARTÍCULAS GEOMÉTRICAS
    // Cria elementos HTML com imagens geométricas animadas
    // que flutuam aleatoriamente no fundo de todas as páginas
    // Animação definida em index.css — @keyframes moveAndRotate
    // Para alterar número de partículas: muda 'count' em cada shape
    // Para alterar imagens: substitui os ficheiros em IMGS/
    // --------------------------------------------------------
    function createParticles() {
        const container = document.createElement('div');
        container.id = 'particles-container';
        document.body.appendChild(container);

        // Tipos de formas e quantidade de cada uma
        const shapes = [
            { src: "IMGS/Triangle.png", count: 6, class: "p-tri" },
            { src: "IMGS/Square.png",   count: 6, class: "p-sq" },
            { src: "IMGS/Circle.png",   count: 6, class: "p-circ" },
            { src: "IMGS/X.png",        count: 6, class: "p-x" }
        ];

        shapes.forEach(shape => {
            for (let i = 0; i < shape.count; i++) {
                const img = document.createElement('img');
                img.src = shape.src;
                img.className = `floating-particle ${shape.class}`;
                
                // Posição inicial aleatória no ecrã
                img.style.left = Math.random() * 95 + "vw";
                img.style.top  = Math.random() * 95 + "vh";
                
                // Duração de animação aleatória para movimento orgânico
                img.style.animationDuration = (Math.random() * 20 + 15) + "s";
                
                container.appendChild(img);
            }
        });
    }

    createParticles();
});