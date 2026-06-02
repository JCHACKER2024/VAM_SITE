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

    const elementsToReveal = document.querySelectorAll('.card, .saida-row, .parceiro-link, .titulo-seccao, .titulo-medio, .project-card, .testimonial-card, .ato-wrapper, .video-slide, .image-gallery-component');
    
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

    /* --- INICIALIZAR OS 4 SLIDERS DO HOF SIMULTANEAMENTE --- */
    // Configuração de cada galeria: ID da calha, Nome exato da pasta de imagens, Quantidade de fotos
    const galleriesConfig = [
        { trackId: "track-posters", folder: "Posters", count: 19 },
        { trackId: "track-mockups", folder: "Mockups", count: 18 },
        { trackId: "track-concepts", folder: "Concept Art", count: 20 },
        { trackId: "track-3d", folder: "Modelacao 3D", count: 12 }
    ];

    galleriesConfig.forEach(galeria => {
        initIndependentGallery(galeria.trackId, galeria.folder, galeria.count);
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
            <span class="cargo" style="color: #00ff66; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">
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

/* LÓGICA UNIVERSAL DE CARROSSEIS (GALERIAS DE IMAGENS ESTÁTICAS) */
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

/* --- NOVA LÓGICA DO SLIDER AUTOMÁTICO INDEPENDENTE (MÚLTIPLOS SLIDERS SIMULTÂNEOS) --- */
function initIndependentGallery(trackId, folderName, imageCount) {
    const track = document.getElementById(trackId);
    if (!track) return;

    // 1. Injetar dinamicamente as imagens originais da pasta correspondente
    for (let i = 1; i <= imageCount; i++) {
        const slide = document.createElement('div');
        slide.className = 'img-slide';
        
        const img = document.createElement('img');
        img.src = `IMGS/Hall Of Fame/${folderName}/${i}.png`;
        img.alt = `${folderName} - Trabalho ${i}`;
        img.loading = "lazy";
        
        slide.appendChild(img);
        track.appendChild(slide);
    }

    // 2. Clonar todas as imagens originais no final para garantir o loop infinito contínuo e sem falhas visuais
    const originalSlides = Array.from(track.children);
    originalSlides.forEach(slideNode => {
        const slideClone = slideNode.cloneNode(true);
        slideClone.classList.add('clone');
        track.appendChild(slideClone);
    });

    // 3. Inicializar e gerir o loop de animação específico para esta calha
    let scrollX = 0;
    const speed = 1; // Controla a velocidade de rolamento (podes aumentar para acelerar)

    function stepAnimation() {
        scrollX -= speed;
        
        const firstChild = track.querySelector('.img-slide');
        if (!firstChild) return;
        
        // Mede a largura do elemento real + gap dinâmico do CSS (geralmente 20px)
        const slideWidth = firstChild.getBoundingClientRect().width + 20;
        
        // Ponto de reset: quando a metade correspondente a todas as imagens originais passar
        const resetPoint = slideWidth * imageCount;

        // Faz o reset matemático instantâneo para a posição inicial (efeito infinito impercetível)
        if (Math.abs(scrollX) >= resetPoint) {
            scrollX = 0;
        }
        
        track.style.transform = `translateX(${scrollX}px)`;
        requestAnimationFrame(stepAnimation);
    }

    // Dispara a animação individual e independente desta galeria
    requestAnimationFrame(stepAnimation);
}