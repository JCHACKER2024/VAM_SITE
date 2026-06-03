/* --- EFEITOS GLOBAIS: CURSOR E PARTICULAS INDEPENDENTES --- */

document.addEventListener('DOMContentLoaded', () => {

    /* 1. LÓGICA DO CURSOR PERSONALIZADO */
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
        if (!document.getElementById('custom-cursor')) {
            const cursorDiv = document.createElement('div');
            cursorDiv.id = 'custom-cursor';
            document.body.appendChild(cursorDiv);
        }

        const cursor = document.getElementById('custom-cursor');
        
        window.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            });
        });

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

    /* 2. NOVA LÓGICA DE PARTÍCULAS (ELEMENTOS HTML INDIVIDUAIS) */
    function createParticles() {
        const container = document.createElement('div');
        container.id = 'particles-container';
        document.body.appendChild(container);

        const shapes = [
            { src: "IMGS/Triangle.png", count: 6, class: "p-tri" },
            { src: "IMGS/Square.png", count: 6, class: "p-sq" },
            { src: "IMGS/Circle.png", count: 6, class: "p-circ" },
            { src: "IMGS/X.png", count: 6, class: "p-x" }
        ];

        shapes.forEach(shape => {
            for (let i = 0; i < shape.count; i++) {
                const img = document.createElement('img');
                img.src = shape.src;
                img.className = `floating-particle ${shape.class}`;
                
                // Posição aleatória na tela
                img.style.left = Math.random() * 95 + "vw";
                img.style.top = Math.random() * 95 + "vh";
                
                // Velocidades aleatórias
                img.style.animationDuration = (Math.random() * 20 + 15) + "s";
                
                container.appendChild(img);
            }
        });
    }

    createParticles();
});