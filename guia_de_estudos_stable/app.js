// Global Application State Controller
let state = {
    xp: 0,
    level: 1,
    streak: 0,
    lastStudyDate: null,
    totalStudyTime: 0,
    
    

    

    // Roadmaps
    selectedRoadmapId: null,
    roadmaps: [
        {
            id: 'roadmap-webdev',
            title: 'Desenvolvimento Web Fullstack',
            desc: 'A trilha definitiva para se tornar um programador web de alta performance.',
            steps: [
                { id: 'web-1', title: 'HTML5 & CSS3 Semântico', desc: 'Aprender layouts modernos com Grid, Flexbox, tags semânticas e acessibilidade para interfaces fluidas.', completed: false, badge: 'Front-end', resourceText: 'MDN Web Docs', resourceUrl: 'https://developer.mozilla.org/' },
                { id: 'web-2', title: 'JavaScript Assíncrono & DOM', desc: 'Dominar manipulação do DOM, Promises, async/await, closures, hoisting e escopos no JavaScript.', completed: false, badge: 'Lógica', resourceText: 'Javascript.info', resourceUrl: 'https://javascript.info/' },
                { id: 'web-3', title: 'Interfaces Modernas com React', desc: 'Aprender conceitos de componentes, gerenciamento de estado com Hooks (useState, useEffect) e renderizações eficientes.', completed: false, badge: 'Frameworks', resourceText: 'React Dev Docs', resourceUrl: 'https://react.dev/' },
                { id: 'web-4', title: 'Bancos de Dados & SQL', desc: 'Entender modelagem relacional, joins complexos, indexação de tabelas e operações CRUD em PostgreSQL.', completed: false, badge: 'Banco de Dados', resourceText: 'W3Schools SQL', resourceUrl: 'https://www.w3schools.com/sql/' },
                { id: 'web-5', title: 'Node.js & APIs RESTful', desc: 'Desenvolver servidores robustos usando Express, middlewares, autenticação JWT, tratamento de erros e conexões ORM.', completed: false, badge: 'Back-end', resourceText: 'Node.js Guide', resourceUrl: 'https://nodejs.org/' }
            ]
        },
        {
            id: 'roadmap-english',
            title: 'Inglês para Profissionais',
            desc: 'Roadmap otimizado para imersão, fluência e vocabulário técnico.',
            steps: [
                { id: 'eng-1', title: 'Imersão de Áudio (Shadowing)', desc: 'Escutar 20 minutos diários de podcasts em inglês e praticar shadowing (repetir falas nativas em voz alta).', completed: false, badge: 'Escuta', resourceText: 'BBC English', resourceUrl: 'https://www.bbc.co.uk/learningenglish/' },
                { id: 'eng-2', title: 'Vocabulário & Memorização', desc: 'Aprender e catalogar 10 termos novos diariamente usando repetição espaçada e flashcards de recall ativo.', completed: false, badge: 'Vocabulário', resourceText: 'Cambridge Dictionary', resourceUrl: 'https://dictionary.cambridge.org/' },
                { id: 'eng-3', title: 'Tempos Verbais Complexos', desc: 'Focar na diferença prática do Present Perfect vs Simple Past, e consolidar condicionais na escrita profissional.', completed: false, badge: 'Gramática', resourceText: 'English Grammar', resourceUrl: 'https://www.englishpage.com/' }
            ]
        },
        {
            id: 'roadmap-math',
            title: 'Matemática & Raciocínio Lógico',
            desc: 'Construa sua base analítica para resolução de problemas complexos.',
            steps: [
                { id: 'mat-1', title: 'Fundamentos e Álgebra Básica', desc: 'Revisar equações de 1º e 2º grau, frações, porcentagens e regra de três simples e composta.', completed: false, badge: 'Aritmética', resourceText: 'Khan Academy', resourceUrl: 'https://pt.khanacademy.org/' },
                { id: 'mat-2', title: 'Raciocínio Lógico Dedutivo', desc: 'Aprender tabela verdade, proposições lógicas, tautologias e silogismos para provas e testes lógicos.', completed: false, badge: 'Lógica', resourceText: 'Logic Tutorials', resourceUrl: 'https://www.logicmatters.net/' }
            ]
        },
        {
            id: 'roadmap-study-hacks',
            title: 'Técnicas de Aprendizado Acelerado',
            desc: 'Aprenda a aprender de forma científica e fixe conteúdos para sempre.',
            steps: [
                { id: 'hack-1', title: 'Técnica de Feynman', desc: 'Explique um assunto complexo em termos simples, como se estivesse ensinando para uma criança. Identifique lacunas.', completed: false, badge: 'Retenção', resourceText: 'Feynman Method', resourceUrl: 'https://fs.blog/feynman-technique/' },
                { id: 'hack-2', title: 'Recall Ativo (Active Recall)', desc: 'Feche o livro e force seu cérebro a recuperar os fatos por conta própria. Crie perguntas antes da leitura.', completed: false, badge: 'Memória', resourceText: 'Active Recall Guide', resourceUrl: 'https://aliabdaal.com/active-recall/' },
                { id: 'hack-3', title: 'Repetição Espaçada', desc: 'Revise os conteúdos em intervalos de 1 dia, 3 dias, 7 dias e 14 dias para transferi-los à memória de longo prazo.', completed: false, badge: 'Leitner', resourceText: 'Spaced Repetition', resourceUrl: 'https://ncase.me/remember/' }
            ]
        }
    ],
    
    // Flashcard Decks
    selectedDeckId: null,
    decks: [
        {
            id: 'deck-web',
            title: 'Conceitos de Web Dev',
            cards: [
                { id: 'c-web-1', front: 'Qual a diferença crucial entre let e const?', back: 'let permite reatribuição de valores ao longo do código. const cria variáveis cujas referências não podem ser reatribuídas.', srsStage: 1, nextReview: null },
                { id: 'c-web-2', front: 'O que é uma Promise no JavaScript?', back: 'É um objeto que representa a eventual conclusão ou falha de uma operação assíncrona, permitindo o encadeamento de fluxos futuros.', srsStage: 1, nextReview: null },
                { id: 'c-web-3', front: 'Para que serve a tag semântica <article>?', back: 'Serve para encapsular um bloco de conteúdo independente e autocontido que faz sentido por si só, como um post de blog ou notícia.', srsStage: 1, nextReview: null }
            ]
        },
        {
            id: 'deck-english',
            title: 'Expressões em Inglês',
            cards: [
                { id: 'c-eng-1', front: 'O que significa "Beat around the bush"?', back: 'Significa "ficar enrolando", evitar falar diretamente sobre o assunto principal por receio ou hesitação.', srsStage: 1, nextReview: null },
                { id: 'c-eng-2', front: 'O que significa a expressão "Spill the beans"?', back: 'Significa "revelar o segredo" ou "abrir o bico" de forma involuntária ou prematura.', srsStage: 1, nextReview: null }
            ]
        }
    ],
    
    // Kanban Tasks
    tasks: [
        { id: 't-1', title: 'Instalar ambiente de desenvolvimento', desc: 'Configurar VS Code, Git e Extensões recomendadas.', status: 'done', priority: 'high', dueDate: '' },
        { id: 't-2', title: 'Montar cronograma semanal', desc: 'Definir 1 hora de estudo diário para o roadmap selecionado.', status: 'doing', priority: 'medium', dueDate: '' },
        { id: 't-3', title: 'Praticar primeiro bloco Pomodoro', desc: 'Iniciar timer com som de ruído marrom para hiperfoco.', status: 'todo', priority: 'low', dueDate: '' }
    ],
    
    // Zen Notes
    selectedNoteId: null,
    notes: [
        {
            id: 'n-1',
            title: 'Metas Acadêmicas 2026',
            content: '# Minhas Metas de Estudo 🚀\n\nEste ano será focado na consistência!\n\n## Áreas de Foco\n- **Programação**: Completar trilha Fullstack e construir 3 projetos autorais.\n- **Idiomas**: Alcançar conversação fluente em inglês.\n\n> "A repetição com foco é a mãe da excelência."',
            updatedAt: new Date().toLocaleDateString('pt-BR')
        },
        {
            id: 'n-2',
            title: 'Técnica de Feynman - Anotações',
            content: '# Resumo Feynman 💡\n\n1. Escolha o tema (ex: Promises no JS).\n2. Escreva uma explicação simples, como se ensinasse a uma criança.\n3. Identifique onde vacilou ou complicou a explicação.\n4. Volte ao material original para refinar.',
            updatedAt: new Date().toLocaleDateString('pt-BR')
        }
    ],
    
    // Gamification achievements
    achievements: [
        { id: 'first_step', title: 'Primeiro Passo', desc: 'Marcar o primeiro módulo da trilha como concluído.', unlocked: false, xpAward: 50, icon: '🚶' },
        { id: 'pomodoro_warrior', title: 'Guerreiro do Foco', desc: 'Completar seu primeiro ciclo de foco Pomodoro.', unlocked: false, xpAward: 100, icon: '🛡️' },
        { id: 'srs_scholar', title: 'Mestre da Memória', desc: 'Revisar cartões usando spaced repetition no portal.', unlocked: false, xpAward: 80, icon: '🧠' },
        { id: 'note_composer', title: 'Escritor Zen', desc: 'Registrar notas de estudo no editor com Markdown.', unlocked: false, xpAward: 50, icon: '📝' },
        { id: 'kanban_master', title: 'Mestre do Kanban', desc: 'Concluir 3 tarefas do quadro planejador.', unlocked: false, xpAward: 100, icon: '🏅' }
    ],
    
    // Activity logs
    weeklyActivity: [0, 0, 0, 0, 0, 0, 0], // segments mon, tue, wed, thu, fri, sat, sun
    pomodoroLogs: []
};

// --- Browser Web Audio API Audio Synthesizer Engine ---
let audioCtx = null;
let brownNoiseNode = null;
let cosmicSynthInterval = null;
let cosmicDelayNode = null;
let cosmicOscNodes = [];

// ============================================
// BLOQUEIO DE CONVIDADO (Segurança)
// ============================================
function aplicarRestricoesConvidado() {
    const session = JSON.parse(localStorage.getItem('currentSession') || 'null');
    if (!session || !session.isGuest) return; // Se não for convidado, segue o jogo!

    // 1. Filtrar Matérias (deixa apenas Matemática e Lógica)
    if (state && state.roadmaps) {
        state.roadmaps = state.roadmaps.filter(r => 
            r.title.includes('Matemática') || r.title.includes('Lógica')
        );
    }

    // 2. Bloquear funcionalidades (Kanban, Flashcards, etc)
    const blocosBloqueados = ['kanban-btn', 'flashcards-btn', 'trilhas-btn'];
    
    document.addEventListener('DOMContentLoaded', () => {
        blocosBloqueados.forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.style.opacity = '0.5';
                btn.style.cursor = 'not-allowed';
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    alert('⚠️ Funcionalidade exclusiva para usuários cadastrados. Faça seu cadastro para liberar tudo!');
                });
            }
        });
    });
}

aplicarRestricoesConvidado();

function initAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Generate high-quality brown noise buffer dynamically
function createBrownNoiseBuffer() {
    let bufferSize = 10 * audioCtx.sampleRate;
    let noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    let output = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    
    for (let i = 0; i < bufferSize; i++) {
        let white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // Gain amplification factor
    }
    return noiseBuffer;
}

// Control synthesized brown noise
function toggleBrownNoise(start) {
    initAudioContext();
    if (start) {
        if (brownNoiseNode) return;
        
        let noiseBuffer = createBrownNoiseBuffer();
        brownNoiseNode = audioCtx.createBufferSource();
        brownNoiseNode.buffer = noiseBuffer;
        brownNoiseNode.loop = true;
        
        let filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800; // Low frequency warm cut
        
        let gainNode = audioCtx.createGain();
        let vol = parseFloat(document.getElementById('sound-volume-brown').value);
        gainNode.gain.setValueAtTime(vol * 0.5, audioCtx.currentTime);
        gainNode.id = 'brown-gain';
        
        brownNoiseNode.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        brownNoiseNode.start();
    } else {
        if (brownNoiseNode) {
            try { brownNoiseNode.stop(); } catch(e){}
            brownNoiseNode = null;
        }
    }
}

// Control synthesized cosmic synthesizer
function toggleCosmicSynth(start) {
    initAudioContext();
    if (start) {
        if (cosmicSynthInterval) return;
        
        // Setup delay node for ambient spatial echoing
        cosmicDelayNode = audioCtx.createDelay(2.0);
        cosmicDelayNode.delayTime.setValueAtTime(0.6, audioCtx.currentTime);
        
        let delayFeedback = audioCtx.createGain();
        delayFeedback.gain.setValueAtTime(0.4, audioCtx.currentTime);
        
        cosmicDelayNode.connect(delayFeedback);
        delayFeedback.connect(cosmicDelayNode);
        
        let masterGain = audioCtx.createGain();
        let vol = parseFloat(document.getElementById('sound-volume-rain').value);
        masterGain.gain.setValueAtTime(vol * 0.15, audioCtx.currentTime);
        masterGain.id = 'cosmic-gain';
        
        cosmicDelayNode.connect(masterGain);
        masterGain.connect(audioCtx.destination);
        
        // Dynamic chord generation loop (Plays high-performance ambient major/minor chords)
        const chordProgression = [
            [130.81, 164.81, 196.00], // C3 major
            [146.83, 174.61, 220.00], // D3 minor
            [164.81, 196.00, 246.94], // E3 minor
            [174.61, 220.00, 261.63]  // F3 major
        ];
        let chordIdx = 0;
        
        function playChord() {
            let chord = chordProgression[chordIdx];
            chordIdx = (chordIdx + 1) % chordProgression.length;
            
            let duration = 5.8; // Chord duration
            let now = audioCtx.currentTime;
            
            chord.forEach((freq, idx) => {
                let osc = audioCtx.createOscillator();
                let oscGain = audioCtx.createGain();
                
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now);
                osc.frequency.linearRampToValueAtTime(freq * 1.005, now + duration); // Soft pitch warp
                
                oscGain.gain.setValueAtTime(0, now);
                oscGain.gain.linearRampToValueAtTime(0.12, now + 1.5); // Attack
                oscGain.gain.exponentialRampToValueAtTime(0.0001, now + duration - 0.1); // Decay
                
                osc.connect(oscGain);
                oscGain.connect(cosmicDelayNode);
                oscGain.connect(audioCtx.destination);
                
                osc.start(now);
                osc.stop(now + duration);
                
                cosmicOscNodes.push(osc);
            });
        }
        
        playChord();
        cosmicSynthInterval = setInterval(playChord, 6000);
    } else {
        if (cosmicSynthInterval) {
            clearInterval(cosmicSynthInterval);
            cosmicSynthInterval = null;
        }
        cosmicOscNodes.forEach(osc => {
            try { osc.stop(); } catch(e){}
        });
        cosmicOscNodes = [];
        cosmicDelayNode = null;
    }
}

// Syntehsized alert chime
function playChimeBell() {
    initAudioContext();
    let now = audioCtx.currentTime;
    let osc1 = audioCtx.createOscillator();
    let osc2 = audioCtx.createOscillator();
    let gain = audioCtx.createGain();
    
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, now); // D5 note
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.1);
    
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(293.66, now); // D4 note
    
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
    
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 2.0);
    osc2.stop(now + 2.0);
}

// Synthesized level up fan-fare chime
function playLevelUpChime() {
    initAudioContext();
    let now = audioCtx.currentTime;
    let notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, idx) => {
        let osc = audioCtx.createOscillator();
        let gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.15);
        gain.gain.setValueAtTime(0.25, now + idx * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.15 + 0.6);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + idx * 0.15);
        osc.stop(now + idx * 0.15 + 0.7);
    });
}

// Update volumes dynamically
function setSynthVolume(type, val) {
    if (!audioCtx) return;
    // Walk destinations
    // In complex routing, we search for gain nodes
}


// --- Persistent State Handlers ---
function saveToLocalStorage() {
    localStorage.setItem('aki_study_portal_state', JSON.stringify(state));
}

function loadFromLocalStorage() {
    let saved = localStorage.getItem('aki_study_portal_state');
    if (saved) {
        try {
            let parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        } catch(e) {
            console.error("Erro ao carregar dados salvos. Usando padrão.", e);
        }
    }
}

// Award XP logic
function awardXP(amount, reason) {
    state.xp += amount;
    
    // Level Up validation
    let currentLvl = state.level;
    let targetLvl = Math.floor(state.xp / 100) + 1;
    
    if (targetLvl > currentLvl) {
        state.level = targetLvl;
        setTimeout(() => {
            playLevelUpChime();
            showLevelUpNotification(targetLvl);
        }, 800);
    }
    
    saveToLocalStorage();
    renderStatsHeader();
    showXPNotification(amount, reason);
}

// Floating XP indicator
function showXPNotification(amount, reason) {
    let notif = document.createElement('div');
    notif.style.position = 'fixed';
    notif.style.bottom = '2rem';
    notif.style.right = '2rem';
    notif.style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
    notif.style.color = 'white';
    notif.style.padding = '0.75rem 1.25rem';
    notif.style.borderRadius = '12px';
    notif.style.boxShadow = '0 10px 25px rgba(99, 102, 241, 0.4)';
    notif.style.fontFamily = 'var(--font-heading)';
    notif.style.fontWeight = '800';
    notif.style.fontSize = '0.9rem';
    notif.style.zIndex = '999';
    notif.style.transform = 'translateY(50px)';
    notif.style.opacity = '0';
    notif.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    notif.innerHTML = `+${amount} XP <span style="font-weight: 500; font-size: 0.75rem; opacity: 0.95;">(${reason})</span>`;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.transform = 'translateY(0)';
        notif.style.opacity = '1';
    }, 50);
    
    setTimeout(() => {
        notif.style.transform = 'translateY(-20px)';
        notif.style.opacity = '0';
        setTimeout(() => notif.remove(), 300);
    }, 2800);
}

// Level Up fullscreen Overlay indicator
function showLevelUpNotification(level) {
    let overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.background = 'rgba(10,11,16,0.95)';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.animation = 'fadeIn 0.4s ease-out';
    overlay.style.fontFamily = 'var(--font-heading)';
    
    overlay.innerHTML = `
        <div style="text-align: center; max-width: 400px; padding: 2rem;">
            <div style="font-size: 5rem; margin-bottom: 1rem; animation: pulse 1.5s infinite;">⛩️</div>
            <h2 style="font-size: 2.2rem; font-weight: 800; background: linear-gradient(to right, var(--primary), var(--secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem;">SUBIU DE NÍVEL!</h2>
            <p style="color: var(--text-primary); font-size: 1.1rem; font-weight: 700; margin-bottom: 1.5rem;">Você alcançou o Nível ${level}!</p>
            <p style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.5; margin-bottom: 2rem;">Sua determinação está moldando sua mente. Continue nesse caminho de excelência e foco zen.</p>
            <button id="close-lvl-up-btn" class="welcome-action-btn" style="padding: 0.8rem 2rem;">Continuar Jornada</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    document.getElementById('close-lvl-up-btn').onclick = () => {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.3s';
        setTimeout(() => overlay.remove(), 300);
    };
    
    // Check level five achievement
    if (level >= 5) {
        unlockAchievement('level_five');
    }
}

// Achievement Unlock logic
function unlockAchievement(id) {
    let ach = state.achievements.find(a => a.id === id);
    if (ach && !ach.unlocked) {
        ach.unlocked = true;
        saveToLocalStorage();
        awardXP(ach.xpAward, `Conquista: ${ach.title}`);
        renderDashboard(); // Refresh dash list
    }
}

// --- Main Sidebar View Tab Controller ---
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => { // <- O (e) precisava estar aqui!
        let sectionId = item.getAttribute('data-target'); // <- Movido para cima!

        // --- BLOQUEIO DE CONVIDADO ATUALIZADO ---
        const session = JSON.parse(localStorage.getItem('currentSession') || 'null');
        const isGuest = session && session.isGuest === true;
        
        // O que o convidado PODE acessar:
        const allowedSections = ['dashboard-section', 'pomodoro-section', 'guide-section'];

        if (isGuest && !allowedSections.includes(sectionId)) {
            e.preventDefault();
            e.stopPropagation();
            alert("⚠️ Este recurso é exclusivo para alunos registrados. Faça seu cadastro para liberar o acesso total!");
            return; // Bloqueia a troca de aba
        }
        // --- FIM DO BLOQUEIO ---

        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        document.querySelectorAll('.app-section').forEach(sec => sec.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
        
        // Title customization
        let title = item.querySelector('span').innerText;
        let subtitle = "";
        
        switch(sectionId) {
            case 'dashboard-section':
                subtitle = "Sua central gamificada de aprendizado de alta performance.";
                renderDashboard();
                break;
            case 'roadmaps-section':
                subtitle = "Siga trilhas estruturadas ou monte seu próprio roadmap customizado.";
                renderRoadmaps();
                break;
            case 'pomodoro-section':
                subtitle = "Hiperfoco sem distrações e com áudio sintetizado em tempo real.";
                renderPomodoro();
                break;
            case 'flashcards-section':
                subtitle = "Revise cartões com active recall usando repetição espaçada.";
                renderFlashcards();
                break;
            case 'planner-section':
                subtitle = "Planeje suas prioridades semanais com o quadro Kanban ágil.";
                renderPlanner();
                break;
            case 'notes-section':
                subtitle = "Escreva resumos livres e compile Markdown instantaneamente.";
                renderNotes();
                break;
            case 'admin-section':
                subtitle = "Visualize sessões ativas e dados de acesso da plataforma.";
                renderAdminTable();
                break;
            case 'guide-section':
                subtitle = "Conteúdo curado pelos administradores — aprenda com guias completos.";
                renderGuideSection();
                break;
        }
        
        document.getElementById('main-page-title').innerText = title;
        document.getElementById('main-page-subtitle').innerText = subtitle;
    });
});

// --- Render Header Stats ---
function renderStatsHeader() {
    // Top Bar stats
    document.getElementById('header-streak-value').innerText = `${state.streak} ${state.streak === 1 ? 'Dia' : 'Dias'}`;
    document.getElementById('header-xp-value').innerText = `${state.xp} XP`;
    document.getElementById('header-level-value').innerText = `Lvl ${state.level}`;
    
    // Bottom Sidebar levels card
    let rankName = "Iniciante das Sombras";
    if (state.level >= 2) rankName = "Aprendiz de Foco";
    if (state.level >= 4) rankName = "Guerreiro Pomodoro";
    if (state.level >= 6) rankName = "Escriba do Conhecimento";
    if (state.level >= 8) rankName = "Mestre Zen do Aprendizado";
    
    document.getElementById('sidebar-rank').innerText = rankName;
    document.getElementById('sidebar-level-label').innerText = `Nível ${state.level}`;
    
    let currentLvlXp = state.xp % 100;
    document.getElementById('sidebar-xp-label').innerText = `${currentLvlXp} / 100 XP`;
    document.getElementById('sidebar-xp-bar').style.width = `${currentLvlXp}%`;
}


// --- 1: Dashboard Render Operations ---
function renderDashboard() {
    document.getElementById('dash-minutes-studied').innerText = `${state.totalStudyTime}m`;
    
    // Roadmap steps calculations
    let totalSteps = 0;
    let completedSteps = 0;
    state.roadmaps.forEach(r => {
        totalSteps += r.steps.length;
        completedSteps += r.steps.filter(s => s.completed).length;
    });
    document.getElementById('dash-roadmaps-completed').innerText = `${completedSteps} / ${totalSteps}`;
    
    // Cards reviewed
    let reviewedCount = state.weeklyActivity.reduce((a, b) => a + b, 0); // Mock-up based on activity or srs state
    document.getElementById('dash-flashcards-reviewed').innerText = `${state.weeklyActivity[new Date().getDay()] || 0} hoje`;
    
    // Tasks pending
    let pendingTasks = state.tasks.filter(t => t.status !== 'done').length;
    document.getElementById('dash-tasks-pending').innerText = pendingTasks;
    
    // Welcome CTA Study switch
    document.getElementById('dash-start-study-btn').onclick = () => {
        document.querySelector('[data-target="pomodoro-section"]').click();
    };
    
    // Render Activity Chart (weekly grid height calculation)
    let maxMinutes = Math.max(...state.weeklyActivity, 15); // Lower limit to keep it visual
    for (let idx = 0; idx < 7; idx++) {
        let bar = document.getElementById(`bar-day-${idx}`);
        if (bar) {
            let minutes = state.weeklyActivity[idx] || 0;
            let percentage = (minutes / maxMinutes) * 100;
            bar.style.height = `${percentage}%`;
            bar.parentElement.setAttribute('title', `${minutes} minutos focados`);
        }
    }
    
    // Achievements List render
    let achList = document.getElementById('dash-achievements-list');
    achList.innerHTML = "";
    
    state.achievements.forEach(ach => {
        let card = document.createElement('div');
        card.className = `achievement-card ${ach.unlocked ? 'unlocked' : ''}`;
        
        card.innerHTML = `
            <div class="achievement-icon">${ach.unlocked ? ach.icon : '🔒'}</div>
            <div class="achievement-details">
                <span class="achievement-title">${ach.title}</span>
                <span class="achievement-desc">${ach.desc}</span>
            </div>
            <div class="achievement-xp">+${ach.xpAward} XP</div>
        `;
        achList.appendChild(card);
    });
}


function renderRoadmaps() {
    let selectorList = document.getElementById('roadmap-selector-list');
    selectorList.innerHTML = "";
    
    if (state.roadmaps.length === 0) {
        state.selectedRoadmapId = null;
    } else if (!state.selectedRoadmapId) {
        state.selectedRoadmapId = state.roadmaps[0].id;
    }
    
    state.roadmaps.forEach(roadmap => {
        let completed = roadmap.steps.filter(s => s.completed).length;
        let total = roadmap.steps.length;
        let percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        let tab = document.createElement('button');
        tab.className = `roadmap-tab-btn ${state.selectedRoadmapId === roadmap.id ? 'active' : ''}`;
        
        tab.innerHTML = `
            <div class="roadmap-tab-title">
                <span>${roadmap.title}</span>
                <span class="roadmap-tab-meta">${total} módulos</span>
            </div>
            <span class="roadmap-tab-progress">${percentage}%</span>
        `;
        
        tab.onclick = () => {
            state.selectedRoadmapId = roadmap.id;
            renderRoadmaps();
        };
        
        selectorList.appendChild(tab);
    });
    
    // Main Panel Renderer
    let activeRoadmap = state.roadmaps.find(r => r.id === state.selectedRoadmapId);
    
    if (!activeRoadmap) {
        document.getElementById('active-roadmap-title').innerText = "Nenhuma Trilha Selecionada";
        document.getElementById('active-roadmap-desc').innerText = "Crie uma nova trilha abaixo para começar seus estudos focados!";
        document.getElementById('active-roadmap-progress-container').style.display = 'none';
        document.getElementById('active-roadmap-steps').innerHTML = "";
        document.getElementById('delete-roadmap-btn').style.display = 'none';
        return;
    }
    
    document.getElementById('active-roadmap-title').innerText = activeRoadmap.title;
    document.getElementById('active-roadmap-desc').innerText = activeRoadmap.desc;
    document.getElementById('active-roadmap-progress-container').style.display = 'flex';
    
    let deleteBtn = document.getElementById('delete-roadmap-btn');
    deleteBtn.style.display = 'block';
    deleteBtn.onclick = () => {
        if (confirm(`Deseja mesmo excluir a trilha "${activeRoadmap.title}"?`)) {
            state.roadmaps = state.roadmaps.filter(r => r.id !== activeRoadmap.id);
            state.selectedRoadmapId = null;
            saveToLocalStorage();
            renderRoadmaps();
        }
    };
    
    // Progress bar calculation
    let completedCount = activeRoadmap.steps.filter(s => s.completed).length;
    let totalCount = activeRoadmap.steps.length;
    let pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    
    document.getElementById('active-roadmap-percentage').innerText = `${pct}%`;
    document.getElementById('active-roadmap-bar').style.width = `${pct}%`;
    
    // Steps listing
    let stepsList = document.getElementById('active-roadmap-steps');
    stepsList.innerHTML = "";
    
    activeRoadmap.steps.forEach((step, index) => {
        let card = document.createElement('div');
        card.className = `roadmap-step-card ${step.completed ? 'completed' : ''}`;
        
        card.innerHTML = `
            <div class="roadmap-step-checkbox">
                <input type="checkbox" id="chk-${step.id}" ${step.completed ? 'checked' : ''}>
            </div>
            <div class="roadmap-step-details">
                <div class="step-header">
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                        <span class="step-title">${index + 1}. ${step.title}</span>
                        <button class="edit-step-btn" id="edit-btn-${step.id}" title="Editar Passo" style="background:none;border:none;color:#64748b;cursor:pointer;font-size:0.9rem;">✏️ Edição</button>
                    </div>
                    <span class="step-badge">${step.badge}</span>
                </div>
                <p class="step-desc">${step.desc}</p>
                <div class="step-resources">
                    <a href="${step.resourceUrl}" target="_blank" class="resource-pill">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        ${step.resourceText}
                    </a>
                </div>
            </div>
        `;
        
        let checkbox = card.querySelector(`#chk-${step.id}`);
        checkbox.onchange = (e) => {
            step.completed = e.target.checked;
            saveToLocalStorage();
            
            if (step.completed) {
                awardXP(20, `Módulo concluído: ${step.title}`);
                unlockAchievement('first_step');
            } else {
                state.xp = Math.max(0, state.xp - 20);
                saveToLocalStorage();
                renderStatsHeader();
            }
            renderRoadmaps();
        };
        
        // Ativa o clique do botão de editar
        let editBtn = card.querySelector(`#edit-btn-${step.id}`);
        editBtn.onclick = () => {
            if(typeof window.openEditStepModal === 'function') {
                window.openEditStepModal(activeRoadmap.id, step.id);
            }
        };
        
        stepsList.appendChild(card);
    });

    // Botão de adicionar passo
    let addStepBtn = document.createElement('button');
    addStepBtn.className = "add-roadmap-btn";
    addStepBtn.style.marginTop = "1.5rem";
    addStepBtn.style.width = "100%";
    addStepBtn.style.background = "rgba(16, 185, 129, 0.1)";
    addStepBtn.style.color = "#34d399";
    addStepBtn.style.borderColor = "#34d399";
    addStepBtn.innerHTML = `➕ Adicionar Novo Passo Customizado`;
    addStepBtn.onclick = () => {
        let newStep = {
            id: `c-step-${Date.now()}`,
            title: `Módulo Customizado ${activeRoadmap.steps.length + 1}`,
            desc: 'Clique em "✏️ Edição" para modificar a descrição e links deste item.',
            completed: false,
            badge: 'Geral',
            resourceText: 'Link Útil',
            resourceUrl: 'https://google.com'
        };
        activeRoadmap.steps.push(newStep);
        saveToLocalStorage();
        renderRoadmaps();
        
        setTimeout(() => {
            if(typeof window.openEditStepModal === 'function') {
                window.openEditStepModal(activeRoadmap.id, newStep.id);
            }
        }, 50);
    };
    stepsList.appendChild(addStepBtn);
}

// Modal open roadmap
document.getElementById('open-roadmap-modal-btn').onclick = () => {
    document.getElementById('roadmap-modal').style.display = 'flex';
};
document.getElementById('close-roadmap-modal').onclick = () => {
    document.getElementById('roadmap-modal').style.display = 'none';
};
document.getElementById('cancel-roadmap-btn').onclick = () => {
    document.getElementById('roadmap-modal').style.display = 'none';
};

document.getElementById('roadmap-form').onsubmit = (e) => {
    e.preventDefault();
    let title = document.getElementById('roadmap-title-input').value;
    let desc = document.getElementById('roadmap-desc-input').value;
    let count = parseInt(document.getElementById('roadmap-steps-count').value);
    
    let newSteps = [];
    for (let i = 1; i <= count; i++) {
        newSteps.push({
            id: `c-step-${Date.now()}-${i}`,
            title: `Módulo Customizado ${i}`,
            desc: 'Edite esta descrição estudando e anotando no portal.',
            completed: false,
            badge: 'Pesquisa',
            resourceText: 'Google Brasil',
            resourceUrl: 'https://google.com.br'
        });
    }
    
    let newRoadmap = {
        id: `roadmap-${Date.now()}`,
        title: title,
        desc: desc,
        steps: newSteps
    };
    
    state.roadmaps.push(newRoadmap);
    state.selectedRoadmapId = newRoadmap.id;
    
    document.getElementById('roadmap-modal').style.display = 'none';
    document.getElementById('roadmap-form').reset();
    
    awardXP(30, `Nova trilha criada: ${title}`);
    renderRoadmaps();
};


// --- 3: Glow Pomodoro Loop Logic ---
let pomodoroTimer = null;
let secondsLeft = 1500; // 25 minutes
let currentTimerDuration = 1500;
let isTimerRunning = false;
let pomodoroMode = 'work'; // work, short_break, long_break

function renderPomodoro() {
    updateTimerVisuals();
    
    // Load daily logs
    let logsList = document.getElementById('pomodoro-sessions-log');
    logsList.innerHTML = "";
    
    if (state.pomodoroLogs.length === 0) {
        logsList.innerHTML = `<div style="font-size:0.7rem; color:var(--text-muted); text-align:center; padding:1rem;">Nenhum foco registrado hoje. Comece já!</div>`;
    } else {
        state.pomodoroLogs.forEach(log => {
            let item = document.createElement('div');
            item.className = "log-item";
            item.innerHTML = `
                <span class="log-time">${log.time}</span>
                <span class="log-duration">${log.type === 'work' ? '🔥 Foco' : '🍃 Pausa'} (${log.duration}m)</span>
            `;
            logsList.appendChild(item);
        });
    }
}

function updateTimerVisuals() {
    let min = Math.floor(secondsLeft / 60);
    let sec = secondsLeft % 60;
    let formatted = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    
    document.getElementById('pomodoro-time-display').innerText = formatted;
    document.title = `(${formatted}) Aki Study Portal`;
    
    let circle = document.getElementById('pomodoro-radial-ring');
    let perimeter = 2 * Math.PI * 120; // 753.98
    let progress = secondsLeft / currentTimerDuration;
    circle.style.strokeDashoffset = perimeter - (perimeter * progress);
    
    if (pomodoroMode === 'work') {
        document.getElementById('pomodoro-mode-display').innerText = "Modo Foco";
        circle.classList.remove('break');
    } else {
        document.getElementById('pomodoro-mode-display').innerText = pomodoroMode === 'short_break' ? "Pausa Curta" : "Pausa Longa";
        circle.classList.add('break');
    }
}

// Toggle Play/Pause
document.getElementById('pomodoro-toggle-btn').onclick = () => {
    if (isTimerRunning) {
        clearInterval(pomodoroTimer);
        isTimerRunning = false;
        document.getElementById('pomodoro-play-icon').innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;
    } else {
        initAudioContext();
        isTimerRunning = true;
        document.getElementById('pomodoro-play-icon').innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;
        
        pomodoroTimer = setInterval(() => {
            if (secondsLeft > 0) {
                secondsLeft--;
                updateTimerVisuals();
            } else {
                clearInterval(pomodoroTimer);
                isTimerRunning = false;
                document.getElementById('pomodoro-play-icon').innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;
                timerCompleted();
            }
        }, 1000);
    }
};

// Reset Timer
document.getElementById('pomodoro-reset-btn').onclick = () => {
    clearInterval(pomodoroTimer);
    isTimerRunning = false;
    document.getElementById('pomodoro-play-icon').innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;
    
    if (pomodoroMode === 'work') {
        secondsLeft = 1500;
        currentTimerDuration = 1500;
    } else if (pomodoroMode === 'short_break') {
        secondsLeft = 300;
        currentTimerDuration = 300;
    } else {
        secondsLeft = 900;
        currentTimerDuration = 900;
    }
    updateTimerVisuals();
};

// Skip Interval
document.getElementById('pomodoro-skip-btn').onclick = () => {
    clearInterval(pomodoroTimer);
    isTimerRunning = false;
    document.getElementById('pomodoro-play-icon').innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;
    switchTimerMode();
};

function switchTimerMode() {
    if (pomodoroMode === 'work') {
        pomodoroMode = 'short_break';
        secondsLeft = 300;
        currentTimerDuration = 300;
    } else {
        pomodoroMode = 'work';
        secondsLeft = 1500;
        currentTimerDuration = 1500;
    }
    updateTimerVisuals();
}

function timerCompleted() {
    playChimeBell();
    
    // Log Pomodoro session
    let timestamp = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    let durMin = Math.round(currentTimerDuration / 60);
    
    state.pomodoroLogs.unshift({
        time: timestamp,
        type: pomodoroMode,
        duration: durMin
    });
    
    if (pomodoroMode === 'work') {
        // Award XP and active minutes
        awardXP(100, "Ciclo Pomodoro Concluído");
        state.totalStudyTime += durMin;
        
        let todayDay = new Date().getDay();
        state.weeklyActivity[todayDay] = (state.weeklyActivity[todayDay] || 0) + durMin;
        
        unlockAchievement('pomodoro_warrior');
        
        // Streak calculation
        let todayStr = new Date().toDateString();
        if (state.lastStudyDate !== todayStr) {
            state.streak++;
            state.lastStudyDate = todayStr;
        }
        
        saveToLocalStorage();
        alert("Excelente trabalho! Hora de uma pausa merecida.");
        pomodoroMode = 'short_break';
        secondsLeft = 300;
        currentTimerDuration = 300;
    } else {
        awardXP(20, "Pausa de Foco Concluída");
        alert("Pausa concluída! Pronto para mais uma rodada de foco?");
        pomodoroMode = 'work';
        secondsLeft = 1500;
        currentTimerDuration = 1500;
    }
    
    saveToLocalStorage();
    renderStatsHeader();
    renderPomodoro();
}

// Synths Ambient Sound Controls
document.getElementById('sound-card-brown').onclick = function(e) {
    if (e.target.tagName === 'INPUT') return;
    initAudioContext();
    this.classList.toggle('active');
    let slider = document.getElementById('sound-slider-brown-box');
    slider.classList.toggle('disabled');
    
    let isPlaying = this.classList.contains('active');
    toggleBrownNoise(isPlaying);
};

document.getElementById('sound-card-rain').onclick = function(e) {
    if (e.target.tagName === 'INPUT') return;
    initAudioContext();
    this.classList.toggle('active');
    let slider = document.getElementById('sound-slider-rain-box');
    slider.classList.toggle('disabled');
    
    let isPlaying = this.classList.contains('active');
    toggleCosmicSynth(isPlaying);
};

document.getElementById('sound-volume-brown').oninput = function() {
    if (!audioCtx || !brownNoiseNode) return;
    // Search for gain node
    // Simple way is stopping and starting with new volume node
    toggleBrownNoise(false);
    toggleBrownNoise(true);
};

document.getElementById('sound-volume-rain').oninput = function() {
    if (!audioCtx || !cosmicSynthInterval) return;
    toggleCosmicSynth(false);
    toggleCosmicSynth(true);
};


// --- 4: Spaced Repetition Flashcards Logic ---
let activeCardQueue = [];
let currentQueueIndex = 0;
let isCardFlipped = false;

function renderFlashcards() {
    let selector = document.getElementById('deck-selector-list');
    selector.innerHTML = "";
    
    if (state.decks.length === 0) {
        state.selectedDeckId = null;
    } else if (!state.selectedDeckId) {
        state.selectedDeckId = state.decks[0].id;
    }
    
    state.decks.forEach(deck => {
        let tab = document.createElement('button');
        tab.className = `deck-tab-btn ${state.selectedDeckId === deck.id ? 'active' : ''}`;
        
        tab.innerHTML = `
            <span>${deck.title}</span>
            <span class="deck-tab-progress">${deck.cards.length} cards</span>
        `;
        
        tab.onclick = () => {
            state.selectedDeckId = deck.id;
            isCardFlipped = false;
            document.getElementById('flashcard-box').classList.remove('flipped');
            renderFlashcards();
        };
        
        selector.appendChild(tab);
    });
    
    let activeDeck = state.decks.find(d => d.id === state.selectedDeckId);
    


    // SE NÃO HOUVER BARALHO ATIVO
    if (!activeDeck) {
        document.getElementById('active-deck-title').innerText = "Nenhum Baralho Ativo";
        document.getElementById('deck-srs-status-box').style.display = 'none';
        
        document.getElementById('open-add-card-modal-btn').style.display = 'none';
        document.getElementById('delete-active-deck-btn').style.display = 'none';
        document.getElementById('delete-active-card-btn').style.display = 'none'; // Esconde se não houver baralho
        
        document.getElementById('deck-empty-view').style.display = 'flex';
        document.getElementById('flashcard-box').style.display = 'none';
        document.getElementById('flashcard-leitner-controls-box').style.display = 'none';
        return;
    }
    
    // SE HOUVER BARALHO ATIVO
    document.getElementById('active-deck-title').innerText = activeDeck.title;
    document.getElementById('deck-srs-status-box').style.display = 'flex';
    
    document.getElementById('open-add-card-modal-btn').style.display = 'block';
    document.getElementById('delete-active-deck-btn').style.display = 'block'; 
    
    let hard = activeDeck.cards.filter(c => c.srsStage === 1).length;
    let med = activeDeck.cards.filter(c => c.srsStage === 2).length;
    let easy = activeDeck.cards.filter(c => c.srsStage === 3).length;
    
    document.getElementById('deck-count-hard').innerText = `${hard} Difíceis`;
    document.getElementById('deck-count-medium').innerText = `${med} Médios`;
    document.getElementById('deck-count-easy').innerText = `${easy} Fáceis`;
    
    // Preparar fila de estudos
    activeCardQueue = [...activeDeck.cards];
    
    if (activeCardQueue.length === 0) {
        document.getElementById('delete-active-card-btn').style.display = 'none'; // Esconde o botão se o baralho estiver vazio
        document.getElementById('deck-empty-view').style.display = 'flex';
        document.getElementById('flashcard-box').style.display = 'none';
        document.getElementById('flashcard-leitner-controls-box').style.display = 'none';
    } else {
        document.getElementById('delete-active-card-btn').style.display = 'block'; // Mostra o botão se houver cartas
        document.getElementById('deck-empty-view').style.display = 'none';
        document.getElementById('flashcard-box').style.display = 'block';
        document.getElementById('flashcard-leitner-controls-box').style.display = 'flex';
        
        if (currentQueueIndex >= activeCardQueue.length) {
            currentQueueIndex = 0;
        }
        
        displayActiveCard();
    }
}

// ==========================================
// Ação para deletar o BARALHO inteiro
// ==========================================
document.getElementById('delete-active-deck-btn').onclick = () => {
    let activeDeck = state.decks.find(d => d.id === state.selectedDeckId);
    
    if (activeDeck) {
        if (confirm(`Tem certeza que deseja excluir o baralho "${activeDeck.title}" e TODOS os cartões dentro dele?`)) {
            state.decks = state.decks.filter(d => d.id !== activeDeck.id);
            state.selectedDeckId = null; 
            saveToLocalStorage();
            renderFlashcards();
        }
    }
};

// ==========================================
// Ação para deletar apenas o FLASHCARD ativo (COLE AQUI!)
// ==========================================
document.getElementById('delete-active-card-btn').onclick = () => {
    let activeDeck = state.decks.find(d => d.id === state.selectedDeckId);
    
    if (activeDeck && activeCardQueue.length > 0) {
        let currentCard = activeCardQueue[currentQueueIndex];
        
        if (confirm("Tem certeza que deseja excluir este flashcard definitivamente?")) {
            // Remove a carta específica do array usando o ID único dela
            activeDeck.cards = activeDeck.cards.filter(c => c.id !== currentCard.id);
            saveToLocalStorage();
            
            // Ajusta o índice da fila para não estourar os limites do array
            if (currentQueueIndex >= activeDeck.cards.length) {
                currentQueueIndex = Math.max(0, activeDeck.cards.length - 1);
            }
            
            // Força o reset visual da rotação 3D para evitar falhas no DOM
            isCardFlipped = false;
            document.getElementById('flashcard-box').classList.remove('flipped');
            document.getElementById('flashcard-flip-btn').style.display = 'block';
            document.getElementById('leitner-buttons').style.display = 'none';
            
            // Re-renderiza a visualização
            renderFlashcards(); 
        }
    }
};

function displayActiveCard() {
    let card = activeCardQueue[currentQueueIndex];
    if (!card) return;
    
    document.getElementById('flashcard-number-index').innerText = `Card ${currentQueueIndex + 1} / ${activeCardQueue.length}`;
    document.getElementById('flashcard-number-index-back').innerText = `Card ${currentQueueIndex + 1} / ${activeCardQueue.length}`;
    
    document.getElementById('flashcard-front-content').innerText = card.front;
    document.getElementById('flashcard-back-content').innerText = card.back;
    
    // Reset Flip status
    isCardFlipped = false;
    document.getElementById('flashcard-box').classList.remove('flipped');
    document.getElementById('leitner-buttons').style.display = 'none';
    document.getElementById('flashcard-flip-btn').style.display = 'block';
}

function flipActiveCard() {
    isCardFlipped = !isCardFlipped;
    let box = document.getElementById('flashcard-box');
    if (isCardFlipped) {
        box.classList.add('flipped');
        document.getElementById('flashcard-flip-btn').style.display = 'none';
        document.getElementById('leitner-buttons').style.display = 'grid';
    } else {
        box.classList.remove('flipped');
        document.getElementById('flashcard-flip-btn').style.display = 'block';
        document.getElementById('leitner-buttons').style.display = 'none';
    }
}

document.getElementById('flashcard-box').onclick = () => {
    flipActiveCard();
};
document.getElementById('flashcard-flip-btn').onclick = () => {
    flipActiveCard();
};

// Keyboard listener for flipping cards easily
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.getElementById('flashcards-section').classList.contains('active')) {
        let activeEl = document.activeElement;
        if (activeEl.tagName !== 'TEXTAREA' && activeEl.tagName !== 'INPUT') {
            e.preventDefault();
            flipActiveCard();
        }
    }
});

// leitner rating click
document.querySelectorAll('.leitner-btn').forEach(btn => {
    btn.onclick = () => {
        let rating = btn.getAttribute('data-rating');
        let card = activeCardQueue[currentQueueIndex];
        
        if (rating === 'easy') {
            card.srsStage = 3;
            awardXP(15, "Memorizado: Nível Fácil");
        } else if (rating === 'medium') {
            card.srsStage = 2;
            awardXP(10, "Estudado: Nível Médio");
        } else {
            card.srsStage = 1;
            awardXP(5, "Estudado: Nível Difícil");
        }
        
        unlockAchievement('srs_scholar');
        
        // Go next
        currentQueueIndex++;
        if (currentQueueIndex >= activeCardQueue.length) {
            currentQueueIndex = 0;
            alert("Você completou todos os cartões deste baralho! Ótima revisão.");
        }
        
        saveToLocalStorage();
        renderFlashcards();
    };
});

// Modal Decks
document.getElementById('open-deck-modal-btn').onclick = () => {
    document.getElementById('deck-modal').style.display = 'flex';
};
document.getElementById('close-deck-modal').onclick = () => {
    document.getElementById('deck-modal').style.display = 'none';
};
document.getElementById('cancel-deck-btn').onclick = () => {
    document.getElementById('deck-modal').style.display = 'none';
};

document.getElementById('deck-form').onsubmit = (e) => {
    e.preventDefault();
    let title = document.getElementById('deck-title-input').value;
    
    let newDeck = {
        id: `deck-${Date.now()}`,
        title: title,
        cards: []
    };
    
    state.decks.push(newDeck);
    state.selectedDeckId = newDeck.id;
    
    document.getElementById('deck-modal').style.display = 'none';
    document.getElementById('deck-form').reset();
    saveToLocalStorage();
    renderFlashcards();
};

// Modal Cards inside active deck
// Ação para deletar o BARALHO inteiro
document.getElementById('delete-active-deck-btn').onclick = () => {
    let activeDeck = state.decks.find(d => d.id === state.selectedDeckId);
    
    if (activeDeck) {
        if (confirm(`Tem certeza que deseja excluir o baralho "${activeDeck.title}" e TODOS os cartões dentro dele?`)) {
            // Remove o baralho inteiro da lista
            state.decks = state.decks.filter(d => d.id !== activeDeck.id);
            
            // Tira a seleção atual já que o baralho não existe mais
            state.selectedDeckId = null; 
            
            saveToLocalStorage();
            renderFlashcards(); // Atualiza a tela
        }
    }
};

document.getElementById('open-add-card-modal-btn').onclick = () => {
    document.getElementById('card-modal').style.display = 'flex';
};
document.getElementById('close-card-modal').onclick = () => {
    document.getElementById('card-modal').style.display = 'none';
};
document.getElementById('cancel-card-btn').onclick = () => {
    document.getElementById('card-modal').style.display = 'none';
};

document.getElementById('card-form').onsubmit = (e) => {
    e.preventDefault();
    let front = document.getElementById('card-front-input').value;
    let back = document.getElementById('card-back-input').value;
    
    let activeDeck = state.decks.find(d => d.id === state.selectedDeckId);
    if (activeDeck) {
        activeDeck.cards.push({
            id: `card-${Date.now()}`,
            front: front,
            back: back,
            srsStage: 1,
            nextReview: null
        });
        
        document.getElementById('card-modal').style.display = 'none';
        document.getElementById('card-form').reset();
        
        awardXP(10, "Novo flashcard adicionado");
        renderFlashcards();
    }
};


// --- 5: Kanban Planner Drag & Drop and Single Click Mechanics ---
function renderPlanner() {
    let statuses = ['todo', 'doing', 'done'];
    
    statuses.forEach(status => {
        let col = document.getElementById(`column-${status}`);
        col.innerHTML = "";
        
        let filtered = state.tasks.filter(t => t.status === status);
        document.getElementById(`count-${status}`).innerText = filtered.length;
        
        filtered.forEach(task => {
            let card = document.createElement('div');
            card.className = "kanban-task-card";
            card.setAttribute('draggable', 'true');
            card.setAttribute('data-id', task.id);
            
            card.innerHTML = `
                <div class="task-tag ${task.priority}">${task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}</div>
                <div class="task-title">${task.title}</div>
                ${task.desc ? `<p class="task-desc">${task.desc}</p>` : ''}
                <div class="task-footer">
                    <div class="task-due-date">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <span>${task.dueDate ? task.dueDate.split('-').reverse().join('/') : 'Sem prazo'}</span>
                    </div>
                    <div class="task-actions">
                        ${status !== 'todo' ? `<button class="task-action-btn move-left" title="Mover para esquerda">◀</button>` : ''}
                        ${status !== 'done' ? `<button class="task-action-btn move-right" title="Mover para direita">▶</button>` : ''}
                        <button class="task-action-btn delete" title="Excluir tarefa">×</button>
                    </div>
                </div>
            `;
            
            // Drag listeners
            card.addEventListener('dragstart', () => {
                card.classList.add('dragging');
            });
            
            card.addEventListener('dragend', () => {
                card.classList.remove('dragging');
            });
            
            // Click-based arrows for mobile support
            let leftArrow = card.querySelector('.move-left');
            if (leftArrow) {
                leftArrow.onclick = () => {
                    let nextStatus = status === 'done' ? 'doing' : 'todo';
                    task.status = nextStatus;
                    saveToLocalStorage();
                    renderPlanner();
                };
            }
            
            let rightArrow = card.querySelector('.move-right');
            if (rightArrow) {
                rightArrow.onclick = () => {
                    let nextStatus = status === 'todo' ? 'doing' : 'done';
                    task.status = nextStatus;
                    
                    if (nextStatus === 'done') {
                        awardXP(15, `Tarefa Concluída: ${task.title}`);
                        // Kanban achievements calculation
                        let doneCount = state.tasks.filter(t => t.status === 'done').length;
                        if (doneCount >= 3) {
                            unlockAchievement('kanban_master');
                        }
                    }
                    
                    saveToLocalStorage();
                    renderPlanner();
                };
            }
            
            card.querySelector('.delete').onclick = () => {
                state.tasks = state.tasks.filter(t => t.id !== task.id);
                saveToLocalStorage();
                renderPlanner();
            };
            
            col.appendChild(card);
        });
        
        // Drop area listeners
        col.addEventListener('dragover', (e) => {
            e.preventDefault();
            let draggingCard = document.querySelector('.dragging');
            col.appendChild(draggingCard);
        });
        
        col.addEventListener('drop', (e) => {
            let draggingCard = document.querySelector('.dragging');
            let taskId = draggingCard.getAttribute('data-id');
            let targetStatus = col.getAttribute('data-status');
            
            let task = state.tasks.find(t => t.id === taskId);
            if (task && task.status !== targetStatus) {
                task.status = targetStatus;
                if (targetStatus === 'done') {
                    awardXP(15, `Tarefa Concluída: ${task.title}`);
                    let doneCount = state.tasks.filter(t => t.status === 'done').length;
                    if (doneCount >= 3) {
                        unlockAchievement('kanban_master');
                    }
                }
                saveToLocalStorage();
                renderPlanner();
            }
        });
    });
}

// Modal Task
document.querySelectorAll('.add-task-column-btn').forEach(btn => {
    btn.onclick = () => {
        let status = btn.getAttribute('data-status');
        document.getElementById('task-column-target').value = status;
        document.getElementById('task-modal').style.display = 'flex';
    };
});
document.getElementById('close-task-modal').onclick = () => {
    document.getElementById('task-modal').style.display = 'none';
};
document.getElementById('cancel-task-btn').onclick = () => {
    document.getElementById('task-modal').style.display = 'none';
};

document.getElementById('task-form').onsubmit = (e) => {
    e.preventDefault();
    let title = document.getElementById('task-title-input').value;
    let desc = document.getElementById('task-desc-input').value;
    let priority = document.getElementById('task-priority-input').value;
    let due = document.getElementById('task-due-input').value;
    let column = document.getElementById('task-column-target').value;
    
    let newTask = {
        id: `task-${Date.now()}`,
        title: title,
        desc: desc,
        status: column,
        priority: priority,
        dueDate: due
    };
    
    state.tasks.push(newTask);
    saveToLocalStorage();
    
    document.getElementById('task-modal').style.display = 'none';
    document.getElementById('task-form').reset();
    
    renderPlanner();
};


// --- 6: Zen Notes Logic and Compile Markdown ---
function renderNotes() {
    let selector = document.getElementById('notes-selector-list');
    selector.innerHTML = "";
    
    if (state.notes.length === 0) {
        state.selectedNoteId = null;
    } else if (!state.selectedNoteId) {
        state.selectedNoteId = state.notes[0].id;
    }
    
    state.notes.forEach(note => {
        let tab = document.createElement('button');
        tab.className = `note-tab-btn ${state.selectedNoteId === note.id ? 'active' : ''}`;
        
        tab.innerHTML = `
            <span>${note.title}</span>
            <span class="note-tab-date">${note.updatedAt}</span>
        `;
        
        tab.onclick = () => {
            state.selectedNoteId = note.id;
            renderNotes();
        };
        
        selector.appendChild(tab);
    });
    
    let activeNote = state.notes.find(n => n.id === state.selectedNoteId);
    if (!activeNote) {
        document.getElementById('note-title-field').value = "Nenhuma Nota Selecionada";
        document.getElementById('note-textarea-field').value = "";
        document.getElementById('note-preview-area').innerHTML = "";
        document.getElementById('note-textarea-field').disabled = true;
        document.getElementById('note-title-field').disabled = true;
        document.getElementById('note-delete-btn').style.display = 'none';
        document.getElementById('note-download-btn').style.display = 'none';
        return;
    }
    
    document.getElementById('note-textarea-field').disabled = false;
    document.getElementById('note-title-field').disabled = false;
    document.getElementById('note-delete-btn').style.display = 'block';
    document.getElementById('note-download-btn').style.display = 'block';
    
    document.getElementById('note-title-field').value = activeNote.title;
    document.getElementById('note-textarea-field').value = activeNote.content;
    
    compileMarkdownToHTML(activeNote.content);
    
    // Notes content change triggers auto-saver
    document.getElementById('note-textarea-field').oninput = function() {
        activeNote.content = this.value;
        activeNote.updatedAt = new Date().toLocaleDateString('pt-BR');
        compileMarkdownToHTML(this.value);
        saveToLocalStorage();
        
        unlockAchievement('note_composer');
    };
    
    document.getElementById('note-title-field').onchange = function() {
        activeNote.title = this.value;
        activeNote.updatedAt = new Date().toLocaleDateString('pt-BR');
        saveToLocalStorage();
        renderNotes();
    };
    
    document.getElementById('note-delete-btn').onclick = () => {
        if (confirm(`Deseja deletar a nota "${activeNote.title}"?`)) {
            state.notes = state.notes.filter(n => n.id !== activeNote.id);
            state.selectedNoteId = null;
            saveToLocalStorage();
            renderNotes();
        }
    };
    
    // Download TXT
    document.getElementById('note-download-btn').onclick = () => {
        let blob = new Blob([activeNote.content], { type: 'text/markdown;charset=utf-8' });
        let link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${activeNote.title.toLowerCase().replace(/\s+/g, '_')}.md`;
        link.click();
    };
}

// Simple regex Markdown compiler
function compileMarkdownToHTML(markdown) {
    if (!markdown) {
        document.getElementById('note-preview-area').innerHTML = "";
        return;
    }
    
    let html = markdown
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
        
    // Heading lines
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    
    // Bold, italic, code styling
    html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');
    html = html.replace(/`(.*)`/gim, '<code>$1</code>');
    
    // Blockquotes
    html = html.replace(/^&gt; (.*$)/gim, '<blockquote>$1</blockquote>');
    
    // Bullet points
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    
    // Wrap consecutive list tags inside UL
    html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
    html = html.replace(/<\/ul>\s*<ul>/gim, '');
    
    // Newline blocks into paragraphs
    html = html.split(/\n\n+/).map(p => {
        if (!p.trim().startsWith('<h') && !p.trim().startsWith('<ul') && !p.trim().startsWith('<block') && !p.trim().startsWith('<li')) {
            return `<p>${p.replace(/\n/g, '<br>')}</p>`;
        }
        return p;
    }).join('\n');
    
    document.getElementById('note-preview-area').innerHTML = html;
}

// Create new note
document.getElementById('open-new-note-btn').onclick = () => {
    let newNote = {
        id: `note-${Date.now()}`,
        title: 'Nova Nota',
        content: '# Nova Anotação 📝\n\nEscreva seus pensamentos aqui...',
        updatedAt: new Date().toLocaleDateString('pt-BR')
    };
    
    state.notes.push(newNote);
    state.selectedNoteId = newNote.id;
    saveToLocalStorage();
    renderNotes();
};


// --- Boot up logic ---
window.onload = () => {
    // --- Auth guard: redirect to login if no session ---
    const session = JSON.parse(localStorage.getItem('currentSession') || 'null');
    if (!session) {
        window.location.href = 'pagina_login.html';
        return;
    }

    loadFromLocalStorage();
    renderStatsHeader();
    renderDashboard();
    initTopNavbar(session);
    initAdminPanel(session);
    initInfoModals();
    renderGuideSection();
};

// ============================================================
// TOP NAVBAR
// ============================================================
function initTopNavbar(session) {
    const emailEl = document.getElementById('nav-user-email');
    if (emailEl) emailEl.textContent = session.email;

    // Set profile avatar initial letter
    const avatarBtn = document.getElementById('nav-profile-avatar');
    if (avatarBtn) {
        const letter = (session.email || 'U')[0].toUpperCase();
        avatarBtn.innerHTML = letter;
    }

    document.getElementById('logout-btn')?.addEventListener('click', () => {
        // Remove current session from active list
        let sessions = JSON.parse(localStorage.getItem('activeSessions') || '[]');
        sessions = sessions.filter(s => s.sessionId !== session.sessionId);
        localStorage.setItem('activeSessions', JSON.stringify(sessions));
        localStorage.removeItem('currentSession');
        window.location.href = 'pagina_login.html';
    });
}

// ============================================================
// ABOUT / CONTACT MODALS
// ============================================================
function initInfoModals() {
    document.getElementById('nav-sobre-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('modal-sobre').classList.add('open');
    });
    document.getElementById('close-sobre')?.addEventListener('click', () => {
        document.getElementById('modal-sobre').classList.remove('open');
    });
    document.getElementById('modal-sobre')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
    });

    document.getElementById('nav-contato-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('modal-contato').classList.add('open');
    });
    document.getElementById('close-contato')?.addEventListener('click', () => {
        document.getElementById('modal-contato').classList.remove('open');
    });
    document.getElementById('modal-contato')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
    });
}

// ============================================================
// ADMIN PANEL
// ============================================================
function initAdminPanel(session) {
    if (!session.isAdmin) return;

    // Show admin nav item
    const adminNavItem = document.getElementById('admin-nav-item');
    if (adminNavItem) adminNavItem.style.display = '';

    // Wire clear button
    document.getElementById('admin-clear-btn')?.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja limpar todas as sessões registradas?')) {
            localStorage.setItem('activeSessions', JSON.stringify([session]));
            renderAdminTable();
        }
    });

    

    // Render when admin section becomes visible
    const adminNavBtn = adminNavItem?.querySelector('button');
    adminNavBtn?.addEventListener('click', () => renderAdminTable());
}

function renderAdminTable() {
    let sessions = JSON.parse(localStorage.getItem('activeSessions') || '[]');
    // Filter out sessions older than 24h
    sessions = sessions.filter(s => {
        const diff = Date.now() - new Date(s.loginTime).getTime();
        return diff < 86400000;
    });

    const tbody = document.getElementById('admin-sessions-tbody');
    const emptyMsg = document.getElementById('admin-empty-msg');
    if (!tbody) return;

    // Update stats
    const desktopCount = sessions.filter(s => s.deviceType === 'Computador').length;
    const mobileCount  = sessions.filter(s => s.deviceType === 'Mobile').length;
    const uniqueEmails = [...new Set(sessions.map(s => s.email))].length;

    document.getElementById('admin-total-sessions').textContent = sessions.length;
    document.getElementById('admin-desktop-count').textContent  = desktopCount;
    document.getElementById('admin-mobile-count').textContent   = mobileCount;
    document.getElementById('admin-unique-emails').textContent  = uniqueEmails;

    if (sessions.length === 0) {
        tbody.innerHTML = '';
        if (emptyMsg) emptyMsg.style.display = 'block';
        return;
    }
    if (emptyMsg) emptyMsg.style.display = 'none';

    tbody.innerHTML = sessions.map((s, i) => {
        const dt       = new Date(s.loginTime);
        const dateStr  = dt.toLocaleDateString('pt-BR') + ' ' + dt.toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'});
        const isDesktop = s.deviceType === 'Computador';
        const badge    = isDesktop
            ? '<span class="device-badge desktop">🖥 Computador</span>'
            : '<span class="device-badge mobile">📱 Mobile</span>';
        const plan     = localStorage.getItem('selectedPlan') || '—';
        const shortId  = s.sessionId.substr(0, 18) + '…';

        return `<tr>
            <td>${i + 1}</td>
            <td style="color:#e2e8f0;font-weight:600;">${s.email}</td>
            <td>${badge}</td>
            <td>${dateStr}</td>
            <td style="font-family:monospace;font-size:0.72rem;">${shortId}</td>
            <td>${plan}</td>
            <td>
                <button class="guide-admin-btn delete" style="padding: 0.3rem 0.6rem; font-size: 0.7rem;" onclick="removeUserSession('${s.sessionId}')">🗑 Remover</button>
            </td>
        </tr>`;
    }).join('');
}

// ============================================================
// SIDEBAR SCROLL BUTTONS
// ============================================================
(function initSidebarScroll() {
    const scrollEl = document.getElementById('sidebar-nav-scroll');
    const upBtn    = document.getElementById('sidebar-scroll-up');
    const downBtn  = document.getElementById('sidebar-scroll-down');
    if (!scrollEl || !upBtn || !downBtn) return;

    const STEP = 80;
    upBtn.addEventListener('click',   () => scrollEl.scrollBy({ top: -STEP, behavior: 'smooth' }));
    downBtn.addEventListener('click', () => scrollEl.scrollBy({ top:  STEP, behavior: 'smooth' }));
})();

// ============================================================
// ADMIN TABS (Sessions / Guide Management)
// ============================================================
document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.admin-tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.getAttribute('data-admin-tab');
        const panel = document.getElementById(target);
        if (panel) panel.classList.add('active');
        if (target === 'guide-mgmt-tab') renderAdminGuideList();
        if (target === 'sessions-tab') renderAdminTable();
    });
});

// ============================================================
// STUDY GUIDE DATA — persisted in localStorage
// ============================================================
const DEFAULT_GUIDE_SUBJECTS = [

    // ══════════════════════════════════════════════════
    // BLOCO 1 — MATEMÁTICA
    // ══════════════════════════════════════════════════
    {
        id: 'subj-math',
        name: 'Matemática',
        emoji: '📐',
        modules: [
            {
                title: 'Módulo 1 — Aritmética e Álgebra',
                videos: [
                    { label: 'Álgebra Básica – Khan Academy', url: 'https://www.youtube.com/watch?v=NybHckSEQBI' },
                    { label: 'Equações do 2º Grau – Prof. Ferretto', url: 'https://www.youtube.com/results?search_query=equacoes+2+grau+ferretto' }
                ],
                topics: ['Equações de 1º e 2º grau', 'Frações e proporções', 'Porcentagem e regra de três', 'MMC e MDC', 'Fatoração e produtos notáveis'],
                docs: [
                    { label: 'Khan Academy PT – Álgebra', url: 'https://pt.khanacademy.org/math/algebra' },
                    { label: 'Brasil Escola – Álgebra', url: 'https://brasilescola.uol.com.br/matematica/algebra.htm' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Geometria Plana e Espacial',
                videos: [
                    { label: 'Geometria Plana – Prof. Ferretto', url: 'https://www.youtube.com/results?search_query=geometria+plana+ferretto' },
                    { label: 'Geometria Espacial – Me Salva!', url: 'https://www.youtube.com/results?search_query=geometria+espacial+me+salva' }
                ],
                topics: ['Áreas e perímetros de figuras planas', 'Teorema de Pitágoras', 'Trigonometria: seno, cosseno e tangente', 'Volumes de sólidos geométricos', 'Geometria analítica: retas e circunferências'],
                docs: [
                    { label: 'Mundo Educação – Geometria Plana', url: 'https://mundoeducacao.uol.com.br/matematica/geometria-plana.htm' },
                    { label: 'Toda Matéria – Geometria Espacial', url: 'https://www.todamateria.com.br/geometria-espacial/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Funções e Análise',
                videos: [
                    { label: 'Funções do 1º e 2º Grau – Grings', url: 'https://www.youtube.com/results?search_query=funcoes+1+2+grau+grings' },
                    { label: 'Função Exponencial e Logarítmica – Descomplica', url: 'https://www.youtube.com/results?search_query=funcao+exponencial+logaritmica' }
                ],
                topics: ['Função afim e gráfico', 'Função quadrática e vértice da parábola', 'Função exponencial e logarítmica', 'Progressões Aritméticas (PA)', 'Progressões Geométricas (PG)'],
                docs: [
                    { label: 'Brasil Escola – Funções', url: 'https://brasilescola.uol.com.br/matematica/funcoes.htm' },
                    { label: 'Toda Matéria – Progressões', url: 'https://www.todamateria.com.br/progressao-aritmetica/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 4 — Estatística e Probabilidade',
                videos: [
                    { label: 'Estatística Básica – Nerd na Dose', url: 'https://www.youtube.com/results?search_query=estatistica+basica+vestibular' },
                    { label: 'Probabilidade – Prof. Ferretto', url: 'https://www.youtube.com/results?search_query=probabilidade+matematica+ferretto' }
                ],
                topics: ['Média, moda e mediana', 'Variância e desvio padrão', 'Probabilidade clássica', 'Combinatória: arranjos e combinações', 'Distribuição normal básica'],
                docs: [
                    { label: 'Toda Matéria – Estatística', url: 'https://www.todamateria.com.br/estatistica/' },
                    { label: 'Khan Academy – Probabilidade', url: 'https://pt.khanacademy.org/math/statistics-probability' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 5 — Matrizes, Determinantes e Sistemas',
                videos: [
                    { label: 'Matrizes do Zero – Prof. Ferreto', url: 'https://www.youtube.com/results?search_query=matrizes+matematica+vestibular' },
                    { label: 'Sistemas Lineares – Me Salva!', url: 'https://www.youtube.com/results?search_query=sistemas+lineares+me+salva' }
                ],
                topics: ['Tipos de matrizes e operações', 'Determinante de matrizes 2×2 e 3×3', 'Regra de Sarrus e Cramer', 'Sistemas lineares e escalonamento', 'Matriz inversa'],
                docs: [
                    { label: 'Brasil Escola – Matrizes', url: 'https://brasilescola.uol.com.br/matematica/matrizes.htm' },
                    { label: 'Mundo Educação – Determinantes', url: 'https://mundoeducacao.uol.com.br/matematica/determinantes.htm' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 6 — Cálculo Introdutório',
                videos: [
                    { label: 'Limites e Derivadas – Khan Academy', url: 'https://www.youtube.com/results?search_query=limites+derivadas+calculo+introducao' },
                    { label: 'Introdução ao Cálculo – Grings', url: 'https://www.youtube.com/results?search_query=introducao+calculo+grings' }
                ],
                topics: ['Noção intuitiva de limite', 'Derivada: definição e regras básicas', 'Derivada de funções trigonométricas', 'Regra da cadeia e produto', 'Integral indefinida e definida (introdução)'],
                docs: [
                    { label: 'Khan Academy – Cálculo', url: 'https://pt.khanacademy.org/math/calculus-1' },
                    { label: 'Paul\'s Math Notes – Calculus', url: 'https://tutorial.math.lamar.edu/' }
                ],
                mindmap: null
            }
        ]
    },

    // ══════════════════════════════════════════════════
    // BLOCO 2 — CIÊNCIAS (Biologia, Química, Física)
    // ══════════════════════════════════════════════════
    {
        id: 'subj-bio',
        name: 'Biologia',
        emoji: '🧬',
        modules: [
            {
                title: 'Módulo 1 — Citologia (A Célula)',
                videos: [
                    { label: 'A Célula – Prof. Paulo Jubilut', url: 'https://www.youtube.com/results?search_query=celula+biologia+vestibular+jubilut' },
                    { label: 'Organelas Celulares – Descomplica', url: 'https://www.youtube.com/results?search_query=organelas+celulares+descomplica' }
                ],
                topics: ['Célula procariótica vs eucariótica', 'Organelas celulares e funções', 'Membrana plasmática e transporte', 'Mitose e meiose', 'Respiração celular e fotossíntese'],
                docs: [
                    { label: 'Khan Academy – Biologia Celular', url: 'https://pt.khanacademy.org/science/biology/structure-of-a-cell' },
                    { label: 'Brasil Escola – Citologia', url: 'https://brasilescola.uol.com.br/biologia/citologia.htm' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Genética',
                videos: [
                    { label: 'Genética Mendeliana – Descomplica', url: 'https://www.youtube.com/results?search_query=genetica+mendeliana+descomplica' },
                    { label: 'DNA, RNA e Síntese Proteica – Me Salva!', url: 'https://www.youtube.com/results?search_query=dna+rna+sintese+proteica' }
                ],
                topics: ['1ª e 2ª Lei de Mendel', 'Dominância, recessividade e codominância', 'DNA, RNA e síntese de proteínas', 'Mutações genéticas', 'Biotecnologia: clonagem e transgênicos'],
                docs: [
                    { label: 'Brasil Escola – Genética', url: 'https://brasilescola.uol.com.br/biologia/genetica.htm' },
                    { label: 'Toda Matéria – Hereditariedade', url: 'https://www.todamateria.com.br/hereditariedade/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Ecologia',
                videos: [
                    { label: 'Ecossistemas e Biomas – Prof. Jubilut', url: 'https://www.youtube.com/results?search_query=ecossistemas+ecologia+biologia+jubilut' },
                    { label: 'Ciclos Biogeoquímicos – Descomplica', url: 'https://www.youtube.com/results?search_query=ciclos+biogeoquimicos+biologia' }
                ],
                topics: ['Cadeias e teias alimentares', 'Ciclos do carbono, nitrogênio e água', 'Biomas brasileiros e mundiais', 'Relações ecológicas', 'Impactos ambientais e sustentabilidade'],
                docs: [
                    { label: 'Toda Matéria – Ecologia', url: 'https://www.todamateria.com.br/ecologia/' },
                    { label: 'Khan Academy – Ecologia', url: 'https://pt.khanacademy.org/science/biology/ecology' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 4 — Fisiologia Humana',
                videos: [
                    { label: 'Sistemas do Corpo Humano – Me Salva!', url: 'https://www.youtube.com/results?search_query=sistemas+corpo+humano+me+salva' },
                    { label: 'Sistema Nervoso e Imune – Descomplica', url: 'https://www.youtube.com/results?search_query=sistema+nervoso+imunologico+biologia' }
                ],
                topics: ['Sistema nervoso central e periférico', 'Sistema cardiovascular e linfático', 'Sistema digestório e endócrino', 'Sistema imunológico e vacinas', 'Sistema reprodutor'],
                docs: [
                    { label: 'Khan Academy – Saúde e Medicina', url: 'https://pt.khanacademy.org/science/health-and-medicine' },
                    { label: 'Brasil Escola – Corpo Humano', url: 'https://brasilescola.uol.com.br/biologia/corpo-humano.htm' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 5 — Evolução e Classificação',
                videos: [
                    { label: 'Teoria da Evolução – Darwin – Jubilut', url: 'https://www.youtube.com/results?search_query=teoria+evolucao+darwin+biologia' },
                    { label: 'Classificação dos Seres Vivos – Descomplica', url: 'https://www.youtube.com/results?search_query=classificacao+seres+vivos+taxonomia' }
                ],
                topics: ['Teoria sintética da evolução', 'Seleção natural e adaptação', 'Especiação e isolamento reprodutivo', 'Taxonomia e sistemática filogenética', 'Vírus, bactérias, protistas e fungos'],
                docs: [
                    { label: 'Brasil Escola – Evolução', url: 'https://brasilescola.uol.com.br/biologia/evolucao.htm' },
                    { label: 'Toda Matéria – Classificação', url: 'https://www.todamateria.com.br/classificacao-dos-seres-vivos/' }
                ],
                mindmap: null
            }
        ]
    },
    {
        id: 'subj-quimica',
        name: 'Química',
        emoji: '⚗️',
        modules: [
            {
                title: 'Módulo 1 — Química Geral e Tabela Periódica',
                videos: [
                    { label: 'Tabela Periódica – Prof. Clóvis', url: 'https://www.youtube.com/results?search_query=tabela+periodica+quimica+vestibular' },
                    { label: 'Modelos Atômicos – Descomplica', url: 'https://www.youtube.com/results?search_query=modelos+atomicos+quimica' }
                ],
                topics: ['Modelos atômicos (Dalton, Bohr, Quântico)', 'Estrutura da tabela periódica', 'Propriedades periódicas: raio, eletronegatividade', 'Ligações químicas: iônica, covalente e metálica', 'Forças intermoleculares'],
                docs: [
                    { label: 'Brasil Escola – Química Geral', url: 'https://brasilescola.uol.com.br/quimica' },
                    { label: 'Toda Matéria – Tabela Periódica', url: 'https://www.todamateria.com.br/tabela-periodica/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Estequiometria e Soluções',
                videos: [
                    { label: 'Estequiometria – Me Salva!', url: 'https://www.youtube.com/results?search_query=estequiometria+quimica+me+salva' },
                    { label: 'Soluções e Concentração – Descomplica', url: 'https://www.youtube.com/results?search_query=solucoes+concentracao+quimica' }
                ],
                topics: ['Lei de Lavoisier e Proust', 'Mol e massa molar', 'Balanceamento de equações', 'Concentração: mol/L, g/L e % m/m', 'Solubilidade e curvas de solubilidade'],
                docs: [
                    { label: 'Khan Academy – Estequiometria', url: 'https://pt.khanacademy.org/science/chemistry/chemical-reactions-stoichiometry' },
                    { label: 'Brasil Escola – Soluções', url: 'https://brasilescola.uol.com.br/quimica/solucoes.htm' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Química Orgânica',
                videos: [
                    { label: 'Carbono e Funções Orgânicas – Prof. Clóvis', url: 'https://www.youtube.com/results?search_query=funcoes+organicas+quimica+vestibular' },
                    { label: 'Isomeria – Descomplica', url: 'https://www.youtube.com/results?search_query=isomeria+quimica+organica' }
                ],
                topics: ['Cadeias carbônicas e hibridização', 'Funções orgânicas: álcoois, aldeídos, cetonas, ácidos', 'Aminas e amidas', 'Isomeria plana e espacial', 'Reações orgânicas: adição, substituição, eliminação'],
                docs: [
                    { label: 'Brasil Escola – Química Orgânica', url: 'https://brasilescola.uol.com.br/quimica/quimica-organica.htm' },
                    { label: 'Khan Academy – Química Orgânica', url: 'https://pt.khanacademy.org/science/organic-chemistry' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 4 — Termoquímica e Eletroquímica',
                videos: [
                    { label: 'Termoquímica – Me Salva!', url: 'https://www.youtube.com/results?search_query=termoquimica+entalpia+quimica' },
                    { label: 'Eletroquímica – Pilhas e Eletrólise', url: 'https://www.youtube.com/results?search_query=eletroquimica+pilhas+eletrolise' }
                ],
                topics: ['Entalpia: reações exo e endotérmicas', 'Lei de Hess', 'Energia de ligação', 'Pilhas eletroquímicas (Daniell)', 'Eletrólise e cálculos de Faraday'],
                docs: [
                    { label: 'Toda Matéria – Termoquímica', url: 'https://www.todamateria.com.br/termoquimica/' },
                    { label: 'Brasil Escola – Eletroquímica', url: 'https://brasilescola.uol.com.br/quimica/eletroquimica.htm' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 5 — Cinética e Equilíbrio Químico',
                videos: [
                    { label: 'Cinética Química – Velocidade das Reações', url: 'https://www.youtube.com/results?search_query=cinetica+quimica+velocidade+reacoes' },
                    { label: 'Equilíbrio Químico – Le Chatelier', url: 'https://www.youtube.com/results?search_query=equilibrio+quimico+le+chatelier' }
                ],
                topics: ['Fatores que afetam a velocidade das reações', 'Teoria das colisões e energia de ativação', 'Constante de equilíbrio (Kc e Kp)', 'Princípio de Le Chatelier', 'pH, pOH e equilíbrio ácido-base'],
                docs: [
                    { label: 'Khan Academy – Cinética', url: 'https://pt.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:kinetics' },
                    { label: 'Brasil Escola – Equilíbrio Químico', url: 'https://brasilescola.uol.com.br/quimica/equilibrio-quimico.htm' }
                ],
                mindmap: null
            }
        ]
    },
    {
        id: 'subj-fisica',
        name: 'Física',
        emoji: '⚛️',
        modules: [
            {
                title: 'Módulo 1 — Mecânica Clássica',
                videos: [
                    { label: 'Cinemática – Prof. Marcelo Boaro', url: 'https://www.youtube.com/results?search_query=cinematica+fisica+vestibular+boaro' },
                    { label: 'Leis de Newton – Me Salva!', url: 'https://www.youtube.com/results?search_query=leis+de+newton+fisica+me+salva' }
                ],
                topics: ['MRU e MRUV: equações do movimento', 'Leis de Newton e dinâmica', 'Força de atrito e plano inclinado', 'Trabalho, energia cinética e potencial', 'Conservação de energia e quantidade de movimento'],
                docs: [
                    { label: 'Brasil Escola – Mecânica', url: 'https://brasilescola.uol.com.br/fisica/mecanica.htm' },
                    { label: 'Khan Academy – Física', url: 'https://pt.khanacademy.org/science/physics' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Termodinâmica',
                videos: [
                    { label: 'Leis da Termodinâmica – Descomplica', url: 'https://www.youtube.com/results?search_query=leis+termodinamica+fisica' },
                    { label: 'Temperatura, Calor e Dilatação', url: 'https://www.youtube.com/results?search_query=temperatura+calor+dilatacao+fisica' }
                ],
                topics: ['Temperatura, calor e escalas termométricas', 'Dilatação térmica linear, superficial e volumétrica', 'Calorimetria e trocas de calor', '1ª e 2ª Lei da Termodinâmica', 'Ciclos termodinâmicos (Carnot)'],
                docs: [
                    { label: 'Toda Matéria – Termodinâmica', url: 'https://www.todamateria.com.br/termodinamica/' },
                    { label: 'Brasil Escola – Termologia', url: 'https://brasilescola.uol.com.br/fisica/termologia.htm' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Óptica e Ondas',
                videos: [
                    { label: 'Óptica Geométrica – Prof. Boaro', url: 'https://www.youtube.com/results?search_query=optica+geometrica+fisica+vestibular' },
                    { label: 'Ondas e Som – Me Salva!', url: 'https://www.youtube.com/results?search_query=ondas+e+som+fisica+me+salva' }
                ],
                topics: ['Reflexão e refração da luz', 'Espelhos planos e esféricos', 'Lentes convergentes e divergentes', 'Ondas mecânicas: tipos e propriedades', 'Efeito Doppler e ressonância'],
                docs: [
                    { label: 'Brasil Escola – Óptica', url: 'https://brasilescola.uol.com.br/fisica/optica.htm' },
                    { label: 'Toda Matéria – Ondas', url: 'https://www.todamateria.com.br/ondas/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 4 — Eletromagnetismo',
                videos: [
                    { label: 'Eletrostática – Carga e Campo Elétrico', url: 'https://www.youtube.com/results?search_query=eletrostatica+carga+campo+eletrico+fisica' },
                    { label: 'Circuitos Elétricos – Prof. Boaro', url: 'https://www.youtube.com/results?search_query=circuitos+eletricos+resistencia+ohm' }
                ],
                topics: ['Carga elétrica e Lei de Coulomb', 'Campo e potencial elétrico', 'Capacitores e circuitos', 'Lei de Ohm, resistência e potência', 'Campo magnético e força de Lorentz'],
                docs: [
                    { label: 'Khan Academy – Eletricidade', url: 'https://pt.khanacademy.org/science/physics/electricity-magnets-and-circuits' },
                    { label: 'Brasil Escola – Eletromagnetismo', url: 'https://brasilescola.uol.com.br/fisica/eletromagnetismo.htm' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 5 — Física Moderna',
                videos: [
                    { label: 'Relatividade Especial – Einstein', url: 'https://www.youtube.com/results?search_query=relatividade+especial+fisica+moderna' },
                    { label: 'Física Quântica para Iniciantes', url: 'https://www.youtube.com/results?search_query=fisica+quantica+iniciantes+vestibular' }
                ],
                topics: ['Teoria da Relatividade Especial (E=mc²)', 'Efeito fotoelétrico e quantização da energia', 'Modelo quântico do átomo', 'Radioatividade e decaimento nuclear', 'Fusão e fissão nuclear'],
                docs: [
                    { label: 'Brasil Escola – Física Moderna', url: 'https://brasilescola.uol.com.br/fisica/fisica-moderna.htm' },
                    { label: 'Khan Academy – Física Moderna', url: 'https://pt.khanacademy.org/science/physics/quantum-physics' }
                ],
                mindmap: null
            }
        ]
    },

    // ══════════════════════════════════════════════════
    // BLOCO 3 — PROGRAMAÇÃO
    // ══════════════════════════════════════════════════
    {
        id: 'subj-prog',
        name: 'Lógica de Programação',
        emoji: '💻',
        modules: [
            {
                title: 'Módulo 1 — Algoritmos e Pensamento Computacional',
                videos: [
                    { label: 'O que é algoritmo? – Curso em Vídeo', url: 'https://www.youtube.com/watch?v=8mei6uVttho' },
                    { label: 'Pensamento Computacional – Rocketseat', url: 'https://www.youtube.com/results?search_query=pensamento+computacional+algoritmos' }
                ],
                topics: ['Variáveis e tipos de dados', 'Operadores lógicos e aritméticos', 'Estrutura de um algoritmo', 'Fluxogramas e pseudocódigo', 'Entrada, processamento e saída'],
                docs: [
                    { label: 'Curso em Vídeo – Algoritmos', url: 'https://www.cursoemvideo.com/curso/curso-de-algoritmo/' },
                    { label: 'Scratch – Aprenda lógica visualmente', url: 'https://scratch.mit.edu/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Estruturas de Controle',
                videos: [
                    { label: 'If, Else, Switch – Rocketseat', url: 'https://www.youtube.com/results?search_query=estruturas+controle+programacao' },
                    { label: 'Condicionais na prática – Curso em Vídeo', url: 'https://www.youtube.com/results?search_query=condicionais+programacao+curso+em+video' }
                ],
                topics: ['Condicional if/else', 'Switch/case', 'Operador ternário', 'Aninhamento de condicionais', 'Operadores de comparação e lógicos'],
                docs: [
                    { label: 'MDN – Controle de Fluxo', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling' },
                    { label: 'W3Schools – Conditionals', url: 'https://www.w3schools.com/js/js_if_else.asp' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Laços de Repetição',
                videos: [
                    { label: 'For, While, Do While – Cod3r', url: 'https://www.youtube.com/results?search_query=loops+programacao+for+while' },
                    { label: 'Loops na Prática – Dev Aprender', url: 'https://www.youtube.com/results?search_query=lacos+repeticao+programacao+iniciante' }
                ],
                topics: ['Loop for clássico', 'Loop while e do-while', 'Break, continue e return', 'Loops aninhados', 'Iteração sobre arrays e listas'],
                docs: [
                    { label: 'W3Schools – Loops JS', url: 'https://www.w3schools.com/js/js_loop_for.asp' },
                    { label: 'javascript.info – Loops', url: 'https://javascript.info/while-for' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 4 — Funções e Recursão',
                videos: [
                    { label: 'Funções em JS – Filipe Deschamps', url: 'https://www.youtube.com/results?search_query=funcoes+javascript+recursao' },
                    { label: 'Recursão Descomplicada – Código Fonte TV', url: 'https://www.youtube.com/results?search_query=recursao+programacao+explicada' }
                ],
                topics: ['Declaração e expressão de funções', 'Parâmetros, argumentos e retorno', 'Escopo local e global', 'Recursão e casos base', 'Funções de primeira classe'],
                docs: [
                    { label: 'javascript.info – Funções', url: 'https://javascript.info/function-basics' },
                    { label: 'MDN – Funções', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 5 — Estruturas de Dados',
                videos: [
                    { label: 'Estruturas de Dados – Código Fonte TV', url: 'https://www.youtube.com/results?search_query=estruturas+de+dados+iniciante' },
                    { label: 'Arrays, Pilhas e Filas – Dev Aprender', url: 'https://www.youtube.com/results?search_query=arrays+pilhas+filas+programacao' }
                ],
                topics: ['Arrays e matrizes multidimensionais', 'Pilha (Stack) e Fila (Queue)', 'Lista encadeada', 'Árvores e grafos (conceitos)', 'Hash tables / dicionários'],
                docs: [
                    { label: 'Visualgo – Visualize estruturas', url: 'https://visualgo.net/en' },
                    { label: 'GeeksforGeeks – Data Structures', url: 'https://www.geeksforgeeks.org/data-structures/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 6 — Paradigmas de Programação',
                videos: [
                    { label: 'POO para Iniciantes – Cod3r', url: 'https://www.youtube.com/results?search_query=programacao+orientada+objetos+iniciante' },
                    { label: 'Programação Funcional – Fireship', url: 'https://www.youtube.com/results?search_query=programacao+funcional+conceitos' }
                ],
                topics: ['Paradigma imperativo vs declarativo', 'Programação Orientada a Objetos (POO)', 'Programação funcional: map, filter, reduce', 'Programação reativa (conceitos)', 'Clean Code e boas práticas'],
                docs: [
                    { label: 'Refactoring.Guru – Design Patterns', url: 'https://refactoring.guru/pt-br/design-patterns' },
                    { label: 'Clean Code Summary – GitHub', url: 'https://github.com/ryanmcdermott/clean-code-javascript' }
                ],
                mindmap: null
            }
        ]
    },

    // ── LINGUAGENS DE PROGRAMAÇÃO ──────────────────────────────
    {
        id: 'subj-python',
        name: 'Python',
        emoji: '🐍',
        modules: [
            {
                title: 'Módulo 1 — Python Básico',
                videos: [
                    { label: 'Python para Iniciantes – Curso em Vídeo', url: 'https://www.youtube.com/watch?v=S9uPNppGsGo' },
                    { label: 'Python Crash Course – Traversy Media (EN)', url: 'https://www.youtube.com/watch?v=JJmcL1N2KQs' }
                ],
                topics: ['Instalação e ambiente (venv)', 'Variáveis, tipos e operadores', 'Strings, listas, tuplas e dicionários', 'Input/output e formatação f-string'],
                docs: [
                    { label: 'Documentação Oficial Python 3', url: 'https://docs.python.org/pt-br/3/' },
                    { label: 'W3Schools Python', url: 'https://www.w3schools.com/python/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Intermediário',
                videos: [
                    { label: 'POO em Python – Otávio Miranda', url: 'https://www.youtube.com/watch?v=BJ-VvGyQxho' },
                    { label: 'List Comprehensions & Generators', url: 'https://www.youtube.com/watch?v=3dt4OGnU5sM' }
                ],
                topics: ['Funções, args e kwargs', 'Orientação a objetos (classes, herança)', 'List comprehensions e generators', 'Tratamento de exceções (try/except)', 'Manipulação de arquivos e JSON'],
                docs: [
                    { label: 'Real Python – Tutorials', url: 'https://realpython.com/' },
                    { label: 'Python OOP – GeeksforGeeks', url: 'https://www.geeksforgeeks.org/python-oops-concepts/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Avançado',
                videos: [
                    { label: 'Decorators & Context Managers – ArjanCodes', url: 'https://www.youtube.com/watch?v=MjHpMCIvwsY' },
                    { label: 'Asyncio Python – mCoding', url: 'https://www.youtube.com/watch?v=RIVcqT2OGPA' }
                ],
                topics: ['Decorators e metaprogramação', 'Async/await e asyncio', 'Tipagem com type hints e mypy', 'Testes com pytest', 'Empacotamento e publicação no PyPI'],
                docs: [
                    { label: 'Python Asyncio Docs', url: 'https://docs.python.org/3/library/asyncio.html' },
                    { label: 'pytest – Documentação Oficial', url: 'https://docs.pytest.org/en/stable/' }
                ],
                mindmap: null
            }
        ]
    },
    {
        id: 'subj-javascript',
        name: 'JavaScript',
        emoji: '🟨',
        modules: [
            {
                title: 'Módulo 1 — JS Básico',
                videos: [
                    { label: 'JavaScript para Iniciantes – Rocketseat', url: 'https://www.youtube.com/watch?v=BXqUH86F-kA' },
                    { label: 'JS in 100 Seconds – Fireship', url: 'https://www.youtube.com/watch?v=DHjqpvDnNGE' }
                ],
                topics: ['var, let e const', 'Tipos primitivos e coerção de tipos', 'Arrays e objetos literais', 'Funções tradicionais e arrow functions', 'DOM: querySelector e eventos'],
                docs: [
                    { label: 'MDN Web Docs – JavaScript', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
                    { label: 'javascript.info (completo)', url: 'https://javascript.info/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — ES6+ e Assincronismo',
                videos: [
                    { label: 'Promises e Async/Await – Filipe Deschamps', url: 'https://www.youtube.com/watch?v=q28lfkBd9F4' },
                    { label: 'ES6 Features em 20 min – Traversy', url: 'https://www.youtube.com/watch?v=WZQc7RUAg18' }
                ],
                topics: ['Destructuring, spread e rest', 'Modules (import/export)', 'Promises, async/await', 'Fetch API e consumo de REST', 'Optional chaining e nullish coalescing'],
                docs: [
                    { label: 'ES6 Cheatsheet – Devhints', url: 'https://devhints.io/es6' },
                    { label: 'Fetch API – MDN', url: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Avançado e Padrões',
                videos: [
                    { label: 'Closures e Hoisting – Cod3r', url: 'https://www.youtube.com/watch?v=jcZoHQ5M7GQ' },
                    { label: 'Design Patterns em JS – Dev Eficiente', url: 'https://www.youtube.com/watch?v=xSONQB_M4yA' }
                ],
                topics: ['Closures, hoisting e event loop', 'Prototypes e cadeia de herança', 'Proxy e Reflect', 'Web Workers e Performance', 'Padrões de projeto (Factory, Observer, Singleton)'],
                docs: [
                    { label: 'You Don\'t Know JS (livro online)', url: 'https://github.com/getify/You-Dont-Know-JS' },
                    { label: 'JS Design Patterns – patterns.dev', url: 'https://www.patterns.dev/' }
                ],
                mindmap: null
            }
        ]
    },
    {
        id: 'subj-typescript',
        name: 'TypeScript',
        emoji: '🔷',
        modules: [
            {
                title: 'Módulo 1 — Fundamentos',
                videos: [
                    { label: 'TypeScript em 1 hora – Matheus Battisti', url: 'https://www.youtube.com/watch?v=lCemyQeSCV8' },
                    { label: 'TS para quem sabe JS – Rocketseat', url: 'https://www.youtube.com/watch?v=0mYq5LrQN1s' }
                ],
                topics: ['Por que TypeScript? Configurando tsconfig.json', 'Tipos primitivos: string, number, boolean', 'Arrays, tuples e enums', 'Type vs Interface', 'Compilação e integração com Node'],
                docs: [
                    { label: 'TypeScript – Docs Oficiais', url: 'https://www.typescriptlang.org/docs/' },
                    { label: 'TypeScript Handbook (PT via comicidade)', url: 'https://www.typescriptlang.org/pt/docs/handbook/intro.html' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Intermediário',
                videos: [
                    { label: 'Generics em TypeScript – Otávio Miranda', url: 'https://www.youtube.com/watch?v=EOPm8Rp3S0s' },
                    { label: 'Utility Types completo – Matt Pocock', url: 'https://www.youtube.com/watch?v=EU0TB_8KHpY' }
                ],
                topics: ['Union e Intersection types', 'Generics e restrições', 'Utility Types (Partial, Pick, Omit, Record)', 'Type Guards e narrowing', 'Decorators (experimentais)'],
                docs: [
                    { label: 'Total TypeScript – Matt Pocock', url: 'https://www.totaltypescript.com/' },
                    { label: 'TS Playground (teste online)', url: 'https://www.typescriptlang.org/play' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Avançado',
                videos: [
                    { label: 'Conditional Types & infer – ByteGrad', url: 'https://www.youtube.com/watch?v=dLPgQRbVquo' },
                    { label: 'TypeScript com React – Jack Herrington', url: 'https://www.youtube.com/watch?v=ydkQlJhodio' }
                ],
                topics: ['Conditional types e infer', 'Template literal types', 'Mapped types avançados', 'Módulos de declaração (.d.ts)', 'Configuração stricta em projetos reais'],
                docs: [
                    { label: 'TypeScript Deep Dive (Basarat)', url: 'https://basarat.gitbook.io/typescript/' },
                    { label: 'DefinitelyTyped – @types', url: 'https://github.com/DefinitelyTyped/DefinitelyTyped' }
                ],
                mindmap: null
            }
        ]
    },
    {
        id: 'subj-java',
        name: 'Java',
        emoji: '☕',
        modules: [
            {
                title: 'Módulo 1 — Java Básico',
                videos: [
                    { label: 'Java para Iniciantes – Loiane Groner', url: 'https://www.youtube.com/watch?v=sTX0UEplF54' },
                    { label: 'Java in 100 Seconds – Fireship', url: 'https://www.youtube.com/watch?v=l9AzO1FMgM8' }
                ],
                topics: ['JDK, JVM e JRE: o ecossistema Java', 'Tipos primitivos e wrapper classes', 'Controle de fluxo e loops', 'Arrays e ArrayList', 'Entrada/saída com Scanner e System.out'],
                docs: [
                    { label: 'Oracle Java Docs', url: 'https://docs.oracle.com/en/java/' },
                    { label: 'W3Schools Java', url: 'https://www.w3schools.com/java/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — POO em Java',
                videos: [
                    { label: 'POO Java – DevDojo (série completa)', url: 'https://www.youtube.com/watch?v=VViiqFX5HrM' },
                    { label: 'Interfaces vs Classes Abstratas', url: 'https://www.youtube.com/watch?v=Lnb5IYFkUAk' }
                ],
                topics: ['Classes, objetos, construtores', 'Encapsulamento (getters/setters)', 'Herança e polimorfismo', 'Interfaces e classes abstratas', 'Tratamento de exceções (try/catch/finally)'],
                docs: [
                    { label: 'Baeldung – Java OOP', url: 'https://www.baeldung.com/java-oop' },
                    { label: 'GeeksforGeeks Java', url: 'https://www.geeksforgeeks.org/java/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Java Avançado',
                videos: [
                    { label: 'Java Streams & Lambdas – Amigoscode', url: 'https://www.youtube.com/watch?v=VRpHdSFWGPs' },
                    { label: 'Concorrência em Java – Marco Behler', url: 'https://www.youtube.com/watch?v=r_MbozD32eo' }
                ],
                topics: ['Generics e coleções avançadas (Map, Set)', 'Stream API e lambdas', 'Multithreading e CompletableFuture', 'Java Modules (Project Jigsaw)', 'Records, Sealed Classes (Java 17+)'],
                docs: [
                    { label: 'Baeldung – Advanced Java', url: 'https://www.baeldung.com/' },
                    { label: 'OpenJDK – Notas de versão', url: 'https://openjdk.org/' }
                ],
                mindmap: null
            }
        ]
    },
    {
        id: 'subj-csharp',
        name: 'C#',
        emoji: '🟣',
        modules: [
            {
                title: 'Módulo 1 — Fundamentos de C#',
                videos: [
                    { label: 'C# para Iniciantes – balta.io', url: 'https://www.youtube.com/watch?v=ER4vvBCWpR8' },
                    { label: 'C# in 100 Seconds – Fireship', url: 'https://www.youtube.com/watch?v=ravLFzIguCM' }
                ],
                topics: ['.NET SDK e estrutura de projetos', 'Tipos, variáveis e operadores', 'Namespaces e using directives', 'Arrays, listas e dicionários', 'Console I/O e interpolação de strings'],
                docs: [
                    { label: 'Microsoft Docs – C#', url: 'https://learn.microsoft.com/pt-br/dotnet/csharp/' },
                    { label: 'W3Schools C#', url: 'https://www.w3schools.com/cs/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — POO e .NET',
                videos: [
                    { label: 'POO em C# – José Carlos Macoratti', url: 'https://www.youtube.com/watch?v=KlDFKfP_MFw' },
                    { label: 'LINQ do Zero – Nick Chapsas', url: 'https://www.youtube.com/watch?v=yClSNQdVD7g' }
                ],
                topics: ['Classes, structs e records', 'Herança, interfaces e polimorfismo', 'Propriedades, indexadores e eventos', 'Delegates, Func e Action', 'LINQ (Language Integrated Query)'],
                docs: [
                    { label: '.NET API Browser', url: 'https://learn.microsoft.com/pt-br/dotnet/api/' },
                    { label: 'C# Language Reference', url: 'https://learn.microsoft.com/pt-br/dotnet/csharp/language-reference/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — C# Avançado',
                videos: [
                    { label: 'Async/Await em C# – Nick Chapsas', url: 'https://www.youtube.com/watch?v=il9gl8MH17s' },
                    { label: 'Span<T> e Memory – Stephen Toub', url: 'https://www.youtube.com/watch?v=5KdICNWOfEQ' }
                ],
                topics: ['Async/await e Task Parallel Library', 'Generics avançados e constraints', 'Span<T>, Memory<T> e performance', 'Source Generators', 'Padrão Result e DDD básico'],
                docs: [
                    { label: 'C# Advanced – Microsoft Learn', url: 'https://learn.microsoft.com/pt-br/dotnet/csharp/advanced-topics/performance/' },
                    { label: 'Awesome .NET – GitHub', url: 'https://github.com/quozd/awesome-dotnet' }
                ],
                mindmap: null
            }
        ]
    },

    // ── FRAMEWORKS WEB ─────────────────────────────────────────
    {
        id: 'subj-react',
        name: 'React',
        emoji: '⚛️',
        modules: [
            {
                title: 'Módulo 1 — Fundamentos do React',
                videos: [
                    { label: 'React do Zero – Rocketseat', url: 'https://www.youtube.com/watch?v=pDbcC-xSat4' },
                    { label: 'React in 100 Seconds – Fireship', url: 'https://www.youtube.com/watch?v=Tn6-PIqc4UM' }
                ],
                topics: ['JSX e como o React renderiza', 'Componentes funcionais e props', 'Estado com useState e eventos', 'Listas, keys e renderização condicional', 'Estrutura de pastas e create-react-app / Vite'],
                docs: [
                    { label: 'React.dev – Documentação Oficial', url: 'https://react.dev/' },
                    { label: 'Tutorial Oficial React', url: 'https://react.dev/learn' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Hooks e Gerenciamento de Estado',
                videos: [
                    { label: 'Todos os Hooks explicados – Web Dev Simplified', url: 'https://www.youtube.com/watch?v=LlvBzyy-558' },
                    { label: 'Context API vs Zustand – Fireship', url: 'https://www.youtube.com/watch?v=_ngCLZ5Iz-0' }
                ],
                topics: ['useEffect, useRef, useContext, useMemo, useCallback', 'Context API para estado global', 'Zustand e Jotai (alternativas leves)', 'Custom hooks reaproveitáveis', 'React Query / TanStack Query para dados assíncronos'],
                docs: [
                    { label: 'Hooks API Reference – React', url: 'https://react.dev/reference/react' },
                    { label: 'TanStack Query Docs', url: 'https://tanstack.com/query/latest' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — React Avançado',
                videos: [
                    { label: 'React Server Components – Vercel', url: 'https://www.youtube.com/watch?v=g5BGoLyGjY0' },
                    { label: 'Performance React – Theo t3.gg', url: 'https://www.youtube.com/watch?v=3QLpHnDzGIo' }
                ],
                topics: ['React Server Components (RSC)', 'Suspense e Error Boundaries', 'Otimização: memo, lazy e code splitting', 'Testes com React Testing Library', 'Padrões avançados: Compound Component, Render Props'],
                docs: [
                    { label: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
                    { label: 'Patterns.dev – React Patterns', url: 'https://www.patterns.dev/react' }
                ],
                mindmap: null
            }
        ]
    },
    {
        id: 'subj-nextjs',
        name: 'Next.js',
        emoji: '🔺',
        modules: [
            {
                title: 'Módulo 1 — Introdução ao Next.js',
                videos: [
                    { label: 'Next.js do Zero – Matheus Battisti', url: 'https://www.youtube.com/watch?v=XHrbg2iYNCg' },
                    { label: 'Next.js in 100 Seconds – Fireship', url: 'https://www.youtube.com/watch?v=Sklc_fQBmcs' }
                ],
                topics: ['App Router vs Pages Router', 'File-based routing e layouts', 'Server Components x Client Components', 'next/image, next/link e next/font', 'Deploy gratuito na Vercel'],
                docs: [
                    { label: 'Next.js – Documentação Oficial', url: 'https://nextjs.org/docs' },
                    { label: 'Vercel – Guia de Deploy', url: 'https://vercel.com/docs' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Data Fetching e Rotas Dinâmicas',
                videos: [
                    { label: 'SSR, SSG e ISR explicados – Theo', url: 'https://www.youtube.com/watch?v=847BPpbDHgs' },
                    { label: 'Route Handlers (API Routes) – Traversy', url: 'https://www.youtube.com/watch?v=wm5gMKuwSYk' }
                ],
                topics: ['fetch com cache: force-cache, no-store, revalidate', 'generateStaticParams e rotas dinâmicas', 'Route Handlers (API interna)', 'Middleware e cookies com next/headers', 'Streaming e Suspense com Server Components'],
                docs: [
                    { label: 'Next.js – Data Fetching', url: 'https://nextjs.org/docs/app/building-your-application/data-fetching' },
                    { label: 'Next.js – Caching', url: 'https://nextjs.org/docs/app/building-your-application/caching' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Full-Stack com Next.js',
                videos: [
                    { label: 'Next.js + Prisma + PostgreSQL – Colby Fayock', url: 'https://www.youtube.com/watch?v=QXxy8Uv1LnQ' },
                    { label: 'Auth.js (NextAuth) completo – Josh tried coding', url: 'https://www.youtube.com/watch?v=1MTyCvS05V4' }
                ],
                topics: ['Server Actions e formulários sem API', 'Autenticação com Auth.js (NextAuth v5)', 'ORM com Prisma e conexão a banco', 'Validação com Zod + React Hook Form', 'Estrutura de projeto escalável (feature folders)'],
                docs: [
                    { label: 'Auth.js – Next-Auth', url: 'https://authjs.dev/' },
                    { label: 'Prisma – ORM Docs', url: 'https://www.prisma.io/docs' }
                ],
                mindmap: null
            }
        ]
    },
    {
        id: 'subj-vuejs',
        name: 'Vue.js',
        emoji: '💚',
        modules: [
            {
                title: 'Módulo 1 — Vue Básico',
                videos: [
                    { label: 'Vue.js do Zero – Matheus Battisti', url: 'https://www.youtube.com/watch?v=wsAQQioPIJs' },
                    { label: 'Vue in 100 Seconds – Fireship', url: 'https://www.youtube.com/watch?v=nhBVL41-_Cw' }
                ],
                topics: ['Options API vs Composition API', 'Diretivas: v-bind, v-if, v-for, v-model', 'Eventos e emits', 'Props e comunicação pai/filho', 'Single File Components (.vue)'],
                docs: [
                    { label: 'Vue.js – Documentação Oficial', url: 'https://vuejs.org/guide/introduction.html' },
                    { label: 'Vue School – Cursos Gratuitos', url: 'https://vueschool.io/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Reatividade e Ecossistema',
                videos: [
                    { label: 'Pinia – Estado Global em Vue 3', url: 'https://www.youtube.com/watch?v=Ok6QoFJNjBc' },
                    { label: 'Vue Router Completo – Traversy', url: 'https://www.youtube.com/watch?v=GEuKvo0-r_Y' }
                ],
                topics: ['ref, reactive, computed e watch', 'Pinia para gerenciamento de estado', 'Vue Router: navegação e guards', 'Composables reutilizáveis', 'Teleport e Suspense'],
                docs: [
                    { label: 'Pinia – Documentação', url: 'https://pinia.vuejs.org/' },
                    { label: 'Vue Router – Docs', url: 'https://router.vuejs.org/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Nuxt e Deploy',
                videos: [
                    { label: 'Nuxt 3 do Zero – Traversy Media', url: 'https://www.youtube.com/watch?v=GBdO5myZNsQ' },
                    { label: 'Vue Performance – Evan You', url: 'https://www.youtube.com/watch?v=HmGDqQ_I_3g' }
                ],
                topics: ['Nuxt 3: SSR, SSG e file-based routing', 'Auto-imports e módulos Nuxt', 'useFetch e useAsyncData', 'Deploy na Vercel e Netlify', 'Testes com Vitest e Vue Test Utils'],
                docs: [
                    { label: 'Nuxt.js – Documentação', url: 'https://nuxt.com/docs' },
                    { label: 'Vitest – Framework de Testes', url: 'https://vitest.dev/' }
                ],
                mindmap: null
            }
        ]
    },
    {
        id: 'subj-nodejs',
        name: 'Node.js & Express',
        emoji: '🟩',
        modules: [
            {
                title: 'Módulo 1 — Node.js Fundamentos',
                videos: [
                    { label: 'Node.js Completo – Rodrigo Manguinho', url: 'https://www.youtube.com/watch?v=DiXbJL3iWVs' },
                    { label: 'Node.js in 100 Seconds – Fireship', url: 'https://www.youtube.com/watch?v=ENrzD9HAZK4' }
                ],
                topics: ['Módulos CommonJS vs ES Modules', 'Event loop, libuv e thread pool', 'File System (fs) e Path', 'HTTP nativo e criação de servidor', 'npm, package.json e gestão de dependências'],
                docs: [
                    { label: 'Node.js – Documentação Oficial', url: 'https://nodejs.org/pt-br/docs' },
                    { label: 'nodejs.dev – Guia para Iniciantes', url: 'https://nodejs.dev/en/learn/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Express e APIs REST',
                videos: [
                    { label: 'API REST com Express – Rocketseat', url: 'https://www.youtube.com/watch?v=fm2TMDKYD0M' },
                    { label: 'Express Crash Course – Traversy', url: 'https://www.youtube.com/watch?v=SccSCuHhOw0' }
                ],
                topics: ['Roteamento com Express Router', 'Middlewares: autenticação, CORS, logs', 'Validação de entrada com Zod / Joi', 'Autenticação JWT', 'Upload de arquivos com Multer'],
                docs: [
                    { label: 'Express.js – Documentação', url: 'https://expressjs.com/pt-br/' },
                    { label: 'Zod – Schema Validation', url: 'https://zod.dev/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Avançado e Produção',
                videos: [
                    { label: 'Fastify vs Express – Erick Wendel', url: 'https://www.youtube.com/watch?v=M3BM9TB-8yA' },
                    { label: 'Node em produção com Docker – Full Cycle', url: 'https://www.youtube.com/watch?v=Kzcz-EVKBEQ' }
                ],
                topics: ['Fastify: alternativa performática', 'Workers threads e clustering', 'Rate limiting, helmet e segurança', 'Logging com Winston/Pino', 'Docker + CI/CD para APIs Node'],
                docs: [
                    { label: 'Fastify – Documentação Oficial', url: 'https://www.fastify.io/docs/latest/' },
                    { label: 'Node.js Best Practices – GitHub', url: 'https://github.com/goldbergyoni/nodebestpractices' }
                ],
                mindmap: null
            }
        ]
    },
    {
        id: 'subj-django',
        name: 'Django',
        emoji: '🦄',
        modules: [
            {
                title: 'Módulo 1 — Django Básico',
                videos: [
                    { label: 'Django para Iniciantes – Greg Lim (PT)', url: 'https://www.youtube.com/watch?v=rHux0gMZ3Eg' },
                    { label: 'Django in 100 Seconds – Fireship', url: 'https://www.youtube.com/watch?v=rIb2Uhdk58c' }
                ],
                topics: ['MTV: Model, Template, View', 'Criação de projeto e app django-admin', 'URLs, views e templates', 'ORM: modelos e migrações', 'Admin panel automático'],
                docs: [
                    { label: 'Django – Documentação Oficial', url: 'https://docs.djangoproject.com/pt-br/' },
                    { label: 'Django Girls Tutorial (PT-BR)', url: 'https://tutorial.djangogirls.org/pt/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Django Rest Framework',
                videos: [
                    { label: 'DRF Completo – Very Academy', url: 'https://www.youtube.com/watch?v=soxd_xdHR0o' },
                    { label: 'API com DRF – Traversy Media', url: 'https://www.youtube.com/watch?v=TmsD8QExZ84' }
                ],
                topics: ['Serializers e ViewSets', 'Autenticação com SimpleJWT', 'Filtros, paginação e busca', 'Permissões customizadas', 'Documentação com drf-spectacular (OpenAPI)'],
                docs: [
                    { label: 'Django REST Framework – Docs', url: 'https://www.django-rest-framework.org/' },
                    { label: 'SimpleJWT – Auth Docs', url: 'https://django-rest-framework-simplejwt.readthedocs.io/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Django Avançado',
                videos: [
                    { label: 'Celery + Redis com Django – TestDriven.io', url: 'https://www.youtube.com/watch?v=oBQxFn1CDno' },
                    { label: 'Deploy Django no Railway – Dani Krossing', url: 'https://www.youtube.com/watch?v=0UNHkdaewI8' }
                ],
                topics: ['Celery para tarefas assíncronas', 'Channels e WebSockets em Django', 'Cache com Redis', 'Testes com pytest-django', 'Deploy com Gunicorn + Nginx + Docker'],
                docs: [
                    { label: 'Celery – Documentação', url: 'https://docs.celeryq.dev/en/stable/' },
                    { label: 'Django Channels – Docs', url: 'https://channels.readthedocs.io/en/stable/' }
                ],
                mindmap: null
            }
        ]
    },
    {
        id: 'subj-springboot',
        name: 'Spring Boot',
        emoji: '🌿',
        modules: [
            {
                title: 'Módulo 1 — Spring Boot Básico',
                videos: [
                    { label: 'Spring Boot do Zero – Michelli Brito', url: 'https://www.youtube.com/watch?v=LXRU-Z36GZU' },
                    { label: 'Spring Boot in 100 Seconds – Fireship', url: 'https://www.youtube.com/watch?v=Nv2DERaMx-4' }
                ],
                topics: ['Spring Initializr e estrutura de projeto', 'Injeção de dependência e @Autowired', 'REST Controllers com @RestController', 'Spring Data JPA e repositórios', 'application.properties e profiles'],
                docs: [
                    { label: 'Spring – Documentação Oficial', url: 'https://spring.io/projects/spring-boot' },
                    { label: 'Baeldung – Spring Boot', url: 'https://www.baeldung.com/spring-boot' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — APIs e Segurança',
                videos: [
                    { label: 'Spring Security + JWT – Amigoscode', url: 'https://www.youtube.com/watch?v=b9O9NI-RJ3o' },
                    { label: 'Spring Data JPA avançado – Daily Code Buffer', url: 'https://www.youtube.com/watch?v=XszpXoII9Sg' }
                ],
                topics: ['Spring Security e autenticação JWT', 'Exception handling global com @ControllerAdvice', 'Validação com Bean Validation (Jakarta)', 'Query methods e JPQL no JPA', 'Paginação e ordenação com Pageable'],
                docs: [
                    { label: 'Spring Security Docs', url: 'https://docs.spring.io/spring-security/reference/' },
                    { label: 'Spring Data JPA Docs', url: 'https://docs.spring.io/spring-data/jpa/docs/current/reference/html/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Microserviços e Deploy',
                videos: [
                    { label: 'Microserviços com Spring Cloud – in28minutes', url: 'https://www.youtube.com/watch?v=y8IQb4ofjDo' },
                    { label: 'Spring Boot + Docker + Kubernetes', url: 'https://www.youtube.com/watch?v=jLBSMRTWl2I' }
                ],
                topics: ['Spring Cloud: Eureka, Gateway e Config', 'Circuit Breaker com Resilience4j', 'Mensageria com RabbitMQ / Kafka', 'Monitoramento com Actuator e Prometheus', 'Docker e deploy no AWS ECS / Kubernetes'],
                docs: [
                    { label: 'Spring Cloud Docs', url: 'https://spring.io/projects/spring-cloud' },
                    { label: 'Resilience4j – Docs', url: 'https://resilience4j.readme.io/docs' }
                ],
                mindmap: null
            }
        ]
    },

    // ══════════════════════════════════════════════════
    // EXTRA — INGLÊS
    // ══════════════════════════════════════════════════
    {
        id: 'subj-english',
        name: 'Inglês',
        emoji: '🇬🇧',
        modules: [
            {
                title: 'Módulo 1 — Gramática Essencial',
                videos: [
                    { label: 'English Grammar Basics – BBC Learning', url: 'https://www.youtube.com/results?search_query=english+grammar+basics+bbc' },
                    { label: 'Gramática para Iniciantes – Mairo Vergara', url: 'https://www.youtube.com/results?search_query=gramatica+ingles+iniciante+mairo+vergara' }
                ],
                topics: ['Simple Present vs Present Continuous', 'Past Simple vs Present Perfect', 'Modal verbs (can, should, must, would)', 'Artigos definidos e indefinidos (a, an, the)', 'Preposições de tempo e lugar'],
                docs: [
                    { label: 'Cambridge Grammar Online', url: 'https://www.cambridge.org/elt/blog/2021/grammar/' },
                    { label: 'British Council – Grammar', url: 'https://learnenglish.britishcouncil.org/grammar' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 2 — Vocabulário e Phrasal Verbs',
                videos: [
                    { label: 'Top 1000 English Words – EnglishClass101', url: 'https://www.youtube.com/results?search_query=top+english+vocabulary+1000+words' },
                    { label: 'Phrasal Verbs mais comuns – English with Lucy', url: 'https://www.youtube.com/results?search_query=most+common+phrasal+verbs+english' }
                ],
                topics: ['Vocabulário técnico e profissional', 'Phrasal verbs essenciais (get, make, take, put)', 'Falsos cognatos (false friends)', 'Collocations comuns', 'Expressões idiomáticas'],
                docs: [
                    { label: 'Merriam-Webster Dictionary', url: 'https://www.merriam-webster.com/' },
                    { label: 'Linguee – Traduções contextuais', url: 'https://www.linguee.com.br/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 3 — Listening & Speaking',
                videos: [
                    { label: 'Shadowing Technique – Mairo Vergara', url: 'https://www.youtube.com/results?search_query=shadowing+tecnica+ingles+fluencia' },
                    { label: 'Pronúncia Americana – Rachel\'s English', url: 'https://www.youtube.com/results?search_query=american+pronunciation+rachel+english' }
                ],
                topics: ['Técnica de shadowing para fluência', 'Pronúncia de vogais e consoantes difíceis', 'Listening com podcasts nativos', 'Redução de fala e contrações', 'Entonação e ritmo natural'],
                docs: [
                    { label: 'BBC Learning English', url: 'https://www.bbc.co.uk/learningenglish/' },
                    { label: 'Elllo – Exercícios de Listening', url: 'https://www.elllo.org/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 4 — Reading & Writing',
                videos: [
                    { label: 'Academic Writing Tips – EF Education', url: 'https://www.youtube.com/results?search_query=academic+writing+english+tips' },
                    { label: 'Reading Comprehension Strategies', url: 'https://www.youtube.com/results?search_query=reading+comprehension+strategies+english' }
                ],
                topics: ['Estrutura de e-mails formais e informais', 'Reading comprehension: skimming e scanning', 'Conectivos e coesão textual', 'Redação argumentativa (essay)', 'Resumos e paráfrases'],
                docs: [
                    { label: 'Grammarly Blog – Writing', url: 'https://www.grammarly.com/blog/category/handbook/' },
                    { label: 'Purdue OWL – Writing Guide', url: 'https://owl.purdue.edu/owl/general_writing/index.html' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 5 — Inglês Técnico para Programação',
                videos: [
                    { label: 'Tech English for Developers – Traversy', url: 'https://www.youtube.com/results?search_query=english+for+developers+tech+vocabulary' },
                    { label: 'Como ler documentação em inglês', url: 'https://www.youtube.com/results?search_query=como+ler+documentacao+ingles+programacao' }
                ],
                topics: ['Vocabulário técnico: API, deployment, debugging', 'Leitura de documentações oficiais', 'Comunicação em equipes internacionais', 'Participação em code reviews em inglês', 'Entrevistas técnicas em inglês'],
                docs: [
                    { label: 'MDN Web Docs (EN)', url: 'https://developer.mozilla.org/en-US/' },
                    { label: 'Stack Overflow – Comunidade', url: 'https://stackoverflow.com/' }
                ],
                mindmap: null
            },
            {
                title: 'Módulo 6 — Preparação para Exames',
                videos: [
                    { label: 'TOEFL Preparation – Magoosh', url: 'https://www.youtube.com/results?search_query=toefl+preparation+tips+magoosh' },
                    { label: 'IELTS Academic – British Council', url: 'https://www.youtube.com/results?search_query=ielts+academic+preparation+british+council' }
                ],
                topics: ['Estrutura do exame TOEFL iBT', 'Dicas para o IELTS Academic e General', 'Cambridge Exams (B2 First, C1 Advanced)', 'Speaking: fluência e coerência', 'Writing Task 1 e Task 2 (IELTS)'],
                docs: [
                    { label: 'ETS – TOEFL Official Prep', url: 'https://www.ets.org/toefl' },
                    { label: 'IELTS.org – Official Resources', url: 'https://www.ielts.org/' }
                ],
                mindmap: null
            }
        ]
    }
];

function loadGuideSubjects() {
    const GUIDE_VERSION = 'v2.0';
    const storedVersion = localStorage.getItem('guideSubjectsVersion');
    if (storedVersion !== GUIDE_VERSION) {
        // New version: reset to fresh defaults with the new organized structure
        localStorage.removeItem('guideSubjects');
        localStorage.setItem('guideSubjectsVersion', GUIDE_VERSION);
    }
    const saved = localStorage.getItem('guideSubjects');
    return saved ? JSON.parse(saved) : DEFAULT_GUIDE_SUBJECTS;
}

function saveGuideSubjects(subjects) {
    localStorage.setItem('guideSubjects', JSON.stringify(subjects));
}

// ============================================================
// RENDER GUIDE SECTION (user view)
// ============================================================
function renderGuideSection() {
    const subjects = loadGuideSubjects();
    const tabsEl   = document.getElementById('guide-subject-tabs');
    const panelsEl = document.getElementById('guide-subject-panels');
    if (!tabsEl || !panelsEl) return;

    // Obtém o status de convidado de forma segura!
    const session = JSON.parse(localStorage.getItem('currentSession') || 'null');
    const isGuest = session && session.isGuest === true;

    let materiasParaExibir = subjects; 
    
    if (isGuest) {
        materiasParaExibir = subjects.filter(m => 
            m.name.toLowerCase().includes('matemática') || 
            m.name.toLowerCase().includes('lógica')
        );
    }

    tabsEl.innerHTML = materiasParaExibir.map((s, i) =>
        `<button class="guide-subject-tab${i === 0 ? ' active' : ''}" data-guide-tab="${s.id}">
            ${s.emoji} ${s.name}
        </button>`
    ).join('');

    panelsEl.innerHTML = materiasParaExibir.map((s, i) =>
        `<div class="guide-subject-panel${i === 0 ? ' active' : ''}" id="guide-panel-${s.id}">
            <div class="guide-modules-grid">
                ${s.modules.map((m, mi) => renderGuideModuleCard(m, mi)).join('')}
            </div>
        </div>`
    ).join('');

    // Tab switching
    tabsEl.querySelectorAll('.guide-subject-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            tabsEl.querySelectorAll('.guide-subject-tab').forEach(t => t.classList.remove('active'));
            panelsEl.querySelectorAll('.guide-subject-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const panel = document.getElementById('guide-panel-' + tab.getAttribute('data-guide-tab'));
            if (panel) panel.classList.add('active');
        });
    });
}

function renderGuideModuleCard(m, idx) {
    const modIcons = ['📘','📗','📙','📕'];
    const icon = modIcons[idx] || '📓';

    const videosHtml = m.videos && m.videos.length
        ? m.videos.map(v =>
            `<a class="guide-yt-link" href="${v.url}" target="_blank">▶ ${v.label}</a>`
          ).join('')
        : '<span class="guide-empty-slot">Nenhum vídeo adicionado.</span>';

    const topicsHtml = m.topics && m.topics.length
        ? m.topics.map(t => `<span class="guide-topic-tag">${t}</span>`).join('')
        : '<span class="guide-empty-slot">Nenhum tópico adicionado.</span>';

    const docsHtml = m.docs && m.docs.length
        ? m.docs.map(d =>
            `<a class="guide-doc-link" href="${d.url}" target="_blank">🔗 ${d.label}</a>`
          ).join('')
        : '<span class="guide-empty-slot">Nenhuma documentação adicionada.</span>';

    const mindmapHtml = m.mindmap
        ? `<img class="guide-mindmap-img" src="${m.mindmap}" alt="Mapa Mental">`
        : '<span class="guide-empty-slot">Nenhum mapa mental adicionado.</span>';

    return `
    <div class="guide-module-card">
        <h4>${icon} ${m.title}</h4>
        <div class="guide-module-section">
            <div class="guide-module-section-title">▶ Aulas em Vídeo</div>
            ${videosHtml}
        </div>
        <div class="guide-module-section">
            <div class="guide-module-section-title">📌 Tópicos</div>
            <div>${topicsHtml}</div>
        </div>
        <div class="guide-module-section">
            <div class="guide-module-section-title">📎 Mapa Mental</div>
            ${mindmapHtml}
        </div>
        <div class="guide-module-section">
            <div class="guide-module-section-title">🔗 Documentações</div>
            ${docsHtml}
        </div>
    </div>`;
}

// ============================================================
// RENDER ADMIN GUIDE LIST
// ============================================================
function renderAdminGuideList() {
    const subjects = loadGuideSubjects();
    const listEl = document.getElementById('guide-admin-subject-list');
    if (!listEl) return;

    if (subjects.length === 0) {
        listEl.innerHTML = '<p style="color:#475569;text-align:center;padding:2rem;">Nenhuma matéria cadastrada. Clique em "Nova Matéria" para começar.</p>';
        return;
    }

    listEl.innerHTML = subjects.map(s => `
        <div class="guide-admin-subject-item" data-subj-id="${s.id}">
            <div class="subj-info">
                <div class="subj-name">${s.emoji} ${s.name}</div>
                <div class="subj-meta">${s.modules.length} módulos</div>
            </div>
            <div class="guide-admin-actions">
                <button class="guide-admin-btn edit" onclick="openAdminGuideModal('${s.id}')">✏ Editar</button>
                <button class="guide-admin-btn delete" onclick="deleteGuideSubject('${s.id}')">🗑 Remover</button>
            </div>
        </div>
    `).join('');
}

function deleteGuideSubject(id) {
    if (!confirm('Tem certeza que deseja remover esta matéria?')) return;
    let subjects = loadGuideSubjects();
    subjects = subjects.filter(s => s.id !== id);
    saveGuideSubjects(subjects);
    renderAdminGuideList();
}

// ============================================================
// ADMIN GUIDE MODAL — open/save/close
// ============================================================
let _editingSubjectId = null;

function openAdminGuideModal(subjectId) {
    const subjects = loadGuideSubjects();
    let subject = subjects.find(s => s.id === subjectId);

    if (!subject) {
        // New subject
        subject = {
            id: 'subj-' + Date.now(),
            name: '',
            emoji: '📖',
            modules: [{
                title: `Módulo 1`,
                videos: [],
                topics: [],
                docs: [],
                mindmap: null
            }]
        };
    }

    _editingSubjectId = subject.id;
    document.getElementById('editing-subject-id').value = subject.id;
    document.getElementById('edit-subject-name').value  = subject.name;
    document.getElementById('edit-subject-emoji').value = subject.emoji;

    const container = document.getElementById('edit-modules-container');
    container.innerHTML = subject.modules.map((m, mi) => buildModuleEditBlock(m, mi)).join('');

    // Wire file inputs for mindmaps
    subject.modules.forEach((m, mi) => {
        const fileInput = document.getElementById(`mindmap-file-${mi}`);
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => {
                    const preview = document.getElementById(`mindmap-preview-${mi}`);
                    if (preview) { preview.src = ev.target.result; preview.style.display = 'block'; }
                    fileInput.dataset.base64 = ev.target.result;
                };
                reader.readAsDataURL(file);
            });
        }
        // Pre-fill existing mindmap
        if (m.mindmap) {
            const preview = document.getElementById(`mindmap-preview-${mi}`);
            if (preview) { preview.src = m.mindmap; preview.style.display = 'block'; }
        }
    });

    document.getElementById('admin-guide-modal').classList.add('open');
}

// --- LÓGICA DO NOVO BOTÃO DE ADICIONAR MÓDULO ---
document.getElementById('btn-add-module-admin')?.addEventListener('click', () => {
    const container = document.getElementById('edit-modules-container');
    // Descobre qual será o número do novo módulo para criar os IDs corretamente
    let maxId = -1;
    container.querySelectorAll('.module-edit-block').forEach(block => {
        const idNum = parseInt(block.id.replace('module-block-', ''));
        if (idNum > maxId) maxId = idNum;
    });
    const newMi = maxId + 1;
    
    // Cria um módulo vazio
    const newModule = { title: `Módulo ${container.children.length + 1}`, videos: [], topics: [], docs: [], mindmap: null };
    
    // Injeta na tela
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = buildModuleEditBlock(newModule, newMi);
    container.appendChild(tempDiv.firstElementChild);
    
    // Ativa o leitor de imagem (mapa mental) para o novo bloco gerado
    const fileInput = document.getElementById(`mindmap-file-${newMi}`);
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                const preview = document.getElementById(`mindmap-preview-${newMi}`);
                if (preview) { preview.src = ev.target.result; preview.style.display = 'block'; }
                fileInput.dataset.base64 = ev.target.result;
            };
            reader.readAsDataURL(file);
        });
    }
});

function buildModuleEditBlock(m, mi) {
    const videosRows = (m.videos || []).map((v, vi) =>
        `<div class="mini-list-row" id="video-row-${mi}-${vi}">
            <input type="text" placeholder="Label" value="${v.label}" data-type="video-label" data-mi="${mi}" data-vi="${vi}">
            <input type="text" placeholder="URL" value="${v.url}" data-type="video-url" data-mi="${mi}" data-vi="${vi}">
            <button onclick="removeMiniRow('video-row-${mi}-${vi}')">✕</button>
        </div>`
    ).join('');

    const topicsRows = (m.topics || []).map((t, ti) =>
        `<div class="mini-list-row" id="topic-row-${mi}-${ti}">
            <input type="text" placeholder="Tópico" value="${t}" data-type="topic" data-mi="${mi}" data-ti="${ti}">
            <button onclick="removeMiniRow('topic-row-${mi}-${ti}')">✕</button>
        </div>`
    ).join('');

    const docsRows = (m.docs || []).map((d, di) =>
        `<div class="mini-list-row" id="doc-row-${mi}-${di}">
            <input type="text" placeholder="Label" value="${d.label}" data-type="doc-label" data-mi="${mi}" data-di="${di}">
            <input type="text" placeholder="URL" value="${d.url}" data-type="doc-url" data-mi="${mi}" data-di="${di}">
            <button onclick="removeMiniRow('doc-row-${mi}-${di}')">✕</button>
        </div>`
    ).join('');

    return `
    <div class="module-edit-block" id="module-block-${mi}">
        <h5>📦 ${m.title}</h5>
        <label>Título do Módulo</label>
        <input type="text" id="module-title-${mi}" value="${m.title}">

        <label>Vídeos do YouTube</label>
        <div id="videos-list-${mi}">${videosRows}</div>
        <button class="mini-add-btn" onclick="addVideoRow(${mi})">＋ Adicionar Vídeo</button>

        <label>Tópicos</label>
        <div id="topics-list-${mi}">${topicsRows}</div>
        <button class="mini-add-btn" onclick="addTopicRow(${mi})">＋ Adicionar Tópico</button>

        <label>Mapa Mental (imagem)</label>
        <input type="file" id="mindmap-file-${mi}" accept="image/*" style="color:#94a3b8;font-size:0.8rem;">
        <img id="mindmap-preview-${mi}" class="mindmap-preview" src="" style="display:none;">

        <label>Links de Documentação</label>
        <div id="docs-list-${mi}">${docsRows}</div>
        <button class="mini-add-btn" onclick="addDocRow(${mi})">＋ Adicionar Link</button>
    </div>`;
}

function addVideoRow(mi) {
    const list = document.getElementById(`videos-list-${mi}`);
    const id = `video-row-${mi}-${Date.now()}`;
    const div = document.createElement('div');
    div.className = 'mini-list-row'; div.id = id;
    div.innerHTML = `<input type="text" placeholder="Label (título do vídeo)">
        <input type="text" placeholder="URL do YouTube">
        <button onclick="removeMiniRow('${id}')">✕</button>`;
    list.appendChild(div);
    // Re-wire mindmap file input (needed if new inputs added)
}
function addTopicRow(mi) {
    const list = document.getElementById(`topics-list-${mi}`);
    const id = `topic-row-${mi}-${Date.now()}`;
    const div = document.createElement('div');
    div.className = 'mini-list-row'; div.id = id;
    div.innerHTML = `<input type="text" placeholder="Nome do tópico">
        <button onclick="removeMiniRow('${id}')">✕</button>`;
    list.appendChild(div);
}
function addDocRow(mi) {
    const list = document.getElementById(`docs-list-${mi}`);
    const id = `doc-row-${mi}-${Date.now()}`;
    const div = document.createElement('div');
    div.className = 'mini-list-row'; div.id = id;
    div.innerHTML = `<input type="text" placeholder="Label (nome da doc)">
        <input type="text" placeholder="URL da documentação">
        <button onclick="removeMiniRow('${id}')">✕</button>`;
    list.appendChild(div);
}
function removeMiniRow(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

// Save admin guide modal
document.getElementById('save-admin-guide-btn')?.addEventListener('click', () => {
    const subjects = loadGuideSubjects();
    const name  = document.getElementById('edit-subject-name').value.trim();
    const emoji = document.getElementById('edit-subject-emoji').value.trim() || '📖';
    const id    = _editingSubjectId;
    if (!name) { alert('Informe o nome da matéria!'); return; }

    // Pega todos os blocos de módulos que existem na tela dinamicamente
    const moduleBlocks = document.querySelectorAll('.module-edit-block');
    const modules = Array.from(moduleBlocks).map((block, index) => {
        // Extrai o ID numérico do bloco (ex: de "module-block-0" tira o "0")
        const mi = parseInt(block.id.replace('module-block-', ''));

        const title = document.getElementById(`module-title-${mi}`)?.value || `Módulo ${index + 1}`;
        // ... (mantenha o resto do código original abaixo dessa linha: videoRows, topics, etc)

        const videoRows = document.querySelectorAll(`#videos-list-${mi} .mini-list-row`);
        const videos = [];
        videoRows.forEach(row => {
            const inputs = row.querySelectorAll('input');
            if (inputs[0]?.value && inputs[1]?.value)
                videos.push({ label: inputs[0].value, url: inputs[1].value });
        });

        const topicRows = document.querySelectorAll(`#topics-list-${mi} .mini-list-row`);
        const topics = [];
        topicRows.forEach(row => {
            const val = row.querySelector('input')?.value;
            if (val) topics.push(val);
        });

        const fileInput = document.getElementById(`mindmap-file-${mi}`);
        const mindmap = fileInput?.dataset.base64 ||
            (document.getElementById(`mindmap-preview-${mi}`)?.src?.startsWith('data:') ?
             document.getElementById(`mindmap-preview-${mi}`).src : null);

        const docRows = document.querySelectorAll(`#docs-list-${mi} .mini-list-row`);
        const docs = [];
        docRows.forEach(row => {
            const inputs = row.querySelectorAll('input');
            if (inputs[0]?.value && inputs[1]?.value)
                docs.push({ label: inputs[0].value, url: inputs[1].value });
        });

        return { title, videos, topics, mindmap, docs };
    });

    const existing = subjects.findIndex(s => s.id === id);
    const updated = { id, name, emoji, modules };
    if (existing >= 0) subjects[existing] = updated;
    else subjects.push(updated);

    saveGuideSubjects(subjects);
    closeAdminGuideModal();
    renderAdminGuideList();
    alert('✅ Matéria salva com sucesso!');
});

function closeAdminGuideModal() {
    document.getElementById('admin-guide-modal').classList.remove('open');
}
document.getElementById('close-admin-guide-modal')?.addEventListener('click', closeAdminGuideModal);
document.getElementById('cancel-admin-guide-modal')?.addEventListener('click', closeAdminGuideModal);
document.getElementById('admin-guide-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeAdminGuideModal();
});

// Add new subject button
document.getElementById('admin-add-subject-btn')?.addEventListener('click', () => {
    // Create a temp new ID
    _editingSubjectId = 'subj-' + Date.now();
    openAdminGuideModal(_editingSubjectId);
});

// ============================================================
// ACCESSIBILITY FAB — font size increase / decrease
// ============================================================
(function initA11yFab() {
    const BASE  = 16; // px
    const STEP  = 1;
    const MIN   = 12;
    const MAX   = 22;
    let current = parseInt(localStorage.getItem('a11y-font-size') || BASE);

    apply(current);

    document.getElementById('a11y-increase')?.addEventListener('click', () => {
        if (current < MAX) { current += STEP; apply(current); }
    });
    document.getElementById('a11y-decrease')?.addEventListener('click', () => {
        if (current > MIN) { current -= STEP; apply(current); }
    });

    function apply(size) {
        document.documentElement.style.fontSize = size + 'px';
        localStorage.setItem('a11y-font-size', size);
    }
})();

// Função global de verificação de permissão
function isGuestUser() {
    const session = JSON.parse(localStorage.getItem('currentSession') || 'null');
    return session && session.isGuest === true;
}

// Interceptor de Acesso: Bloqueia a execução de funções restritas
function checkAccess(featureName) {
    if (isGuestUser()) {
        showGuestBlockedModal(`O recurso <strong>${featureName}</strong> é exclusivo para alunos registrados.`);
        return false;
    }
    return true;
}

// ============================================================
// REMOVER USUÁRIO / SESSÃO (Ação do Admin)
// ============================================================
window.removeUserSession = function(targetSessionId) {
    const currentSession = JSON.parse(localStorage.getItem('currentSession') || '{}');
    
    // Trava de segurança: impede o admin de deletar a própria sessão logada
    if (currentSession.sessionId === targetSessionId) {
        alert("⚠️ Você não pode remover a sua própria sessão ativa!");
        return;
    }

    if (confirm("Tem certeza que deseja remover este usuário da plataforma?")) {
        // Busca as sessões atuais
        let sessions = JSON.parse(localStorage.getItem('activeSessions') || '[]');
        
        // Filtra removendo apenas o ID selecionado
        sessions = sessions.filter(s => s.sessionId !== targetSessionId);
        
        // Salva novamente
        localStorage.setItem('activeSessions', JSON.stringify(sessions));
        
        alert("✅ Usuário removido com sucesso!");
        
        // Atualiza a tabela instantaneamente na tela
        renderAdminTable(); 
    }
};

// ============================================================
// LÓGICA DO MODAL DE EDIÇÃO DOS PASSOS DA TRILHA
// ============================================================
let currentEditingRoadmapId = null;
let currentEditingStepId = null;

window.openEditStepModal = function(roadmapId, stepId) {
    currentEditingRoadmapId = roadmapId;
    currentEditingStepId = stepId;
    
    let roadmap = state.roadmaps.find(r => r.id === roadmapId);
    let step = roadmap.steps.find(s => s.id === stepId);
    
    if (!step) return;

    document.getElementById('edit-step-id').value = step.id;
    document.getElementById('edit-step-title').value = step.title;
    document.getElementById('edit-step-desc').value = step.desc;
    document.getElementById('edit-step-badge').value = step.badge || '';
    document.getElementById('edit-step-resource-text').value = step.resourceText || '';
    document.getElementById('edit-step-resource-url').value = step.resourceUrl || '';
    
    document.getElementById('edit-step-modal').style.display = 'flex';
};

document.getElementById('close-edit-step-modal')?.addEventListener('click', () => {
    document.getElementById('edit-step-modal').style.display = 'none';
});
document.getElementById('cancel-edit-step-btn')?.addEventListener('click', () => {
    document.getElementById('edit-step-modal').style.display = 'none';
});

// Ação de Excluir o Passo
document.getElementById('delete-edit-step-btn')?.addEventListener('click', () => {
    if(confirm("Deseja mesmo remover permanentemente este passo desta trilha?")) {
        let roadmap = state.roadmaps.find(r => r.id === currentEditingRoadmapId);
        if(roadmap) {
            roadmap.steps = roadmap.steps.filter(s => s.id !== currentEditingStepId);
            saveToLocalStorage();
            renderRoadmaps();
            document.getElementById('edit-step-modal').style.display = 'none';
        }
    }
});

// Ação de Salvar as modificações feitas pelo formulário do modal
document.getElementById('edit-step-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    let roadmap = state.roadmaps.find(r => r.id === currentEditingRoadmapId);
    let step = roadmap.steps.find(s => s.id === currentEditingStepId);
    
    if(step) {
        step.title = document.getElementById('edit-step-title').value;
        step.desc = document.getElementById('edit-step-desc').value;
        step.badge = document.getElementById('edit-step-badge').value;
        step.resourceText = document.getElementById('edit-step-resource-text').value;
        step.resourceUrl = document.getElementById('edit-step-resource-url').value;
        
        saveToLocalStorage();
        renderRoadmaps();
        document.getElementById('edit-step-modal').style.display = 'none';
    }
});