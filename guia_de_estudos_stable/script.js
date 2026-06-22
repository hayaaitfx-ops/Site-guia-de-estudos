// ============================================
// ACCESSIBILITY - FONT SIZE CONTROL
// ============================================
let currentFontSize = 'normal';
const fontSizeBtn = document.getElementById('fontSizeBtn');

if (fontSizeBtn) {
    fontSizeBtn.addEventListener('click', () => {
        if (currentFontSize === 'normal') currentFontSize = 'lg';
        else if (currentFontSize === 'lg') currentFontSize = 'xl';
        else if (currentFontSize === 'xl') currentFontSize = 'sm';
        else currentFontSize = 'normal';

        document.body.classList.remove('font-size-lg', 'font-size-xl', 'font-size-sm');
        if (currentFontSize !== 'normal') document.body.classList.add(`font-size-${currentFontSize}`);
        localStorage.setItem('fontSizePreference', currentFontSize);
        updateFontSizeButtonFeedback();
    });

    const savedFontSize = localStorage.getItem('fontSizePreference');
    if (savedFontSize && savedFontSize !== 'normal') {
        currentFontSize = savedFontSize;
        document.body.classList.add(`font-size-${currentFontSize}`);
    }
    updateFontSizeButtonFeedback();
}

function updateFontSizeButtonFeedback() {
    const btn = document.getElementById('fontSizeBtn');
    if (!btn) return;
    const labels = { normal: 'A', sm: 'A', lg: 'A+', xl: 'A++' };
    btn.title = `Tamanho da Fonte: ${labels[currentFontSize]}`;
}

// ============================================
// PASSWORD STRENGTH VALIDATION
// ============================================
const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

if (passwordInput) passwordInput.addEventListener('input', checkPasswordStrength);

function checkPasswordStrength() {
    const password = passwordInput.value;
    const reqIds = ['req-length','req-uppercase','req-lowercase','req-number','req-special'];
    reqIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('met');
    });

    const requirements = {
        'req-length':    password.length >= 8,
        'req-uppercase': /[A-Z]/.test(password),
        'req-lowercase': /[a-z]/.test(password),
        'req-number':    /[0-9]/.test(password),
        'req-special':   /[!@#$%^&*]/.test(password)
    };

    Object.entries(requirements).forEach(([id, met]) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (met) {
            el.classList.add('met');
            el.textContent = el.textContent.replace('✗', '✓');
        } else {
            el.textContent = el.textContent.replace('✓', '✗');
        }
    });

    let strength = Object.values(requirements).filter(Boolean).length;

    if (password.length === 0) {
        strengthBar.className = 'strength-bar';
        strengthText.className = 'strength-text';
        strengthText.textContent = 'Digite uma senha';
    } else if (strength <= 2) {
        strengthBar.className = 'strength-bar weak';
        strengthText.className = 'strength-text weak';
        strengthText.textContent = '🔴 Fraca - Adicione mais requisitos';
    } else if (strength === 3) {
        strengthBar.className = 'strength-bar medium';
        strengthText.className = 'strength-text medium';
        strengthText.textContent = '🟡 Média - Quase lá!';
    } else if (strength === 4) {
        strengthBar.className = 'strength-bar strong';
        strengthText.className = 'strength-text strong';
        strengthText.textContent = '🟢 Forte - Boa!';
    } else {
        strengthBar.className = 'strength-bar very-strong';
        strengthText.className = 'strength-text very-strong';
        strengthText.textContent = '🟢 Muito Forte - Excelente!';
    }

    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) loginBtn.disabled = strength < 4;
}

function isPasswordStrong(password) {
    const reqs = [
        password.length >= 8,
        /[A-Z]/.test(password),
        /[a-z]/.test(password),
        /[0-9]/.test(password),
        /[!@#$%^&*]/.test(password)
    ];
    return reqs.filter(Boolean).length >= 4;
}

// ============================================
// TOGGLE PASSWORD VISIBILITY
// ============================================
const togglePasswordBtn = document.getElementById('togglePassword');
if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const pwd = document.getElementById('password');
        if (pwd.type === 'password') {
            pwd.type = 'text';
            togglePasswordBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
        } else {
            pwd.type = 'password';
            togglePasswordBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
        }
    });
}

// ============================================
// LÓGICA UNIFICADA: CADASTRO, LOGIN E CONVIDADO
// ============================================
let isRegisterMode = false;

function toggleAuthMode() {
    isRegisterMode = !isRegisterMode;
    
    const cardTitle = document.querySelector('.logo-section h1');
    const cardDesc = document.querySelector('.logo-section p');
    const loginBtn = document.getElementById('loginBtn');
    const toggleLink = document.getElementById('toggleAuthModeLink');
    const extraFields = document.getElementById('registerExtraFields');
    const guestBtn = document.getElementById('btnGuestPreview');
    
    if (isRegisterMode) {
        if (cardTitle) cardTitle.textContent = 'Criar Conta';
        if (cardDesc) cardDesc.textContent = 'Monte seu perfil acadêmico agora mesmo';
        if (loginBtn) loginBtn.textContent = 'Concluir Cadastro';
        if (toggleLink) toggleLink.textContent = 'Já tem uma conta? Entrar';
        if (extraFields) extraFields.style.display = 'block';
        if (guestBtn) guestBtn.style.display = 'none'; // Esconde convidado no cadastro
    } else {
        if (cardTitle) cardTitle.textContent = 'Guia de Estudos';
        if (cardDesc) cardDesc.textContent = 'Seu caminho para o sucesso acadêmico';
        if (loginBtn) loginBtn.textContent = 'Entrar';
        if (toggleLink) toggleLink.textContent = 'Ainda não tem conta? Criar conta';
        if (extraFields) extraFields.style.display = 'none';
        if (guestBtn) guestBtn.style.display = 'block'; // Mostra convidado no login
    }
}

// INICIALIZAÇÃO DOS EVENTOS APÓS A PÁGINA CARREGAR
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Alternador de Modo (Link Criar Conta / Entrar)
    const toggleLinkBtn = document.getElementById('toggleAuthModeLink');
    if (toggleLinkBtn) {
        toggleLinkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAuthMode();
        });
    }

    // 2. Botão de Convidado (Ativa o Bloqueio Premium do app.js)
    const guestBtn = document.getElementById('btnGuestPreview');
    if (guestBtn) {
        guestBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const guestEmail = "convidado@akiportal.com.br";
            const sessionData = {
                email: guestEmail,
                sessionId: 'guest_' + Date.now(),
                deviceType: /Android|iPhone|iPad/i.test(navigator.userAgent) ? 'Mobile' : 'Computador',
                userAgent: navigator.userAgent,
                loginTime: new Date().toISOString(),
                isAdmin: false,
                isGuest: true // Esta chave diz para o app.js bloquear as ferramentas!
            };

            let activeSessions = JSON.parse(localStorage.getItem('activeSessions') || '[]');
            activeSessions.push(sessionData);
            localStorage.setItem('activeSessions', JSON.stringify(activeSessions));

            localStorage.setItem('currentSession', JSON.stringify(sessionData));
            localStorage.setItem('userEmail', guestEmail);
            localStorage.setItem('isLoggedIn', 'true'); 

            window.location.href = 'index.html';
        });
    }

    // 3. Submissão do Formulário (Login e Cadastro Unificados sem conflito)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.onsubmit = (e) => {
            e.preventDefault(); // Impede o "piscar" da tela
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Bloqueia se a senha for fraca
            if (!isPasswordStrong(password)) {
                alert('A senha não atende aos requisitos mínimos!');
                return;
            }

            // FLUXO DE CADASTRO
            if (isRegisterMode) {
                const nome = document.getElementById('regNome').value;
                const idade = document.getElementById('regIdade').value;
                const area = document.getElementById('regArea').value;

                if (!nome || !idade || !area) {
                    alert('Por favor, preencha os campos de Nome, Idade e Área de Estudo!');
                    return; 
                }

                // Salva no banco (localStorage)
                const userProfile = { 
                    name: nome, 
                    age: idade, 
                    profession: area, 
                    email: email, 
                    registradoEm: new Date().toISOString() 
                };
                localStorage.setItem('userProfile', JSON.stringify(userProfile));
                alert('Conta criada com sucesso! Entrando no painel...');
            } 
            // FLUXO DE LOGIN (Validação)
            else {
                const isAdminUser = (email.toLowerCase() === "admin@gmail.com" || email.toLowerCase() === "admin@admin.com");
                
                if (!isAdminUser) {
                    const savedProfile = JSON.parse(localStorage.getItem('userProfile') || 'null');
                    const isRegistered = savedProfile && savedProfile.email.toLowerCase() === email.toLowerCase();

                    if (!isRegistered) {
                        alert("❌ Erro de Autenticação: Este e-mail não está cadastrado! Clique em 'Criar conta' primeiro.");
                        return;
                    }
                }
            }

            // Criação da sessão (Acontece após o Cadastro ou Login válido)
            const isAdminUser = (email.toLowerCase() === "admin@gmail.com" || email.toLowerCase() === "admin@admin.com");
            const sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
            
            const sessionData = {
                email: email,
                sessionId: sessionId,
                deviceType: isMobile ? 'Mobile' : 'Computador',
                userAgent: navigator.userAgent,
                loginTime: new Date().toISOString(),
                isAdmin: isAdminUser,
                isGuest: false // Se logou/cadastrou, não é convidado. Tem acesso total!
            };

            let activeSessions = JSON.parse(localStorage.getItem('activeSessions') || '[]');
            activeSessions.push(sessionData);
            localStorage.setItem('activeSessions', JSON.stringify(activeSessions));

            localStorage.setItem('currentSession', JSON.stringify(sessionData));
            localStorage.setItem('userEmail', email);

            window.location.href = 'index.html';
        };
    }

    if (passwordInput) checkPasswordStrength();
});

// ============================================
// KEYBOARD ACCESSIBILITY E OUTROS LINKS
// ============================================
const loginFormAccess = document.getElementById('loginForm');
if (loginFormAccess) {
    loginFormAccess.addEventListener('keypress', (e) => {
        const btn = document.getElementById('loginBtn');
        if (e.key === 'Enter' && btn && !btn.disabled) {
            btn.click();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const sm = document.getElementById('successMessage');
        const pm = document.getElementById('planMessage');
        if (sm) sm.style.display = 'none';
        if (pm) pm.style.display = 'none';
    }
});

// Lógica da página de Planos (plano_assinatura.html)
function selectPlan(planName) {
    const planMessage = document.getElementById('planMessage');
    const planText    = document.getElementById('planText');
    if (!planMessage || !planText) return;

    const messages = {
        'Básico':     'Você selecionou o Plano Básico! Aproveite o acesso gratuito.',
        'Pro':        'Você selecionou o Plano Pro! 🎉 Verifique seu email para instruções de pagamento.',
        'Enterprise': 'Você selecionou o Plano Enterprise! 🚀 Um de nossos consultores entrará em contato em breve.'
    };

    planText.textContent = messages[planName] || '';
    planMessage.style.display = 'flex';

    localStorage.setItem('selectedPlan', planName);
}

// Lógica do FAQ (plano_assinatura.html)
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.display !== 'none';

        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

        if (!isOpen) {
            answer.style.display = 'block';
            question.classList.add('active');
        }
    });
});

// ============================================
// SIMULAÇÃO DE RECUPERAÇÃO DE SENHA
// ============================================
let generatedCode = '';

// Abre o modal ao clicar no link
document.getElementById('forgotPasswordLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('recoveryModal').style.display = 'flex';
});

// Fecha o modal e reseta as telas
document.getElementById('closeRecoveryBtn')?.addEventListener('click', () => {
    document.getElementById('recoveryModal').style.display = 'none';
    document.getElementById('recovery-step-1').style.display = 'block';
    document.getElementById('recovery-step-2').style.display = 'none';
    document.getElementById('recovery-step-3').style.display = 'none';
    document.getElementById('recovery-email').value = '';
    document.getElementById('recovery-code-input').value = '';
    document.getElementById('new-password-input').value = '';
    document.getElementById('confirm-password-input').value = '';
});

// Etapa 1: Enviar Código (Simulação)
document.getElementById('sendCodeBtn')?.addEventListener('click', () => {
    const email = document.getElementById('recovery-email').value.trim();
    const savedProfile = JSON.parse(localStorage.getItem('userProfile') || 'null');
    
    const isRegistered = savedProfile && savedProfile.email.toLowerCase() === email.toLowerCase();
    const isAdmin = email.toLowerCase() === 'admin@gmail.com' || email.toLowerCase() === 'admin@admin.com';
    
    if (!email) {
        alert('❌ Por favor, digite um e-mail.');
        return;
    }

    if (!isRegistered && !isAdmin) {
        alert('❌ E-mail não encontrado no sistema. Verifique o endereço digitado.');
        return;
    }
    
    // Gera código de 6 dígitos
    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    document.getElementById('codeDisplay').textContent = generatedCode;
    
    // Vai para tela 2
    document.getElementById('recovery-step-1').style.display = 'none';
    document.getElementById('recovery-step-2').style.display = 'block';
});

// Etapa 2: Validar Código
document.getElementById('verifyCodeBtn')?.addEventListener('click', () => {
    const inputCode = document.getElementById('recovery-code-input').value.trim();
    
    if (inputCode !== generatedCode) {
        alert('❌ Código incorreto. Tente novamente.');
        return;
    }
    
    // Vai para tela 3
    document.getElementById('recovery-step-2').style.display = 'none';
    document.getElementById('recovery-step-3').style.display = 'block';
});

// Etapa 3: Salvar Nova Senha
document.getElementById('saveNewPasswordBtn')?.addEventListener('click', () => {
    const newPwd = document.getElementById('new-password-input').value;
    const confirmPwd = document.getElementById('confirm-password-input').value;
    
    if (newPwd !== confirmPwd) {
        alert('❌ As senhas não coincidem!');
        return;
    }
    
    // Usa a mesma função de validação que já existe no seu código
    if (!isPasswordStrong(newPwd)) {
        alert('❌ A nova senha não atende aos requisitos mínimos de segurança (8 caracteres, letras, números e símbolos).');
        return;
    }
    
    // Simula salvamento
    const savedProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    savedProfile.password = newPwd; 
    localStorage.setItem('userProfile', JSON.stringify(savedProfile));
    
    alert('✅ Senha alterada com sucesso! Você já pode fazer login.');
    
    // Fecha o modal clicando programaticamente no botão de fechar
    document.getElementById('closeRecoveryBtn').click();
});