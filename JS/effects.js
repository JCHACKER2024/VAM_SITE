/* CUSTOM CURSOR (RATO PERSONALIZADO) */

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
    if (!document.getElementById('custom-cursor')) {
        const cursorDiv = document.createElement('div');
        cursorDiv.id = 'custom-cursor';
        document.body.appendChild(cursorDiv);
    }

    const cursor = document.getElementById('custom-cursor');
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        requestAnimationFrame(() => {
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });
    });

    const targetSelectors = 'a, button, details summary, .lang-btn, .btn-cta, .btn-candidata, video, .saida-row, .parceiro-link';

    window.addEventListener('mouseover', (e) => {
        if (e.target.closest(targetSelectors)) {
            // Apenas faz scale(1.6), sem o translate, mantendo a ponta no sítio do clique
            cursor.style.transform = 'scale(1.6)';
            cursor.style.backgroundColor = '#ffffff'; 
        }
    });

    window.addEventListener('mouseout', (e) => {
        if (e.target.closest(targetSelectors)) {
            // Volta ao tamanho normal mantendo a ponta correta
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = '#00ff66'; 
        }
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
}

/* PARTÍCULAS GEOMÉTRICAS */

if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": { 
                "value": 70, 
                "density": { "enable": true, "value_area": 800 } 
            },
            "color": { "value": "#00ff66" },
            "shape": { 
                "type": ["triangle", "edge"],
                "stroke": { "width": 0, "color": "#000000" }
            },
            "opacity": { 
                "value": 0.4,
                "random": true 
            },
            "size": { 
                "value": 10, 
                "random": true 
            },
            "line_linked": {
                "enable": true,
                "distance": 140,
                "color": "#00ff66", 
                "opacity": 0.15,
                "width": 1
            },
            "move": { 
                "enable": true, 
                "speed": 1.0, // Velocidade milimetricamente ajustada
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": { "enable": true, "mode": "grab" }, // Cria teias quando passas com o rato
                "onclick": { "enable": true, "mode": "push" }   // Adiciona mais formas ao clicar
            },
            "modes": {
                "grab": { "distance": 160, "line_linked": { "opacity": 0.4 } },
                "push": { "particles_nb": 3 }
            }
        },
        "retina_detect": true
    });
}