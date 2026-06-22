# Documentação Técnica — Aki Study Portal (Guia de Estudos)

> Documentação elaborada a partir da leitura completa do código-fonte para apoiar outros desenvolvedores no entendimento, manutenção e evolução do projeto.

## 1. Visão Geral

O projeto é um **portal de estudos gamificado**, voltado a estudantes em geral (vestibular, programação, idiomas), construído como uma aplicação **front-end estática** (HTML + CSS + JavaScript puro, sem frameworks e sem backend). Não há servidor, banco de dados ou API: toda a persistência de dados é feita via **`localStorage`** do navegador.

Funcionalidades principais:
- Autenticação simulada (login, cadastro e modo convidado);
- Painel gamificado com XP, níveis, sequência de dias (streak) e conquistas;
- Trilhas de estudo (roadmaps) customizáveis com progresso;
- Timer Pomodoro ("Glow Pomodoro") com sons ambiente sintetizados via Web Audio API;
- Flashcards com repetição espaçada (estilo Leitner);
- Quadro Kanban de tarefas (drag and drop);
- Editor de notas com compilador Markdown próprio ("Notas Zen");
- Guia de Estudos com conteúdo curado (vídeos, tópicos, documentações, mapas mentais) por disciplina;
- Painel administrativo (sessões ativas, exportação de dados, gestão do conteúdo do guia);
- Página de perfil do usuário com estatísticas, edição de dados e backup/restauração via JSON;
- Página de planos de assinatura (estática/mock, sem integração de pagamento real).

Todo o conteúdo textual da interface está em **português (pt-BR)**.

## 2. Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Markup | HTML5 |
| Estilo | CSS3 puro (sem pré-processador), com variáveis CSS (`:root`) |
| Lógica | JavaScript vanilla (ES6+), sem frameworks/bibliotecas externas |
| Áudio | Web Audio API (síntese de ruído e tons, sem arquivos de áudio) |
| Persistência | `localStorage` do navegador (sem backend/API) |
| Build | Nenhum — os arquivos são servidos diretamente, sem bundler |

## 3. Estrutura de Arquivos

```
pagina_login.html      → Tela de login / cadastro / acesso como convidado
script.js               → Lógica de autenticação, força de senha, planos e FAQ
style.css               → Estilos de pagina_login.html, perfil.html e plano_assinatura.html

index.html              → Aplicação principal (dashboard, trilhas, pomodoro, flashcards, kanban, notas, guia, admin)
app.js                  → Toda a lógica da aplicação principal (estado, render, gamificação, áudio, admin)
styles.css              → Estilos exclusivos da aplicação principal (tema escuro "premium")

perfil.html             → Página de perfil do usuário (script embutido inline, não usa app.js)
plano_assinatura.html   → Página de planos de assinatura (usa script.js)
```

Observação importante: existem **dois arquivos CSS distintos e não relacionados** — `style.css` e `styles.css` — cada um usado por um subconjunto diferente de páginas (ver seção 9). Não há herança ou import entre eles.

## 4. Fluxo de Navegação entre Páginas

```
pagina_login.html  →  index.html  →  (sidebar) → perfil.html
        │                                 │
        └────────→ plano_assinatura.html ←┘
```

- `pagina_login.html` é o ponto de entrada esperado da aplicação. Ao logar/cadastrar/entrar como convidado, redireciona para `index.html`.
- `index.html` possui um *auth guard* simples no `window.onload`: se não existir `currentSession` salva no `localStorage`, redireciona de volta para `pagina_login.html`.
- `perfil.html` também faz a verificação de sessão e redireciona para o login se não houver sessão ativa.
- `plano_assinatura.html` não exige login; o botão "Voltar" decide dinamicamente se retorna para `index.html` (usuário logado) ou `pagina_login.html` (sem sessão).

## 5. Autenticação e Sessão — `pagina_login.html` + `script.js`

Não existe backend de autenticação real. Todo o "cadastro" e "login" são simulados com `localStorage`, e por isso o sistema **suporta apenas um único perfil de usuário cadastrado por vez** (ver seção 12).

### 5.1 Modos do formulário

O mesmo formulário (`#loginForm`) alterna entre dois modos controlados pela variável `isRegisterMode`, via `toggleAuthMode()`:

- **Login** (padrão): pede e-mail e senha; exibe o botão "Entrar como Convidado".
- **Cadastro**: exibe campos extras (Nome completo, Idade, Área de Estudo) e oculta o botão de convidado.

### 5.2 Validação de força de senha

`checkPasswordStrength()` é executado a cada digitação no campo de senha e verifica 5 requisitos (mínimo 8 caracteres, maiúscula, minúscula, número, caractere especial `!@#$%^&*`). A função:
- Atualiza visualmente a lista de requisitos (trocando `✗`/`✓`);
- Define uma barra/rótulo de força (fraca, média, forte, muito forte);
- **Desabilita o botão de login/cadastro** (`loginBtn.disabled`) se menos de 4 dos 5 requisitos forem atendidos.

A função auxiliar `isPasswordStrong()` repete essa mesma regra e é usada como segunda barreira no `onsubmit` do formulário.

### 5.3 Fluxo de submissão (`loginForm.onsubmit`)

1. Bloqueia o envio se a senha não for forte (`isPasswordStrong`).
2. **Se em modo Cadastro**: valida nome/idade/área, monta um objeto `userProfile` e salva em `localStorage.userProfile` (sobrescrevendo qualquer perfil anterior).
3. **Se em modo Login**: verifica se o e-mail é um dos e-mails de administrador *hardcoded* (`admin@gmail.com` ou `admin@admin.com`) OU se corresponde ao e-mail salvo em `userProfile`. Caso contrário, exibe erro de "e-mail não cadastrado".
4. Em ambos os casos, cria um objeto de sessão (`sessionData`) com `email`, `sessionId`, `deviceType` (detectado via *user agent*), `loginTime`, `isAdmin` e `isGuest: false`, adiciona-o ao array `activeSessions` e salva como `currentSession`.
5. Redireciona para `index.html`.

### 5.4 Modo Convidado

O botão `#btnGuestPreview` cria uma sessão sintética com `email: "convidado@akiportal.com.br"` e **`isGuest: true`**, sem exigir nenhum dado. Essa flag é o gatilho central que o `app.js` usa para restringir funcionalidades (seção 6.14).

### 5.5 Visualização e acessibilidade

- `togglePassword`: alterna o tipo do input de senha entre `password`/`text`, trocando o ícone SVG (olho aberto/fechado).
- `fontSizeBtn`: alterna entre 4 tamanhos de fonte (`normal`, `lg`, `xl`, `sm`) via classes CSS no `<body>`, persistido em `localStorage.fontSizePreference`. **Esta é uma implementação de acessibilidade independente** da usada em `app.js`/`perfil.html` (ver seção 12).

## 6. Aplicação Principal — `index.html` + `app.js`

`app.js` é o núcleo do sistema (≈3.300 linhas) e concentra: estado global, renderização de todas as seções, gamificação, áudio sintetizado e o painel administrativo.

### 6.1 Estado Global (`state`)

Um único objeto `state` (declarado no topo do arquivo) guarda todos os dados da aplicação em memória:

```js
state = {
  xp, level, streak, lastStudyDate, totalStudyTime,
  selectedRoadmapId, roadmaps: [...],     // trilhas de estudo
  selectedDeckId,     decks: [...],       // baralhos de flashcards
  tasks: [...],                            // tarefas do Kanban
  selectedNoteId,     notes: [...],       // notas Zen (Markdown)
  achievements: [...],                     // conquistas e seu status
  weeklyActivity: [0,0,0,0,0,0,0],        // minutos de foco por dia da semana
  pomodoroLogs: []                         // histórico de ciclos pomodoro
}
```

O objeto já vem **pré-populado com dados de exemplo** (4 trilhas padrão, 2 baralhos padrão, 3 tarefas padrão, 2 notas padrão e 5 conquistas), funcionando como *seed data* para demonstração.

### 6.2 Persistência

```js
saveToLocalStorage()  // salva JSON.stringify(state) em 'aki_study_portal_state'
loadFromLocalStorage() // lê a chave e faz merge (spread) sobre o state padrão
```

Praticamente toda ação do usuário (marcar passo, completar pomodoro, mover card do kanban, editar nota etc.) chama `saveToLocalStorage()` imediatamente após alterar o `state`. Não há *debounce* — cada pequena mudança grava o estado inteiro novamente.

### 6.3 Boot / Inicialização

```js
window.onload = () => {
    // 1. Guarda de autenticação
    // 2. loadFromLocalStorage()
    // 3. renderStatsHeader(), renderDashboard()
    // 4. initTopNavbar(session), initAdminPanel(session), initInfoModals()
    // 5. renderGuideSection()
};
```

As demais seções (Trilhas, Pomodoro, Flashcards, Kanban, Notas) só são renderizadas **na primeira vez que o usuário clica na aba correspondente** (ver 6.4), e não no carregamento inicial — uma otimização simples de renderização sob demanda.

### 6.4 Sistema de Navegação por Seções

Cada item `.nav-item` da sidebar tem um `data-target` apontando para o `id` de uma `<section class="app-section">`. Ao clicar:
1. Verifica a restrição de convidado (`allowedSections`);
2. Alterna a classe `active` entre os itens da nav e entre as `<section>`;
3. Atualiza título/subtítulo do cabeçalho;
4. Chama a função de *render* correspondente à seção (`renderDashboard`, `renderRoadmaps`, `renderPomodoro`, `renderFlashcards`, `renderPlanner`, `renderNotes`, `renderAdminTable`, `renderGuideSection`).

### 6.5 Sistema de Gamificação

- **XP e Nível**: `awardXP(amount, reason)` soma XP ao `state`, recalcula o nível (`floor(xp/100)+1`) e, se houve subida de nível, toca um *chime* e exibe um overlay de "Subiu de Nível!" (`showLevelUpNotification`). Toda concessão de XP também dispara uma notificação flutuante (`showXPNotification`).
- **Streak**: incrementado em `timerCompleted()` quando um ciclo de foco (work) é concluído em um dia diferente do último registrado (`lastStudyDate`).
- **Conquistas (Achievements)**: `unlockAchievement(id)` marca a conquista como desbloqueada (uma única vez), concede XP-bônus e re-renderiza o dashboard. Conquistas existentes: primeiro passo de trilha, primeiro Pomodoro, primeira revisão SRS, primeira nota escrita, 3 tarefas Kanban concluídas (e uma checagem condicional para nível 5, referenciada em `showLevelUpNotification` mas **sem entrada correspondente no array `achievements`** — ver seção 12).
- **Ranks** exibidos na sidebar conforme o nível (`renderStatsHeader`): "Iniciante das Sombras" → "Aprendiz de Foco" (nível 2) → "Guerreiro Pomodoro" (nível 4) → "Escriba do Conhecimento" (nível 6) → "Mestre Zen do Aprendizado" (nível 8).

### 6.6 Módulo: Dashboard (`renderDashboard`)

Exibe minutos estudados, progresso geral de trilhas, flashcards revisados hoje, tarefas pendentes, um gráfico de barras da atividade semanal (`weeklyActivity`, calculado proporcionalmente ao maior valor) e a lista de conquistas (bloqueadas exibem 🔒).

### 6.7 Módulo: Trilhas de Estudo / Roadmaps (`renderRoadmaps`)

- Lista trilhas em abas laterais com % de progresso; permite criar novas trilhas customizadas (modal `#roadmap-modal`, com N passos genéricos gerados automaticamente) e excluir trilhas inteiras.
- Cada passo (`step`) é um card com checkbox de conclusão (concede/remove 20 XP), badge de categoria, descrição e link de recurso externo.
- Botão "✏️ Edição" abre `window.openEditStepModal(roadmapId, stepId)`, que popula o modal `#edit-step-modal` para editar título, descrição, badge e link do recurso, ou excluir o passo.
- Botão "➕ Adicionar Novo Passo Customizado" cria um passo vazio e abre automaticamente o modal de edição para ele.

### 6.8 Módulo: Glow Pomodoro + Áudio

- Timer simples baseado em `setInterval` de 1s, com três modos: `work` (25 min), `short_break` (5 min), `long_break` (15 min). O anel SVG (`#pomodoro-radial-ring`) é atualizado via `stroke-dashoffset` proporcional ao tempo restante.
- Ao concluir um ciclo (`timerCompleted`), toca um *chime* sintetizado, registra um log (`pomodoroLogs`), concede XP, atualiza `totalStudyTime`/`weeklyActivity`/`streak` (se for ciclo de foco) e alterna automaticamente para o próximo modo.
- **Motor de áudio sintetizado (Web Audio API)**, sem nenhum arquivo `.mp3`/`.wav`:
  - `createBrownNoiseBuffer` + `toggleBrownNoise`: gera ruído marrom (algoritmo de integração de ruído branco) com filtro *low-pass*, controlável por volume.
  - `toggleCosmicSynth`: sintetizador ambiente com osciladores tipo *triangle*, delay/feedback e uma progressão de acordes tocada em loop (`setInterval` de 6s).
  - `playChimeBell` / `playLevelUpChime`: efeitos sonoros curtos para fim de ciclo e subida de nível.
  - Limitação conhecida: `setSynthVolume` está declarada mas vazia (sem implementação real); o ajuste de volume dos sliders, na prática, **para e reinicia** o respectivo som (`toggleBrownNoise(false); toggleBrownNoise(true)`).

### 6.9 Módulo: Flashcards / Repetição Espaçada (`renderFlashcards`)

- Organiza cartões em "baralhos" (`decks`), cada um com cartões (`front`/`back`) e um `srsStage` (1=difícil, 2=médio, 3=fácil), usado apenas para contagem/estatística — **não há agendamento real de repetição espaçada por data** (`nextReview` existe no modelo de dados mas não é utilizado em nenhuma lógica de exibição).
- Cartão 3D com flip (`flipActiveCard`), navegável também pela tecla **Espaço**.
- Botões "Leitner" (fácil/médio/difícil) atualizam o `srsStage`, concedem XP proporcional, desbloqueiam a conquista `srs_scholar` e avançam para o próximo cartão da fila.
- Modais para criar baralho (`#deck-modal`) e criar cartão (`#card-modal`); botões para excluir o baralho inteiro ou apenas o cartão ativo.

### 6.10 Módulo: Kanban Planner (`renderPlanner`)

- Três colunas (`todo`, `doing`, `done`), com **drag-and-drop nativo do HTML5** (`dragstart`/`dragend`/`dragover`/`drop`) e botões de seta (◀/▶) como alternativa para dispositivos sem suporte a *drag* (mobile).
- Mover uma tarefa para `done` concede XP e, ao atingir 3 tarefas concluídas, desbloqueia a conquista `kanban_master`.
- Modal de criação de tarefa (`#task-modal`) com título, descrição, prioridade e prazo.

### 6.11 Módulo: Notas Zen (`renderNotes` + `compileMarkdownToHTML`)

- Editor de texto livre por nota, com pré-visualização ao vivo renderizada por um **compilador de Markdown próprio e simplificado** (`compileMarkdownToHTML`), via expressões regulares — suporta apenas: títulos `#`/`##`/`###`, **negrito**, *itálico*, `código inline`, citações `>`, listas com `-`/`*` e parágrafos separados por linha em branco. Não é um parser Markdown completo (sem suporte a links, imagens, tabelas, listas numeradas, blocos de código etc.).
- Cada edição salva automaticamente (`oninput`) e desbloqueia a conquista `note_composer`.
- Botão de download exporta a nota ativa como arquivo `.md` (via `Blob`).

### 6.12 Módulo: Guia de Estudos

Este é o módulo de conteúdo curado, com duas visões:

**Visão do usuário (`renderGuideSection` + `renderGuideModuleCard`)**
- Lê a lista de disciplinas via `loadGuideSubjects()`, que checa uma chave de versão (`guideSubjectsVersion`) para decidir se deve reiniciar o conteúdo padrão (`DEFAULT_GUIDE_SUBJECTS`) ou usar o conteúdo customizado salvo em `localStorage.guideSubjects`.
- `DEFAULT_GUIDE_SUBJECTS` é um catálogo estático extenso com **18 disciplinas** (Matemática, Biologia, Química, Física, Lógica de Programação, Python, JavaScript, TypeScript, Java, C#, React, Next.js, Vue.js, Node.js & Express, Django, Spring Boot, Inglês, entre outras), cada uma dividida em módulos contendo vídeos do YouTube, lista de tópicos, links de documentação e (opcionalmente) um mapa mental em imagem.
- Usuários **convidados** veem apenas as disciplinas cujo nome contenha "Matemática" ou "Lógica" (mesma regra de filtro usada em `aplicarRestricoesConvidado`, porém reaplicada aqui de forma independente).

**Visão administrativa (`renderAdminGuideList`, `openAdminGuideModal`, `buildModuleEditBlock`)**
- CRUD completo de disciplinas e módulos via modal (`#admin-guide-modal`), incluindo adicionar/remover vídeos, tópicos e links dinamicamente (`addVideoRow`, `addTopicRow`, `addDocRow`, `removeMiniRow`).
- Upload de mapa mental: a imagem é convertida para **base64 e embutida diretamente no JSON salvo** (`FileReader.readAsDataURL`) — não há upload para servidor.
- Ao salvar, todo o catálogo é regravado em `localStorage.guideSubjects` (`saveGuideSubjects`), sobrescrevendo o conteúdo padrão para sempre (até uma futura mudança de `GUIDE_VERSION` no código).

### 6.13 Painel Administrativo (`initAdminPanel`, `renderAdminTable`)

Visível apenas quando `session.isAdmin === true` (item de menu fica oculto por padrão e é exibido via JS).

- **Aba Sessões**: lista as sessões ativas (`localStorage.activeSessions`), filtrando automaticamente as com mais de 24h. Mostra contagem por dispositivo (desktop/mobile), e-mails únicos, e permite remover sessões individualmente (`window.removeUserSession`, com proteção para não remover a própria sessão logada) ou limpar todas (mantendo apenas a sessão do próprio admin).
- **Aba Gestão de Guia**: acesso à listagem/CRUD de disciplinas do Guia de Estudos (seção 6.12).
- **Exportar dados (admin)**: monta um JSON com `appState`, `profile`, `guideSubjects`, `activeSessions` e `plan`, e baixa como arquivo. **Atenção:** lê a chave `studyPortalState`, que **nunca é gravada** pelo restante do sistema (ver seção 12 — bug conhecido).

### 6.14 Restrições de Convidado (`aplicarRestricoesConvidado`, `isGuestUser`, `checkAccess`)

A flag `session.isGuest` é o controle central de acesso limitado:
- `aplicarRestricoesConvidado()` é executada assim que o script carrega: filtra `state.roadmaps` para mostrar só Matemática/Lógica e desabilita visualmente (com `alert` de bloqueio) os botões de Kanban, Flashcards e Trilhas na sidebar.
- O clique em qualquer item de navegação não listado em `allowedSections` (`dashboard-section`, `pomodoro-section`, `guide-section`) é bloqueado com `alert`.
- `checkAccess(featureName)` e `isGuestUser()` existem como utilitários genéricos de checagem de permissão, porém **não são chamados em nenhum outro ponto do código** além de sua própria definição — parecem preparados para uso futuro mais granular.

### 6.15 Acessibilidade — FAB de fonte (`initA11yFab`)

Botões flutuantes "A+"/"A-" que ajustam `document.documentElement.style.fontSize` em incrementos de 1px (entre 12px e 22px), persistido em `localStorage.a11y-font-size`. Presente em `index.html` e replicado de forma idêntica (copy-paste) dentro do script inline de `perfil.html`.

## 7. Página de Perfil — `perfil.html`

Página standalone com **todo o JavaScript embutido inline** no próprio HTML (não depende de `app.js`).

- Guarda de sessão idêntica à de `index.html`.
- Exibe XP, nível e streak lendo diretamente de `localStorage.aki_study_portal_state` (chave correta, igual à usada por `app.js`).
- Formulário de edição (nome, idade, profissão) que sobrescreve `localStorage.userProfile`.
- **Exportar/Importar backup completo em JSON** (`buildExportPayload`, botões `#export-json-btn`/`#import-json-btn`):
  - Exportação inclui `appState`, `profile`, `guideSubjects`, `activeSessions` e `plan`.
  - Importação faz validação básica (`_meta` e `appState` precisam existir) e pede confirmação antes de sobrescrever os dados locais.
  - **Atenção:** assim como o exportador do admin, esta função lê/grava a chave `studyPortalState` em vez de `aki_study_portal_state` — ou seja, o backup nunca contém o progresso real salvo pelo `app.js` (bug, ver seção 12).
- Define `isAdmin` comparando o e-mail com `'admin@guia.com'` — **um terceiro e-mail de admin diferente** dos usados em `script.js` (`admin@gmail.com` / `admin@admin.com`). Esse `isAdmin` local só afeta o *badge* exibido na própria página de perfil, não concede acesso real ao Painel Admin (que depende de `session.isAdmin`, definido no login).
- Implementa sua própria cópia do FAB de acessibilidade (idêntica à de `app.js`, seção 6.15).

## 8. Página de Planos de Assinatura — `plano_assinatura.html`

Página estática de marketing/checkout simulado, sem integração de pagamento:
- Três cards de plano (Básico/Pro/Enterprise) e uma tabela comparativa de recursos.
- `selectPlan(planName)` (em `script.js`) salva a escolha em `localStorage.selectedPlan` e exibe uma mensagem de confirmação (`#planMessage`) — não há cobrança real nem validação de cartão.
- Seção de FAQ em acordeão (abre uma pergunta por vez, fecha as demais).
- Botão "Voltar" decide o destino dinamicamente conforme exista ou não `currentSession` salva (ver seção 4).

## 9. Estilos — `style.css` vs `styles.css`

| Arquivo | Usado por | Tema |
|---|---|---|
| `style.css` | `pagina_login.html`, `perfil.html`, `plano_assinatura.html` | Fundo escuro com cartões claros (`--bg-light`, `--text-dark`); paleta de cor baseada em `--primary-color: #6366f1` |
| `styles.css` | `index.html` (aplicação principal) | Tema escuro "premium" completo (`--bg-main: #0a0b10`), com gradientes neon (`--primary`, `--secondary: #14b8a6`, `--accent: #f43f5e`) e tipografia `Outfit`/`Plus Jakarta Sans` |

Os dois arquivos não compartilham as mesmas variáveis CSS — embora usem cores semelhantes para o roxo principal (`#6366f1`), foram escritos de forma independente. `styles.css` é bem maior (2567 linhas) e organizado por seção de funcionalidade (sidebar, dashboard, trilhas, modais, pomodoro, flashcards 3D, kanban, notas), terminando com um bloco identificado como "Estilos extraídos de index.html" — indício de que parte do CSS foi movida de `style` inline no HTML para o arquivo externo em algum momento da evolução do projeto.

## 10. Modelo de Dados (resumo)

| Entidade | Campos principais | Onde vive |
|---|---|---|
| `roadmap` | `id, title, desc, steps[]` | `state.roadmaps` |
| `step` (trilha) | `id, title, desc, completed, badge, resourceText, resourceUrl` | dentro de `roadmap.steps` |
| `deck` | `id, title, cards[]` | `state.decks` |
| `card` (flashcard) | `id, front, back, srsStage, nextReview` | dentro de `deck.cards` |
| `task` (kanban) | `id, title, desc, status, priority, dueDate` | `state.tasks` |
| `note` | `id, title, content (Markdown), updatedAt` | `state.notes` |
| `achievement` | `id, title, desc, unlocked, xpAward, icon` | `state.achievements` |
| `guideSubject` | `id, name, emoji, modules[]` | `localStorage.guideSubjects` (fora do `state`) |
| `guideModule` | `title, videos[], topics[], docs[], mindmap (base64\|null)` | dentro de `guideSubject.modules` |
| `session` | `email, sessionId, deviceType, userAgent, loginTime, isAdmin, isGuest` | `localStorage.currentSession` / `activeSessions[]` |
| `userProfile` | `name, age, profession, email, registradoEm` | `localStorage.userProfile` (único, não é um array) |

## 11. Chaves de `localStorage` Utilizadas no Sistema

| Chave | Gravada por | Lida por | Conteúdo |
|---|---|---|---|
| `currentSession` | `script.js` (login/cadastro/convidado) | `app.js`, `perfil.html`, `plano_assinatura.html` | Sessão ativa do usuário atual |
| `activeSessions` | `script.js` | `app.js` (admin) | Histórico de todas as sessões abertas |
| `userEmail` | `script.js` | — | E-mail do último login (uso residual) |
| `isLoggedIn` | `script.js` (apenas no fluxo convidado) | — | Flag booleana (uso residual/inconsistente) |
| `userProfile` | `script.js`, `perfil.html` | `script.js`, `perfil.html`, exportações | Dados cadastrais do único usuário registrado |
| `aki_study_portal_state` | `app.js` | `app.js`, `perfil.html` (estatísticas) | Estado completo da gamificação/app (`state`) |
| `studyPortalState` | **ninguém grava** | `app.js` (export admin), `perfil.html` (export/import) | Chave "fantasma" — ver bug na seção 12 |
| `guideSubjects` | `app.js` (admin) | `app.js` | Catálogo customizado do Guia de Estudos |
| `guideSubjectsVersion` | `app.js` | `app.js` | Controle de versão para reset do conteúdo padrão |
| `selectedPlan` | `script.js` | `app.js` (admin table) | Último plano selecionado na página de planos |
| `fontSizePreference` | `script.js` | `script.js` | Preferência de fonte das páginas com `style.css` |
| `a11y-font-size` | `app.js`, `perfil.html` | `app.js`, `perfil.html` | Preferência de fonte da aplicação principal |

## 12. Problemas Conhecidos / Inconsistências

Os pontos abaixo foram identificados durante a leitura do código e podem orientar uma futura refatoração:

1. **Chave de backup divergente (bug funcional):** `app.js` (export do admin) e `perfil.html` (export/import) leem/gravam a chave `studyPortalState`, enquanto o estado real da aplicação é salvo em `aki_study_portal_state`. Na prática, **a função de backup/restauração de progresso não funciona** — ela sempre exporta um objeto vazio (`{}`) e a importação nunca restaura XP, trilhas, decks, tarefas ou notas reais.
2. **E-mails de administrador inconsistentes entre arquivos:** `script.js` usa `admin@gmail.com` / `admin@admin.com` para conceder a sessão `isAdmin: true` (que de fato libera o Painel Admin); já `perfil.html` usa um terceiro valor, `admin@guia.com`, apenas para exibir um *badge* visual na própria página — sem efeito real de permissão. Isso pode confundir quem for dar manutenção, pensando que `admin@guia.com` deveria ter acesso administrativo.
3. **Suporte a um único usuário cadastrado:** `userProfile` é um objeto único (não uma lista), então só é possível ter **uma conta "registrada" por vez** no navegador. Cadastrar uma nova conta sobrescreve a anterior, e logins antigos param de funcionar.
4. **Duas implementações independentes de acessibilidade (tamanho de fonte):** uma em `script.js` (classes CSS `font-size-sm/lg/xl`, usada nas páginas com `style.css`) e outra em `app.js`/`perfil.html` (ajuste direto de `font-size` no `<html>`, em pixels). Não compartilham armazenamento (`fontSizePreference` vs `a11y-font-size`) nem lógica.
5. **Funções de checagem de acesso não utilizadas:** `isGuestUser()` e `checkAccess(featureName)`, em `app.js`, foram criadas para centralizar o bloqueio de convidados, mas nenhuma outra parte do código as chama — toda a lógica de bloqueio real está duplicada manualmente em pelo menos três lugares (`aplicarRestricoesConvidado`, o listener de `.nav-item`, e o filtro de `renderGuideSection`).
6. **Listener duplicado:** o `onclick` de `#delete-active-deck-btn` é atribuído duas vezes em sequência no arquivo (linhas distintas, mesmo comportamento) — a segunda atribuição simplesmente substitui a primeira, sem causar erro, mas é código morto/redundante.
7. **Conquista referenciada sem definição:** `showLevelUpNotification` chama `unlockAchievement('level_five')` ao atingir nível 5, mas não existe nenhum item com `id: 'level_five'` no array `state.achievements` — a chamada não tem efeito (a função simplesmente não encontra a conquista e retorna).
8. **`srsStage`/`nextReview` sem repetição espaçada real:** o modelo de dados do flashcard tem um campo `nextReview`, mas nenhuma função de renderização ou agendamento o utiliza; a "repetição espaçada" hoje é apenas uma categorização manual (fácil/médio/difícil) sem controle de datas.
9. **`setSynthVolume(type, val)` vazia:** a função existe mas não tem corpo; o controle de volume realmente usado é "parar e reiniciar" o som correspondente.
10. **Sem validação de segurança real:** este é um protótipo client-side. Senhas não são criptografadas, qualquer pessoa pode editar o `localStorage` do navegador para se autodeclarar admin (`isAdmin: true`) ou burlar qualquer restrição de convidado. Não deve ser considerado seguro para dados sensíveis ou uso em produção sem um backend de autenticação real.

## 13. Como Executar o Projeto

Por não haver build nem dependências, basta servir os arquivos estaticamente (ex.: extensão "Live Server" do VS Code, ou `python -m http.server`) e abrir `pagina_login.html` no navegador — é o ponto de entrada esperado pelo *auth guard* do `index.html`.

## 14. Sugestões de Evolução (opcional)

- Unificar a chave de estado usada em export/import (`aki_study_portal_state`) para corrigir o backup quebrado.
- Centralizar o e-mail de administrador em uma única constante compartilhada (ou, idealmente, mover a lógica de admin para um backend real).
- Migrar `userProfile` para um array de perfis indexado por e-mail, permitindo múltiplas contas reais no mesmo navegador.
- Unificar as duas implementações de acessibilidade de fonte em uma única função reaproveitável entre todas as páginas.
- Substituir o compilador de Markdown manual por uma biblioteca leve (ex.: `marked`) caso seja necessário suportar mais sintaxe no futuro.
