// ============================================================
// open-titles.js
// Toda a interatividade das páginas:
// 1. Animações de entrada (reveal on scroll)
// 2. Geração dinâmica da timeline
// 3. Carrossel 3D das galerias (Hall of Fame)
// 4. Saídas profissionais (tabela expansível)
// 5. Slider de vídeos (Hall of Fame)
// 6. Modal de graduados (Hall of Fame)
// 7. Carrossel de imagens (página Sobre)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------
    // 2. TIMELINE — GERAÇÃO DINÂMICA BILINGUE
    // Deteta o idioma pela URL — timeline.html = PT, timeline_en.html = EN
    // Para adicionar entrada: adiciona objeto ao array do ano correto
    // Cada item tem titulo_pt/titulo_en e desc_pt/desc_en
    // links e img são partilhados entre idiomas
    // --------------------------------------------------------
    const timelineContainer = document.getElementById('timeline-content');
    if (timelineContainer) {

        // Deteta idioma pela URL
        const isEN = window.location.pathname.includes('_en');

        const timelineData = [
            { ano: "2026", items: [
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Disasterpiece, um divertido jogo co-op de assaltos desastrados, destacou-se em todas as categorias, no ano em que, por coincidência, todos jogos finalistas usaram diferentes motores de jogo: Unreal, Unity, Godot e Roblox.",
                    desc_en: "Disasterpiece, a fun co-op heist game full of disasters, stood out in every category, in a year where, coincidentally, all finalist games used different game engines: Unreal, Unity, Godot and Roblox.",
                    img: "mostra_vam_1.png"
                },
                {
                    titulo_pt: "Hell Maiden - Astral Shift",
                    titulo_en: "Hell Maiden - Astral Shift",
                    desc_pt: "É lançada a demo do jogo com a colaboração André Rufo (antigo prof de VAM) e de Gustavo Maldonado, Bernardo Santos e João Azevedo (Licenciados VAM).",
                    desc_en: "The game demo is launched with the collaboration of André Rufo (former VAM lecturer) and Gustavo Maldonado, Bernardo Santos and João Azevedo (VAM graduates).",
                    img: "hellmaiden.png",
                    links: [{url: "https://www.youtube.com/watch?v=90EaQ4buCC8"}, {url: "https://store.steampowered.com/app/3372060/Hell_Maiden/"}]
                },
                {
                    titulo_pt: "Whatta Frogs? - Sinking Codfish Studios",
                    titulo_en: "Whatta Frogs? - Sinking Codfish Studios",
                    desc_pt: "É lançada a demo do jogo que conta com a colaboração do Professor Filipe Coelho e de uma equipa de licenciados em VAM.",
                    desc_en: "The game demo is launched with the collaboration of Professor Filipe Coelho and a team of VAM graduates.",
                    img: "whatta_frogs.png",
                    links: [{url: "https://www.youtube.com/watch?v=D3QMSe3bG2s"}, {url: "https://store.steampowered.com/app/3762800/Whatta_Frogs/"}]
                },
                {
                    titulo_pt: "PUBG - Black Budget - Krafton",
                    titulo_en: "PUBG - Black Budget - Krafton",
                    desc_pt: "É lançado a Closed Alpha Demo do novo jogo da franquia PUBG, desenvolvido em Portugal pelo estúdio Krafton, com a participação do Professor Ricardo Mota.",
                    desc_en: "The Closed Alpha Demo of the new PUBG franchise game is launched, developed in Portugal by Krafton studio, with the participation of Professor Ricardo Mota.",
                    img: "PUBG.png",
                    links: [{url: "https://www.youtube.com/watch?v=LQuXszqAnYE"}, {url: "https://steamcommunity.com/app/4077740"}]
                },
                {
                    titulo_pt: "Oktoberfest VR",
                    titulo_en: "Oktoberfest VR",
                    desc_pt: "Jogo oficial do famoso festival, realizado com a participação do Professor Eduardo Magalhães vence os AUREA Awards 2026 na categoria \"Imersão\".",
                    desc_en: "The official game of the famous festival, developed with the participation of Professor Eduardo Magalhães, wins the AUREA Awards 2026 in the \"Immersion\" category.",
                    img: "oktoberfest_2.png",
                    links: [{url: "https://www.youtube.com/watch?v=DdRSPWD0TT0"}, {url: "https://www.oktoberfest.game/en"}]
                },
                {
                    titulo_pt: "4ª Conferência Internacional Playful by Design",
                    titulo_en: "4th International Playful by Design Conference",
                    desc_pt: "Realizada na Universidad Rey Juan Carlos (Madrid), em parceria com a University of Illinois e Universidad Complutense, com a presença dos Professores João Alves de Sousa e José Raimundo.",
                    desc_en: "Held at Universidad Rey Juan Carlos (Madrid), in partnership with the University of Illinois and Universidad Complutense, with the presence of Professors João Alves de Sousa and José Raimundo.",
                    img: "conferencia.png"
                }
            ]},
            { ano: "2025", items: [
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Brewing Trouble, um jogo de criação de poções mágicas, ganhou o melhor jogo, mas Bot Blast e Shadow of the Oni também deram luta, num ano com grande diversidade de géneros de jogo apresentados.",
                    desc_en: "Brewing Trouble, a magical potion-crafting game, won best game, but Bot Blast and Shadow of the Oni put up a fight, in a year with great diversity of game genres presented.",
                    img: "mostra_vam_2.png"
                },
                {
                    titulo_pt: "Exposição de Artes Digitais",
                    titulo_en: "Digital Arts Exhibition",
                    desc_pt: "Os finalistas de VAM mostram a sua criatividade com a sua exposição de controladores alternativos no átrio central da Universidade Lusófona, para usufruto e diversão de toda a comunidade estudantil.",
                    desc_en: "VAM finalists showcase their creativity with an alternative controllers exhibition in the central atrium of Universidade Lusófona, for the enjoyment of the entire student community.",
                    img: "expo_artes3.jpg"
                },
                {
                    titulo_pt: "Masterclass - Pedro Nunes",
                    titulo_en: "Masterclass - Pedro Nunes",
                    desc_pt: "Senior Games Testing da Miniclip ofereceu uma excelente masterclass sobre QA aos estudantes de VAM.",
                    desc_en: "Senior Games Tester at Miniclip delivered an excellent QA masterclass to VAM students.",
                    img: "miniclip3.jpg"
                },
                {
                    titulo_pt: "Phased - Arboresis Studio",
                    titulo_en: "Phased - Arboresis Studio",
                    desc_pt: "É lançado mais um jogo criado pelo licenciado em VAM Gonçalo de Jesus.",
                    desc_en: "Another game by VAM graduate Gonçalo de Jesus is launched.",
                    img: "phased.png",
                    links: [{url: "https://play.google.com/store/apps/details?id=com.arboresis.phased"}]
                },
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Alchemy, jogo físico de cartas, destacou-se nas principais categorias, mostrando que se pode marcar pela diferença e qualidade do game design, na primeira vez no curso em que foi apresentado um jogo não digital.",
                    desc_en: "Alchemy, a physical card game, stood out in the main categories, proving that difference and quality game design can shine, in the first time the course presented a non-digital game.",
                    img: "mostra_vam_1.png"
                }
            ]},
            { ano: "2024", items: [
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Portavenge, jogo de steath e estratégia brilhou entre o conjunto de jogos apresentados, destacando-se pela enorme competência técnica e criatividade da jogabilidade.",
                    desc_en: "Portavenge, a stealth and strategy game, shone among the presented games, standing out for its enormous technical competence and gameplay creativity.",
                    img: "mostra_vam_2.png"
                },
                {
                    titulo_pt: "3ª Conferência Internacional Playful by Design",
                    titulo_en: "3rd International Playful by Design Conference",
                    desc_pt: "Realizada na University of Illinois (EUA), em parceria entre a Universidade Lusófona e a University of Illinois, com a presença do Professor João Alves de Sousa.",
                    desc_en: "Held at the University of Illinois (USA), in partnership between Universidade Lusófona and the University of Illinois, with the presence of Professor João Alves de Sousa.",
                    img: "3conf_pbd.png"
                },
                {
                    titulo_pt: "Oktoberfest The Official VR Game",
                    titulo_en: "Oktoberfest The Official VR Game",
                    desc_pt: "Lançamento do jogo com a colaboração do Professor Eduardo Magalhães e dos licenciados Vitor Costa e Romeu Neto.",
                    desc_en: "Game launch with the collaboration of Professor Eduardo Magalhães and graduates Vitor Costa and Romeu Neto.",
                    img: "oktoberfest.png",
                    links: [{url: "https://www.youtube.com/watch?v=qiBSQxVGRio"}, {url: "https://www.oktoberfest.game/en"}]
                },
                {
                    titulo_pt: "Bergolis",
                    titulo_en: "Bergolis",
                    desc_pt: "Vence o 2º Prémio no Play Your Idea 2024, para o estúdio Serenitheal dos 5 finalistas VAM, um jogo sério desenvolvido para dispositivos de Realidade Virtual.",
                    desc_en: "Wins 2nd Prize at Play Your Idea 2024 for the Serenitheal studio of 5 VAM finalists, a serious game developed for Virtual Reality devices.",
                    img: "bergolis_premio.png"
                },
                {
                    titulo_pt: "2ª Conferência Internacional Playful by Design",
                    titulo_en: "2nd International Playful by Design Conference",
                    desc_pt: "Organizada pelo Professor João Alves de Sousa em parceria com a University of Illinois e Uppsala University, realizada na Universidade Lusófona (Lisboa).",
                    desc_en: "Organised by Professor João Alves de Sousa in partnership with the University of Illinois and Uppsala University, held at Universidade Lusófona (Lisbon).",
                    img: "2conf_pbd.png"
                },
                {
                    titulo_pt: "Dodge Game",
                    titulo_en: "Dodge Game",
                    desc_pt: "Jogo começado na licenciatura e continuado pelos licenciados em VAM Hugo Barbosa e Leonardo Figueiredo.",
                    desc_en: "Game started during the degree and continued by VAM graduates Hugo Barbosa and Leonardo Figueiredo.",
                    img: "dodgegame.png",
                    links: [{url: "https://nothukie.itch.io/dodge-game"}]
                },
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Bergolis é uma estreia e aposta ganha em VAM em vários parâmetros: É o primeiro projeto finalista criado para headsets de Realidade Virtual e também o primeiro jogo sério VAM, ajudando pessoas a superar as suas fobias.",
                    desc_en: "Bergolis is a debut and a winning bet in VAM on several levels: it is the first finalist project created for Virtual Reality headsets and also the first VAM serious game, helping people overcome their phobias.",
                    img: "mostra_vam_1.png"
                }
            ]},
            { ano: "2023", items: [
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Into the Dreamlands apresenta jogabilidade assimétrica numa aventura de sonho, num ano em que a concorrência e qualidade foi enorme destacando-se também o racer Don Dragon e o misterioso Campus Conundrum.",
                    desc_en: "Into the Dreamlands features asymmetric gameplay in a dream adventure, in a year where competition and quality were enormous, with Don Dragon and the mysterious Campus Conundrum also standing out.",
                    img: "mostra_vam_2.png"
                },
                {
                    titulo_pt: "1ª Conferência Internacional Playful by Design",
                    titulo_en: "1st International Playful by Design Conference",
                    desc_pt: "Parceria com a University of Illinois para discutir o ensino e indústria dos videojogos e playful media.",
                    desc_en: "Partnership with the University of Illinois to discuss video game education, industry, and playful media.",
                    img: "conferencia_pbd.jpg",
                    links: [{url: "https://playfulbydesign.illinois.edu/conference/"}]
                },
                {
                    titulo_pt: "Meo XL Games",
                    titulo_en: "Meo XL Games",
                    desc_pt: "VAM responsável pelo serviço educativo do evento e co-autora da Mostra de Jogos Indie.",
                    desc_en: "VAM responsible for the event's educational service and co-author of the Indie Games Showcase.",
                    img: "meoxl.png"
                },
                {
                    titulo_pt: "Campus Conundrum",
                    titulo_en: "Campus Conundrum",
                    desc_pt: "Jogo dos estudantes de 2º ano, finalista da 9ª edição dos Prémios Playstation Portugal.",
                    desc_en: "2nd year student game, finalist at the 9th edition of the PlayStation Portugal Awards.",
                    img: "campus_conundrum.png"
                },
                {
                    titulo_pt: "Play Design Document",
                    titulo_en: "Play Design Document",
                    desc_pt: "O Professor João Alves de Sousa lança a agenda PBD, aliando gamificação à planificação.",
                    desc_en: "Professor João Alves de Sousa launches the PBD agenda, combining gamification with planning.",
                    img: "playdesigndocument.png"
                },
                {
                    titulo_pt: "A Visão Crítica do Estudante",
                    titulo_en: "The Student's Critical Vision",
                    desc_pt: "Primeiro Livro Compilação de artigos críticos escritos pelos estudantes de 1º ano.",
                    desc_en: "First book compilation of critical articles written by 1st year students.",
                    img: "avisaocriticadoestudante.png"
                },
                {
                    titulo_pt: "Exposição My Plan for Japan",
                    titulo_en: "My Plan for Japan Exhibition",
                    desc_pt: "Ilustrações de Ana Aragão em realidade aumentada pelos estudantes de VAM, exibição no Hillside Fórum Tóquio.",
                    desc_en: "Illustrations by Ana Aragão in augmented reality by VAM students, exhibited at Hillside Forum Tokyo.",
                    img: "myplanforjapan.png"
                },
                {
                    titulo_pt: "Little Goody Two Shoes",
                    titulo_en: "Little Goody Two Shoes",
                    desc_pt: "Colaboração com o Professor André Rufo e licenciados VAM.",
                    desc_en: "Collaboration with Professor André Rufo and VAM graduates.",
                    img: "littlegoodietwoshoes.png",
                    links: [{url: "https://www.youtube.com/watch?v=8eaEgrgh8vg"}, {url: "https://store.steampowered.com/app/1812370/Little_Goody_Two_Shoes/"}]
                },
                {
                    titulo_pt: "Beneath",
                    titulo_en: "Beneath",
                    desc_pt: "Colaboração com o Professor Eduardo Magalhães e licenciados VAM.",
                    desc_en: "Collaboration with Professor Eduardo Magalhães and VAM graduates.",
                    img: "beneath.png",
                    links: [{url: "https://www.beneathgame.net"}, {url: "https://store.steampowered.com/app/1593230/Beneath/"}]
                },
                {
                    titulo_pt: "A Fotografia nos Videojogos",
                    titulo_en: "Photography in Video Games",
                    desc_pt: "Lançamento do Livro / Ensaio Fotográfico ao The Last of Us Part II, do Professor André Carita.",
                    desc_en: "Launch of the Book / Photographic Essay on The Last of Us Part II, by Professor André Carita.",
                    img: "livrocarita.png"
                },
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Brute Force Attack atacou com força total neste jogo arcade cheio de estilo e efeitos especiais, mas certamente ninguém conseguirá esquecer também o Mon Montesk, um Tamagotchi muito macabro.",
                    desc_en: "Brute Force Attack hit with full force in this style-packed arcade game with special effects, but nobody will forget Mon Montesk either, a very macabre Tamagotchi.",
                    img: "mostra_vam_1.png"
                }
            ]},
            { ano: "2022", items: [
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Dream Trap explora os conceitos das Backrooms e mundos em loop num labirinto inquietante. Num estilo totalmente distinto, a Type of Adventure prova que um jogo de typing pode ser ao mesmo tempo divertido e desafiante.",
                    desc_en: "Dream Trap explores Backrooms concepts and looping worlds in an unsettling maze. In a totally different style, Type of Adventure proves that a typing game can be both fun and challenging.",
                    img: "mostra_vam_2.jpg"
                },
                {
                    titulo_pt: "Exposição No Plan for Japan",
                    titulo_en: "No Plan for Japan Exhibition",
                    desc_pt: "Animações em Realidade Aumentada produzidas pelos estudantes de VAM, em exibição no Museu do Oriente.",
                    desc_en: "Augmented Reality animations produced by VAM students, exhibited at the Museu do Oriente.",
                    img: "noplanforjapan.png"
                },
                {
                    titulo_pt: "Bolsa de Mérito Future Games",
                    titulo_en: "Future Games Merit Scholarship",
                    desc_pt: "Carolina Costa, licenciada em VAM, vencedora de bolsa de mérito em Estocolmo.",
                    desc_en: "Carolina Costa, VAM graduate, wins a merit scholarship in Stockholm.",
                    img: "bolsamerito.png"
                },
                {
                    titulo_pt: "Ink - Arboresis Studio",
                    titulo_en: "Ink - Arboresis Studio",
                    desc_pt: "Primeiro jogo criado pelo nosso licenciado em VAM Gonçalo de Jesus.",
                    desc_en: "First game created by VAM graduate Gonçalo de Jesus.",
                    img: "ink.png",
                    links: [{url: "https://play.google.com/store/apps/details?id=com.arboresis.ink"}]
                },
                {
                    titulo_pt: "Devil's License",
                    titulo_en: "Devil's License",
                    desc_pt: "Projeto iniciado no 2º ano e desenvolvido como estágio na Exaud pelos estudantes Melissa Cébola e José Fonseca.",
                    desc_en: "Project started in 2nd year and developed as an internship at Exaud by students Melissa Cébola and José Fonseca.",
                    img: "devilslicense.png",
                    links: [{url: "https://exaud.com/blog/exaudlab-internship"}]
                },
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "In Memory of You é uma comovente narrativa interativa sobre uma vida comum, com desafios e alegrias, marcando pela diferença, realismo e empatia que nos propõe experienciar.",
                    desc_en: "In Memory of You is a moving interactive narrative about an ordinary life, with challenges and joys, standing out for the difference, realism and empathy it invites us to experience.",
                    img: "mostra_vam_1.png"
                }
            ]},
            { ano: "2021", items: [
                {
                    titulo_pt: "Melhor Prática Pedagógica Inovadora",
                    titulo_en: "Best Innovative Pedagogical Practice",
                    desc_pt: "Prémio Fazer + atribuído ao curso VAM pela metodologia de Project Based Learning.",
                    desc_en: "Fazer + Award granted to the VAM course for its Project Based Learning methodology.",
                    img: "premio_vam.png"
                },
                {
                    titulo_pt: "Thunder Tier One - Krafton",
                    titulo_en: "Thunder Tier One - Krafton",
                    desc_pt: "Lançamento do jogo com a participação do Professor Ricardo Mota.",
                    desc_en: "Game launch with the participation of Professor Ricardo Mota.",
                    img: "thundertierone.png",
                    links: [{url: "https://www.youtube.com/watch?v=wLjji6Jox80"}, {url: "https://store.steampowered.com/app/377300/Thunder_Tier_One/"}]
                },
                {
                    titulo_pt: "Exposição Francis Bacon",
                    titulo_en: "Francis Bacon Exhibition",
                    desc_pt: "Colaboração artística na WOW, Gaia, com animações produzidas pelos estudantes de VAM.",
                    desc_en: "Artistic collaboration at WOW, Gaia, with animations produced by VAM students.",
                    img: "exposicao_francis.png",
                    links: [{url: "https://www.youtube.com/watch?v=rj-M_YQJ62Y"}]
                },
                {
                    titulo_pt: "GlowFall",
                    titulo_en: "GlowFall",
                    desc_pt: "Jogo criado pelo finalista Simão Gonçalves, TOP 3 Novos Talentos FNAC - Menção Honrosa.",
                    desc_en: "Game created by finalist Simão Gonçalves, TOP 3 New Talents FNAC - Honourable Mention.",
                    img: "glowfall.png",
                    links: [{url: "https://simaogoncalves.itch.io/glowfall"}]
                },
                {
                    titulo_pt: "Morbus",
                    titulo_en: "Morbus",
                    desc_pt: "Prémio melhor arte na IPCA Game Jam, equipa de estudantes VAM.",
                    desc_en: "Best Art Award at IPCA Game Jam, VAM student team.",
                    img: "morbus.png",
                    links: [{url: "https://marcos-engelhard.itch.io/mo"}]
                },
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Airplane Saviour Simulator é um incrível jogo assimétrico de aventura e puzzle em que dois jogadores têm que se manter em constante comunicação para resolver puzzles, derrotar os terroristas e salvar todos os passageiros de um avião.",
                    desc_en: "Airplane Saviour Simulator is an incredible asymmetric adventure and puzzle game where two players must stay in constant communication to solve puzzles, defeat terrorists and save all passengers on a plane.",
                    img: "mostra_vam_1.png"
                }
            ]},
            { ano: "2020", items: [
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Little Girl foi o projeto final da primeira turma de VAM, num grande e ambicioso esforço conjunto de criar uma aventura narrativa cinemática de puzzle e mistério.",
                    desc_en: "Little Girl was the final project of the first VAM class, in a grand and ambitious joint effort to create a cinematic puzzle and mystery narrative adventure.",
                    img: "mostra_vam_2.png"
                },
                {
                    titulo_pt: "Those who Remain - Camel 101",
                    titulo_en: "Those who Remain - Camel 101",
                    desc_pt: "Lançamento do jogo com a colaboração do Professor Eduardo Magalhães no Design de Som.",
                    desc_en: "Game launch with the collaboration of Professor Eduardo Magalhães in Sound Design.",
                    img: "those_who_remain.png",
                    links: [{url: "https://www.youtube.com/watch?v=6MBcG5koRHc"}, {url: "https://store.steampowered.com/app/715380/Those_Who_Remain/"}]
                },
                {
                    titulo_pt: "Game Creators Odyssey",
                    titulo_en: "Game Creators Odyssey",
                    desc_pt: "Curso online em parceria entre a Universidade Lusófona e a Ubisoft.",
                    desc_en: "Online course in partnership between Universidade Lusófona and Ubisoft.",
                    img: "gamecreatorsodissey.png",
                    links: [{url: "https://gamecreatorodyssey.com/"}]
                },
                {
                    titulo_pt: "Entrevista a Daniel Pesina (Mortal Kombat)",
                    titulo_en: "Interview with Daniel Pesina (Mortal Kombat)",
                    desc_pt: "Entrevista a Daniel Pesina (Mortal Kombat).",
                    desc_en: "Interview with Daniel Pesina (Mortal Kombat).",
                    img: "entrevista.png",
                    links: [{url: "https://www.youtube.com/watch?v=xsTmWLK119Q"}]
                },
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Khaba Run é um jogo arcade frenético para até 4 jogadores, numa corrida desafiante até ao centro de símbolos Maias cheia de power ups e reviravoltas.",
                    desc_en: "Khaba Run is a frantic arcade game for up to 4 players, in a challenging race to the center of Mayan symbols filled with power ups and twists.",
                    img: "mostra_vam_1.png"
                }
            ]},
            { ano: "2019", items: [
                {
                    titulo_pt: "1ª Mostra VAM",
                    titulo_en: "1st VAM Showcase",
                    desc_pt: "A nossa verdadeira primeira Mostra VAM foi muito especial pois contou com os projetos 3D de 2º ano do curso e também com a participação de um convidado muito especial, o Programador e Game Designer André Constantino da Amplify Creations que apresentou em primeira mão o seu jogo Decay of Logos.",
                    desc_en: "Our very first VAM Showcase was very special as it featured the 2nd year 3D projects and also the participation of a very special guest, Programmer and Game Designer André Constantino from Amplify Creations, who presented his game Decay of Logos for the first time.",
                    img: "mostra_vam.png"
                },
                {
                    titulo_pt: "1º Pitch VAM",
                    titulo_en: "1st VAM Pitch",
                    desc_pt: "Pela primeira vez fizemos um Pitch VAM colocando o enorme desafio à nossa turma inaugural: apresentar aos seus colegas mais novos as ideias dos projetos que viriam a ser escolhidos para desenvolver.",
                    desc_en: "For the first time we held a VAM Pitch, placing the enormous challenge on our inaugural class: presenting to their younger peers the project ideas that would be chosen for development.",
                    img: "pitch1.png"
                },
                {
                    titulo_pt: "Global Game JAM",
                    titulo_en: "Global Game JAM",
                    desc_pt: "Primeira edição organizada pelo curso de VAM, contou com uma excelente participação dos estudantes de 1º e 2º ano, assim como de profissionais e outras pessoas externas ao curso.",
                    desc_en: "First edition organised by the VAM course, with excellent participation from 1st and 2nd year students, as well as professionals and people external to the course.",
                    img: "globalgamejam.png"
                }
            ]},
            { ano: "2018", items: [
                {
                    titulo_pt: "Dakar 18 - Big Moon Entertainment",
                    titulo_en: "Dakar 18 - Big Moon Entertainment",
                    desc_pt: "Lançamento do jogo com a colaboração dos Professores Ricardo Mota e Henrique Basto.",
                    desc_en: "Game launch with the collaboration of Professors Ricardo Mota and Henrique Basto.",
                    img: "dakar.png",
                    links: [{url: "https://www.youtube.com/watch?v=85xUvllbW10"}, {url: "https://store.steampowered.com/app/767390/Dakar_18/"}]
                },
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "BOP foi o nosso primeiro 2D platformer, usando criatividade, físicas e mecânicas divertidas, num ano que também tivemos o The Chair, um criativo jogo narrativo que simula consultas de psicologia.",
                    desc_en: "BOP was our first 2D platformer, using creativity, physics and fun mechanics, in a year that also brought The Chair, a creative narrative game simulating psychology sessions.",
                    img: "mostra_vam_1.png"
                }
            ]},
            { ano: "2017", items: [
                {
                    titulo_pt: "Mostra VAM",
                    titulo_en: "VAM Showcase",
                    desc_pt: "Com os estudantes (e o curso) ainda a dar os seus primeiros passos, Baby Fox, um fighter 2D simples, foi um pequeno primeiro passo para os nossos estudantes e um grande passo para o futuro de VAM.",
                    desc_en: "With students (and the course) still taking their first steps, Baby Fox, a simple 2D fighter, was a small first step for our students and a giant leap for the future of VAM.",
                    img: "mostra_vam_1.png"
                },
                {
                    titulo_pt: "Hello World!",
                    titulo_en: "Hello World!",
                    desc_pt: "Abertura do curso e chegada da primeira turma de VAM.",
                    desc_en: "Course opening and arrival of the first VAM class.",
                    img: "hello.png"
                }
            ]}
        ];

        // Gera o HTML da timeline a partir dos dados acima
        timelineData.forEach(periodo => {
            let itemsHTML = "";
            periodo.items.forEach((item) => {

                // Seleciona título e descrição conforme o idioma
                const titulo = isEN ? item.titulo_en : item.titulo_pt;
                const desc = isEN ? item.desc_en : item.desc_pt;

                // Gera botões de link — YouTube = "Trailer", resto = "Link"
                let linksHTML = "";
                if (item.links) {
                    item.links.forEach((l) => {
                        let label = l.url.toLowerCase().includes("youtube") ? "Trailer" : "Link";
                        linksHTML += `<a href="${l.url}" target="_blank" class="tl-link-btn">${label}</a>`;
                    });
                }

                // Só gera a imagem se o campo 'img' estiver definido
                let imagemHTML = item.img ? `
                    <div class="card-right">
                        <img src="IMGS/timeline/${periodo.ano}/${item.img}" alt="${titulo}" onerror="this.style.display='none'">
                    </div>` : "";

                itemsHTML += `
                    <div class="tl-card">
                        <div class="card-left">
                            <h4>${titulo}</h4>
                            <p>${desc}</p>
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

    // --------------------------------------------------------
    // 3. CARROSSEL 3D DAS GALERIAS (HALL OF FAME)
    // Carrega imagens automaticamente a partir de data-pasta e data-total no HTML
    // --------------------------------------------------------
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
            setInterval(() => moveManual(track.id, 1), 5000);
        }
    });

    // --------------------------------------------------------
    // SISTEMA DE FACHADAS DO YOUTUBE (YT-FACADE) - SUPORTE PT / EN
    // Mapeia os títulos de ambos os idiomas para as mesmas capas locais
    // --------------------------------------------------------

    const localThumbnailsMap = {
        // Mapeamento PT
        "Playlist de Jogos": "playlist_jogos.jpg",
        "Animação 2D": "animacao_2d.jpg",
        "Animação 3D": "animacao_3d.jpg",
        "Pitches": "pitches.jpg",
        "Controladores Alternativos": "controladores.jpg",
        "Críticas Vídeo": "criticas.jpg",
        
        // Mapeamento EN
        "Games Playlist": "playlist_jogos.jpg",
        "2D Animation": "animacao_2d.jpg",
        "3D Animation": "animacao_3d.jpg",
        "Alternative Controllers": "controladores.jpg",
        "Video Reviews": "criticas.jpg"
    };

    function buildFacade(slide) {
        const wrapper = slide.querySelector('.iframe-wrapper');
        if (!wrapper) return;

        const videoId = slide.getAttribute('data-js-videoid') || '';
        const playlistId = slide.getAttribute('data-js-playlistid') || '';
        const projectTitle = slide.querySelector('.project-info h3')?.textContent.trim() || '';

        const localFileName = localThumbnailsMap[projectTitle] || "default_thumb.jpg";
        const localImgSrc = `IMGS/hall_of_fame/thumbnails/${localFileName}`;

        const facade = document.createElement('div');
        facade.classList.add('yt-facade');

        facade.innerHTML = `
            <img src="${localImgSrc}" alt="${projectTitle}">
            <button class="yt-play-btn" aria-label="Play">▶</button>
        `;

        facade.addEventListener('click', function () {
            let embedUrl = '';
            if (playlistId) {
                embedUrl = `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&autoplay=1&rel=0`;
            } else if (videoId) {
                embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
            }
            if (!embedUrl) return;

            const iframe = document.createElement('iframe');
            iframe.src = embedUrl;
            iframe.frameBorder = '0';
            iframe.allowFullscreen = true;
            iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;';
            
            wrapper.innerHTML = '';
            wrapper.appendChild(iframe);
        });

        wrapper.innerHTML = '';
        wrapper.appendChild(facade);
    }

    // Inicialização unificada (Funciona tanto no HTML PT como EN)
    document.querySelectorAll('.video-slide').forEach(slide => {
        const targetDataSource = slide.querySelector('[data-videoid]') || slide.querySelector('[data-playlistid]') || slide;
        
        const videoId = targetDataSource.getAttribute('data-videoid') || '';
        const playlistId = targetDataSource.getAttribute('data-playlistid') || '';

        if (videoId) slide.setAttribute('data-js-videoid', videoId);
        if (playlistId) slide.setAttribute('data-js-playlistid', playlistId);

        buildFacade(slide);
    });

    // Controladores de reset das setas do slider
    document.querySelectorAll('.slider-prev, .slider-next').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.video-slide').forEach(slide => {
                if (slide.querySelector('iframe')) {
                    buildFacade(slide);
                }
            });
        });
    });

    // --------------------------------------------------------
    // 4. SAÍDAS PROFISSIONAIS (TABELA EXPANSÍVEL)
    // Cada .saida-row abre/fecha ao clicar
    // Só uma linha pode estar aberta de cada vez
    // --------------------------------------------------------
    const saidaRows = document.querySelectorAll('.saida-row');
    saidaRows.forEach(row => {
        row.addEventListener('click', () => {
            saidaRows.forEach(otherRow => { if (otherRow !== row) otherRow.classList.remove('active'); });
            row.classList.toggle('active');
        });
    });

    // Autoplay do vídeo hero em páginas que o usem
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) heroVideo.play().catch(() => {});
});

// ============================================================
// FUNÇÕES GLOBAIS (chamadas diretamente no HTML via onclick)
// ============================================================

// --------------------------------------------------------
// Atualiza classes CSS para o efeito 3D do carrossel
// active = centro | prev/next = lados | prev2/next2 = fundo
// --------------------------------------------------------
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

// Movimento manual das setas do carrossel 3D
// Chamado no HTML: onclick="moveManual('track-posters', 1)"
function moveManual(trackId, step) {
    const track = document.getElementById(trackId);
    if (!track) return;
    const slides = Array.from(track.querySelectorAll('.carrossel-slide-img'));
    let currentIdx = slides.findIndex(s => s.classList.contains('active'));
    currentIdx = (currentIdx + step + slides.length) % slides.length;
    updateCarouselClasses(slides, currentIdx);
}

// --------------------------------------------------------
// SLIDER DE VÍDEOS (HALL OF FAME)
// Chamado no HTML: onclick="changeVideoSlide(-1 ou 1)"
// Reset do iframe ao mudar de slide para parar o áudio
// --------------------------------------------------------
let currentVideoSlide = 0;
function changeVideoSlide(direction) {
    const slides = document.querySelectorAll('.video-slide');
    if (slides.length === 0) return;
    // Reset do iframe para parar o vídeo/som anterior
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

// --------------------------------------------------------
// MODAL DE GRADUADOS (HALL OF FAME)
// Abre popup com foto, nome, cargo e depoimento completo
// Chamado no HTML: onclick="openAlumniModal('id_do_graduado')"
// O texto completo está em <div id="text-ID" class="hidden-text">
// Para adicionar graduado: copia um .testimonial-card no hof.html
// --------------------------------------------------------
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
    document.body.style.overflow = "hidden"; // Bloqueia scroll da página
}

function closeAlumniModal() {
    const modal = document.getElementById('alumniModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restaura scroll da página
    }
}

// --------------------------------------------------------
// CARROSSEL DE IMAGENS (PÁGINA SOBRE)
// Setas prev/next dentro dos cards de imagens
// Chamado no HTML: onclick="moveSobreSlide('carousel-id', 1)"
// --------------------------------------------------------
function moveSobreSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    const slides = Array.from(carousel.querySelectorAll('.c-img'));
    let currentIdx = slides.findIndex(s => s.classList.contains('active'));
    slides[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + direction + slides.length) % slides.length;
    slides[currentIdx].classList.add('active');
}