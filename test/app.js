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
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        let sectionId = item.getAttribute('data-target');
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


// --- 2: Study Guides & Roadmaps Logic ---
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
    let viewHeader = document.querySelector('.roadmap-viewer');
    
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
                    <span class="step-title">${index + 1}. ${step.title}</span>
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
        
        // Checkbox status changer
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
        
        stepsList.appendChild(card);
    });
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
    if (!activeDeck) {
        document.getElementById('active-deck-title').innerText = "Nenhum Baralho Ativo";
        document.getElementById('deck-srs-status-box').style.display = 'none';
        document.getElementById('open-add-card-modal-btn').style.display = 'none';
        document.getElementById('deck-empty-view').style.display = 'flex';
        document.getElementById('flashcard-box').style.display = 'none';
        document.getElementById('flashcard-leitner-controls-box').style.display = 'none';
        return;
    }
    
    document.getElementById('active-deck-title').innerText = activeDeck.title;
    document.getElementById('deck-srs-status-box').style.display = 'flex';
    document.getElementById('open-add-card-modal-btn').style.display = 'block';
    
    // Calculate Spaced Repetition categories (Leitner boxes)
    let hard = activeDeck.cards.filter(c => c.srsStage === 1).length;
    let med = activeDeck.cards.filter(c => c.srsStage === 2).length;
    let easy = activeDeck.cards.filter(c => c.srsStage === 3).length;
    
    document.getElementById('deck-count-hard').innerText = `${hard} Difíceis`;
    document.getElementById('deck-count-medium').innerText = `${med} Médios`;
    document.getElementById('deck-count-easy').innerText = `${easy} Fáceis`;
    
    // Prepare study queue
    activeCardQueue = [...activeDeck.cards];
    if (activeCardQueue.length === 0) {
        document.getElementById('deck-empty-view').style.display = 'flex';
        document.getElementById('flashcard-box').style.display = 'none';
        document.getElementById('flashcard-leitner-controls-box').style.display = 'none';
    } else {
        document.getElementById('deck-empty-view').style.display = 'none';
        document.getElementById('flashcard-box').style.display = 'block';
        document.getElementById('flashcard-leitner-controls-box').style.display = 'flex';
        
        if (currentQueueIndex >= activeCardQueue.length) {
            currentQueueIndex = 0;
        }
        
        displayActiveCard();
    }
}

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
    loadFromLocalStorage();
    renderStatsHeader();
    renderDashboard();
};
