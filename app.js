// Multi-Page Educational Portal & Simulation Client-Side Script

// Game state variables
let simulationContent = null;
let activeQuestions = [];
let currentQuestionIndex = 0;
let cumulativeCivicHealth = 50; // starts at 50%
let correctAnswersCount = 0;
let selectedChoice = null;
let gameSessionHistory = [];

// DOM Elements - Common
const helpModal = document.getElementById('help-modal');
const btnHelp = document.getElementById('btn-help');
const btnModalClose = document.getElementById('btn-modal-close');
const btnModalStart = document.getElementById('btn-modal-start');
const btnReset = document.getElementById('btn-reset');

// DOM Elements - Learn Page (Check if exist before using)
const s1RolesList = document.getElementById('s1-roles-list');
const roleShowcaseCard = document.getElementById('role-showcase-card');
const s2ToolsList = document.getElementById('s2-tools-list');

// DOM Elements - Game Page (Check if exist before using)
const gameIntroHeader = document.getElementById('game-intro-header');
const gameProgressBadge = document.getElementById('game-progress-badge');
const gameDotsContainer = document.getElementById('game-dots');
const challengeGameCard = document.getElementById('challenge-game-card');

const s3Headline = document.getElementById('s3-headline');
const s3Source = document.getElementById('s3-source');
const s3Desc = document.getElementById('s3-desc');
const s3Question = document.getElementById('s3-question');
const s3ChoicesList = document.getElementById('s3-choices-list');
const btnS3Lock = document.getElementById('btn-s3-lock');
const btnFactCheckHint = document.getElementById('btn-fact-check-hint');
const hintDisplayPanel = document.getElementById('hint-display-panel');

const gameOutcomePanel = document.getElementById('game-outcome-panel');
const s4ChoiceIndicatorText = document.getElementById('s4-selected-choice-text');
const s4FeedbackCard = document.getElementById('s4-feedback-card');
const s4FeedbackIcon = document.getElementById('s4-feedback-icon');
const s4FeedbackTitle = document.getElementById('s4-feedback-title');
const s4FeedbackText = document.getElementById('s4-feedback-text');
const s4ConsequencesList = document.getElementById('s4-consequences-list');
const s4StatsChart = document.getElementById('s4-stats-chart');
const civicHealthVal = document.getElementById('civic-health-val');
const civicHealthFill = document.getElementById('civic-health-fill');
const btnNextQuestion = document.getElementById('btn-next-question');

// Final Scoreboard Elements
const finalSummaryCard = document.getElementById('final-summary-card');
const summaryScoreVal = document.getElementById('summary-score-val');
const summaryRankBadge = document.getElementById('summary-rank-badge');
const summaryRankTitle = document.getElementById('summary-rank-title');
const summaryRankDesc = document.getElementById('summary-rank-desc');
const summaryAccuracyVal = document.getElementById('summary-accuracy-val');
const summaryQuestionsList = document.getElementById('summary-questions-list');
const btnSummaryRestart = document.getElementById('btn-summary-restart');

// Initialize application on load
document.addEventListener('DOMContentLoaded', () => {
  setupNavbarActiveState();
  setupCommonEventListeners();
  
  // Page-specific initialization based on element presence
  if (s1RolesList || s2ToolsList) {
    initLearnPage();
  } else if (s3ChoicesList) {
    initGamePage();
  }
  
  lucide.createIcons();
});

// Setup active link highlight in header navbar
function setupNavbarActiveState() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath === linkPath || (currentPath === '/' && linkPath === '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Common Event Listeners (Modals, Resets)
function setupCommonEventListeners() {
  if (btnHelp) btnHelp.addEventListener('click', toggleHelpModal);
  if (btnModalClose) btnModalClose.addEventListener('click', toggleHelpModal);
  if (btnModalStart) btnModalStart.addEventListener('click', toggleHelpModal);
  
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (s3ChoicesList) {
        // If on the game page, reset the game session locally
        restartGameSimulation();
      } else {
        // If on other pages, redirect to home page
        window.location.href = '/';
      }
    });
  }
}

// Help Modal toggle helper
function toggleHelpModal() {
  if (!helpModal) return;
  const isActive = helpModal.classList.contains('active');
  if (isActive) {
    helpModal.classList.remove('active');
  } else {
    helpModal.classList.add('active');
  }
}

// ========================================================
// LEARN PAGE LOGIC
// ========================================================
async function initLearnPage() {
  await fetchSimulationContent();
  renderRolesList();
  renderToolkitList();
  setupMiniCardsEventListeners();
  
  // Select Watchdog by default on page load
  if (simulationContent && simulationContent.idealRoles && simulationContent.idealRoles.roles.length > 0) {
    const firstRole = simulationContent.idealRoles.roles[0];
    const firstCard = document.querySelector(`.pillar-card-mini[data-role="${firstRole.id}"]`);
    selectRole(firstRole, firstCard);
  }
}

function setupMiniCardsEventListeners() {
  document.querySelectorAll('.pillar-card-mini').forEach(card => {
    card.addEventListener('click', () => {
      const roleId = card.dataset.role;
      const role = simulationContent && simulationContent.idealRoles && simulationContent.idealRoles.roles.find(r => r.id === roleId);
      if (role) {
        selectRole(role, card);
      }
    });
  });
}

// Render roles list
function renderRolesList() {
  if (!simulationContent || !s1RolesList) return;
  
  const roles = simulationContent.idealRoles.roles;
  s1RolesList.innerHTML = '';
  
  roles.forEach(role => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.dataset.roleId = role.id;
    
    item.innerHTML = `
      <div class="list-item-summary">
        <div class="list-item-content">
          <div class="list-item-icon">
            <i data-lucide="${role.icon}"></i>
          </div>
          <div class="list-item-text">
            <h3>${role.title}</h3>
            <p>${role.shortDesc}</p>
          </div>
        </div>
        <i data-lucide="chevron-right" class="list-item-arrow"></i>
      </div>
    `;
    
    item.addEventListener('click', () => selectRole(role, item));
    s1RolesList.appendChild(item);
  });
  
  lucide.createIcons();
}

// Select a role
function selectRole(role, element) {
  // Unselect all items
  document.querySelectorAll('#s1-roles-list .list-item').forEach(item => {
    item.classList.remove('selected');
  });
  
  // Select clicked item
  if (element) element.classList.add('selected');
  
  // Highlight the tiny cards below illustrations
  document.querySelectorAll('.pillar-card-mini').forEach(card => {
    if (card.dataset.role === role.id) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
  
  // Update image in showcase
  const imageMap = {
    watchdog: "assets/watchdog.png",
    informer: "assets/informer.png",
    public_forum: "assets/public_forum.png",
    gatekeeper: "assets/gatekeeper.png",
    agenda_setter: "assets/agenda_setter.png",
    mobilizer: "assets/mobilizer.png",
    educator: "assets/educator.png",
    consensus_builder: "assets/consensus_builder.png"
  };
  
  const imgEl = document.querySelector('#role-showcase-img-container img');
  if (imgEl) {
    imgEl.style.opacity = '0';
    setTimeout(() => {
      imgEl.src = imageMap[role.id] || "assets/ideal_role.png";
      imgEl.style.opacity = '1';
    }, 150);
  }
  
  // Update details showcase in left column
  const showcaseDetails = document.getElementById('role-showcase-details');
  if (showcaseDetails) {
    showcaseDetails.innerHTML = `
      <h3 class="showcase-title">${role.title}</h3>
      <p class="showcase-detail-text">${role.detail}</p>
      <div class="showcase-usage-box">
        ${role.usage}
      </div>
      <div class="showcase-example-box">
        ${role.example}
      </div>
    `;
  }
}

// Render Toolkit Checklist
function renderToolkitList() {
  if (!simulationContent || !s2ToolsList) return;
  
  const tools = simulationContent.toolkit.tools;
  s2ToolsList.innerHTML = '';
  
  tools.forEach(tool => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.dataset.toolId = tool.id;
    
    item.innerHTML = `
      <div class="list-item-summary">
        <div class="list-item-content">
          <div class="list-item-icon">
            <i data-lucide="${tool.icon}"></i>
          </div>
          <div class="list-item-text">
            <h3>${tool.title}</h3>
            <p>${tool.shortDesc}</p>
          </div>
        </div>
        <i data-lucide="chevron-right" class="list-item-arrow"></i>
      </div>
      <div class="tool-details-expand" style="display: none; margin-top: 14px; font-size: 13.5px; line-height: 1.5; color: var(--text-muted); border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 12px;">
        <p style="margin-bottom: 10px;">${tool.detail}</p>
        <div style="background: rgba(0, 245, 212, 0.02); padding: 10px 14px; border-radius: 6px; border: 1px dashed rgba(0, 245, 212, 0.25); color: #a4fbe9;">
          ${tool.tip}
        </div>
      </div>
    `;
    
    item.addEventListener('click', () => toggleToolExpand(tool, item));
    s2ToolsList.appendChild(item);
  });
  
  lucide.createIcons();
}

// Toggle tool card expansions
function toggleToolExpand(tool, element) {
  const detailBox = element.querySelector('.tool-details-expand');
  const isExpanded = element.classList.contains('selected');
  
  // Collapse all others
  document.querySelectorAll('#s2-tools-list .list-item').forEach(item => {
    item.classList.remove('selected');
    const db = item.querySelector('.tool-details-expand');
    if (db) db.style.display = 'none';
  });
  
  if (!isExpanded) {
    element.classList.add('selected');
    detailBox.style.display = 'block';
  }
}


// ========================================================
// GAME SIMULATOR LOGIC (5-Question Flow with 25-Pool)
// ========================================================
async function initGamePage() {
  await fetchSimulationContent();
  setupGameEventListeners();
  startNewGameSession();
}

// Setup listeners specifically for game.html
function setupGameEventListeners() {
  if (btnS3Lock) btnS3Lock.addEventListener('click', submitGameChoice);
  if (btnFactCheckHint) btnFactCheckHint.addEventListener('click', revealFactCheckHint);
  if (btnNextQuestion) btnNextQuestion.addEventListener('click', handleNextQuestionClick);
  if (btnSummaryRestart) btnSummaryRestart.addEventListener('click', startNewGameSession);
}

// Selects 5 random questions from a pool
function selectRandomQuestions(pool, count = 5) {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Start a fresh game session
function startNewGameSession() {
  if (!simulationContent) return;
  
  // Choose 5 random questions
  activeQuestions = selectRandomQuestions(simulationContent.challengePool, 5);
  currentQuestionIndex = 0;
  cumulativeCivicHealth = 50; // starts at 50%
  correctAnswersCount = 0;
  gameSessionHistory = [];
  
  // Reset visual layouts
  if (finalSummaryCard) finalSummaryCard.classList.add('hidden');
  if (challengeGameCard) challengeGameCard.classList.remove('hidden');
  if (gameIntroHeader) gameIntroHeader.classList.remove('hidden');
  
  // Reset all dot classes
  const dots = document.querySelectorAll('.game-dot');
  dots.forEach((dot, idx) => {
    dot.className = 'game-dot';
    if (idx === 0) dot.classList.add('active');
  });

  loadQuestion(0);
}

// Load a specific question from our 5 selected questions
function loadQuestion(index) {
  const question = activeQuestions[index];
  selectedChoice = null;
  
  // Update Header Progress Label
  if (gameProgressBadge) {
    gameProgressBadge.textContent = `Question ${index + 1} of 5`;
  }
  
  // Update progress dots highlight
  const dots = document.querySelectorAll('.game-dot');
  dots.forEach((dot, idx) => {
    dot.classList.remove('active');
    if (idx === index) {
      dot.classList.add('active');
    }
  });

  // Render question feed card details
  if (s3Headline) s3Headline.textContent = question.headline;
  if (s3Source) s3Source.textContent = question.source;
  if (s3Desc) s3Desc.textContent = question.desc;
  if (s3Question) s3Question.textContent = question.question;
  
  // Render multiple choice options A, B, C, D
  if (s3ChoicesList) {
    s3ChoicesList.innerHTML = '';
    question.choices.forEach(choice => {
      const choiceBox = document.createElement('div');
      choiceBox.className = 'choice-box';
      choiceBox.dataset.choiceId = choice.id;
      
      choiceBox.innerHTML = `
        <div class="choice-letter">${choice.id}</div>
        <div class="choice-text">
          <strong>${choice.label}</strong>: ${choice.text}
        </div>
      `;
      
      choiceBox.addEventListener('click', () => selectGameChoice(choice.id, choiceBox));
      s3ChoicesList.appendChild(choiceBox);
    });
  }

  // Reset Lock button state
  if (btnS3Lock) {
    btnS3Lock.disabled = true;
    btnS3Lock.innerHTML = `<i data-lucide="lock"></i> <span>Lock Answer</span>`;
    btnS3Lock.classList.remove('hidden');
  }

  // Hide Next Question button initially
  if (btnNextQuestion) {
    btnNextQuestion.classList.add('hidden');
  }

  // Reset Hint display panel
  if (hintDisplayPanel) {
    hintDisplayPanel.className = 'footer-hint-text-panel';
    hintDisplayPanel.innerHTML = `
      <i data-lucide="help-circle"></i>
      <span>Need help? Click the hint badge above to analyze this source website.</span>
    `;
  }

  // Re-lock right outcome dashboard panel
  if (gameOutcomePanel) {
    gameOutcomePanel.classList.add('locked');
  }
  
  lucide.createIcons();
}

// Select a choice
function selectGameChoice(choiceId, element) {
  // Ignore click choice selection if answer is already locked
  if (gameOutcomePanel && !gameOutcomePanel.classList.contains('locked')) return;
  
  selectedChoice = choiceId;
  
  // Unselect all boxes
  document.querySelectorAll('.choice-box').forEach(box => {
    box.classList.remove('selected');
  });
  
  // Select clicked box
  element.classList.add('selected');
  
  // Enable lock button
  if (btnS3Lock) btnS3Lock.disabled = false;
}

// Show fact-check details
function revealFactCheckHint() {
  if (!hintDisplayPanel || !activeQuestions[currentQuestionIndex]) return;
  
  const question = activeQuestions[currentQuestionIndex];
  hintDisplayPanel.className = 'footer-hint-text-panel active-hint';
  hintDisplayPanel.innerHTML = `
    <i data-lucide="check-circle"></i>
    <span><strong>Fact-Check Inspection:</strong> ${question.hint}</span>
  `;
  lucide.createIcons();
}

// Submit choice to Backend and show results dashboard
async function submitGameChoice() {
  if (!selectedChoice || !activeQuestions[currentQuestionIndex]) return;
  
  if (btnS3Lock) {
    btnS3Lock.disabled = true;
    btnS3Lock.innerHTML = `<i data-lucide="loader" class="spin-icon"></i> <span>Processing...</span>`;
    lucide.createIcons();
  }
  
  const question = activeQuestions[currentQuestionIndex];
  
  try {
    // Artificial 250ms delay to feel professional
    await new Promise(resolve => setTimeout(resolve, 250));
    
    const result = evaluateChoiceClient(question.id, selectedChoice);
    
    // Save to history for final round breakdown
    gameSessionHistory.push({
      question: question,
      selectedChoice: selectedChoice,
      outcome: result.outcome
    });
    
    // Unlock outcomes panel
    if (gameOutcomePanel) {
      gameOutcomePanel.classList.remove('locked');
      renderOutcomeDashboard(result, question);
    }
    
    // Apply Civic Health changes and color progress dots
    const delta = result.outcome.civicHealthDelta;
    cumulativeCivicHealth = Math.min(100, Math.max(0, cumulativeCivicHealth + delta));
    
    const dots = document.querySelectorAll('.game-dot');
    if (delta > 0) {
      dots[currentQuestionIndex].classList.add('correct');
      correctAnswersCount++;
    } else if (delta < 0) {
      dots[currentQuestionIndex].classList.add('incorrect');
    }
    
    // Set Next button label (Step 5 of 5 triggers score see-through)
    if (btnNextQuestion) {
      if (currentQuestionIndex < 4) {
        btnNextQuestion.innerHTML = `<span>Next Question</span> <i data-lucide="arrow-right"></i>`;
      } else {
        btnNextQuestion.innerHTML = `<span>See Final Score & Summary</span> <i data-lucide="award"></i>`;
      }
      btnNextQuestion.classList.remove('hidden');
    }
    
    if (btnS3Lock) {
      btnS3Lock.innerHTML = `<i data-lucide="lock-keyhole"></i> <span>Lock Answer</span>`;
      btnS3Lock.classList.add('hidden');
    }

    // Update icons since we modified button HTML
    lucide.createIcons();
    
    // Scroll outcome panel on smaller viewports
    if (window.innerWidth <= 1024 && gameOutcomePanel) {
      setTimeout(() => {
        gameOutcomePanel.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  } catch (error) {
    console.error('Error submitting choice:', error);
    alert('Failed to process choice.');
    if (btnS3Lock) {
      btnS3Lock.disabled = false;
      btnS3Lock.innerHTML = `<i data-lucide="lock"></i> <span>Lock Answer</span>`;
      lucide.createIcons();
    }
  }
}

// Render outcome details inside Dashboard
function renderOutcomeDashboard(data, question) {
  const outcome = data.outcome;
  
  if (s4ChoiceIndicatorText) s4ChoiceIndicatorText.textContent = outcome.choiceLabel;
  
  // Feedback card class, title, icon
  if (s4FeedbackCard) {
    s4FeedbackCard.className = `feedback-card ${outcome.badgeClass}`;
    s4FeedbackIcon.setAttribute('data-lucide', outcome.badgeIcon);
    s4FeedbackTitle.textContent = outcome.badgeTitle;
    s4FeedbackText.textContent = outcome.badgeText;
  }
  
  // Populate consequences
  if (s4ConsequencesList) {
    s4ConsequencesList.innerHTML = '';
    outcome.consequences.forEach(conseq => {
      const li = document.createElement('li');
      li.innerHTML = conseq.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      s4ConsequencesList.appendChild(li);
    });
  }
  
  // Render chart progress bars
  if (s4StatsChart) {
    s4StatsChart.innerHTML = '';
    
    Object.keys(data.stats).forEach(key => {
      const pct = data.stats[key];
      const isUserChoice = (key === data.choiceSelected) ? ' (Your Choice)' : '';
      const barItem = document.createElement('div');
      barItem.className = 'chart-bar-item';
      
      const choiceObj = question && question.choices ? question.choices.find(c => c.id === key) : null;
      const optionLabel = choiceObj ? choiceObj.label : `Option ${key}`;
      
      barItem.innerHTML = `
        <div class="chart-bar-info">
          <span>${optionLabel}${isUserChoice}</span>
          <strong>${pct}%</strong>
        </div>
        <div class="chart-bar-bg">
          <div class="chart-bar-fill bar-${key}" style="width: 0%"></div>
        </div>
      `;
      s4StatsChart.appendChild(barItem);
      
      // Animate percentage bar filling up
      setTimeout(() => {
        const fill = barItem.querySelector(`.bar-${key}`);
        if (fill) fill.style.width = `${pct}%`;
      }, 100);
    });
  }
  
  // Community Civic Health Meter
  if (civicHealthVal) civicHealthVal.textContent = `${data.communityCivicHealth}%`;
  
  if (civicHealthFill) {
    civicHealthFill.style.width = '0%';
    setTimeout(() => {
      civicHealthFill.style.width = `${data.communityCivicHealth}%`;
    }, 200);
  }
  
  lucide.createIcons();
}

// Next Question button clicked
function handleNextQuestionClick() {
  if (currentQuestionIndex < 4) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  } else {
    // End of game reached! Render final summary scoreboard card
    showFinalScoreboard();
  }
}

// Render final summary dashboard
function showFinalScoreboard() {
  if (challengeGameCard) challengeGameCard.classList.add('hidden');
  if (gameIntroHeader) gameIntroHeader.classList.add('hidden');
  if (finalSummaryCard) finalSummaryCard.classList.remove('hidden');
  
  // Set cumulative score text
  if (summaryScoreVal) {
    summaryScoreVal.textContent = `${cumulativeCivicHealth}%`;
  }
  
  // Radial color wrapper class update
  const radialProgress = document.querySelector('.score-radial-progress');
  if (radialProgress) {
    radialProgress.className = 'score-radial-progress'; // reset
    
    let rankTitle = "";
    let rankIcon = "";
    let rankDesc = "";
    
    if (cumulativeCivicHealth >= 80) {
      radialProgress.classList.add('rank-master');
      rankTitle = "Master Fact-Checker";
      rankIcon = "award";
      rankDesc = "Excellent job! You verified the news, protected your neighbors from panic, and reported scammers. You are a true shield of democratic transparency.";
    } else if (cumulativeCivicHealth >= 60) {
      radialProgress.classList.add('rank-defender');
      rankTitle = "Digital Defender";
      rankIcon = "shield";
      rankDesc = "Great job! You made wise fact-checking decisions and flagged rumors. A few unverified clicks here and there, but you help keep the community healthy.";
    } else if (cumulativeCivicHealth >= 45) {
      radialProgress.classList.add('rank-observer');
      rankTitle = "Passive Observer";
      rankIcon = "eye-off";
      rankDesc = "You avoided spreading rumors, but remained passive rather than actively verifying or reporting posts. Democracy thrives on active, critical observers.";
    } else {
      radialProgress.classList.add('rank-spreader');
      rankTitle = "Rumor Spreader";
      rankIcon = "alert-triangle";
      rankDesc = "Caution! You shared sensationalized fake headlines instantly, spreading rumors. Remember to slow down, check sources, and verify facts first.";
    }
    
    if (summaryRankTitle) summaryRankTitle.textContent = rankTitle;
    if (summaryRankDesc) summaryRankDesc.textContent = rankDesc;
    
    if (summaryRankBadge) {
      summaryRankBadge.innerHTML = `<i data-lucide="${rankIcon}"></i> <span>${rankTitle}</span>`;
    }
  }
  
  // Set Accuracy
  if (summaryAccuracyVal) {
    summaryAccuracyVal.textContent = `${correctAnswersCount} / 5`;
  }
  
  // Render round-by-round breakdown
  if (summaryQuestionsList) {
    summaryQuestionsList.innerHTML = '';
    gameSessionHistory.forEach((historyItem, idx) => {
      const q = historyItem.question;
      const outcome = historyItem.outcome;
      const isReal = q.type === 'real';
      
      const card = document.createElement('div');
      card.className = 'review-item-card';
      
      // Build options list
      let choicesHtml = '';
      q.choices.forEach(choice => {
        const isSelected = choice.id === historyItem.selectedChoice;
        const selectedClass = isSelected ? 'selected-choice' : '';
        const checkIcon = isSelected ? '🔹 ' : '&nbsp;&nbsp;&nbsp;&nbsp;';
        choicesHtml += `
          <div class="review-choice-line ${selectedClass}">
            <span>${checkIcon} <strong>Option ${choice.id}:</strong> ${choice.label} - <em>${choice.text}</em></span>
          </div>
        `;
      });
      
      const badgeClass = outcome.badgeClass; // e.g. badge-success, badge-danger
      const badgeTitle = outcome.badgeTitle; // e.g. 🏆 Wise Choice! Fact-Checker
      const deltaSign = outcome.civicHealthDelta >= 0 ? `+${outcome.civicHealthDelta}` : `${outcome.civicHealthDelta}`;
      const deltaColor = outcome.civicHealthDelta >= 0 ? 'var(--color-success)' : 'var(--color-danger)';
      
      card.innerHTML = `
        <div class="review-item-header">
          <span class="review-q-num">Round ${idx + 1}</span>
          <span class="review-q-type ${isReal ? 'type-real' : 'type-fake'}">${isReal ? 'Verified News' : 'Unverified Rumor'}</span>
        </div>
        <div class="review-headline-box">
          <div class="review-headline-title">${q.headline}</div>
          <div class="review-headline-source">Source: <strong>${q.source}</strong></div>
        </div>
        <div class="review-choices-box">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px;">Your Options & Selection:</div>
          ${choicesHtml}
        </div>
        <div class="review-feedback-bar ${badgeClass}">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <i data-lucide="${outcome.badgeIcon}"></i>
            <strong style="font-size: 14px;">${badgeTitle}</strong>
          </div>
          <p style="margin: 4px 0 0 0; font-size: 13px; line-height: 1.4;">${outcome.badgeText}</p>
          <div style="margin-top: 8px; font-size: 12px; opacity: 0.9;">
            Civic Health Change: <strong style="color: ${deltaColor};">${deltaSign}%</strong>
          </div>
        </div>
      `;
      summaryQuestionsList.appendChild(card);
    });
  }
  
  lucide.createIcons();
  
  // Scroll to summary card top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Reset Game simulation (reshuffles questions)
function restartGameSimulation() {
  startNewGameSession();
}


// ========================================================
// UTILS
// ========================================================
// Fetch simulation content details locally
async function fetchSimulationContent() {
  simulationContent = simulationContentData;
}

// Client-side evaluator to process choice and simulate community stats
function evaluateChoiceClient(questionId, choice) {
  const question = simulationContent.challengePool.find(q => q.id === Number(questionId));
  if (!question) return null;

  let outcome = {};
  const isReal = question.type === 'real';

  if (choice === 'A') {
    outcome = {
      choiceLabel: "Fact-Checked First",
      badgeClass: "badge-success",
      badgeIcon: "award",
      badgeTitle: "🏆 Wise Choice! Fact-Checker",
      badgeText: isReal 
        ? "Even though this news is true, fact-checking first is the only way to defend the truth."
        : "By checking facts first, you stopped the rumor chain and protected your community.",
      civicHealthDelta: 25,
      consequences: isReal 
        ? [
            "**Verified Truth**: You confirmed the source was official, making you a trusted citizen.",
            "**Supported Democracy**: Informed citizens can act on real policies and help society run better."
          ]
        : [
            "**Halted Misinformation**: The chain of fake news stopped with you, reducing public confusion.",
            "**Protected Society**: Well-informed voters hold public officials accountable fairly."
          ]
    };
  } else if (choice === 'B') {
    outcome = {
      choiceLabel: "Shared Instantly",
      badgeClass: "badge-danger",
      badgeIcon: "alert-triangle",
      badgeTitle: isReal ? "📢 Lucky Choice! Informed but Risky" : "⚠️ Risky Choice! Rumor Spreader",
      badgeText: isReal
        ? "This news is true, so sharing it was helpful, but you took a risk by not checking the source first."
        : "Sharing unverified headlines spreads fear and weakens community trust.",
      civicHealthDelta: isReal ? 10 : -25,
      consequences: isReal
        ? [
            "**Spread Good News**: The community was informed about a real vaccination or safety drive.",
            "**Risky Habit**: If the news had been fake, you would have spread a rumor. Always verify first."
          ]
        : [
            "**Spread of Misinformation**: You contributed to a viral rumor that turned out to be false.",
            "**Damaged Public Trust**: Citizens lost trust in public institutions based on a fake story."
          ]
    };
  } else if (choice === 'C') {
    outcome = {
      choiceLabel: "Ignored & Scrolled",
      badgeClass: "badge-warning",
      badgeIcon: "eye-off",
      badgeTitle: "💤 Passive Choice! Silent Observer",
      badgeText: isReal
        ? "You ignored the post. While it didn't spread fake news, you missed out on important verified warnings."
        : "Ignoring prevents spreading rumors, but it doesn't help address fake news.",
      civicHealthDelta: 0,
      consequences: isReal
        ? [
            "**Missed Information**: You missed a verified government warning or helpful public update.",
            "**Passive Citizen**: Democracy needs active, informed citizens who engage with real news."
          ]
        : [
            "**Unchecked Rumors**: Although you didn't spread it, others will, and the rumor continues.",
            "**Missed Opportunity**: You missed the chance to report the post and stop the misinformation."
          ]
    };
  } else if (choice === 'D') {
    outcome = {
      choiceLabel: "Reported Post",
      badgeClass: isReal ? "badge-danger" : "badge-info",
      badgeIcon: isReal ? "x-circle" : "shield",
      badgeTitle: isReal ? "❌ Poor Choice! False Flag" : "🛡️ Proactive Choice! Digital Defender",
      badgeText: isReal
        ? "You reported verified news! Flagging real warnings as fake news hurts public safety campaigns."
        : "Reporting helps platforms label bad actors and limit the reach of fake news.",
      civicHealthDelta: isReal ? -15 : 15,
      consequences: isReal
        ? [
            "**Censored Truth**: You flagged actual public alerts, potentially blocking important info from others.",
            "**Damaged Trust**: Reporting verified news spreads confusion and delays vital public actions."
          ]
        : [
            "**Protected Community**: Fewer people will see this fake story in their newsfeeds.",
            "**Civic Action**: You took active responsibility to maintain a cleaner digital public square."
          ]
    };
  }

  // Manage choice statistics in local storage to simulate community votes
  let storedStats = localStorage.getItem('sim_stats');
  if (!storedStats) {
    const defaultStats = {};
    for (let i = 1; i <= 25; i++) {
      defaultStats[i] = { A: 48, B: 24, C: 18, D: 30 };
    }
    storedStats = JSON.stringify(defaultStats);
    localStorage.setItem('sim_stats', storedStats);
  }
  const stats = JSON.parse(storedStats);
  const qIdStr = String(questionId);
  if (!stats[qIdStr]) {
    stats[qIdStr] = { A: 48, B: 24, C: 18, D: 30 };
  }
  stats[qIdStr][choice]++;
  localStorage.setItem('sim_stats', JSON.stringify(stats));

  const qStats = stats[qIdStr];
  const total = Object.values(qStats).reduce((sum, val) => sum + val, 0);
  const percentages = {
    A: Math.round((qStats.A / total) * 100),
    B: Math.round((qStats.B / total) * 100),
    C: Math.round((qStats.C / total) * 100),
    D: Math.round((qStats.D / total) * 100)
  };

  const cumulativeWeightedScore = (qStats.A * 25) + (qStats.D * 15) + (qStats.C * 0) + (qStats.B * -25);
  const worstCase = total * -25;
  const bestCase = total * 25;
  const range = bestCase - worstCase;
  const communityCivicHealth = range > 0 
    ? Math.round(((cumulativeWeightedScore - worstCase) / range) * 100)
    : 50;

  return {
    choiceSelected: choice,
    outcome: outcome,
    stats: percentages,
    totalPlayers: total,
    communityCivicHealth: communityCivicHealth
  };
}
