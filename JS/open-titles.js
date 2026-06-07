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
                // [Mantive os teus dados intactos]
                const timelineData = [
                    { ano: "2026", items: [
                { 
                    titulo: "Mostra VAM", 
                    desc: "Disasterpiece, um divertido jogo co-op de assaltos desastrados, destacou-se em todas as categorias, no ano em que, por coincidência,  todos jogos finalistas usaram diferentes motores de jogo: Unreal, Unity, Godot e Roblox.", 
                    img: "mostra_vam_1.png" 
                },
                { 
                    titulo: "Hell Maiden - Astral Shift", 
                    desc: "É lançada a demo do jogo com a colaboração André Rufo (antigo prof de VAM) e de Gustavo Maldonado, Bernardo Santos e João Azevedo (Licenciados VAM).", 
                    img: "hellmaiden.png", 
                    links: [{url: "https://www.youtube.com/watch?v=90EaQ4buCC8"}, {url: "https://store.steampowered.com/app/3372060/Hell_Maiden/"}] 
                },
                { 
                    titulo: "Whatta Frogs? - Sinking Codfish Studios", 
                    desc: "É lançada a demo do jogo que conta com a colaboração do Professor Filipe Coelho e de uma equipa de licenciados em VAM.", 
                    img: "whatta_frogs.png", 
                    links: [{url: "https://www.youtube.com/watch?v=D3QMSe3bG2s"}, {url: "https://store.steampowered.com/app/3762800/Whatta_Frogs/"}] 
                },
                { 
                    titulo: "PUBG - Black Budget - Krafton", 
                    desc: "É lançado a Closed Alpha Demo do novo jogo da franquia PUBG, desenvolvido em Portugal pelo estúdio Krafton, com a participação do Professor Ricardo Mota.", 
                    img: "PUBG.png", 
                    links: [{url: "https://www.youtube.com/watch?v=LQuXszqAnYE"}, {url: "https://steamcommunity.com/app/4077740"}] 
                },
                { 
                    titulo: "Oktoberfest VR", 
                    desc: "Jogo oficial do famoso festival, realizado com a participação do Professor Eduardo Magalhães vence os AUREA Awards 2026 na categoria “Imersão”.", 
                    img: "oktoberfest_2.png", 
                    links: [{url: "https://www.youtube.com/watch?v=DdRSPWD0TT0"}, {url: "https://www.oktoberfest.game/en"}] 
                },
                { 
                    titulo: "4ª Conferência Internacional Playful by Design", 
                    desc: "Realizada na Universidad Rey Juan Carlos (Madrid), em parceria com a University of Illinois e Universidad Complutense, com a presença dos Professores João Alves de Sousa e José Raimundo.", 
                    img: "conferencia.png" 
                }
            ]},
            { ano: "2025", items: [
                { 
                    titulo: "Mostra VAM", 
                    desc: "Brewing Trouble, um jogo de criação de poções mágicas, ganhou o melhor jogo, mas Bot Blast e Shadow of the Oni também deram luta, num ano com grande diversidade de géneros de jogo apresentados.", 
                    img: "mostra_vam_2.png" 
                },
                { 
                    titulo: "Exposição de Artes Digitais", 
                    desc: "Os finalistas de VAM mostram a sua criatividade com a sua exposição de controladores alternativos no átrio central da Universidade Lusófona, para usufruto e diversão de toda a comunidade estudantil.", 
                    img: "expo_artes3.jpg" 
                },
                { 
                    titulo: "Masterclass - Pedro Nunes", 
                    desc: "Senior Games Testing da Miniclip ofereceu uma excelente masterclass sobre QA aos estudantes de VAM.", 
                    img: "miniclip3.jpg" 
                },
                { 
                    titulo: "Phased - Arboresis Studio", 
                    desc: "É lançado mais um jogo criado pelo licenciado em VAM Gonçalo de Jesus.", 
                    img: "phased.png", 
                    links: [{url: "https://play.google.com/store/apps/details?id=com.arboresis.phased"}] 
                },
                
                { 
                    titulo: "Mostra VAM", 
                    desc: "Alchemy, jogo físico de cartas, destacou-se nas principais categorias, mostrando que se pode marcar pela diferença e qualidade do game design, na primeira vez no curso em que foi apresentado um jogo não digital.", 
                    img: "mostra_vam_1.png" 
                },
            ]},
            { ano: "2024", items: [
                { 
                    titulo: "Mostra VAM", 
                    desc: "Portavenge, jogo de steath e estratégia brilhou entre o conjunto de jogos apresentados, destacando-se pela enorme competência técnica e criatividade da jogabilidade.", 
                    img: "mostra_vam_2.png" 
                },
                { 
                    titulo: "3ª Conferência Internacional Playful by Design", 
                    desc: "Realizada na University of Illinois (EUA), em parceria entre a Universidade Lusófona e a University of Illinois, com a presença do Professor João Alves de Sousa.", 
                    img: "3conf_pbd.png" 
                },
                { 
                    titulo: "Oktoberfest The Official VR Game", 
                    desc: "Lançamento do jogo com a colaboração do Professor Eduardo Magalhães e dos licenciados Vitor Costa e Romeu Neto.", 
                    img: "oktoberfest.png", 
                    links: [{url: "https://www.youtube.com/watch?v=qiBSQxVGRio"}, {url: "https://www.oktoberfest.game/en"}] 
                },
                { 
                    titulo: "Bergolis", 
                    desc: "Vence o 2º Prémio no Play Your Idea 2024, para o estúdio Serenitheal dos 5 finalistas VAM, um jogo sério desenvolvido para dispositivos de Realidade Virtual.", 
                    img: "bergolis_premio.png" 
                },
                { 
                    titulo: "2ª Conferência Internacional Playful by Design", 
                    desc: "Organizada pelo Professor João Alves de Sousa em parceria com a University of Illinois e Uppsala University, realizada na Universidade Lusófona (Lisboa).", 
                    img: "2conf_pbd.png" 
                },
                { 
                    titulo: "Dodge Game", 
                    desc: "Jogo começado na licenciatura e continuado pelos licenciados em VAM Hugo Barbosa e Leonardo Figueiredo.", 
                    img: "dodgegame.png", 
                    links: [{url: "https://nothukie.itch.io/dodge-game"}] 
                },
                { 
                    titulo: "Mostra VAM", 
                    desc: "Bergolis é uma estreia e aposta ganha em VAM em vários parâmetros: É o primeiro projeto finalista criado para headsets de Realidade Virtual e também o primeiro jogo sério VAM, ajudando pessoas a superar as suas fobias.", 
                    img: "mostra_vam_1.png" 
                },
            ]},
            { ano: "2023", items: [
                { 
                    titulo: "Mostra VAM", 
                    desc: "Into the Dreamlands apresenta jogabilidade assimétrica numa aventura de sonho, num ano em que a concorrência e qualidade foi enorme destacando-se também o racer Don Dragon e o misterioso Campus Conundrum.", 
                    img: "mostra_vam_2.png" 
                },
                { 
                    titulo: "1ª Conferência Internacional Playful by Design", 
                    desc: "Parceria com a University of Illinois para discutir o ensino e indústria dos videojogos e playful media.", 
                    img: "conferencia_pbd.jpg", 
                    links: [{url: "https://playfulbydesign.illinois.edu/conference/"}] 
                },
                { 
                    titulo: "Meo XL Games", 
                    desc: "VAM responsável pelo serviço educativo do evento e co-autora da Mostra de Jogos Indie.", 
                    img: "meoxl.png" 
                },
                { 
                    titulo: "Campus Conundrum", 
                    desc: "Jogo dos estudantes de 2º ano, finalista da 9ª edição dos Prémios Playstation Portugal.", 
                    img: "campus_conundrum.png" 
                },
                { 
                    titulo: "Play Design Document", 
                    desc: "O Professor João Alves de Sousa lança a agenda PBD, aliando gamificação à planificação.", 
                    img: "playdesigndocument.png" 
                },
                { 
                    titulo: "A Visão Crítica do Estudante", 
                    desc: "Primeiro Livro Compilação de artigos críticos escritos pelos estudantes de 1º ano.", 
                    img: "avisaocriticadoestudante.png" 
                },
                { 
                    titulo: "Exposição My Plan for Japan", 
                    desc: "Ilustrações de Ana Aragão em realidade aumentada pelos estudantes de VAM, exibição no Hillside Fórum Tóquio.", 
                    img: "myplanforjapan.png" 
                },
                { 
                    titulo: "Little Goody Two Shoes", 
                    desc: "Colaboração com o Professor André Rufo e licenciados VAM.", 
                    img: "littlegoodietwoshoes.png", 
                    links: [{url: "https://www.youtube.com/watch?v=8eaEgrgh8vg"}, {url: "https://store.steampowered.com/app/1812370/Little_Goody_Two_Shoes/"}] 
                },
                { 
                    titulo: "Beneath", 
                    desc: "Colaboração com o Professor Eduardo Magalhães e licenciados VAM.", 
                    img: "beneath.png", 
                    links: [{url: "https://www.beneathgame.net"}, {url: "https://store.steampowered.com/app/1593230/Beneath/"}] 
                },
                { 
                    titulo: "A Fotografia nos Videojogos", 
                    desc: "Lançamento do Livro / Ensaio Fotográfico ao The Last of Us Part II, do Professor André Carita.", 
                    img: "livrocarita.png" 
                },
                { 
                    titulo: "Mostra VAM", 
                    desc: "Brute Force Attack atacou com força total neste jogo arcade cheio de estilo e efeitos especiais, mas certamente  ninguém conseguirá esquecer também o Mon Montesk, um Tamagotchi muito macabro.", 
                    img: "mostra_vam_1.png" 
                },
            ]},
            { ano: "2022", items: [
                { 
                    titulo: "Mostra VAM", 
                    desc: "Dream Trap explora os conceitos das Backrooms e mundos em loop num labirinto inquietante. Num estilo totalmente distinto, a Type of Adventure prova  que um jogo de typing pode ser ao mesmo tempo divertido e desafiante.", 
                    img: "mostra_vam_2.jpg" 
                },
                { 
                    titulo: "Exposição No Plan for Japan", 
                    desc: "Animações em Realidade Aumentada produzidas pelos estudantes de VAM, em exibição no Museu do Oriente.", 
                    img: "noplanforjapan.png" 
                },
                { 
                    titulo: "Bolsa de Mérito Future Games", 
                    desc: "Carolina Costa, licenciada em VAM, vencedora de bolsa de mérito em Estocolmo.", 
                    img: "bolsamerito.png" 
                },
                { 
                    titulo: "Ink - Arboresis Studio", 
                    desc: "Primeiro jogo criado pelo nosso licenciado em VAM Gonçalo de Jesus.", 
                    img: "ink.png", 
                    links: [{url: "https://play.google.com/store/apps/details?id=com.arboresis.ink"}] 
                },
                { 
                    titulo: "Devil’s License", 
                    desc: "Projeto iniciado no 2º ano e desenvolvido como estágio na Exaud pelos estudantes Melissa Cébola e José Fonseca.", 
                    img: "devilslicense.png", 
                    links: [{url: "https://exaud.com/blog/exaudlab-internship"}] 
                },
                { 
                    titulo: "Mostra VAM", 
                    desc: "In Memory of You  é uma comovente narrativa interativa sobre uma vida comum, com desafios e alegrias, marcando pela diferença, realismo e empatia que nos propõe experienciar.", 
                    img: "mostra_vam_1.png" 
                },
            ]},
            { ano: "2021", items: [
                { 
                    titulo: "Melhor Prática Pedagógica Inovadora", 
                    desc: "Prémio Fazer + atribuído ao curso VAM pela metodologia de Project Based Learning.", 
                    img: "premio_vam.png" 
                },
                { 
                    titulo: "Thunder Tier One - Krafton", 
                    desc: "Lançamento com a participação do Professor Ricardo Mota.", 
                    img: "thundertierone.png", 
                    links: [{url: "https://www.youtube.com/watch?v=wLjji6Jox80"}, {url: "https://store.steampowered.com/app/377300/Thunder_Tier_One/"}] 
                },
                { 
                    titulo: "Exposição Francis Bacon", 
                    desc: "Colaboração artística na WOW, Gaia, com animações produzidas pelos estudantes de VAM.", 
                    img: "exposicao_francis.png", 
                    links: [{url: "https://www.youtube.com/watch?v=rj-M_YQJ62Y"}] 
                },
                { 
                    titulo: "GlowFall", 
                    desc: "Jogo criado pelo finalista Simão Gonçalves, TOP 3 Novos Talentos FNAC - Menção Honrosa.", 
                    img: "glowfall.png", 
                    links: [{url: "https://simaogoncalves.itch.io/glowfall"}] 
                },
                { 
                    titulo: "Morbus", 
                    desc: "Prémio melhor arte na IPCA Game Jam, equipa de estudantes VAM.", 
                    img: "morbus.png", 
                    links: [{url: "https://marcos-engelhard.itch.io/mo"}] 
                },
                { 
                    titulo: "Mostra VAM", 
                    desc: "Airplane Saviour Simulator é um incrível jogo assimétrico de aventura e puzzle em que dois jogadores têm que se manter em constante comunicação para resolver puzzles, derrotar os terroristas e salvar todos os passageiros de um avião.", 
                    img: "mostra_vam_1.png" 
                },
            ]},
            { ano: "2020", items: [
                { 
                    titulo: "Mostra VAM", 
                    desc: "Little Girl foi o projeto final da primeira turma de VAM, num grande e ambicioso esforço conjunto de criar uma aventura narrativa cinemática de puzzle e mistériO.", 
                    img: "mostra_vam_2.png" 
                },
                { 
                    titulo: "Those who Remain - Camel 101", 
                    desc: "Lançamento do jogo com a colaboração do Professor Eduardo Magalhães no Design de Som.", 
                    img: "those_who_remain.png", 
                    links: [{url: "https://www.youtube.com/watch?v=6MBcG5koRHc"}, {url: "https://store.steampowered.com/app/715380/Those_Who_Remain/"}] 
                },
                { 
                    titulo: "Game Creators Odyssey", 
                    desc: "Curso online em parceria entre a Universidade Lusófona e a Ubisoft.", 
                    img: "gamecreatorsodissey.png", 
                    links: [{url: "https://gamecreatorodyssey.com/"}] 
                },
                { 
                    titulo: "Entrevista a Daniel Pesina (Mortal Kombat)", 
                    desc: "Entrevista a Daniel Pesina (Mortal Kombat).", 
                    img: "entrevista.png", 
                    links: [{url: "https://www.youtube.com/watch?v=xsTmWLK119Q"}] 
                },
                { 
                    titulo: "Mostra VAM", 
                    desc: "Khaba Run é um jogo arcade frenético para até 4 jogadores, numa corrida desafiante até ao centro de símbolos Maias cheia de power ups e reviravoltas.", 
                    img: "mostra_vam_1.png" 
                },
            ]},
            { ano: "2019", items: [
                { 
                    titulo: "1ª Mostra VAM", 
                    desc: "A nossa verdadeira primeira Mostra VAM foi muito especial pois contou com os projetos 3D de 2º ano do curso e também com a participação de um convidado muito especial, o Programador e Game Designer André Constantino da Amplify Creations que apresentou em primeira mão o seu jogo Decay of Logos.", 
                    img: "mostra_vam.png" 
                },
                { 
                    titulo: "1º Pitch VAM", 
                    desc: "Pela primeira vez fizemos um Pitch VAM colocando o enorme desafio à nossa turma inaugural: apresentar aos seus colegas mais novos as ideias dos projetos que viriam a ser escolhidos para desenvolver.", 
                    img: "pitch1.png" 
                },
                { 
                    titulo: "Global Game JAM", 
                    desc: "Primeira edição organizada pelo curso de VAM, contou com uma excelente participação dos estudantes de 1º e 2º ano, assim como de profissionais e outras pessoas externas ao curso.", 
                    img: "globalgamejam.png" 
                },
            ]},
            { ano: "2018", items: [
                { 
                    titulo: "Dakar 18 - Big Moon Entertainment", 
                    desc: "Lançamento do jogo com a colaboração dos Professores Ricardo Mota e Henrique Basto.", 
                    img: "dakar.png", 
                    links: [{url: "https://www.youtube.com/watch?v=85xUvllbW10"}, {url: "https://store.steampowered.com/app/767390/Dakar_18/"}] 
                },
                { 
                    titulo: "Mostra VAM", 
                    desc: "BOP foi o nosso primeiro 2D platformer, usando criatividade, físicas e mecânicas divertidas, num ano que também tivemos o The Chair, um criativo jogo narrativo que simula consultas de psicologia.", 
                    img: "mostra_vam_1.png" 
                },
            ]},
            { ano: "2017", items: [
                { 
                    titulo: "Mostra VAM", 
                    desc: "Com os estudantes (e o curso) ainda a dar os seus primeiros passos, Baby Fox, um fighter 2D simples, foi um pequeno primeiro passo para os nossos estudantes e um grande passo para o futuro de VAM.", 
                    img: "mostra_vam_1.png" 
                },
                { 
                    titulo: "Hello World!", 
                    desc: "Abertura do curso e chegada da primeira turma de VAM.", 
                    img: "hello.png" 
                },
            ]}
        ];

        timelineData.forEach(periodo => {
            let itemsHTML = "";
            periodo.items.forEach((item) => {
                let linksHTML = "";
                if (item.links) {
                    item.links.forEach((l) => {
                        let label = l.url.toLowerCase().includes("youtube") ? "Trailer" : "Link";
                        linksHTML += `<a href="${l.url}" target="_blank" class="tl-link-btn">${label}</a>`;
                    });
                }
                
                // Só cria o HTML da imagem se o 'img' estiver definido
                let imagemHTML = item.img ? `
                    <div class="card-right">
                        <img src="IMGS/timeline/${periodo.ano}/${item.img}" alt="${item.titulo}" onerror="this.style.display='none'">
                    </div>` : "";
                
                itemsHTML += `
                    <div class="tl-card">
                        <div class="card-left">
                            <h4>${item.titulo}</h4>
                            <p>${item.desc}</p>
                            <div class="tl-links">${linksHTML}</div>
                        </div>
                        ${imagemHTML}
                    </div>
                `;
            });

            timelineContainer.innerHTML += `
                <div class="tl-item">
                    <div class="tl-ano">${periodo.ano}</div>
                    <div class="tl-items-group">${itemsHTML}</div>
                </div>
            `;
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
            img.src = `IMGS/hall_of_fame/${pasta}/${i}.png`;
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
        <div class="modal-text-alumni" style="text-align: justify;">
            ${hiddenTextEl.innerHTML}
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

// --- FUNÇÃO PARA AS SETAS DO SOBRE ---
function moveSobreSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll('.c-img'));
    let currentIdx = slides.findIndex(s => s.classList.contains('active'));
    
    // Remove a classe active do atual
    slides[currentIdx].classList.remove('active');
    
    // Calcula o novo índice
    currentIdx = (currentIdx + direction + slides.length) % slides.length;
    
    // Adiciona a classe active ao novo
    slides[currentIdx].classList.add('active');
}