document.addEventListener('DOMContentLoaded', () => {

    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-init');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.card, .saida-row, .parceiro-link, .titulo-seccao, .titulo-medio, .project-card, .testimonial-card, .ato-wrapper, .video-slide, .galeria-carrossel-item');
    
    elementsToReveal.forEach(el => {
        observer.observe(el);
    });

    /* --- SAÍDAS PROFISSIONAIS (SOBRE) --- */
    const saidaRows = document.querySelectorAll('.saida-row');
    saidaRows.forEach(row => {
        row.addEventListener('click', () => {
            saidaRows.forEach(otherRow => {
                if (otherRow !== row) otherRow.classList.remove('active');
            });
            row.classList.toggle('active');
        });
    });

    /* --- AUTO-PLAY DO HERO VIDEO --- */
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.play().catch(() => {
        });
    }

    /* --- FECHAR MODAL CLICANDO FORA --- */
    const modal = document.getElementById('alumniModal');
    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeAlumniModal();
            }
        });
    }

    /* LÓGICA AVANÇADA EM LOOP COVERSIDE */
    const tracks = document.querySelectorAll('.carrossel-track');

    tracks.forEach(track => {
        const pasta = track.getAttribute('data-pasta');
        const totalImagens = parseInt(track.getAttribute('data-total'), 10);
        
        if (!pasta || !totalImagens) return;

        // 1. Injetar as imagens na calha seguindo a árvore sequencial correta
        for (let i = 1; i <= totalImagens; i++) {
            const img = document.createElement('img');
            img.src = `IMGS/hall of fame/${pasta}/${i}.png`;
            img.alt = `Trabalho ${pasta} - ${i}`;
            img.classList.add('carrossel-slide-img');
            track.appendChild(img);
        }

        const slides = track.querySelectorAll('.carrossel-slide-img');
        let currentIdx = 0;

        // Função interna para limpar classes antigas e atualizar perspetiva multidirecional
        function update3DCarousel() {
            slides.forEach(slide => {
                slide.classList.remove('active', 'prev', 'next', 'prev2', 'next2');
            });

            const total = slides.length;
            if (total === 0) return;

            // Atribuição de índices circulares perfeitos (Loop Infinito autónomo)
            const prevIdx = (currentIdx - 1 + total) % total;
            const prev2Idx = (currentIdx - 2 + total) % total;
            const nextIdx = (currentIdx + 1) % total;
            const next2Idx = (currentIdx + 2) % total;

            slides[currentIdx].classList.add('active');
            
            if (total > 1) {
                slides[prevIdx].classList.add('prev');
                slides[nextIdx].classList.add('next');
            }
            if (total > 3) {
                slides[prev2Idx].classList.add('prev2');
                slides[next2Idx].classList.add('next2');
            }
        }

        // Inicializa o primeiro frame visual
        if (slides.length > 0) {
            update3DCarousel();
        }

        // Loop automático a cada 4 segundos
        if (slides.length > 1) {
            setInterval(() => {
                currentIdx = (currentIdx + 1) % slides.length;
                update3DCarousel();
            }, 4000);
        }
    });
});

/* LÓGICA DO SLIDER DE VÍDEOS (HALL OF FAME) */
let currentVideoSlide = 0;

function changeVideoSlide(direction) {
    const slides = document.querySelectorAll('.video-slide');
    if (slides.length === 0) return;

    const currentIframe = slides[currentVideoSlide].querySelector('iframe');
    if (currentIframe) {
        const src = currentIframe.getAttribute('src');
        currentIframe.setAttribute('src', ''); // Faz reset ao vídeo interrompendo o som
        currentIframe.setAttribute('src', src); // Recarrega o iframe
    }

    slides[currentVideoSlide].classList.remove('active');
    currentVideoSlide = (currentVideoSlide + direction + slides.length) % slides.length;
    slides[currentVideoSlide].classList.add('active');
}

/* LÓGICA DO MODAL DE GRADUADOS (ALUMNI/HALL OF FAME) */
function openAlumniModal(id) {
    const modal = document.getElementById('alumniModal');
    const modalBody = document.getElementById('modal-body-v2');
    if (!modal || !modalBody) return;
    
    const card = document.querySelector(`[onclick="openAlumniModal('${id}')"]`);
    if (!card) return;

    const nome = card.querySelector('h3').innerText;
    const cargo = card.querySelector('.cargo').innerText;
    const fotoHTML = card.querySelector('.alumni-photo').innerHTML;
    
    const hiddenTextEl = document.getElementById(`text-${id}`);
    if (!hiddenTextEl) return;
    const textoCompleto = hiddenTextEl.innerHTML;

    modalBody.innerHTML = `
        <div class="modal-header-alumni" style="text-align: center; margin-bottom: 25px;">
            <div class="alumni-photo" style="margin: 0 auto 15px auto; width: 130px; height: 130px;">
                ${fotoHTML}
            </div>
            <h3 style="color: #fff; font-size: 26px; margin-bottom: 5px;">${nome}</h3>
            <span class="cargo" style="color: #ffee00; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">
                ${cargo}
            </span>
        </div>
        <div class="modal-text-alumni">
            ${textoCompleto}
        </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeAlumniModal() {
    const modal = document.getElementById('alumniModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
}

/* LÓGICA UNIVERSAL DE CARROSSEIS (GALERIAS DE IMAGENS) */
function moveSlide(id, step, imgClass = '.c-img') {
    const container = document.getElementById(id);
    if (!container) return;

    let slides = container.querySelectorAll(imgClass);
    if (slides.length === 0) {
        slides = container.querySelectorAll('.carousel-img');
    }
    
    if (slides.length === 0) return;

    let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    if (activeIndex === -1) activeIndex = 0;

    slides[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + step + slides.length) % slides.length;
    slides[activeIndex].classList.add('active');
}

function moveSobreSlide(id, step) {
    moveSlide(id, step, '.c-img');
}