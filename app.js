// Math Arena: Battle Royale - Core Game Logic
const SVGAvatars = {
  // Steve: Classic Minecraft character
  steve: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <rect x="20" y="20" width="60" height="60" fill="#c49a75" />
    <rect x="20" y="20" width="60" height="25" fill="#583b27" />
    <rect x="25" y="45" width="15" height="10" fill="#fff" />
    <rect x="60" y="45" width="15" height="10" fill="#fff" />
    <rect x="30" y="45" width="10" height="10" fill="#4d53a5" />
    <rect x="60" y="45" width="10" height="10" fill="#4d53a5" />
    <rect x="40" y="55" width="20" height="15" fill="#5c3826" />
    <rect x="40" y="55" width="20" height="5" fill="#30150b" />
    <rect x="20" y="80" width="60" height="20" fill="#1b8c9c" />
  </svg>`,

  // Steve in Diamond Armor
  steve_diamond: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <rect x="20" y="20" width="60" height="60" fill="#c49a75" />
    <rect x="20" y="20" width="60" height="25" fill="#583b27" />
    <rect x="25" y="45" width="15" height="10" fill="#fff" />
    <rect x="60" y="45" width="15" height="10" fill="#fff" />
    <rect x="30" y="45" width="10" height="10" fill="#4d53a5" />
    <rect x="60" y="45" width="10" height="10" fill="#4d53a5" />
    <rect x="40" y="55" width="20" height="15" fill="#5c3826" />
    <rect x="40" y="55" width="20" height="5" fill="#30150b" />
    <!-- Helmet -->
    <path d="M 15,15 L 85,15 L 85,60 L 70,60 L 70,35 L 30,35 L 30,60 L 15,60 Z" fill="#3cd5d8" />
    <path d="M 25,25 L 35,25 L 35,30 L 25,30 Z" fill="#fff" opacity="0.6" />
    <rect x="20" y="80" width="60" height="20" fill="#3cd5d8" />
  </svg>`,

  // Shelly: Brawl Stars starting character
  shelly: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Face -->
    <circle cx="50" cy="50" r="30" fill="#f0b692" />
    <!-- Purple Hair -->
    <path d="M 20,40 Q 50,0 80,40 Q 95,65 80,80 Q 70,55 50,55 Q 30,55 20,80 Q 5,65 20,40 Z" fill="#800080" />
    <!-- Hair Bandana -->
    <path d="M 20,40 Q 50,25 80,40" fill="none" stroke="#ffff00" stroke-width="6" />
    <!-- Eyes -->
    <ellipse cx="40" cy="50" rx="4" ry="6" fill="#fff" />
    <ellipse cx="60" cy="50" rx="4" ry="6" fill="#fff" />
    <circle cx="40" cy="50" r="2" fill="#503020" />
    <circle cx="60" cy="50" r="2" fill="#503020" />
    <!-- Bandana / Scarf -->
    <path d="M 30,75 L 70,75 L 50,90 Z" fill="#ffff00" />
    <!-- Mouth -->
    <path d="M 45,63 Q 50,68 55,63" fill="none" stroke="#a03020" stroke-width="3" />
  </svg>`,

  // Golden Crow: Epic Brawl Stars skin
  crow_gold: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Golden Head -->
    <circle cx="50" cy="50" r="30" fill="#ffd700" />
    <!-- Crow Beak -->
    <path d="M 35,48 L 10,55 L 35,62 Z" fill="#ffaa00" stroke="#333" stroke-width="2" />
    <!-- Cool Sunglasses -->
    <path d="M 33,40 L 70,40 L 68,48 L 54,48 L 52,43 L 48,43 L 46,48 L 31,48 Z" fill="#222" />
    <path d="M 38,42 L 45,42" stroke="#fff" stroke-width="1" opacity="0.8" />
    <!-- Leather Jacket Collar -->
    <path d="M 30,75 L 70,75 L 80,95 L 20,95 Z" fill="#333" />
    <!-- Golden Zipper -->
    <line x1="50" y1="75" x2="50" y2="95" stroke="#ffd700" stroke-width="3" />
  </svg>`,

  // Peely: Banana character from Fortnite
  peely: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Banana Body -->
    <path d="M 35,90 Q 25,50 35,20 Q 40,5 50,5 Q 60,5 65,20 Q 75,50 65,90 Z" fill="#ffe135" />
    <!-- Tip -->
    <path d="M 45,5 Q 50,0 55,5 L 50,15 Z" fill="#4b5320" />
    <!-- Peel details -->
    <path d="M 30,55 Q 50,65 70,55" fill="none" stroke="#d4b000" stroke-width="2" />
    <!-- Eyes -->
    <circle cx="43" cy="30" r="3.5" fill="#000" />
    <circle cx="57" cy="30" r="3.5" fill="#000" />
    <circle cx="44" cy="29" r="1" fill="#fff" />
    <circle cx="58" cy="29" r="1" fill="#fff" />
    <!-- Rosy cheeks -->
    <circle cx="39" cy="35" r="3" fill="#ff7f7f" opacity="0.6" />
    <circle cx="61" cy="35" r="3" fill="#ff7f7f" opacity="0.6" />
    <!-- Smile -->
    <path d="M 46,38 Q 50,43 54,38" fill="none" stroke="#000" stroke-width="2" />
    <!-- Suit -->
    <path d="M 32,75 L 68,75 L 65,90 L 35,90 Z" fill="#222" />
    <path d="M 40,75 L 50,85 L 60,75" fill="none" stroke="#fff" stroke-width="2" />
    <polygon points="48,85 52,85 50,92" fill="#ff0000" />
  </svg>`,

  // Ghillie Suit Soldier (PUBG)
  ghillie: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Green Camo Blob -->
    <circle cx="50" cy="50" r="32" fill="#4d5d3b" />
    <!-- Grass Tufts -->
    <path d="M 20,40 L 15,30 L 25,35 L 30,20 L 38,32 L 50,15 L 62,32 L 70,20 L 75,35 L 85,30 L 80,40" fill="none" stroke="#2f3b20" stroke-width="6" stroke-linecap="round" />
    <!-- Eye Slots -->
    <rect x="35" y="45" width="12" height="6" fill="#151a0f" rx="2" />
    <rect x="53" y="45" width="12" height="6" fill="#151a0f" rx="2" />
    <circle cx="41" cy="48" r="2" fill="#d48259" />
    <circle cx="59" cy="48" r="2" fill="#d48259" />
    <!-- Body -->
    <path d="M 25,80 Q 50,65 75,80 L 80,95 L 20,95 Z" fill="#3c492e" />
    <path d="M 30,80 L 25,95 M 70,80 L 75,95 M 50,75 L 50,95" stroke="#1d2613" stroke-width="4" />
  </svg>`,

  // Minecraft Creeper (Enemy)
  creeper: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <rect x="15" y="15" width="70" height="70" fill="#00ff3c" />
    <rect x="15" y="15" width="70" height="70" fill="#00cc2e" opacity="0.5" />
    <!-- Pixel patterns -->
    <rect x="20" y="20" width="10" height="10" fill="#007f1c" />
    <rect x="65" y="25" width="15" height="10" fill="#007f1c" />
    <rect x="30" y="55" width="10" height="15" fill="#007f1c" />
    <!-- Face -->
    <rect x="25" y="35" width="15" height="15" fill="#000" />
    <rect x="60" y="35" width="15" height="15" fill="#000" />
    <rect x="40" y="50" width="20" height="20" fill="#000" />
    <rect x="35" y="60" width="10" height="20" fill="#000" />
    <rect x="55" y="60" width="10" height="20" fill="#000" />
  </svg>`,

  // Ender Dragon (Boss)
  dragon: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <rect x="20" y="20" width="60" height="60" fill="#141414" />
    <!-- Purple glowing eyes -->
    <rect x="28" y="45" width="12" height="6" fill="#ff00ff" />
    <rect x="60" y="45" width="12" height="6" fill="#ff00ff" />
    <rect x="31" y="47" width="6" height="2" fill="#fff" />
    <rect x="63" y="47" width="6" height="2" fill="#fff" />
    <!-- Horns -->
    <rect x="25" y="5" width="10" height="15" fill="#707070" />
    <rect x="65" y="5" width="10" height="15" fill="#707070" />
    <!-- Snout -->
    <rect x="30" y="65" width="40" height="20" fill="#242424" />
    <rect x="35" y="70" width="6" height="6" fill="#000" />
    <rect x="59" y="70" width="6" height="6" fill="#000" />
  </svg>`,

  // Robo Boss (Brawl Stars Boss)
  roboboss: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <!-- Metal Skull -->
    <rect x="20" y="20" width="60" height="60" fill="#7f8c8d" rx="10" />
    <rect x="20" y="20" width="60" height="25" fill="#95a5a6" rx="5" />
    <!-- Glowing Red Eye (Mono) -->
    <circle cx="50" cy="45" r="12" fill="#c0392b" />
    <circle cx="50" cy="45" r="5" fill="#e74c3c" />
    <circle cx="48" cy="43" r="2" fill="#fff" />
    <!-- Metal Teeth -->
    <rect x="30" y="65" width="8" height="10" fill="#fff" />
    <rect x="42" y="65" width="8" height="10" fill="#fff" />
    <rect x="54" y="65" width="8" height="10" fill="#fff" />
    <rect x="66" y="65" width="8" height="10" fill="#fff" />
    <!-- Horns/Antennas -->
    <line x1="25" y1="20" x2="15" y2="8" stroke="#7f8c8d" stroke-width="6" stroke-linecap="round" />
    <circle cx="15" cy="8" r="6" fill="#e74c3c" />
    <line x1="75" y1="20" x2="85" y2="8" stroke="#7f8c8d" stroke-width="6" stroke-linecap="round" />
    <circle cx="85" cy="8" r="6" fill="#e74c3c" />
  </svg>`,

  // Storm King (Fortnite Boss)
  stormking: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <path d="M 20,40 L 50,10 L 80,40 L 75,80 L 25,80 Z" fill="#1b123a" />
    <!-- Purple smoke aura -->
    <path d="M 10,50 Q 25,30 35,45 Q 50,20 65,45 Q 90,30 80,60 Q 95,80 70,85 Q 50,95 30,85 Q 5,75 10,50 Z" fill="#4d1c8c" opacity="0.3" />
    <!-- Glowing runes/eyes -->
    <polygon points="35,45 42,40 45,50" fill="#ea00ff" />
    <polygon points="65,45 58,40 55,50" fill="#ea00ff" />
    <circle cx="39" cy="44" r="1.5" fill="#fff" />
    <circle cx="61" cy="44" r="1.5" fill="#fff" />
    <!-- Crown of horns -->
    <path d="M 25,30 L 15,10 L 32,22 L 50,2 L 68,22 L 85,10 L 75,30 Z" fill="#0f0521" />
  </svg>`
};

const SkinsDB = [
  // Brawl Stars Skins
  { id: 'shelly', name: 'Shelly', rarity: 'common', theme: 'brawlstars', cost: 0, preview: SVGAvatars.shelly },
  { id: 'crow_gold', name: 'Altın Crow', rarity: 'legendary', theme: 'brawlstars', cost: 350, preview: SVGAvatars.crow_gold },
  
  // Minecraft Skins
  { id: 'steve', name: 'Steve', rarity: 'common', theme: 'minecraft', cost: 0, preview: SVGAvatars.steve },
  { id: 'steve_diamond', name: 'Elmas Steve', rarity: 'epic', theme: 'minecraft', cost: 200, preview: SVGAvatars.steve_diamond },
  
  // Fortnite Skins
  { id: 'peely', name: 'Peely', rarity: 'common', theme: 'fortnite', cost: 0, preview: SVGAvatars.peely },
  { id: 'ghillie', name: 'Ghillie Askeri', rarity: 'rare', theme: 'fortnite', cost: 120, preview: SVGAvatars.ghillie }
];

const Game = {
  // --- Game State ---
  state: {
    theme: 'brawlstars', // brawlstars, minecraft, fortnite
    coins: 100,
    gems: 20,
    vbucks: 500,
    diamonds: 10,
    trophies: 0,
    level: 1,
    xp: 0,
    unlockedSkins: ['shelly', 'steve', 'peely'],
    equippedSkins: {
      brawlstars: 'shelly',
      minecraft: 'steve',
      fortnite: 'peely'
    },
    activeTables: [2, 3, 4, 5, 6, 7, 8, 9, 10], // Default active tables
    stats: {} // Equation stats: { "5x6": { correct: 2, total: 3, time: 2400 } }
  },

  // Running match state
  match: {
    mode: 'boss', // boss, survival, timeattack
    playerHp: 100,
    maxPlayerHp: 100,
    enemyHp: 100,
    maxEnemyHp: 100,
    timeLeft: 15,
    maxTimeLimit: 15,
    timerInterval: null,
    currentQuestion: null,
    score: 0,
    streak: 0,
    questionsAnswered: 0,
    startTime: 0,
    correctThisMatch: 0
  },

  init() {
    this.loadState();
    this.applyTheme(this.state.theme);
    this.updateHUD();
    this.renderShop();
    this.renderParentPanel();
    this.showScreen('home');

    // Register Audio triggers on first click to unlock AudioContext
    document.addEventListener('click', () => {
      AudioManager.init();
    }, { once: true });
  },

  // Save/Load state to localStorage
  saveState() {
    localStorage.setItem('matharena_state_v1', JSON.stringify(this.state));
  },

  loadState() {
    const data = localStorage.getItem('matharena_state_v1');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        this.state = { ...this.state, ...parsed };
      } catch (e) {
        console.error("State parse error", e);
      }
    }
  },

  applyTheme(themeName) {
    this.state.theme = themeName;
    const body = document.body;
    body.className = `theme-${themeName}`;
    this.saveState();
    this.updateCharacterPreview();
  },

  showScreen(screenId) {
    AudioManager.playClick();
    document.querySelectorAll('.screen').forEach(scr => scr.classList.remove('active'));
    document.getElementById(`${screenId}-screen`).classList.add('active');

    if (screenId === 'home') {
      this.updateCharacterPreview();
    }
  },

  updateHUD() {
    document.getElementById('lbl-trophies').innerText = this.state.trophies;
    document.getElementById('lbl-level').innerText = this.state.level;
    
    // Theme-specific currency display
    const container = document.getElementById('currency-container');
    container.innerHTML = '';
    if (this.state.theme === 'brawlstars') {
      container.appendChild(this.createCurrencyBadge('icon-coin', this.state.coins));
      container.appendChild(this.createCurrencyBadge('icon-gem', this.state.gems));
    } else if (this.state.theme === 'minecraft') {
      container.appendChild(this.createCurrencyBadge('icon-coin', this.state.coins));
      container.appendChild(this.createCurrencyBadge('icon-gem', this.state.diamonds, 'Elmas'));
    } else {
      // Fortnite
      container.appendChild(this.createCurrencyBadge('icon-vbuck', this.state.vbucks));
    }
  },

  createCurrencyBadge(iconClass, value, text = '') {
    const div = document.createElement('div');
    div.className = 'currency-badge';
    div.innerHTML = `<span class="currency-icon ${iconClass}"></span> ${value} ${text}`;
    return div;
  },

  updateCharacterPreview() {
    const equipped = this.state.equippedSkins[this.state.theme];
    const skin = SkinsDB.find(s => s.id === equipped);
    const wrapper = document.getElementById('home-char-svg');
    const nameEl = document.getElementById('home-char-name');
    
    if (skin) {
      wrapper.innerHTML = skin.preview;
      nameEl.innerText = skin.name;
    }
  },

  // --- Multiplication Logic ---
  generateQuestion() {
    if (this.state.activeTables.length === 0) {
      this.state.activeTables = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    
    // Pick multiplier from active tables
    const xIndex = Math.floor(Math.random() * this.state.activeTables.length);
    const x = this.state.activeTables[xIndex];
    // Pick multiplicand from 1..10
    const y = Math.floor(Math.random() * 10) + 1;
    const answer = x * y;

    // Generate incorrect answers
    const wrongAnswers = new Set();
    while (wrongAnswers.size < 3) {
      // Generate logical mistakes
      const variation = Math.random();
      let wrongVal;
      if (variation < 0.3) {
        wrongVal = x * (y + (Math.random() > 0.5 ? 1 : -1));
      } else if (variation < 0.6) {
        wrongVal = (x + (Math.random() > 0.5 ? 1 : -1)) * y;
      } else {
        wrongVal = answer + (Math.floor(Math.random() * 10) + 1) * (Math.random() > 0.5 ? 1 : -1);
      }
      
      if (wrongVal > 0 && wrongVal !== answer) {
        wrongAnswers.add(wrongVal);
      }
    }

    const choices = [answer, ...Array.from(wrongAnswers)];
    // Shuffle choices
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    this.match.currentQuestion = { x, y, answer, choices };
    this.match.startTime = Date.now();

    // Display
    document.getElementById('question-text').innerText = `${x} x ${y} = ?`;
    const buttons = document.querySelectorAll('.btn-answer');
    choices.forEach((choice, index) => {
      buttons[index].innerText = choice;
      buttons[index].className = 'btn-answer'; // Reset styling
    });
  },

  // --- Battle Flow ---
  startMatch(mode) {
    this.match.mode = mode;
    this.match.playerHp = 100;
    this.match.maxPlayerHp = 100;
    this.match.enemyHp = 100;
    this.match.maxEnemyHp = 100;
    this.match.score = 0;
    this.match.streak = 0;
    this.match.questionsAnswered = 0;
    this.match.correctThisMatch = 0;

    // Set enemy visual based on theme
    const enemyVisual = document.getElementById('enemy-visual');
    const enemyNameEl = document.getElementById('battle-enemy-name');
    if (this.state.theme === 'minecraft') {
      enemyVisual.innerHTML = SVGAvatars.creeper;
      enemyNameEl.innerText = mode === 'boss' ? 'Ender Dragon' : 'Creeper';
      if (mode === 'boss') {
        enemyVisual.innerHTML = SVGAvatars.dragon;
        this.match.maxEnemyHp = 150;
        this.match.enemyHp = 150;
      }
    } else if (this.state.theme === 'brawlstars') {
      enemyVisual.innerHTML = SVGAvatars.roboboss;
      enemyNameEl.innerText = mode === 'boss' ? 'Robo Boss' : 'Klon Savaşçısı';
      if (mode === 'boss') {
        this.match.maxEnemyHp = 150;
        this.match.enemyHp = 150;
      }
    } else {
      // Fortnite
      enemyVisual.innerHTML = SVGAvatars.stormking;
      enemyNameEl.innerText = mode === 'boss' ? 'Storm King' : 'Karanlık Asker';
      if (mode === 'boss') {
        this.match.maxEnemyHp = 180;
        this.match.enemyHp = 180;
      }
    }

    // Set player visual
    const equipped = this.state.equippedSkins[this.state.theme];
    const skin = SkinsDB.find(s => s.id === equipped);
    document.getElementById('player-visual').innerHTML = skin.preview;
    document.getElementById('battle-player-name').innerText = skin.name;

    // HUD labels
    document.getElementById('battle-hud-title').innerText = mode === 'boss' ? 'BÖLÜM CANAVARI SAVAŞI' : 'HAYATTA KALMA';

    this.updateBattleHpBars();
    this.showScreen('battle');
    this.generateQuestion();

    // Timer setups
    if (mode === 'survival') {
      this.match.timeLeft = 12;
      this.match.maxTimeLimit = 12;
      this.startTimer();
    } else {
      // Boss battle has standard 15s per turn
      this.match.timeLeft = 15;
      this.match.maxTimeLimit = 15;
      this.startTimer();
    }
  },

  startTimer() {
    clearInterval(this.match.timerInterval);
    this.updateTimerBar();

    this.match.timerInterval = setInterval(() => {
      this.match.timeLeft -= 0.1;
      this.updateTimerBar();

      if (this.match.timeLeft <= 0) {
        clearInterval(this.match.timerInterval);
        this.handleTimeout();
      }
    }, 100);
  },

  updateTimerBar() {
    const pct = Math.max(0, (this.match.timeLeft / this.match.maxTimeLimit) * 100);
    document.getElementById('timer-bar-fill').style.width = `${pct}%`;
  },

  updateBattleHpBars() {
    const playerPct = Math.max(0, (this.match.playerHp / this.match.maxPlayerHp) * 100);
    const enemyPct = Math.max(0, (this.match.enemyHp / this.match.maxEnemyHp) * 100);
    
    document.getElementById('player-hp-fill').style.width = `${playerPct}%`;
    document.getElementById('enemy-hp-fill').style.width = `${enemyPct}%`;
  },

  handleAnswer(buttonIndex, event) {
    clearInterval(this.match.timerInterval);
    const selectedAnswer = this.match.currentQuestion.choices[buttonIndex];
    const isCorrect = selectedAnswer === this.match.currentQuestion.answer;
    
    const clickX = event.clientX || event.touches?.[0]?.clientX || window.innerWidth / 2;
    const clickY = event.clientY || event.touches?.[0]?.clientY || window.innerHeight / 2;

    const responseTime = Date.now() - this.match.startTime;
    this.recordStats(this.match.currentQuestion.x, this.match.currentQuestion.y, isCorrect, responseTime);

    this.match.questionsAnswered++;

    if (isCorrect) {
      this.match.correctThisMatch++;
      this.match.streak++;
      AudioManager.playCorrect();
      
      // Floating score/damage text
      const dmg = 15 + Math.min(20, this.match.streak * 3);
      this.showFloatingText(`-${dmg} HP`, clickX, clickY, '#00ff66');

      // Animate player attack
      const playerVisual = document.getElementById('player-visual');
      const enemyVisual = document.getElementById('enemy-visual');
      playerVisual.classList.add('attack-left');
      setTimeout(() => playerVisual.classList.remove('attack-left'), 400);

      // Hit enemy
      setTimeout(() => {
        enemyVisual.classList.add('hurt');
        setTimeout(() => enemyVisual.classList.remove('hurt'), 300);
        this.match.enemyHp -= dmg;
        if (this.match.enemyHp < 0) this.match.enemyHp = 0;
        this.updateBattleHpBars();

        if (this.match.enemyHp <= 0) {
          this.endMatch(true); // Victory
        } else {
          // Continue
          this.nextTurn();
        }
      }, 200);

    } else {
      this.match.streak = 0;
      AudioManager.playHurt();

      // Show floating text
      const dmg = 20;
      this.showFloatingText(`-${dmg} CAN`, clickX, clickY, '#ff3b30');

      // Animate enemy attack
      const playerVisual = document.getElementById('player-visual');
      const enemyVisual = document.getElementById('enemy-visual');
      enemyVisual.classList.add('attack-right');
      setTimeout(() => enemyVisual.classList.remove('attack-right'), 400);

      // Hurt player
      setTimeout(() => {
        playerVisual.classList.add('hurt');
        setTimeout(() => playerVisual.classList.remove('hurt'), 300);
        this.match.playerHp -= dmg;
        if (this.match.playerHp < 0) this.match.playerHp = 0;
        this.updateBattleHpBars();

        if (this.match.playerHp <= 0) {
          this.endMatch(false); // Defeat
        } else {
          // Continue
          this.nextTurn();
        }
      }, 200);
    }
  },

  handleTimeout() {
    AudioManager.playHurt();
    const playerVisual = document.getElementById('player-visual');
    playerVisual.classList.add('hurt');
    setTimeout(() => playerVisual.classList.remove('hurt'), 300);

    // Timeout deals 20 damage
    this.match.playerHp -= 25;
    this.match.streak = 0;
    this.updateBattleHpBars();

    if (this.match.playerHp <= 0) {
      this.endMatch(false);
    } else {
      this.nextTurn();
    }
  },

  nextTurn() {
    // Shrink storm/time for survival mode
    if (this.match.mode === 'survival') {
      // Faster timer as questions go up
      const minLimit = 4;
      const speedModifier = Math.min(8, this.match.questionsAnswered * 0.4);
      this.match.maxTimeLimit = Math.max(minLimit, 12 - speedModifier);
    }
    
    this.match.timeLeft = this.match.maxTimeLimit;
    setTimeout(() => {
      this.generateQuestion();
      this.startTimer();
    }, 600);
  },

  endMatch(victory) {
    clearInterval(this.match.timerInterval);
    
    // Rewards calc
    let goldReward = 0;
    let gemReward = 0;
    let trophyReward = 0;
    let xpReward = 0;

    if (victory) {
      AudioManager.playVictory();
      trophyReward = this.match.mode === 'boss' ? 12 : 8;
      goldReward = 20 + Math.floor(Math.random() * 15) + this.match.correctThisMatch * 2;
      xpReward = 30 + this.match.correctThisMatch * 5;
      
      // Rare drop chance of gems/diamonds
      if (Math.random() > 0.6) {
        gemReward = Math.floor(Math.random() * 3) + 1;
      }
    } else {
      AudioManager.playGameOver();
      trophyReward = -4; // lose some trophies
      goldReward = 5 + this.match.correctThisMatch * 1;
      xpReward = 10 + this.match.correctThisMatch * 2;
    }

    // Apply rewards
    this.state.trophies = Math.max(0, this.state.trophies + trophyReward);
    this.state.xp += xpReward;

    // Currency themes
    if (this.state.theme === 'brawlstars') {
      this.state.coins += goldReward;
      this.state.gems += gemReward;
    } else if (this.state.theme === 'minecraft') {
      this.state.coins += goldReward;
      this.state.diamonds += gemReward; // gems are diamonds in MC theme
    } else {
      // Fortnite
      this.state.vbucks += goldReward + (gemReward * 10);
    }

    // Level up check
    let leveledUp = false;
    const xpNeeded = this.state.level * 100;
    if (this.state.xp >= xpNeeded) {
      this.state.xp -= xpNeeded;
      this.state.level++;
      leveledUp = true;
    }

    this.saveState();
    this.updateHUD();

    // Show End Screen overlay or modal
    const resultTitle = victory ? 'ZAFER KAZANDIN!' : 'ELENDİN!';
    const resultColor = victory ? '#00ff66' : '#ff3b30';
    
    // Construct HTML for overlay
    const overlay = document.createElement('div');
    overlay.className = 'dashboard-modal active';
    overlay.style.zIndex = '3000';
    overlay.innerHTML = `
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; text-align: center; padding: 24px;">
        <h1 class="game-font" style="color: ${resultColor}; font-size: 36px; margin-bottom: 20px; text-shadow: 0 4px 10px rgba(0,0,0,0.5);">${resultTitle}</h1>
        
        <div class="panel-glass" style="width: 100%; max-width: 320px; padding: 20px; margin-bottom: 30px; border-color: ${resultColor}">
          <div style="font-size: 14px; font-weight: bold; color: #888; margin-bottom: 10px;">MAÇ ÖZETİ</div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span>Çözülen Soru:</span>
            <span style="font-weight: 800; color: var(--accent);">${this.match.correctThisMatch} / ${this.match.questionsAnswered}</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
            <span>En Yüksek Seri:</span>
            <span style="font-weight: 800; color: var(--secondary);">${this.match.score} (Seri)</span>
          </div>
          
          <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px; display: flex; justify-content: space-around;">
            <div style="text-align: center;">
              <div style="font-size: 11px; color: #aaa;">KUPA</div>
              <div style="font-size: 20px; font-weight: 900; color: #ff9900;">${trophyReward > 0 ? '+' : ''}${trophyReward}</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 11px; color: #aaa;">ÖDÜL</div>
              <div style="font-size: 20px; font-weight: 900; color: #ffff00;">+${goldReward}</div>
            </div>
            ${gemReward > 0 ? `
            <div style="text-align: center;">
              <div style="font-size: 11px; color: #aaa;">DEĞERLİ</div>
              <div style="font-size: 20px; font-weight: 900; color: #00f0ff;">+${gemReward}</div>
            </div>
            ` : ''}
          </div>
        </div>

        ${leveledUp ? `
          <div class="game-font" style="color: #ffcc00; font-size: 24px; margin-bottom: 20px; animation: bounce 1s infinite alternate;">
            SEVİYE ATLADIN! (LVL ${this.state.level})
          </div>
        ` : ''}

        <button class="btn-action game-font" id="btn-end-match-ok" style="max-width: 200px;">ANA MENÜ</button>
      </div>
    `;

    document.getElementById('app').appendChild(overlay);

    document.getElementById('btn-end-match-ok').addEventListener('click', () => {
      AudioManager.playClick();
      overlay.remove();
      this.showScreen('home');
      this.renderParentPanel();
      
      // Auto open a chest/box on level up
      if (leveledUp) {
        setTimeout(() => this.triggerChestOpening(), 800);
      }
    });
  },

  showFloatingText(text, x, y, color) {
    const appEl = document.getElementById('app');
    const bounds = appEl.getBoundingClientRect();
    
    // Convert screen coordinates to relative app container coordinates
    const relX = x - bounds.left;
    const relY = y - bounds.top;

    const el = document.createElement('div');
    el.className = 'floating-text game-font';
    el.innerText = text;
    el.style.left = `${relX}px`;
    el.style.top = `${relY}px`;
    el.style.color = color || '#fff';
    
    appEl.appendChild(el);
    setTimeout(() => el.remove(), 800);
  },

  // --- Parent Analytics Grid & Table Selectors ---
  recordStats(x, y, isCorrect, timeMs) {
    const key = `${x}x${y}`;
    if (!this.state.stats[key]) {
      this.state.stats[key] = { correct: 0, total: 0, timeSum: 0 };
    }
    this.state.stats[key].total++;
    this.state.stats[key].timeSum += timeMs;
    if (isCorrect) {
      this.state.stats[key].correct++;
    }
    this.saveState();
  },

  renderParentPanel() {
    // Render 10x10 grid
    const grid = document.getElementById('matrix-grid');
    grid.innerHTML = '';

    // Header cells (top row)
    const emptyCell = document.createElement('div');
    emptyCell.className = 'matrix-cell header';
    emptyCell.innerText = 'X';
    grid.appendChild(emptyCell);

    for (let j = 1; j <= 10; j++) {
      const headerCell = document.createElement('div');
      headerCell.className = 'matrix-cell header';
      headerCell.innerText = j;
      grid.appendChild(headerCell);
    }

    // Rows
    for (let i = 1; i <= 10; i++) {
      // Row header
      const rowHeader = document.createElement('div');
      rowHeader.className = 'matrix-cell header';
      rowHeader.innerText = i;
      grid.appendChild(rowHeader);

      for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('div');
        cell.className = 'matrix-cell';
        
        // Find stats for this pair (symmetric lookup: i x j or j x i)
        const key1 = `${i}x${j}`;
        const key2 = `${j}x${i}`;
        const stats = this.state.stats[key1] || this.state.stats[key2];

        if (!stats) {
          cell.className = 'matrix-cell untested';
          cell.innerText = '-';
        } else {
          const accuracy = stats.correct / stats.total;
          const avgTime = stats.timeSum / stats.total;

          // Performance classification
          if (accuracy >= 0.8 && avgTime < 3500) {
            cell.className = 'matrix-cell good';
          } else if (accuracy >= 0.6) {
            cell.className = 'matrix-cell medium';
          } else {
            cell.className = 'matrix-cell bad';
          }
          cell.innerText = `${i * j}`;
          cell.title = `%${Math.round(accuracy * 100)} Doğruluk\nOrt. Süre: ${(avgTime / 1000).toFixed(1)}s`;
        }
        grid.appendChild(cell);
      }
    }

    // Render Table Selector Checkboxes (1 to 10)
    const listEl = document.getElementById('selector-list');
    listEl.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
      const item = document.createElement('div');
      const isSelected = this.state.activeTables.includes(i);
      item.className = `selector-item ${isSelected ? 'selected' : ''}`;
      item.innerText = `${i}'ler`;
      
      item.addEventListener('click', () => {
        AudioManager.playClick();
        if (this.state.activeTables.includes(i)) {
          // Avoid emptying completely
          if (this.state.activeTables.length > 1) {
            this.state.activeTables = this.state.activeTables.filter(v => v !== i);
          }
        } else {
          this.state.activeTables.push(i);
        }
        this.state.activeTables.sort((a,b) => a-b);
        this.saveState();
        this.renderParentPanel();
      });
      listEl.appendChild(item);
    }

    // Render global stats
    let totalQuestions = 0;
    let correctQuestions = 0;
    let totalTime = 0;
    Object.values(this.state.stats).forEach(stat => {
      totalQuestions += stat.total;
      correctQuestions += stat.correct;
      totalTime += stat.timeSum;
    });

    const acc = totalQuestions > 0 ? Math.round((correctQuestions / totalQuestions) * 100) : 0;
    const speed = totalQuestions > 0 ? (totalTime / totalQuestions / 1000).toFixed(1) : '0';

    document.getElementById('stat-total-acc').innerText = `%${acc}`;
    document.getElementById('stat-total-speed').innerText = `${speed}s`;
  },

  // --- Shop & Equipping Skins ---
  renderShop() {
    const grid = document.getElementById('shop-grid');
    grid.innerHTML = '';

    SkinsDB.forEach(skin => {
      const isUnlocked = this.state.unlockedSkins.includes(skin.id);
      const isEquipped = this.state.equippedSkins[skin.theme] === skin.id;

      const card = document.createElement('div');
      card.className = `shop-card panel-glass ${isEquipped ? 'equipped' : ''} ${isUnlocked ? 'owned' : ''}`;
      
      card.innerHTML = `
        <div class="shop-card-svg">${skin.preview}</div>
        <div class="shop-card-name">${skin.name}</div>
        <div class="shop-card-price">
          ${isUnlocked ? `
            <span style="color: var(--color-success);">AÇILDI</span>
          ` : `
            <span class="currency-icon ${this.getCurrencyIcon(skin.theme)}"></span> ${skin.cost}
          `}
        </div>
      `;

      card.addEventListener('click', () => {
        this.handleShopClick(skin);
      });

      grid.appendChild(card);
    });
  },

  getCurrencyIcon(theme) {
    if (theme === 'brawlstars') return 'icon-gem';
    if (theme === 'minecraft') return 'icon-gem'; // Diamond
    return 'icon-vbuck';
  },

  handleShopClick(skin) {
    const isUnlocked = this.state.unlockedSkins.includes(skin.id);
    
    if (isUnlocked) {
      // Equip skin
      this.state.equippedSkins[skin.theme] = skin.id;
      AudioManager.playUnlock();
      this.saveState();
      this.renderShop();
      this.updateCharacterPreview();
      
      // Auto apply theme when equipping skin from that theme
      this.applyTheme(skin.theme);
      this.updateHUD();
    } else {
      // Buy skin
      const cost = skin.cost;
      let wallet = 0;
      let walletKey = '';

      if (skin.theme === 'brawlstars') {
        wallet = this.state.gems;
        walletKey = 'gems';
      } else if (skin.theme === 'minecraft') {
        wallet = this.state.diamonds;
        walletKey = 'diamonds';
      } else {
        wallet = this.state.vbucks;
        walletKey = 'vbucks';
      }

      if (wallet >= cost) {
        // Purchase
        this.state[walletKey] -= cost;
        this.state.unlockedSkins.push(skin.id);
        this.state.equippedSkins[skin.theme] = skin.id;
        
        AudioManager.playUnlock();
        this.saveState();
        this.renderShop();
        this.updateHUD();
        this.updateCharacterPreview();
        this.applyTheme(skin.theme); // Switch theme to the newly purchased item
      } else {
        // Can't afford
        AudioManager.playIncorrect();
        alert('Yetersiz Para! Kazanmak için oyun oyna.');
      }
    }
  },

  // --- Loot Box / Chest Opener ---
  triggerChestOpening() {
    const overlay = document.getElementById('chest-overlay');
    const animationBox = document.getElementById('chest-animation-box');
    const chestSvg = document.getElementById('chest-svg');
    const reveal = document.getElementById('reward-reveal');
    const spinner = document.getElementById('reward-spinner-container');
    
    // Reset chest elements
    overlay.className = 'chest-overlay active';
    reveal.style.display = 'none';
    spinner.style.display = 'none';
    chestSvg.className = 'chest-svg shake-chest';
    
    let clicks = 0;
    const requiredClicks = 3;
    
    // Tap to unlock mechanic
    const tapHandler = () => {
      clicks++;
      AudioManager.playTone(300 + (clicks * 100), 0.1, 'sawtooth');
      
      // Add impact bounce
      chestSvg.style.transform = 'scale(1.2)';
      setTimeout(() => { chestSvg.style.transform = 'scale(1)'; }, 100);

      if (clicks >= requiredClicks) {
        animationBox.removeEventListener('click', tapHandler);
        chestSvg.className = 'chest-svg';
        this.spinChestRewards();
      }
    };
    
    animationBox.addEventListener('click', tapHandler);
  },

  spinChestRewards() {
    const spinner = document.getElementById('reward-spinner-container');
    const track = document.getElementById('reward-track');
    const reveal = document.getElementById('reward-reveal');
    
    spinner.style.display = 'block';
    
    // Assemble the reel of cards (mix of locked skins and gold/gems)
    const rewardPool = [
      { type: 'coin', val: 50, name: '50 Altın', icon: '<rect x="35" y="35" width="30" height="30" fill="gold" rx="15"/>' },
      { type: 'gem', val: 5, name: '5 Elmas/Zümrüt', icon: '<polygon points="50,20 80,45 50,80 20,45" fill="cyan"/>' },
      { type: 'coin', val: 100, name: '100 Altın', icon: '<rect x="30" y="30" width="40" height="40" fill="gold" rx="20"/>' },
      { type: 'gem', val: 15, name: '15 Elmas/Zümrüt', icon: '<polygon points="50,20 80,45 50,80 20,45" fill="cyan"/>' }
    ];

    // Add locked skins to pool
    const lockedSkins = SkinsDB.filter(s => !this.state.unlockedSkins.includes(s.id));
    lockedSkins.forEach(skin => {
      rewardPool.push({ type: 'skin', val: skin.id, name: skin.name, icon: skin.preview, rarity: skin.rarity });
    });

    // Populate reel cards to make it long enough for spinning
    track.innerHTML = '';
    const cardsCount = 30;
    const finalRewardIndex = 25; // Stop on the 26th card

    for (let i = 0; i < cardsCount; i++) {
      // Pick random item, ensuring the target is interesting if skins are left
      let item;
      if (i === finalRewardIndex) {
        if (lockedSkins.length > 0 && Math.random() > 0.3) {
          // Drop rare skin
          item = { type: 'skin', val: lockedSkins[0].id, name: lockedSkins[0].name, icon: lockedSkins[0].preview, rarity: lockedSkins[0].rarity };
        } else {
          // Drop coins
          item = { type: 'coin', val: 200, name: '200 Altın!', icon: '<rect x="30" y="30" width="40" height="40" fill="gold" rx="20"/>' };
        }
      } else {
        item = rewardPool[Math.floor(Math.random() * rewardPool.length)];
      }

      const card = document.createElement('div');
      card.className = `spinner-card ${item.rarity || 'common'}`;
      card.innerHTML = `
        <div style="width: 50px; height: 50px;">${item.icon}</div>
        <div style="font-size: 9px; margin-top: 4px; font-weight: 800; text-align: center; text-transform: uppercase;">${item.name}</div>
      `;
      track.appendChild(card);
    }

    // Set animation parameters
    track.style.transform = 'translateX(0)';
    
    // Play sound loops for spinner ticks
    let tickCount = 0;
    const totalTicks = 35;
    const tickInterval = setInterval(() => {
      tickCount++;
      AudioManager.playTick();
      if (tickCount >= totalTicks) clearInterval(tickInterval);
    }, 120);

    setTimeout(() => {
      // Slide offset calculation
      const cardWidth = 100;
      const containerWidth = 320;
      const targetOffset = -(finalRewardIndex * cardWidth) + (containerWidth / 2) - (cardWidth / 2);
      
      track.style.transform = `translateX(${targetOffset}px)`;
    }, 100);

    // Final unlock reveal
    setTimeout(() => {
      AudioManager.playUnlock();
      const finalItem = lockedSkins.length > 0 ? lockedSkins[0] : null;

      spinner.style.display = 'none';
      reveal.style.display = 'flex';
      
      const iconWrapper = document.getElementById('reward-icon-wrapper');
      const nameEl = document.getElementById('reward-item-name');
      
      if (finalItem) {
        iconWrapper.innerHTML = finalItem.preview;
        nameEl.innerText = finalItem.name;
        
        // Add to unlocked inventory
        this.state.unlockedSkins.push(finalItem.id);
        this.state.equippedSkins[finalItem.theme] = finalItem.id;
        this.applyTheme(finalItem.theme);
      } else {
        // No skins left, give gold/diamonds
        iconWrapper.innerHTML = `<svg viewBox="0 0 100 100"><rect x="30" y="30" width="40" height="40" fill="gold" rx="20"/></svg>`;
        nameEl.innerText = '200 Altın';
        
        if (this.state.theme === 'brawlstars') this.state.coins += 200;
        else if (this.state.theme === 'minecraft') this.state.coins += 200;
        else this.state.vbucks += 300;
      }
      
      this.saveState();
      this.updateHUD();
      this.updateCharacterPreview();
      this.renderShop();

    }, 5200);
  },

  closeChestOverlay() {
    AudioManager.playClick();
    document.getElementById('chest-overlay').classList.remove('active');
  }
};

window.onload = () => {
  Game.init();
};
