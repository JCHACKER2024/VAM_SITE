// --- 1. CONFIGURAÇÃO DE ANIMAÇÕES DE ENTRADA ---
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-init');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.card, .saida-row, .parceiro-link, .titulo-seccao, .titulo-medio, .project-card, .testimonial-card, .ato-wrapper, .video-slide, .galeria-carrossel-item, .tl-card');
    elementsToReveal.forEach(el => observer.observe(el));

    // --- 2. GESTÃO DA TIMELINE ---
    const timelineContainer = document.getElementById('timeline-content');
    if (timelineContainer) {
        const timelineData = [
            { ano: "2026", items: [
                { titulo: "Hell Maiden - Astral Shift", desc: "Demo lançada com colab. de André Rufo e licenciados VAM.", links: [{url: "https://www.youtube.com/watch?v=90EaQ4buCC8"}, {url: "https://store.steampowered.com/app/3372060/Hell_Maiden/"}] },
                { titulo: "Whatta Frogs? - Sinking Codfish", desc: "Demo com o Prof. Filipe Coelho e equipa de licenciados.", links: [{url: "https://www.youtube.com/watch?v=D3QMSe3bG2s"}, {url: "https://store.steampowered.com/app/3762800/Whatta_Frogs/"}] },
                { titulo: "PUBG - Black Budget", desc: "Closed Alpha com participação do Prof. Ricardo Mota.", links: [{url: "https://www.youtube.com/watch?v=LQuXszqAnYE"}, {url: "https://steamcommunity.com/app/4077740"}] },
                { titulo: "Oktoberfest VR", desc: "Vence os AUREA Awards 2026 na categoria “Imersão”.", links: [{url: "https://www.youtube.com/watch?v=DdRSPWD0TT0"}, {url: "https://www.oktoberfest.game/en"}] },
                { titulo: "4ª Conferência Internacional Playful by Design", desc: "Realizada na Universidad Rey Juan Carlos (Madrid)." }
            ]},
            { ano: "2025", items: [
                { titulo: "Mostra VAM", desc: "Premiados 1º Semestre (2025-2026)." },
                { titulo: "Exposição de Artes Digitais", desc: "Controladores alternativos no átrio central da Universidade Lusófona." },
                { titulo: "Masterclass - Pedro Nunes", desc: "Senior Games Testing da Miniclip sobre QA." },
                { titulo: "Phased - Arboresis Studio", desc: "Jogo criado pelo licenciado Gonçalo de Jesus.", links: [{url: "https://play.google.com/store/apps/details?id=com.arboresis.phased"}] },
                { titulo: "Mostra VAM", desc: "Premiados 2º Semestre (2024-2025)." }
            ]},
            { ano: "2024", items: [
                { titulo: "Mostra VAM", desc: "Premiados 1º Semestre (2024-2025)." },
                { titulo: "3ª Conferência Internacional Playful by Design", desc: "Realizada na University of Illinois (EUA)." },
                { titulo: "Oktoberfest The Official VR Game", desc: "Lançamento com Prof. Eduardo Magalhães e licenciados VAM.", links: [{url: "https://www.youtube.com/watch?v=qiBSQxVGRio"}, {url: "https://www.oktoberfest.game/en"}] },
                { titulo: "Bergolis", desc: "Vence o 2º Prémio no Play Your Idea 2024." },
                { titulo: "2ª Conferência Internacional Playful by Design", desc: "Realizada na Universidade Lusófona (Lisboa)." },
                { titulo: "Dodge Game", desc: "Desenvolvido por Hugo Barbosa e Leonardo Figueiredo.", links: [{url: "https://nothukie.itch.io/dodge-game"}] },
                { titulo: "Mostra VAM", desc: "Premiados 2º Semestre (2023-2024)." }
            ]},
            { ano: "2023", items: [
                { titulo: "Mostra VAM", desc: "Premiados 1º Semestre (2023-2024)." },
                { titulo: "1ª Conferência Internacional Playful by Design", desc: "Em parceria com University of Illinois.", links: [{url: "https://playfulbydesign.illinois.edu/conference/"}] },
                { titulo: "Meo XL Games", desc: "Serviço educativo e co-autoria da Mostra de Jogos Indie." },
                { titulo: "Campus Conundrum", desc: "Finalista da 9ª edição dos Prémios Playstation Portugal." },
                { titulo: "Play Design Document", desc: "Prof. João Alves de Sousa lança a agenda PBD." },
                { titulo: "A Visão Crítica do Estudante", desc: "Lançamento do primeiro Livro Compilação de artigos." },
                { titulo: "Exposição My Plan for Japan", desc: "Em exibição no Hillside Fórum Tóquio." },
                { titulo: "Little Goody Two Shoes", desc: "Colaboração com Prof. André Rufo e licenciados VAM.", links: [{url: "https://www.youtube.com/watch?v=8eaEgrgh8vg"}, {url: "https://store.steampowered.com/app/1812370/Little_Goody_Two_Shoes/"}] },
                { titulo: "Beneath", desc: "Colaboração com Prof. Eduardo Magalhães e licenciados VAM.", links: [{url: "https://www.beneathgame.net"}, {url: "https://store.steampowered.com/app/1593230/Beneath/"}] },
                { titulo: "A Fotografia nos Videojogos", desc: "Lançamento do Livro / Ensaio Fotográfico ao The Last of Us Part II." }
            ]},
            { ano: "2022", items: [
                { titulo: "Mostra VAM", desc: "Premiados 2º Semestre (2021-2022)." },
                { titulo: "Exposição No Plan for Japan", desc: "Exibição no Museu do Oriente, Lisboa." },
                { titulo: "Bolsa de Mérito Future Games", desc: "Carolina Costa selecionada em Estocolmo." },
                { titulo: "Ink - Arboresis Studio", desc: "Primeiro jogo do licenciado Gonçalo de Jesus.", links: [{url: "https://play.google.com/store/apps/details?id=com.arboresis.ink"}] },
                { titulo: "Devil’s License", desc: "Projeto de estágio na Exaud.", links: [{url: "https://exaud.com/blog/exaudlab-internship"}] }
            ]},
            { ano: "2021", items: [
                { titulo: "Melhor Prática Pedagógica Inovadora", desc: "Prémio Fazer + atribuído ao curso VAM." },
                { titulo: "Thunder Tier One - Krafton", desc: "Com a participação do Prof. Ricardo Mota.", links: [{url: "https://www.youtube.com/watch?v=wLjji6Jox80"}, {url: "https://store.steampowered.com/app/377300/Thunder_Tier_One/"}] },
                { titulo: "Exposição Francis Bacon", desc: "Colaboração artística na WOW, Gaia.", links: [{url: "https://www.youtube.com/watch?v=rj-M_YQJ62Y"}] },
                { titulo: "GlowFall", desc: "TOP 3 Novos Talentos FNAC - Menção Honrosa.", links: [{url: "https://simaogoncalves.itch.io/glowfall"}] },
                { titulo: "Morbus", desc: "Prémio melhor arte na IPCA Game Jam.", links: [{url: "https://marcos-engelhard.itch.io/mo"}] }
            ]},
            { ano: "2020", items: [
                { titulo: "Little Girl", desc: "Primeiro projeto final da primeira turma de VAM." },
                { titulo: "Those who Remain", desc: "Com a participação do Prof. Eduardo Magalhães.", links: [{url: "https://www.youtube.com/watch?v=6MBcG5koRHc"}, {url: "https://store.steampowered.com/app/715380/Those_Who_Remain/"}] },
                { titulo: "Game Creators Odyssey", desc: "Curso online em parceria com Ubisoft.", links: [{url: "https://gamecreatorodyssey.com/"}] }
            ]},
            { ano: "2019", items: [
                { titulo: "1ª Mostra VAM", desc: "Primeira exibição pública com André Constantino (Amplify Creations)." },
                { titulo: "1º Pitch VAM", desc: "Seleção de projetos para o 2º ano." },
                { titulo: "Global Game JAM", desc: "Primeira edição organizada pelo curso VAM." },
                { titulo: "Entrevista a Daniel Pesina (Mortal Kombat)", desc: "Realizada pelos estudantes VAM.", links: [{url: "https://www.youtube.com/watch?v=xsTmWLK119Q"}] }
            ]},
            { ano: "2018", items: [
                { titulo: "Dakar 18 - Big Moon Entertainment", desc: "Colaboração dos Profs. Ricardo Mota e Henrique Basto.", links: [{url: "https://www.youtube.com/watch?v=85xUvllbW10"}, {url: "https://store.steampowered.com/app/767390/Dakar_18/"}] }
            ]},
            { ano: "2017", items: [
                { titulo: "Hello World!", desc: "Abertura do curso e chegada da primeira turma de VAM." }
            ]}
        ];

        timelineData.forEach(periodo => {
            periodo.items.forEach(item => {
                let linksHTML = "";
                if (item.links) {
                    item.links.forEach((l, idx) => {
                        let label = l.url.toLowerCase().includes("youtube") ? "Trailer" : (l.url.toLowerCase().includes("steam") ? "Steam" : (idx === 0 ? "Link 1" : "Link 2"));
                        linksHTML += `<a href="${l.url}" target="_blank" class="tl-link-btn">${label}</a>`;
                    });
                }
                timelineContainer.innerHTML += `
                    <div class="tl-item">
                        <div class="tl-ano">${periodo.ano}</div>
                        <div class="tl-card">
                            <h3>${item.titulo}</h3>
                            <p>${item.desc}</p>
                            <div class="tl-links">${linksHTML}</div>
                        </div>
                    </div>
                `;
            });
        });
    }

    // --- 3. CARROSSEL DE IMAGENS (HALL OF FAME) ---
    const tracks = document.querySelectorAll('.carrossel-track');
    tracks.forEach(track => {
        const pasta = track.getAttribute('data-pasta');
        const totalImagens = parseInt(track.getAttribute('data-total'), 10);
        if (!pasta || !totalImagens) return;
        
        for (let i = 1; i <= totalImagens; i++) {
            const img = document.createElement('img');
            img.src = `IMGS/hall of fame/${pasta}/${i}.png`;
            img.alt = `Trabalho ${pasta} - ${i}`;
            img.classList.add('carrossel-slide-img');
            track.appendChild(img);
        }
        
        const slides = track.querySelectorAll('.carrossel-slide-img');
        if (slides.length > 0) {
            slides[0].classList.add('active');
            updateCarouselClasses(slides, 0);
            
            // Loop automático
            setInterval(() => moveManual(track.id, 1), 5000);
        }
    });

    // --- 4. EVENTOS E MODAIS ---
    const saidaRows = document.querySelectorAll('.saida-row');
    saidaRows.forEach(row => {
        row.addEventListener('click', () => {
            saidaRows.forEach(otherRow => { if (otherRow !== row) otherRow.classList.remove('active'); });
            row.classList.toggle('active');
        });
    });

    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) heroVideo.play().catch(() => {});
});

// --- 5. FUNÇÕES DE MOVIMENTAÇÃO E INTERAÇÃO ---

// Atualiza classes CSS para efeitos visuais do carrossel
function updateCarouselClasses(slides, currentIdx) {
    slides.forEach(slide => slide.classList.remove('active', 'prev', 'next', 'prev2', 'next2'));
    const total = slides.length;
    
    slides[currentIdx].classList.add('active');
    if (total > 1) {
        slides[(currentIdx - 1 + total) % total].classList.add('prev');
        slides[(currentIdx + 1) % total].classList.add('next');
    }
    if (total > 3) {
        slides[(currentIdx - 2 + total) % total].classList.add('prev2');
        slides[(currentIdx + 2) % total].classList.add('next2');
    }
}

// Movimento manual para as setas
function moveManual(trackId, step) {
    const track = document.getElementById(trackId);
    if (!track) return;
    const slides = Array.from(track.querySelectorAll('.carrossel-slide-img'));
    let currentIdx = slides.findIndex(s => s.classList.contains('active'));
    
    currentIdx = (currentIdx + step + slides.length) % slides.length;
    updateCarouselClasses(slides, currentIdx);
}

// Slider de Vídeos
let currentVideoSlide = 0;
function changeVideoSlide(direction) {
    const slides = document.querySelectorAll('.video-slide');
    if (slides.length === 0) return;
    const currentIframe = slides[currentVideoSlide].querySelector('iframe');
    if (currentIframe) {
        const src = currentIframe.getAttribute('src');
        currentIframe.setAttribute('src', '');
        currentIframe.setAttribute('src', src);
    }
    slides[currentVideoSlide].classList.remove('active');
    currentVideoSlide = (currentVideoSlide + direction + slides.length) % slides.length;
    slides[currentVideoSlide].classList.add('active');
}

// Modal de Alumni
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
    modalBody.innerHTML = `
        <div class="modal-header-alumni" style="text-align: center; margin-bottom: 25px;">
            <div class="alumni-photo" style="margin: 0 auto 15px auto; width: 130px; height: 130px;">${fotoHTML}</div>
            <h3 style="color: #fff; font-size: 26px; margin-bottom: 5px;">${nome}</h3>
            <span class="cargo" style="color: #00ff66; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">${cargo}</span>
        </div>
        <div class="modal-text-alumni">${hiddenTextEl.innerHTML}</div>
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