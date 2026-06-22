// Global Application State Controller
let state = {
    xp: 0,
    level: 1,
    streak: 0,
    dailyXPEarned: 0,  // <-- Nova linha
    lastXPDate: null,  // <-- Nova linha
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
        { id: 't-1', title: 'Instalar ambiente de desenvolvimento', desc: 'Configurar VS Code, Git e Extensões recomendadas.', status: 'done', priority: 'high', dueDate: '', xpAwarded: true },
        { id: 't-2', title: 'Montar cronograma semanal', desc: 'Definir 1 hora de estudo diário para o roadmap selecionado.', status: 'doing', priority: 'medium', dueDate: '', xpAwarded: false },
        { id: 't-3', title: 'Praticar primeiro bloco Pomodoro', desc: 'Iniciar timer com som de ruído marrom para hiperfoco.', status: 'todo', priority: 'low', dueDate: '', xpAwarded: false }
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
        { id: 'kanban_master', title: 'Mestre do Kanban', desc: 'Concluir 3 tarefas do quadro planejador.', unlocked: false, xpAward: 100, icon: '🏅' },
        { id: 'quiz_champion', title: 'Campeão do Quiz', desc: 'Completar um questionário de matéria pela primeira vez.', unlocked: false, xpAward: 120, icon: '🎯' },
        { id: 'quiz_perfect', title: 'Nota 10!', desc: 'Acertar todas as 10 perguntas de um quiz sem errar.', unlocked: false, xpAward: 200, icon: '🌟' }
    ],
    
    // Quiz history
    quizHistory: [],

    // Sandbox codes (Mini VS Code)
    sandboxCodes: [],
    selectedSandboxCodeId: null,

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
    // --- LIMITE DIÁRIO DE XP ---
    const todayStr = new Date().toISOString().split('T')[0]; // Ex: "2026-06-22"
    
    if (state.lastXPDate !== todayStr) {
        // Novo dia: zera o contador diário
        state.dailyXPEarned = 0;
        state.lastXPDate = todayStr;
    }
    
    const DAILY_CAP = 150; // Seu limite de 150 XP por dia
    const remaining = DAILY_CAP - state.dailyXPEarned;
    
    if (remaining <= 0) {
        // Limite atingido: apenas mostra notificação sem somar XP
        showXPNotification(0, `Limite diário de ${DAILY_CAP} XP atingido!`);
        return;
    }
    
    // Calcula quanto de XP o usuário realmente pode ganhar agora
    const actualAmount = Math.min(amount, remaining);
    state.dailyXPEarned += actualAmount;
    state.xp += actualAmount;
    // --- FIM DA LÓGICA DE LIMITE ---
    
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
    // Usa o actualAmount para não mostrar que ganhou 15 se o limite só permitia 5, por exemplo
    showXPNotification(actualAmount, reason);
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
    // 1. Limpeza de segurança: remove qualquer tela travada anterior
    const stuckOverlay = document.getElementById('level-up-overlay-active');
    if (stuckOverlay) stuckOverlay.remove();

    let overlay = document.createElement('div');
    overlay.id = 'level-up-overlay-active'; // Adicionado ID único
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.background = 'rgba(10,11,16,0.95)';
    overlay.style.zIndex = '9999'; // Elevado para o nível máximo da página
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
            <button class="welcome-action-btn close-lvl-btn" style="padding: 0.8rem 2rem;">Continuar Jornada</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // 2. Vincula o clique de fechar DIRETAMENTE ao elemento filho deste overlay específico
    let closeBtn = overlay.querySelector('.close-lvl-btn');
    closeBtn.onclick = () => {
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

// --- Toggle Sidebar Minimization ---
(function initSidebarToggle() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    if (sidebar && toggleBtn) {
        const isMinimized = localStorage.getItem('sidebar-minimized') === 'true';
        if (isMinimized) {
            sidebar.classList.add('minimized');
        }
        toggleBtn.addEventListener('click', () => {
            const minimized = sidebar.classList.toggle('minimized');
            localStorage.setItem('sidebar-minimized', minimized);
        });
    }
})();

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
            case 'quiz-section':
                subtitle = "Teste seus conhecimentos e ganhe XP por cada resposta certa!";
                renderQuiz();
                break;
            case 'editor-section':
                subtitle = "Pratique programação e lógica em tempo real com visualização ao vivo.";
                renderSandbox();
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

    // Quizzes done
    const quizDoneEl = document.getElementById('dash-quizzes-done');
    if (quizDoneEl) quizDoneEl.innerText = (state.quizHistory || []).length;
    
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
        
        // Bloqueio de Farm de XP: Verifica se o card JÁ FOI avaliado nesta sessão
        if (!card.xpAwarded) {
            card.xpAwarded = true; // Marca a carta
            
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
        } else {
            // Se já ganhou XP, apenas atualiza o estágio da memória sem dar recompensa repetida
            if (rating === 'easy') card.srsStage = 3;
            else if (rating === 'medium') card.srsStage = 2;
            else card.srsStage = 1;
        }
        
        // Go next
        currentQueueIndex++;
        if (currentQueueIndex >= activeCardQueue.length) {
            currentQueueIndex = 0;
            // Opcional: Aqui nós removemos as tags xpAwarded se quiser que ele ganhe no próximo baralho amanhã
            // activeCardQueue.forEach(c => c.xpAwarded = false); 
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
                    
                    if (nextStatus === 'done' && !task.xpAwarded) {
                        task.xpAwarded = true; // Marca que já recebeu XP
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
                if (targetStatus === 'done' && !task.xpAwarded) {
                    task.xpAwarded = true; // Marca que já recebeu XP
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
        dueDate: due,
        xpAwarded: false // <-- Nova linha aqui
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

// ============================================================
// CÓDIGO ZEN (CODE SANDBOX / EDITOR ENGINE)
// ============================================================
const DEFAULT_SANDBOX_CODES = [
    {
        id: 'sandbox-webdev-default',
        title: '🌐 Web Dev Demo',
        lang: 'webdev',
        code: `<!-- Escreva seu HTML, CSS e JS aqui! -->\n<div class="card">\n    <h1>Olá, Mundo! 👋</h1>\n    <p>Pratique programação com visualização em tempo real.</p>\n    <button onclick="animar()">Clique-me</button>\n</div>\n\n<style>\nbody {\n    background: #0d0e15;\n    color: #f3f4f6;\n    font-family: sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 80vh;\n}\n.card {\n    background: rgba(255,255,255,0.05);\n    border: 1px solid rgba(255,255,255,0.1);\n    border-radius: 16px;\n    padding: 2rem;\n    text-align: center;\n    box-shadow: 0 10px 30px rgba(0,0,0,0.5);\n    transition: transform 0.2s;\n}\nbutton {\n    background: #6366f1;\n    color: white;\n    border: none;\n    padding: 0.6rem 1.5rem;\n    border-radius: 8px;\n    cursor: pointer;\n    font-weight: bold;\n    transition: 0.2s;\n    margin-top: 1rem;\n}\nbutton:hover {\n    background: #4f46e5;\n    transform: translateY(-2px);\n}\n</style>\n\n<script>\nfunction animar() {\n    const card = document.querySelector('.card');\n    card.style.transform = 'scale(1.05)';\n    setTimeout(() => card.style.transform = 'scale(1)', 200);\n    console.log('Botão clicado no preview!');\n}\n</script>`,
        updatedAt: new Date().toLocaleDateString('pt-BR')
    },
    {
        id: 'sandbox-jslogic-default',
        title: '🧩 Fibonacci em Lógica JS',
        lang: 'jslogic',
        code: `// Teste de lógica JavaScript!\n// Os resultados de console.log() aparecerão no painel de console ao lado.\n\nfunction fibonacci(n) {\n    console.log("Calculando série Fibonacci para n = " + n);\n    let serie = [0, 1];\n    for (let i = 2; i < n; i++) {\n        serie.push(serie[i - 1] + serie[i - 2]);\n    }\n    return serie;\n}\n\nconst resultado = fibonacci(10);\nconsole.log("Série gerada: " + resultado.join(" -> "));\n`,
        updatedAt: new Date().toLocaleDateString('pt-BR')
    }
];

function renderSandbox() {
    let selector = document.getElementById('sandbox-selector-list');
    if (!selector) return;
    selector.innerHTML = "";

    // Ensure state.sandboxCodes is initialized
    if (!state.sandboxCodes || state.sandboxCodes.length === 0) {
        state.sandboxCodes = JSON.parse(JSON.stringify(DEFAULT_SANDBOX_CODES));
        state.selectedSandboxCodeId = state.sandboxCodes[0].id;
        saveToLocalStorage();
    }

    if (!state.selectedSandboxCodeId) {
        state.selectedSandboxCodeId = state.sandboxCodes[0].id;
        saveToLocalStorage();
    }

    state.sandboxCodes.forEach(code => {
        let tab = document.createElement('button');
        tab.className = `note-tab-btn ${state.selectedSandboxCodeId === code.id ? 'active' : ''}`;
        
        const emoji = code.lang === 'webdev' ? '🌐' : '🧩';
        tab.innerHTML = `
            <span>${code.title}</span>
            <span class="note-tab-date">${code.updatedAt}</span>
        `;
        
        tab.onclick = () => {
            state.selectedSandboxCodeId = code.id;
            renderSandbox();
        };
        
        selector.appendChild(tab);
    });

    let activeCode = state.sandboxCodes.find(c => c.id === state.selectedSandboxCodeId);
    if (!activeCode) {
        document.getElementById('sandbox-title-field').value = "Nenhum Código Selecionado";
        document.getElementById('sandbox-textarea').value = "";
        document.getElementById('sandbox-textarea').disabled = true;
        document.getElementById('sandbox-title-field').disabled = true;
        document.getElementById('sandbox-lang-select').disabled = true;
        document.getElementById('sandbox-run-btn').disabled = true;
        document.getElementById('sandbox-delete-btn').style.display = 'none';
        document.getElementById('sandbox-download-btn').style.display = 'none';
        return;
    }

    document.getElementById('sandbox-textarea').disabled = false;
    document.getElementById('sandbox-title-field').disabled = false;
    document.getElementById('sandbox-lang-select').disabled = false;
    document.getElementById('sandbox-run-btn').disabled = false;
    document.getElementById('sandbox-delete-btn').style.display = 'block';
    document.getElementById('sandbox-download-btn').style.display = 'block';

    document.getElementById('sandbox-title-field').value = activeCode.title;
    document.getElementById('sandbox-lang-select').value = activeCode.lang;
    document.getElementById('sandbox-textarea').value = activeCode.code;

    updateLineNumbers();
    
    // Auto run preview if it's webdev to show it immediately
    if (activeCode.lang === 'webdev') {
        runSandboxCode(true); // silent run (no alerts, no console force switch)
    } else {
        // Clear preview iframe for non-webdev mode
        document.getElementById('sandbox-iframe').srcdoc = "";
    }

    // Sync listeners
    document.getElementById('sandbox-textarea').oninput = function() {
        activeCode.code = this.value;
        activeCode.updatedAt = new Date().toLocaleDateString('pt-BR');
        
        // Update selector tab date
        const activeTab = selector.querySelector('.note-tab-btn.active .note-tab-date');
        if (activeTab) activeTab.textContent = activeCode.updatedAt;

        updateLineNumbers();
        saveToLocalStorage();
    };

    document.getElementById('sandbox-title-field').oninput = function() {
        activeCode.title = this.value || "Sem título";
        activeCode.updatedAt = new Date().toLocaleDateString('pt-BR');
        
        // Update selector tab title
        const activeTabTitle = selector.querySelector('.note-tab-btn.active span:first-child');
        if (activeTabTitle) activeTabTitle.textContent = activeCode.title;
        
        saveToLocalStorage();
    };

    document.getElementById('sandbox-lang-select').onchange = function() {
        activeCode.lang = this.value;
        activeCode.updatedAt = new Date().toLocaleDateString('pt-BR');
        
        if (activeCode.lang === 'webdev') {
            document.querySelector('.sandbox-tab-btn[data-tab="preview"]').click();
        } else {
            document.querySelector('.sandbox-tab-btn[data-tab="console"]').click();
        }
        
        saveToLocalStorage();
        renderSandbox();
    };
}

function updateLineNumbers() {
    const textarea = document.getElementById('sandbox-textarea');
    const lineNumbersEl = document.getElementById('sandbox-line-numbers');
    if (!textarea || !lineNumbersEl) return;

    const lines = textarea.value.split('\n').length;
    let numbersHtml = '';
    for (let i = 1; i <= lines; i++) {
        numbersHtml += i + '\n';
    }
    lineNumbersEl.textContent = numbersHtml;
}

function runSandboxCode(silent = false) {
    const textarea = document.getElementById('sandbox-textarea');
    const langSelect = document.getElementById('sandbox-lang-select');
    const iframe = document.getElementById('sandbox-iframe');
    const terminal = document.getElementById('terminal-screen');

    if (!textarea || !langSelect) return;

    const code = textarea.value;
    const lang = langSelect.value;

    if (lang === 'webdev') {
        if (iframe) {
            iframe.srcdoc = code;
            if (!silent) {
                document.querySelector('.sandbox-tab-btn[data-tab="preview"]')?.click();
            }
        }
    } else if (lang === 'jslogic') {
        if (!terminal) return;

        terminal.innerHTML = `<div class="terminal-line system-msg">> Executando script em ${new Date().toLocaleTimeString()}...</div>`;
        if (!silent) {
            document.querySelector('.sandbox-tab-btn[data-tab="console"]')?.click();
        }

        const logOutputs = [];
        const originalConsoleLog = console.log;

        console.log = function(...args) {
            const formatted = args.map(arg => {
                if (typeof arg === 'object') {
                    try { return JSON.stringify(arg); } catch (e) { return String(arg); }
                }
                return String(arg);
            }).join(' ');
            logOutputs.push(formatted);
        };

        try {
            const runner = new Function(code);
            runner();
            
            if (logOutputs.length > 0) {
                logOutputs.forEach(log => {
                    const logLine = document.createElement('div');
                    logLine.className = 'terminal-line log-msg';
                    logLine.textContent = `[LOG] ${log}`;
                    terminal.appendChild(logLine);
                });
            } else {
                const emptyLine = document.createElement('div');
                emptyLine.className = 'terminal-line system-msg';
                emptyLine.textContent = '> Código executado sem saídas de console.';
                terminal.appendChild(emptyLine);
            }
            
            const successLine = document.createElement('div');
            successLine.className = 'terminal-line system-msg';
            successLine.textContent = `> Script concluído com sucesso.`;
            terminal.appendChild(successLine);

        } catch (error) {
            const errLine = document.createElement('div');
            errLine.className = 'terminal-line error-msg';
            errLine.textContent = `[ERRO] ${error.name}: ${error.message}`;
            terminal.appendChild(errLine);
        } finally {
            console.log = originalConsoleLog;
            terminal.scrollTop = terminal.scrollHeight;
        }
    }
}

// Global scope initialization for sandbox listeners
document.addEventListener('DOMContentLoaded', () => {
    // Scroll sync
    document.getElementById('sandbox-textarea')?.addEventListener('scroll', function() {
        const lineNumbersEl = document.getElementById('sandbox-line-numbers');
        if (lineNumbersEl) {
            lineNumbersEl.scrollTop = this.scrollTop;
        }
    });

    // Tab key helper
    document.getElementById('sandbox-textarea')?.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = this.selectionStart;
            const end = this.selectionEnd;
            this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
            this.selectionStart = this.selectionEnd = start + 4;
            this.dispatchEvent(new Event('input'));
        }
    });

    // Run code click
    document.getElementById('sandbox-run-btn')?.addEventListener('click', () => {
        runSandboxCode(false);
    });

    // New code button
    document.getElementById('sandbox-new-code-btn')?.addEventListener('click', () => {
        const lang = document.getElementById('sandbox-lang-select')?.value || 'webdev';
        const boilerplate = lang === 'webdev' 
            ? `<!-- Novo projeto HTML -->\n<h1>Novo Código Zen</h1>\n<p>Escreva seu código...</p>`
            : `// Novo script de lógica JS\nconsole.log("Olá, mundo!");\n`;

        const newCode = {
            id: `sandbox-${Date.now()}`,
            title: 'Novo Código',
            lang: lang,
            code: boilerplate,
            updatedAt: new Date().toLocaleDateString('pt-BR')
        };

        if (!state.sandboxCodes) state.sandboxCodes = [];
        state.sandboxCodes.push(newCode);
        state.selectedSandboxCodeId = newCode.id;
        
        saveToLocalStorage();
        renderSandbox();
    });

    // Delete button
    document.getElementById('sandbox-delete-btn')?.addEventListener('click', () => {
        if (confirm('Tem certeza de que deseja excluir este código?')) {
            state.sandboxCodes = state.sandboxCodes.filter(c => c.id !== state.selectedSandboxCodeId);
            state.selectedSandboxCodeId = state.sandboxCodes.length > 0 ? state.sandboxCodes[0].id : null;
            saveToLocalStorage();
            renderSandbox();
        }
    });

    // Download code button
    document.getElementById('sandbox-download-btn')?.addEventListener('click', () => {
        const activeCode = state.sandboxCodes.find(c => c.id === state.selectedSandboxCodeId);
        if (!activeCode) return;

        const fileExtension = activeCode.lang === 'webdev' ? 'html' : 'js';
        const blob = new Blob([activeCode.code], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${activeCode.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}.${fileExtension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Tabs control inside output pane
    document.querySelectorAll('.sandbox-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sandbox-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const tabName = btn.getAttribute('data-tab');
            if (tabName === 'preview') {
                document.getElementById('sandbox-tab-preview').style.display = 'block';
                document.getElementById('sandbox-tab-console').style.display = 'none';
            } else {
                document.getElementById('sandbox-tab-preview').style.display = 'none';
                document.getElementById('sandbox-tab-console').style.display = 'block';
            }
        });
    });
});

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
        if (target === 'quiz-mgmt-tab') renderAdminQuizList();
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
// ADMIN QUIZ MANAGEMENT
// ============================================================
let _editingQuizId = null;

function renderAdminQuizList() {
    const bank = loadQuizBank();
    const listEl = document.getElementById('quiz-admin-list');
    if (!listEl) return;

    if (bank.length === 0) {
        listEl.innerHTML = '<p style="color:#475569;text-align:center;padding:2rem;">Nenhuma questão cadastrada. Clique em "Nova Questão" para começar.</p>';
        return;
    }

    // Group by subjectId
    const groups = {};
    bank.forEach(q => {
        if (!groups[q.subjectId]) {
            groups[q.subjectId] = {
                name: q.subjectName,
                emoji: q.subjectEmoji,
                questions: []
            };
        }
        groups[q.subjectId].questions.push(q);
    });

    let html = '';
    for (const subjectId in groups) {
        const group = groups[subjectId];
        html += `
        <div style="margin-bottom: 2rem;">
            <h4 style="color: var(--secondary); font-family: var(--font-heading); font-size: 1.1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>${group.emoji}</span> <span>${group.name}</span>
                <span style="font-size: 0.8rem; background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 12px; color: var(--text-secondary); font-weight: normal; margin-left: auto;">${group.questions.length} questões</span>
            </h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${group.questions.map(q => {
                    const letters = ['A', 'B', 'C', 'D'];
                    const correctText = q.options[q.correctIndex] || '';
                    const diffLabels = { easy: 'Fácil', medium: 'Médio', hard: 'Difícil' };
                    const diffLabel = diffLabels[q.difficulty] || 'Médio';
                    
                    return `
                    <div class="guide-admin-subject-item" style="padding: 1.2rem; display: flex; flex-direction: column; gap: 0.65rem;">
                        <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem;">
                            <div style="font-weight: 700; font-size: 0.9rem; color: var(--text-primary);">${q.question}</div>
                            <span class="quiz-difficulty-badge ${q.difficulty || 'medium'}" style="flex-shrink: 0; font-size: 0.7rem; padding: 2px 8px;">${diffLabel}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.8rem; color: var(--text-secondary); padding-left: 0.5rem; border-left: 2px solid var(--border-color);">
                            <div>A) ${q.options[0]}</div>
                            <div>B) ${q.options[1]}</div>
                            <div>C) ${q.options[2]}</div>
                            <div>D) ${q.options[3]}</div>
                        </div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4; background: rgba(0,0,0,0.15); padding: 0.5rem; border-radius: 6px;">
                            <strong>Gabarito:</strong> <span style="color: #34d399;">${letters[q.correctIndex]}) ${correctText}</span>
                        </div>
                        <div class="guide-admin-actions" style="margin-top: 0.5rem; justify-content: flex-end;">
                            <button class="guide-admin-btn edit" onclick="openAdminQuizModal('${q.id}')">✏ Editar</button>
                            <button class="guide-admin-btn delete" onclick="deleteQuizQuestion('${q.id}')">🗑 Remover</button>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        </div>`;
    }
    listEl.innerHTML = html;
}

function deleteQuizQuestion(id) {
    if (confirm('Deseja mesmo remover esta questão do quiz?')) {
        let bank = loadQuizBank();
        bank = bank.filter(q => q.id !== id);
        saveQuizBank(bank);
        renderAdminQuizList();
        alert('✅ Questão removida com sucesso!');
    }
}

function openAdminQuizModal(id) {
    _editingQuizId = id;
    const bank = loadQuizBank();
    const q = bank.find(item => item.id === id);

    const modal = document.getElementById('admin-quiz-modal');
    const modalTitle = document.getElementById('admin-quiz-modal-title');
    const selectSubject = document.getElementById('edit-quiz-subject');
    const newSubjFields = document.getElementById('new-subject-fields');
    const inputNewSubjName = document.getElementById('edit-quiz-new-subject-name');
    const inputNewSubjEmoji = document.getElementById('edit-quiz-new-subject-emoji');
    const inputQuestion = document.getElementById('edit-quiz-question');
    const inputOpt0 = document.getElementById('edit-quiz-opt0');
    const inputOpt1 = document.getElementById('edit-quiz-opt1');
    const inputOpt2 = document.getElementById('edit-quiz-opt2');
    const inputOpt3 = document.getElementById('edit-quiz-opt3');
    const selectCorrect = document.getElementById('edit-quiz-correct');
    const selectDifficulty = document.getElementById('edit-quiz-difficulty');
    const inputExplanation = document.getElementById('edit-quiz-explanation');

    if (!modal) return;

    // Reset subject fields
    newSubjFields.style.display = 'none';
    inputNewSubjName.value = '';
    inputNewSubjEmoji.value = '';

    // Populate options
    const subjects = getQuizSubjects();
    let selectHtml = '';
    subjects.forEach(s => {
        selectHtml += `<option value="${s.id}">${s.emoji} ${s.name}</option>`;
    });
    selectHtml += `<option value="new-subject">* Criar Nova Matéria...</option>`;
    selectSubject.innerHTML = selectHtml;

    if (q) {
        modalTitle.textContent = 'Editar Questão';
        selectSubject.value = q.subjectId;
        inputQuestion.value = q.question;
        inputOpt0.value = q.options[0] || '';
        inputOpt1.value = q.options[1] || '';
        inputOpt2.value = q.options[2] || '';
        inputOpt3.value = q.options[3] || '';
        selectCorrect.value = q.correctIndex;
        selectDifficulty.value = q.difficulty || 'medium';
        inputExplanation.value = q.explanation || '';
    } else {
        modalTitle.textContent = 'Nova Questão de Quiz';
        selectSubject.value = selectSubject.options[0]?.value || '';
        inputQuestion.value = '';
        inputOpt0.value = '';
        inputOpt1.value = '';
        inputOpt2.value = '';
        inputOpt3.value = '';
        selectCorrect.value = '0';
        selectDifficulty.value = 'medium';
        inputExplanation.value = '';
    }

    modal.classList.add('open');
}

function closeAdminQuizModal() {
    document.getElementById('admin-quiz-modal')?.classList.remove('open');
}

function saveAdminQuizQuestion() {
    const selectSubject = document.getElementById('edit-quiz-subject');
    const inputNewSubjName = document.getElementById('edit-quiz-new-subject-name');
    const inputNewSubjEmoji = document.getElementById('edit-quiz-new-subject-emoji');
    const inputQuestion = document.getElementById('edit-quiz-question').value.trim();
    const inputOpt0 = document.getElementById('edit-quiz-opt0').value.trim();
    const inputOpt1 = document.getElementById('edit-quiz-opt1').value.trim();
    const inputOpt2 = document.getElementById('edit-quiz-opt2').value.trim();
    const inputOpt3 = document.getElementById('edit-quiz-opt3').value.trim();
    const correctIndex = parseInt(document.getElementById('edit-quiz-correct').value);
    const difficulty = document.getElementById('edit-quiz-difficulty').value;
    const explanation = document.getElementById('edit-quiz-explanation').value.trim();

    if (!inputQuestion || !inputOpt0 || !inputOpt1 || !inputOpt2 || !inputOpt3) {
        alert('⚠️ Preencha a pergunta e todas as 4 alternativas!');
        return;
    }

    let subjectId = selectSubject.value;
    let subjectName = '';
    let subjectEmoji = '';

    if (subjectId === 'new-subject') {
        const newName = inputNewSubjName.value.trim();
        const newEmoji = inputNewSubjEmoji.value.trim() || '🎯';
        if (!newName) {
            alert('⚠️ Por favor, preencha o nome da nova matéria!');
            return;
        }
        subjectId = 'quiz-' + newName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-');
        subjectName = newName;
        subjectEmoji = newEmoji;
    } else {
        const subjects = getQuizSubjects();
        const match = subjects.find(s => s.id === subjectId);
        if (match) {
            subjectName = match.name;
            subjectEmoji = match.emoji;
        } else {
            subjectName = subjectId;
            subjectEmoji = '🎯';
        }
    }

    const bank = loadQuizBank();
    const existingIndex = bank.findIndex(item => item.id === _editingQuizId);

    const questionObj = {
        id: _editingQuizId || ('q-' + Date.now()),
        subjectId,
        subjectName,
        subjectEmoji,
        question: inputQuestion,
        options: [inputOpt0, inputOpt1, inputOpt2, inputOpt3],
        correctIndex,
        difficulty,
        explanation
    };

    if (existingIndex > -1) {
        bank[existingIndex] = questionObj;
    } else {
        bank.push(questionObj);
    }

    saveQuizBank(bank);
    closeAdminQuizModal();
    renderAdminQuizList();
    alert('✅ Questão salva com sucesso!');
}

// Wire events for quiz management
document.getElementById('close-admin-quiz-modal')?.addEventListener('click', closeAdminQuizModal);
document.getElementById('cancel-admin-quiz-modal')?.addEventListener('click', closeAdminQuizModal);
document.getElementById('save-admin-quiz-btn')?.addEventListener('click', saveAdminQuizQuestion);
document.getElementById('admin-quiz-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeAdminQuizModal();
});
document.getElementById('admin-add-quiz-btn')?.addEventListener('click', () => {
    openAdminQuizModal('q-' + Date.now());
});
document.getElementById('edit-quiz-subject')?.addEventListener('change', (e) => {
    const container = document.getElementById('new-subject-fields');
    if (container) {
        container.style.display = e.target.value === 'new-subject' ? 'flex' : 'none';
    }
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


// ============================================================
// MÓDULO DE Q&A — QUIZ DE MATÉRIAS
// ============================================================

// --- Banco de Questões Padrão ---
const DEFAULT_QUIZ_BANK = [
    // ─── WEB DEVELOPMENT ───
    {
        id: 'web-q1', subjectId: 'quiz-webdev', subjectName: 'Desenvolvimento Web', subjectEmoji: '🌐',
        question: 'Qual é a diferença entre os métodos HTTP GET e POST?',
        options: ['GET envia dados no corpo, POST na URL', 'GET é mais seguro que POST', 'GET envia dados na URL, POST no corpo da requisição', 'Não há diferença funcional entre eles'],
        correctIndex: 2, difficulty: 'easy',
        explanation: 'GET envia parâmetros na URL (visíveis e cacheáveis), ideal para leituras. POST envia no corpo da requisição, ideal para enviar dados sensíveis ou criar recursos.'
    },
    {
        id: 'web-q2', subjectId: 'quiz-webdev', subjectName: 'Desenvolvimento Web', subjectEmoji: '🌐',
        question: 'O que é o conceito de "closure" em JavaScript?',
        options: ['Uma função que retorna outra função', 'Uma função que tem acesso ao escopo léxico onde foi criada, mesmo após esse escopo encerrar', 'Um método para fechar conexões WebSocket', 'Um padrão para encapsular classes em JS'],
        correctIndex: 1, difficulty: 'medium',
        explanation: 'Closure é quando uma função "lembra" o escopo em que foi criada. Isso permite criar variáveis privadas e fábricas de funções com estado persistente.'
    },
    {
        id: 'web-q3', subjectId: 'quiz-webdev', subjectName: 'Desenvolvimento Web', subjectEmoji: '🌐',
        question: 'Qual propriedade CSS é responsável por criar um contexto de formatação flexível?',
        options: ['display: block', 'position: relative', 'display: flex', 'float: left'],
        correctIndex: 2, difficulty: 'easy',
        explanation: 'display: flex transforma o elemento em um flex container, ativando o Flexbox Layout Model e permitindo alinhar filhos com facilidade.'
    },
    {
        id: 'web-q4', subjectId: 'quiz-webdev', subjectName: 'Desenvolvimento Web', subjectEmoji: '🌐',
        question: 'O que faz o operador "===" (strict equality) no JavaScript?',
        options: ['Compara apenas valores, ignorando tipos', 'Compara valores e tipos sem coerção de tipo', 'É idêntico ao operador ==', 'Verifica apenas o tipo da variável'],
        correctIndex: 1, difficulty: 'easy',
        explanation: 'O === compara valor E tipo, sem coerção. Por exemplo: "5" === 5 retorna false, enquanto "5" == 5 retorna true por causa da coerção de tipo.'
    },
    {
        id: 'web-q5', subjectId: 'quiz-webdev', subjectName: 'Desenvolvimento Web', subjectEmoji: '🌐',
        question: 'Em React, qual hook é usado para executar efeitos colaterais em componentes funcionais?',
        options: ['useState', 'useCallback', 'useEffect', 'useContext'],
        correctIndex: 2, difficulty: 'medium',
        explanation: 'useEffect substitui os lifecycle methods de componentes de classe (componentDidMount, componentDidUpdate, componentWillUnmount) em componentes funcionais.'
    },
    {
        id: 'web-q6', subjectId: 'quiz-webdev', subjectName: 'Desenvolvimento Web', subjectEmoji: '🌐',
        question: 'O que é o "Event Loop" no JavaScript?',
        options: ['Um loop for..of específico para eventos DOM', 'O mecanismo que permite ao JS executar código assíncrono em uma thread única', 'Um padrão de design para gerenciar eventos', 'Uma API do Node.js exclusivamente'],
        correctIndex: 1, difficulty: 'hard',
        explanation: 'O Event Loop monitora a Call Stack e a Callback Queue. Quando a Call Stack está vazia, ele move callbacks da fila para execução, permitindo o comportamento assíncrono em JavaScript single-threaded.'
    },
    {
        id: 'web-q7', subjectId: 'quiz-webdev', subjectName: 'Desenvolvimento Web', subjectEmoji: '🌐',
        question: 'Qual a diferença entre "null" e "undefined" em JavaScript?',
        options: ['São exatamente a mesma coisa', 'null é ausência intencional de valor; undefined é variável declarada mas sem valor atribuído', 'undefined é um erro de sintaxe', 'null só existe em APIs do browser'],
        correctIndex: 1, difficulty: 'medium',
        explanation: 'undefined aparece quando uma variável é declarada mas não inicializada. null é atribuído intencionalmente pelo programador para indicar ausência de valor.'
    },
    {
        id: 'web-q8', subjectId: 'quiz-webdev', subjectName: 'Desenvolvimento Web', subjectEmoji: '🌐',
        question: 'O que é uma Promise.all() em JavaScript?',
        options: ['Executa Promises uma após a outra em sequência', 'Aguarda todas as Promises resolverem; rejeita se qualquer uma falhar', 'Retorna a Promise que resolver primeiro', 'Ignora rejeições e retorna só as resolvidas'],
        correctIndex: 1, difficulty: 'hard',
        explanation: 'Promise.all() recebe um array de Promises e resolve quando TODAS resolvem (retornando array de resultados) ou rejeita na primeira falha. Ideal para requisições paralelas interdependentes.'
    },
    {
        id: 'web-q9', subjectId: 'quiz-webdev', subjectName: 'Desenvolvimento Web', subjectEmoji: '🌐',
        question: 'Qual tag HTML5 é semanticamente correta para o conteúdo principal e único de uma página?',
        options: ['<div id="main">', '<section>', '<main>', '<article>'],
        correctIndex: 2, difficulty: 'easy',
        explanation: 'A tag <main> representa o conteúdo dominante do <body>. Deve existir apenas uma por página e não deve incluir cabeçalhos, rodapés ou menus de navegação repetidos.'
    },
    {
        id: 'web-q10', subjectId: 'quiz-webdev', subjectName: 'Desenvolvimento Web', subjectEmoji: '🌐',
        question: 'O que é "hoisting" em JavaScript?',
        options: ['Técnica de otimização do V8 Engine', 'Comportamento onde declarações de var e function são movidas ao topo do escopo antes da execução', 'Um método de deploy de aplicações web', 'Forma de importar módulos ES6'],
        correctIndex: 1, difficulty: 'hard',
        explanation: 'Hoisting é o processo do JS "elevar" declarações de var e funções ao topo do seu escopo durante a fase de compilação. Variáveis com var são elevadas como undefined; funções são elevadas completamente.'
    },

    // ─── PYTHON ───
    {
        id: 'py-q1', subjectId: 'quiz-python', subjectName: 'Python', subjectEmoji: '🐍',
        question: 'O que são "list comprehensions" em Python?',
        options: ['Uma forma de documentar listas', 'Uma sintaxe concisa para criar listas baseadas em iteráveis existentes', 'Módulo da biblioteca padrão para manipular listas', 'Uma forma de importar listas de arquivos externos'],
        correctIndex: 1, difficulty: 'easy',
        explanation: 'List comprehensions são a forma pythônica de criar listas: [x*2 for x in range(10) if x % 2 == 0]. São mais legíveis e geralmente mais rápidas que loops for tradicionais.'
    },
    {
        id: 'py-q2', subjectId: 'quiz-python', subjectName: 'Python', subjectEmoji: '🐍',
        question: 'Qual a diferença entre uma lista e uma tupla em Python?',
        options: ['Não há diferença prática', 'Listas são mutáveis; tuplas são imutáveis', 'Tuplas podem conter mais elementos', 'Listas só armazenam números'],
        correctIndex: 1, difficulty: 'easy',
        explanation: 'Listas (list) são mutáveis — você pode adicionar, remover e alterar elementos. Tuplas (tuple) são imutáveis — depois de criadas, não podem ser modificadas, o que as torna mais eficientes em memória.'
    },
    {
        id: 'py-q3', subjectId: 'quiz-python', subjectName: 'Python', subjectEmoji: '🐍',
        question: 'O que faz o decorador @staticmethod em uma classe Python?',
        options: ['Torna o método privado', 'Define um método que não recebe self ou cls como primeiro parâmetro', 'Cria uma propriedade somente-leitura', 'Impede que o método seja herdado'],
        correctIndex: 1, difficulty: 'medium',
        explanation: '@staticmethod define um método que não tem acesso ao objeto (self) nem à classe (cls). Funciona como uma função normal dentro do namespace da classe, útil para utilitários relacionados à classe.'
    },
    {
        id: 'py-q4', subjectId: 'quiz-python', subjectName: 'Python', subjectEmoji: '🐍',
        question: 'O que é o GIL (Global Interpreter Lock) no Python?',
        options: ['Uma biblioteca de segurança para Python', 'Um mecanismo que permite apenas uma thread executar código Python por vez no CPython', 'Um sistema de gerenciamento de pacotes', 'Uma forma de compilar Python para código nativo'],
        correctIndex: 1, difficulty: 'hard',
        explanation: 'O GIL é um mutex no CPython que impede múltiplas threads de executar bytecode Python simultaneamente. Por isso, threads Python não oferecem paralelismo real em tarefas CPU-bound, mas funcionam bem para I/O-bound.'
    },
    {
        id: 'py-q5', subjectId: 'quiz-python', subjectName: 'Python', subjectEmoji: '🐍',
        question: 'Qual método especial ("dunder") é chamado quando você usa len() em um objeto Python?',
        options: ['__size__', '__count__', '__len__', '__length__'],
        correctIndex: 2, difficulty: 'medium',
        explanation: 'Python usa "dunder methods" (double underscore) para implementar comportamentos built-in. __len__ é chamado por len(), __str__ por str(), __repr__ no console, etc. Isso é o que torna Python orientado a protocolos.'
    },
    {
        id: 'py-q6', subjectId: 'quiz-python', subjectName: 'Python', subjectEmoji: '🐍',
        question: 'O que é um "generator" em Python?',
        options: ['Um módulo que gera código Python automaticamente', 'Uma função que usa yield para produzir valores sob demanda, sem carregar tudo na memória', 'Uma classe que herda de Iterator', 'Um tipo especial de list comprehension'],
        correctIndex: 1, difficulty: 'medium',
        explanation: 'Generators usam yield em vez de return. Ao ser chamado, não executa o corpo — retorna um objeto generator. A cada chamada de next(), executa até o próximo yield. São lazy: geram valores sob demanda, economizando memória.'
    },
    {
        id: 'py-q7', subjectId: 'quiz-python', subjectName: 'Python', subjectEmoji: '🐍',
        question: 'Qual é a função do *args em uma assinatura de função Python?',
        options: ['Define argumentos obrigatórios', 'Permite passar um número variável de argumentos posicionais', 'Marca argumentos como somente-leitura', 'Define o valor padrão de um argumento'],
        correctIndex: 1, difficulty: 'easy',
        explanation: '*args coleta argumentos posicionais extras em uma tupla. **kwargs faz o mesmo para argumentos nomeados, criando um dicionário. Ambos permitem funções com assinaturas flexíveis.'
    },
    {
        id: 'py-q8', subjectId: 'quiz-python', subjectName: 'Python', subjectEmoji: '🐍',
        question: 'O que é o princípio "Pythonic" de código?',
        options: ['Código compatível com Python 2 e 3', 'Código que usa apenas a biblioteca padrão', 'Código idiomático que segue as convenções e filosofia do Python (PEP 8, Zen of Python)', 'Código que é mais rápido que C'],
        correctIndex: 2, difficulty: 'easy',
        explanation: 'Código Pythonic usa as idiomagens da linguagem: list comprehensions, context managers (with), unpacking, duck typing, etc. O Zen of Python (import this) define os princípios: simples é melhor que complexo, legibilidade conta.'
    },
    {
        id: 'py-q9', subjectId: 'quiz-python', subjectName: 'Python', subjectEmoji: '🐍',
        question: 'Qual estrutura de dados Python é ideal para verificações de pertencimento O(1)?',
        options: ['list', 'tuple', 'set', 'dict'],
        correctIndex: 2, difficulty: 'hard',
        explanation: 'Sets (e as chaves de dicts) usam hash tables, tornando verificações de pertencimento (x in my_set) O(1) em média. Em listas, a mesma operação é O(n) pois requer varredura linear.'
    },
    {
        id: 'py-q10', subjectId: 'quiz-python', subjectName: 'Python', subjectEmoji: '🐍',
        question: 'O que faz a função zip() em Python?',
        options: ['Comprime arquivos em formato ZIP', 'Combina múltiplos iteráveis em pares de tuplas', 'Converte uma lista em string', 'Ordena elementos de forma paralela'],
        correctIndex: 1, difficulty: 'easy',
        explanation: 'zip() pega múltiplos iteráveis e os combina elemento a elemento em tuplas: zip([1,2,3], ["a","b","c"]) → [(1,"a"), (2,"b"), (3,"c")]. Para no iterável mais curto. Muito usado para iterar listas em paralelo.'
    },

    // ─── MATEMÁTICA ───
    {
        id: 'mat-q1', subjectId: 'quiz-math', subjectName: 'Matemática', subjectEmoji: '📐',
        question: 'Qual é o valor de 2³ + √16?',
        options: ['10', '12', '14', '16'],
        correctIndex: 1, difficulty: 'easy',
        explanation: '2³ = 8 e √16 = 4. Portanto, 8 + 4 = 12.'
    },
    {
        id: 'mat-q2', subjectId: 'quiz-math', subjectName: 'Matemática', subjectEmoji: '📐',
        question: 'Uma equação do 2º grau ax² + bx + c = 0 tem raízes reais quando:',
        options: ['Δ = b² - 4ac < 0', 'Δ = b² - 4ac ≥ 0', 'a = 0 obrigatoriamente', 'b² = 4ac sempre'],
        correctIndex: 1, difficulty: 'medium',
        explanation: 'O discriminante Δ = b² - 4ac determina a natureza das raízes: Δ > 0 → duas raízes reais distintas; Δ = 0 → raiz dupla; Δ < 0 → raízes complexas (sem raízes reais).'
    },
    {
        id: 'mat-q3', subjectId: 'quiz-math', subjectName: 'Matemática', subjectEmoji: '📐',
        question: 'Qual é a fórmula da área de um triângulo?',
        options: ['A = lado × lado', 'A = π × r²', 'A = (base × altura) / 2', 'A = 2 × (base + altura)'],
        correctIndex: 2, difficulty: 'easy',
        explanation: 'A área de qualquer triângulo é A = (b × h) / 2, onde b é a base e h é a altura correspondente a essa base (perpendicular a ela).'
    },
    {
        id: 'mat-q4', subjectId: 'quiz-math', subjectName: 'Matemática', subjectEmoji: '📐',
        question: 'Em uma progressão aritmética (PA), o que define a razão (r)?',
        options: ['O produto entre termos consecutivos', 'A diferença constante entre dois termos consecutivos', 'O primeiro termo da sequência', 'A soma de todos os termos'],
        correctIndex: 1, difficulty: 'easy',
        explanation: 'Na PA, a razão r é a diferença constante entre cada termo e o anterior: r = a(n) - a(n-1). Na PA 2, 5, 8, 11... a razão é r = 3.'
    },
    {
        id: 'mat-q5', subjectId: 'quiz-math', subjectName: 'Matemática', subjectEmoji: '📐',
        question: 'Quantos graus tem a soma dos ângulos internos de um triângulo?',
        options: ['90°', '270°', '360°', '180°'],
        correctIndex: 3, difficulty: 'easy',
        explanation: 'A soma dos ângulos internos de qualquer triângulo é sempre 180°. Para polígonos em geral: S = (n-2) × 180°, onde n é o número de lados.'
    },
    {
        id: 'mat-q6', subjectId: 'quiz-math', subjectName: 'Matemática', subjectEmoji: '📐',
        question: 'O que afirma o Teorema de Pitágoras?',
        options: ['Em todo triângulo, a soma dos lados é constante', 'Em um triângulo retângulo, a² + b² = c², onde c é a hipotenusa', 'Todo triângulo equilátero tem ângulos de 60°', 'A área do quadrado é igual ao lado ao quadrado'],
        correctIndex: 1, difficulty: 'easy',
        explanation: 'O Teorema de Pitágoras afirma que em triângulos retângulos, o quadrado da hipotenusa (lado oposto ao ângulo de 90°) é igual à soma dos quadrados dos catetos: c² = a² + b².'
    },
    {
        id: 'mat-q7', subjectId: 'quiz-math', subjectName: 'Matemática', subjectEmoji: '📐',
        question: 'Qual é o resultado de log₁₀(1000)?',
        options: ['2', '3', '4', '10'],
        correctIndex: 1, difficulty: 'medium',
        explanation: 'log₁₀(1000) = x significa 10ˣ = 1000. Como 10³ = 1000, então log₁₀(1000) = 3.'
    },
    {
        id: 'mat-q8', subjectId: 'quiz-math', subjectName: 'Matemática', subjectEmoji: '📐',
        question: 'Qual é o valor de sen(30°)?',
        options: ['√2/2', '√3/2', '1/2', '1'],
        correctIndex: 2, difficulty: 'medium',
        explanation: 'Os valores especiais do seno: sen(30°) = 1/2, sen(45°) = √2/2, sen(60°) = √3/2, sen(90°) = 1. Memorize o triângulo 30-60-90!'
    },
    {
        id: 'mat-q9', subjectId: 'quiz-math', subjectName: 'Matemática', subjectEmoji: '📐',
        question: 'Em uma Progressão Geométrica (PG) de razão q = 2 e primeiro termo a₁ = 3, qual é o 4º termo?',
        options: ['12', '24', '18', '48'],
        correctIndex: 1, difficulty: 'medium',
        explanation: 'O n-ésimo termo da PG é: aₙ = a₁ × q^(n-1). Então a₄ = 3 × 2³ = 3 × 8 = 24.'
    },
    {
        id: 'mat-q10', subjectId: 'quiz-math', subjectName: 'Matemática', subjectEmoji: '📐',
        question: 'Qual é a probabilidade de obter "cara" no lançamento de uma moeda honesta?',
        options: ['1/4', '1/3', '1/2', '2/3'],
        correctIndex: 2, difficulty: 'easy',
        explanation: 'Uma moeda tem 2 resultados igualmente prováveis: cara ou coroa. A probabilidade de cara = casos favoráveis / total = 1/2 = 50%.'
    },

    // ─── INGLÊS ───
    {
        id: 'eng-q1', subjectId: 'quiz-english', subjectName: 'Inglês', subjectEmoji: '🇺🇸',
        question: 'Qual a tradução correta de "Nevertheless"?',
        options: ['Consequentemente', 'Entretanto / No entanto', 'Além disso', 'Em vez disso'],
        correctIndex: 1, difficulty: 'medium',
        explanation: '"Nevertheless" é um advérbio de contraste equivalente a "even so" ou "however" — significa "mesmo assim" ou "no entanto". Ex: "It was raining; nevertheless, we went out."'
    },
    {
        id: 'eng-q2', subjectId: 'quiz-english', subjectName: 'Inglês', subjectEmoji: '🇺🇸',
        question: 'Qual a diferença entre "affect" e "effect"?',
        options: ['"Affect" é substantivo, "effect" é verbo', '"Affect" é geralmente verbo (afetar); "effect" é geralmente substantivo (efeito)', 'São sinônimos intercambiáveis', '"Effect" é mais formal que "affect"'],
        correctIndex: 1, difficulty: 'medium',
        explanation: '"Affect" é principalmente verbo: "Stress affects your health." "Effect" é principalmente substantivo: "The effect was immediate." Exceção: "to effect change" (efetuar uma mudança) usa "effect" como verbo.'
    },
    {
        id: 'eng-q3', subjectId: 'quiz-english', subjectName: 'Inglês', subjectEmoji: '🇺🇸',
        question: 'O Present Perfect é formado por:',
        options: ['Subject + did + verb', 'Subject + have/has + past participle', 'Subject + be + verb-ing', 'Subject + will + verb'],
        correctIndex: 1, difficulty: 'easy',
        explanation: 'Present Perfect = have/has + past participle (3ª forma). Ex: "I have studied" (eu tenho estudado). "She has finished" (ela terminou). Usado para ações passadas com relevância no presente.'
    },
    {
        id: 'eng-q4', subjectId: 'quiz-english', subjectName: 'Inglês', subjectEmoji: '🇺🇸',
        question: 'O que significa a expressão idiomática "Break a leg"?',
        options: ['Tomar cuidado com quedas', 'Boa sorte!', 'Trabalhar muito duro', 'Descansar'],
        correctIndex: 1, difficulty: 'easy',
        explanation: '"Break a leg!" é uma expressão idiomática de boa sorte, muito usada no mundo artístico. Dizer "good luck" diretamente seria "azar" na tradição teatral, então surgiu esse eufemismo.'
    },
    {
        id: 'eng-q5', subjectId: 'quiz-english', subjectName: 'Inglês', subjectEmoji: '🇺🇸',
        question: 'Qual a forma correta do condicional do tipo 2 (hipotético presente)?',
        options: ['If + Simple Present, will + verb', 'If + Simple Past, would + verb', 'If + Past Perfect, would have + past participle', 'If + Present Perfect, would + verb'],
        correctIndex: 1, difficulty: 'hard',
        explanation: 'O 2nd Conditional expressa situações hipotéticas no presente/futuro: "If I had more time, I would study more." (Se eu tivesse mais tempo, estudaria mais.) Usa Simple Past na condição e would + bare infinitive no resultado.'
    },
    {
        id: 'eng-q6', subjectId: 'quiz-english', subjectName: 'Inglês', subjectEmoji: '🇺🇸',
        question: 'O que é "passive voice"? Dê um exemplo correto:',
        options: ['"She wrote the report" — a ação é da voz ativa', '"The report was written by her" — o objeto vira sujeito', '"He was writing when I called" — passado contínuo', '"She will write" — futuro simples'],
        correctIndex: 1, difficulty: 'medium',
        explanation: 'A voz passiva (passive voice) coloca o objeto da ação como sujeito. Formada por: be + past participle. "The book was read by many students." O agente pode ser omitido: "The book was read."'
    },
    {
        id: 'eng-q7', subjectId: 'quiz-english', subjectName: 'Inglês', subjectEmoji: '🇺🇸',
        question: 'Qual o significado de "on the fence" em inglês?',
        options: ['Estar com muito trabalho', 'Não ter decidido entre duas opções; ser neutro', 'Estar na fronteira de dois países', 'Treinar exercícios físicos'],
        correctIndex: 1, difficulty: 'medium',
        explanation: '"On the fence" significa estar indeciso, neutro, sem ter tomado partido. Ex: "I\'m still on the fence about accepting that job offer." (Ainda estou indeciso sobre aceitar aquela oferta de emprego.)'
    },
    {
        id: 'eng-q8', subjectId: 'quiz-english', subjectName: 'Inglês', subjectEmoji: '🇺🇸',
        question: 'Qual a diferença entre "since" e "for" com o Present Perfect?',
        options: ['Não há diferença', '"Since" refere-se a um ponto no tempo; "for" refere-se a uma duração', '"For" só é usado com passado simples', '"Since" indica frequência'],
        correctIndex: 1, difficulty: 'medium',
        explanation: '"Since" marca o ponto de início: "I\'ve lived here since 2020." "For" indica a duração: "I\'ve lived here for 4 years." Ambos usam Present Perfect para situações que começaram no passado e continuam.'
    },
    {
        id: 'eng-q9', subjectId: 'quiz-english', subjectName: 'Inglês', subjectEmoji: '🇺🇸',
        question: 'O que é um "false friend" (falso cognato)?',
        options: ['Uma palavra inglesa sem tradução', 'Palavras parecidas em inglês e português, mas com significados diferentes', 'Gírias informais do inglês americano', 'Palavras originadas do latim'],
        correctIndex: 1, difficulty: 'easy',
        explanation: 'False friends são palavras visualmente parecidas mas com significados diferentes. Ex: "actually" não é "atualmente" (é "na verdade"); "pretend" não é "pretender" (é "fingir"); "parents" não é "parentes" (é "pais").'
    },
    {
        id: 'eng-q10', subjectId: 'quiz-english', subjectName: 'Inglês', subjectEmoji: '🇺🇸',
        question: 'Qual a tradução de "throughput" no contexto de tecnologia?',
        options: ['Entrada de dados', 'Taxa de transferência / volume processado por unidade de tempo', 'Saída de erros', 'Tempo de resposta'],
        correctIndex: 1, difficulty: 'hard',
        explanation: '"Throughput" é o volume de dados/operações processados por unidade de tempo. Em redes: bits por segundo. Em bancos de dados: transações por segundo. Diferente de "latency" (tempo de uma única operação).'
    },

    // ─── LÓGICA DE PROGRAMAÇÃO ───
    {
        id: 'log-q1', subjectId: 'quiz-logic', subjectName: 'Lógica de Programação', subjectEmoji: '🧩',
        question: 'Qual estrutura de dados opera no princípio FIFO (First In, First Out)?',
        options: ['Stack (Pilha)', 'Queue (Fila)', 'Array', 'Hash Map'],
        correctIndex: 1, difficulty: 'easy',
        explanation: 'Queue (Fila) segue FIFO: o primeiro elemento a entrar é o primeiro a sair, como uma fila de banco. Stack (Pilha) segue LIFO: o último a entrar é o primeiro a sair, como uma pilha de pratos.'
    },
    {
        id: 'log-q2', subjectId: 'quiz-logic', subjectName: 'Lógica de Programação', subjectEmoji: '🧩',
        question: 'O que é um algoritmo de busca binária e qual sua complexidade?',
        options: ['Busca sequencial com complexidade O(n)', 'Busca em array ordenado que divide o espaço ao meio a cada passo, complexidade O(log n)', 'Busca em grafos com complexidade O(n²)', 'Busca usando hash tables com complexidade O(1)'],
        correctIndex: 1, difficulty: 'medium',
        explanation: 'Busca binária requer array ordenado. A cada iteração, compara o elemento do meio: se menor, busca na metade esquerda; se maior, na metade direita. Complexidade O(log n) — buscar em 1 milhão de itens leva ~20 comparações.'
    },
    {
        id: 'log-q3', subjectId: 'quiz-logic', subjectName: 'Lógica de Programação', subjectEmoji: '🧩',
        question: 'O que é recursão em programação?',
        options: ['Um loop while sem condição de parada', 'Uma função que chama a si mesma com um caso base para parar', 'Um padrão de design orientado a objetos', 'Uma técnica de otimização de memória'],
        correctIndex: 1, difficulty: 'easy',
        explanation: 'Recursão ocorre quando uma função chama a si mesma. Toda função recursiva precisa de: (1) Caso base — condição que para a recursão; (2) Caso recursivo — chama a si mesma com input menor. Exemplo clássico: fatorial.'
    },
    {
        id: 'log-q4', subjectId: 'quiz-logic', subjectName: 'Lógica de Programação', subjectEmoji: '🧩',
        question: 'Qual é a complexidade do algoritmo Bubble Sort no pior caso?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctIndex: 3, difficulty: 'medium',
        explanation: 'Bubble Sort tem complexidade O(n²) no pior caso (array invertido), pois usa dois loops aninhados: para cada elemento, percorre o restante do array. É simples mas ineficiente para grandes volumes de dados.'
    },
    {
        id: 'log-q5', subjectId: 'quiz-logic', subjectName: 'Lógica de Programação', subjectEmoji: '🧩',
        question: 'O que é uma "árvore binária de busca" (BST)?',
        options: ['Uma estrutura onde cada nó tem exatamente 2 filhos', 'Uma árvore onde o filho esquerdo tem valor menor e o direito tem valor maior que o nó pai', 'Um grafo sem ciclos com exatamente 2 arestas por nó', 'Uma lista ligada com ponteiros duplos'],
        correctIndex: 1, difficulty: 'hard',
        explanation: 'Em uma BST, para cada nó: todos os valores na subárvore esquerda são menores, e na direita são maiores. Isso permite busca, inserção e remoção em O(log n) para árvores balanceadas.'
    },
    {
        id: 'log-q6', subjectId: 'quiz-logic', subjectName: 'Lógica de Programação', subjectEmoji: '🧩',
        question: 'O que significa "Big O notation" em algoritmos?',
        options: ['O tamanho do código em linhas', 'Uma forma de medir e comparar a eficiência de algoritmos em termos de tempo e espaço em função do tamanho da entrada', 'O número de bugs em um programa', 'A quantidade de memória RAM necessária'],
        correctIndex: 1, difficulty: 'medium',
        explanation: 'Big O descreve como o tempo/espaço de execução cresce conforme o input (n) aumenta, ignorando constantes. O(1) é constante, O(log n) é logarítmico, O(n) é linear, O(n²) é quadrático.'
    },
    {
        id: 'log-q7', subjectId: 'quiz-logic', subjectName: 'Lógica de Programação', subjectEmoji: '🧩',
        question: 'Qual a diferença entre uma lista ligada (linked list) e um array?',
        options: ['Não há diferença de performance', 'Arrays têm acesso aleatório O(1); linked lists têm inserção/remoção O(1) mas acesso O(n)', 'Linked lists usam menos memória sempre', 'Arrays são apenas para números'],
        correctIndex: 1, difficulty: 'hard',
        explanation: 'Arrays: acesso por índice O(1), mas inserção no meio O(n) (desloca elementos). Linked Lists: acesso sequencial O(n), mas inserção/remoção com ponteiro O(1). Tradeoff: acesso vs. modificação.'
    },
    {
        id: 'log-q8', subjectId: 'quiz-logic', subjectName: 'Lógica de Programação', subjectEmoji: '🧩',
        question: 'O que é "memoization" em programação?',
        options: ['Técnica de gerenciamento de memória RAM', 'Otimização que armazena resultados de funções caras para reutilizá-los quando as mesmas entradas ocorrem', 'Um tipo especial de array em memória', 'Processo de caching de páginas web'],
        correctIndex: 1, difficulty: 'hard',
        explanation: 'Memoization armazena resultados de chamadas de função em um cache (geralmente um dicionário/hash). Se a função for chamada novamente com os mesmos argumentos, retorna o valor cacheado ao invés de recalcular.'
    },
    {
        id: 'log-q9', subjectId: 'quiz-logic', subjectName: 'Lógica de Programação', subjectEmoji: '🧩',
        question: 'Qual operador lógico retorna true APENAS quando ambos os operandos são true?',
        options: ['OR (||)', 'NOT (!)', 'AND (&&)', 'XOR (^)'],
        correctIndex: 2, difficulty: 'easy',
        explanation: 'AND (&&) retorna true somente quando A=true E B=true. OR retorna true se pelo menos um for true. NOT inverte o valor. XOR retorna true quando os valores são diferentes.'
    },
    {
        id: 'log-q10', subjectId: 'quiz-logic', subjectName: 'Lógica de Programação', subjectEmoji: '🧩',
        question: 'O que é um grafo no contexto de estruturas de dados?',
        options: ['Um tipo de gráfico matemático 2D', 'Uma estrutura de dados com nós (vértices) conectados por arestas, que podem ter direção e peso', 'Uma tabela de hash com colisões', 'Uma árvore binária com mais de 2 filhos'],
        correctIndex: 1, difficulty: 'medium',
        explanation: 'Grafos modelam relacionamentos: redes sociais, mapas, internet. Compostos por vértices (nós) e arestas (conexões). Podem ser direcionados (digrafos) ou não, ponderados (com pesos) ou não. BFS e DFS são algoritmos clássicos de travessia.'
    }
];

// --- Estado do Quiz em andamento ---
let quizState = {
    subjectId: null,
    subjectName: '',
    questions: [],
    currentIndex: 0,
    correctCount: 0,
    wrongCount: 0,
    xpEarned: 0,
    answered: false
};

// --- Carregar banco de questões (extensível via localStorage) ---
function loadQuizBank() {
    const saved = localStorage.getItem('quizBank');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao ler quizBank do localStorage:', e);
        }
    }
    // Salva o padrão no localStorage se não houver nada salvo
    localStorage.setItem('quizBank', JSON.stringify(DEFAULT_QUIZ_BANK));
    return DEFAULT_QUIZ_BANK;
}

function saveQuizBank(bank) {
    localStorage.setItem('quizBank', JSON.stringify(bank));
}

// --- Retorna questões únicas de um subject, embaralhadas e limitadas a 10 ---
function getQuestionsForSubject(subjectId) {
    const bank = loadQuizBank();
    const filtered = bank.filter(q => q.subjectId === subjectId);
    // Fisher-Yates shuffle
    for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }
    return filtered.slice(0, 10);
}

// --- Retorna matérias únicas do banco ---
function getQuizSubjects() {
    const bank = loadQuizBank();
    const seen = new Set();
    const subjects = [];
    bank.forEach(q => {
        if (!seen.has(q.subjectId)) {
            seen.add(q.subjectId);
            subjects.push({ id: q.subjectId, name: q.subjectName, emoji: q.subjectEmoji });
        }
    });
    return subjects;
}

// --- Utilitário: busca melhor resultado de um subject no histórico ---
function getBestScore(subjectId) {
    const history = (state.quizHistory || []).filter(h => h.subjectId === subjectId);
    if (!history.length) return null;
    return history.reduce((best, h) => h.score > best.score ? h : best);
}

// ============================================================
// RENDER QUIZ — TELA 1: Seleção de Matéria
// ============================================================
function renderQuiz() {
    // Mostra screen de seleção, esconde as outras
    document.getElementById('quiz-screen-select').style.display = 'block';
    document.getElementById('quiz-screen-active').style.display = 'none';
    document.getElementById('quiz-screen-result').style.display = 'none';

    const grid = document.getElementById('quiz-subject-grid');
    const subjects = getQuizSubjects();

    grid.innerHTML = subjects.map(s => {
        const best = getBestScore(s.id);
        const historyHtml = best
            ? `<div class="quiz-subject-history has-record">✅ Melhor: ${best.score}/10 — ${best.xpEarned} XP</div>`
            : `<div class="quiz-subject-history">Ainda não jogado</div>`;

        const bank = loadQuizBank().filter(q => q.subjectId === s.id);
        return `
        <div class="quiz-subject-card" onclick="startQuiz('${s.id}')">
            <div class="quiz-subject-emoji">${s.emoji}</div>
            <div class="quiz-subject-name">${s.name}</div>
            <div class="quiz-subject-meta">
                <span>${bank.length} questões</span>
                10 por rodada
            </div>
            ${historyHtml}
        </div>`;
    }).join('');
}

// ============================================================
// START QUIZ — Inicia a sessão de quiz
// ============================================================
function startQuiz(subjectId) {
    const questions = getQuestionsForSubject(subjectId);
    if (!questions.length) return;

    const subjectInfo = getQuizSubjects().find(s => s.id === subjectId);

    quizState = {
        subjectId,
        subjectName: subjectInfo ? subjectInfo.name : subjectId,
        questions,
        currentIndex: 0,
        correctCount: 0,
        wrongCount: 0,
        xpEarned: 0,
        answered: false
    };

    document.getElementById('quiz-screen-select').style.display = 'none';
    document.getElementById('quiz-screen-active').style.display = 'block';
    document.getElementById('quiz-screen-result').style.display = 'none';

    document.getElementById('quiz-subject-label').textContent = subjectInfo ? subjectInfo.name : '';
    document.getElementById('quiz-live-xp').textContent = '0 XP';

    renderActiveQuestion();
}

// ============================================================
// RENDER ACTIVE QUESTION — Tela 2
// ============================================================
function renderActiveQuestion() {
    const q = quizState.questions[quizState.currentIndex];
    const total = quizState.questions.length;
    const current = quizState.currentIndex + 1;

    // Progress bar
    const progressPct = ((current - 1) / total) * 100;
    document.getElementById('quiz-progress-bar').style.width = progressPct + '%';

    // Counter
    document.getElementById('quiz-question-counter').textContent = `Pergunta ${current} / ${total}`;

    // Difficulty badge
    const badge = document.getElementById('quiz-difficulty-badge');
    const diffLabels = { easy: 'Fácil', medium: 'Médio', hard: 'Difícil' };
    badge.textContent = diffLabels[q.difficulty] || 'Médio';
    badge.className = 'quiz-difficulty-badge ' + (q.difficulty || 'medium');

    // Question text
    document.getElementById('quiz-question-text').textContent = q.question;

    // Options
    const letters = ['A', 'B', 'C', 'D'];
    const optionsGrid = document.getElementById('quiz-options-grid');
    optionsGrid.innerHTML = q.options.map((opt, i) => `
        <button class="quiz-option-btn" data-index="${i}" onclick="handleAnswer(${i})">
            <span class="quiz-option-letter">${letters[i]}</span>
            <span class="quiz-option-text">${opt}</span>
        </button>
    `).join('');

    // Hide feedback box
    const feedbackBox = document.getElementById('quiz-feedback-box');
    feedbackBox.style.display = 'none';
    feedbackBox.className = 'quiz-feedback-box';

    quizState.answered = false;
}

// ============================================================
// HANDLE ANSWER — Processa resposta
// ============================================================
function handleAnswer(selectedIndex) {
    if (quizState.answered) return;
    quizState.answered = true;

    const q = quizState.questions[quizState.currentIndex];
    const isCorrect = selectedIndex === q.correctIndex;

    // XP por dificuldade
    const xpTable = { easy: 15, medium: 25, hard: 40 };
    const xpGain = isCorrect ? (xpTable[q.difficulty] || 25) : 0;

    if (isCorrect) {
        quizState.correctCount++;
        quizState.xpEarned += xpGain;
    } else {
        quizState.wrongCount++;
    }

    // Disable all buttons e aplica estilos
    const buttons = document.querySelectorAll('.quiz-option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        const btnIdx = parseInt(btn.getAttribute('data-index'));
        if (btnIdx === q.correctIndex) {
            btn.classList.add(isCorrect && btnIdx === selectedIndex ? 'selected-correct' : 'show-correct');
        }
        if (!isCorrect && btnIdx === selectedIndex) {
            btn.classList.add('selected-wrong');
        }
    });

    // Feedback box
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const feedbackIcon = document.getElementById('quiz-feedback-icon');
    const feedbackText = document.getElementById('quiz-feedback-text');
    const explanationText = document.getElementById('quiz-explanation-text');

    if (isCorrect) {
        feedbackBox.className = 'quiz-feedback-box correct-feedback';
        feedbackIcon.textContent = '✅';
        feedbackText.textContent = `Correto! +${xpGain} XP`;
        feedbackText.style.color = '#34d399';
    } else {
        feedbackBox.className = 'quiz-feedback-box wrong-feedback';
        feedbackIcon.textContent = '❌';
        feedbackText.textContent = 'Incorreto!';
        feedbackText.style.color = '#f87171';
    }

    explanationText.textContent = q.explanation;
    feedbackBox.style.display = 'flex';

    // Atualiza XP ao vivo
    document.getElementById('quiz-live-xp').textContent = `${quizState.xpEarned} XP`;

    // Botão próxima pergunta
    const nextBtn = document.getElementById('quiz-next-btn');
    const isLast = quizState.currentIndex >= quizState.questions.length - 1;
    nextBtn.textContent = isLast ? 'Ver Resultado 🏆' : 'Próxima Pergunta →';
    nextBtn.onclick = () => {
        if (isLast) {
            showQuizResult();
        } else {
            quizState.currentIndex++;
            renderActiveQuestion();
        }
    };
}

// ============================================================
// EXIT QUIZ
// ============================================================
document.getElementById('quiz-exit-btn')?.addEventListener('click', () => {
    if (confirm('Deseja mesmo sair do quiz? Seu progresso atual será perdido.')) {
        renderQuiz();
    }
});

// ============================================================
// SHOW QUIZ RESULT — Tela 3
// ============================================================
function showQuizResult() {
    const { correctCount, wrongCount, xpEarned, subjectId, questions } = quizState;
    const total = questions.length;
    const isPerfect = correctCount === total;
    const pct = correctCount / total;

    // Save to history
    if (!state.quizHistory) state.quizHistory = [];
    state.quizHistory.push({
        subjectId,
        score: correctCount,
        total,
        xpEarned,
        isPerfect,
        date: new Date().toLocaleDateString('pt-BR')
    });

    // Award XP
    if (xpEarned > 0) {
        awardXP(xpEarned, `Quiz: ${quizState.subjectName}`);
    }
    if (isPerfect) {
        awardXP(50, 'Bônus: Quiz Perfeito!');
    }

    // Achievements
    unlockAchievement('quiz_champion');
    if (isPerfect) unlockAchievement('quiz_perfect');

    saveToLocalStorage();

    // Switch to result screen
    document.getElementById('quiz-screen-active').style.display = 'none';
    document.getElementById('quiz-screen-result').style.display = 'block';

    // Result emoji and title based on score
    let emoji, title, subtitle;
    if (isPerfect) {
        emoji = '🌟'; title = 'Nota 10! Perfeito!'; subtitle = 'Você acertou TUDO! Você domina este assunto!';
    } else if (pct >= 0.8) {
        emoji = '🏆'; title = 'Excelente!'; subtitle = 'Resultado incrível! Você tem domínio sólido nesta matéria.';
    } else if (pct >= 0.6) {
        emoji = '👍'; title = 'Muito bom!'; subtitle = 'Bom desempenho! Continue estudando para dominar completamente.';
    } else if (pct >= 0.4) {
        emoji = '📚'; title = 'Continue praticando!'; subtitle = 'Você está no caminho certo. Revise o conteúdo e tente de novo!';
    } else {
        emoji = '💪'; title = 'Não desista!'; subtitle = 'Todos começam assim. Revise o material e tente novamente!';
    }

    document.getElementById('quiz-result-emoji').textContent = emoji;
    document.getElementById('quiz-result-title').textContent = title;
    document.getElementById('quiz-result-subtitle').textContent = subtitle;
    document.getElementById('quiz-result-score').textContent = `${correctCount}/${total}`;
    document.getElementById('quiz-result-xp').textContent = `+${xpEarned + (isPerfect ? 50 : 0)}`;
    document.getElementById('quiz-result-correct').textContent = correctCount;
    document.getElementById('quiz-result-wrong').textContent = wrongCount;

    // Animated score ring (circumference 326.73 for r=52)
    const circumference = 326.73;
    const offset = circumference - (pct * circumference);
    const ringEl = document.getElementById('quiz-score-ring-fill');
    // Add gradient definition to SVG
    const svg = ringEl.closest('svg');
    if (!svg.querySelector('#quiz-ring-gradient')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = `<linearGradient id="quiz-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#6366f1"/>
            <stop offset="100%" style="stop-color:#14b8a6"/>
        </linearGradient>`;
        svg.prepend(defs);
    }
    ringEl.style.stroke = 'url(#quiz-ring-gradient)';
    ringEl.style.strokeDashoffset = circumference;
    setTimeout(() => {
        ringEl.style.strokeDashoffset = offset;
    }, 100);

    // Confetti for perfect score
    if (isPerfect) {
        spawnQuizConfetti();
    }

    // Wire buttons
    document.getElementById('quiz-retry-btn').onclick = () => {
        startQuiz(quizState.subjectId);
    };
    document.getElementById('quiz-back-btn').onclick = () => {
        renderQuiz();
    };
}

// --- Confetti animation for perfect score ---
function spawnQuizConfetti() {
    const colors = ['#6366f1', '#14b8a6', '#f43f5e', '#f59e0b', '#10b981', '#a5b4fc'];
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'quiz-confetti-particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = '-20px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.width = (Math.random() * 10 + 6) + 'px';
            particle.style.height = (Math.random() * 10 + 6) + 'px';
            particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            particle.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
            particle.style.animationDelay = '0s';
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 3500);
        }, i * 35);
    }
}