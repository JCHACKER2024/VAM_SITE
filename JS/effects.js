/* --- EFEITOS GLOBAIS: CURSOR E 4 INSTÂNCIAS DE PARTICULAS (FINAL) --- */

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

    /* 2. LÓGICA DAS 4 INSTÂNCIAS DE PARTICULAS (COM IMAGENS) */
    function initParticles(id, imagePath) {
        if (typeof particlesJS !== 'undefined' && document.getElementById(id)) {
            particlesJS(id, {
                "particles": {
                    "number": { "value": 10, "density": { "enable": true, "value_area": 800 } },
                    "shape": {
                        "type": "image",
                        "image": {
                            "src": imagePath,
                            "width": 100, 
                            "height": 100
                        }
                    },
                    "opacity": { "value": 0.8, "random": false },
                    "size": { 
                        "value": 25, 
                        "random": true,
                        "anim": { "enable": true, "speed_min": 15, "size_max": 35, "sync": false }
                    },
                    // Desativar fios explicitamente
                    "line_linked": { 
                        "enable": false 
                    },
                    "move": {
                        "enable": true,
                        "speed": 0.4,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out"
                    }
                },
                "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false } } },
                "retina_detect": true
            });
        }
    }

    // Inicialização apontando para a tua pasta IMGS
    initParticles("particles-tri", "IMGS/Triangle.png");
    initParticles("particles-sq", "IMGS/Square.png");
    initParticles("particles-circ", "IMGS/Circle.png");
    initParticles("particles-x", "IMGS/X.png");
});