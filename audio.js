// Web Audio API Synthesizer for Retro Game Sound Effects
const AudioManager = {
  ctx: null,

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  playTone(freqs, duration, type = 'square', volume = 0.1) {
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    const now = this.ctx.currentTime;

    if (Array.isArray(freqs)) {
      // Frequency sweeping/modulation
      osc.frequency.setValueAtTime(freqs[0], now);
      if (freqs.length > 1) {
        osc.frequency.exponentialRampToValueAtTime(freqs[1], now + duration);
      }
    } else {
      osc.frequency.setValueAtTime(freqs, now);
    }

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(volume, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  },

  playClick() {
    this.playTone(600, 0.05, 'triangle', 0.15);
  },

  playCorrect() {
    // Upward ping: starts at 523Hz (C5) then goes to 1046Hz (C6)
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(1046.50, now + 0.08);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.01);
    gain.gain.setValueAtTime(0.12, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  },

  playIncorrect() {
    // Downward buzz
    this.playTone([220, 110], 0.35, 'sawtooth', 0.15);
  },

  playHurt() {
    // Low noise/crunch sound
    this.playTone([180, 60], 0.2, 'sawtooth', 0.2);
  },

  playTick() {
    // Short high-pitched click for chest spinner
    this.playTone(1200, 0.02, 'sine', 0.1);
  },

  playUnlock() {
    // Success item unlock sound
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    // Arpeggio
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, index) => {
      const timeOffset = index * 0.06;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + timeOffset);

      gain.gain.setValueAtTime(0, now + timeOffset);
      gain.gain.linearRampToValueAtTime(0.08, now + timeOffset + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + timeOffset);
      osc.stop(now + timeOffset + 0.15);
    });
  },

  playVictory() {
    // Happy fanfare melody
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const melody = [
      { f: 523.25, d: 0.1 },  // C5
      { f: 523.25, d: 0.1 },  // C5
      { f: 523.25, d: 0.1 },  // C5
      { f: 523.25, d: 0.2 },  // C5
      { f: 659.25, d: 0.2 },  // E5
      { f: 587.33, d: 0.2 },  // D5
      { f: 659.25, d: 0.2 },  // E5
      { f: 698.46, d: 0.2 },  // F5
      { f: 783.99, d: 0.4 }   // G5
    ];

    let timeOffset = 0;
    melody.forEach((note) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, now + timeOffset);

      gain.gain.setValueAtTime(0, now + timeOffset);
      gain.gain.linearRampToValueAtTime(0.1, now + timeOffset + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + note.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + timeOffset);
      osc.stop(now + timeOffset + note.d);

      timeOffset += note.d * 0.95;
    });
  },

  playGameOver() {
    // Sad falling melody
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const melody = [
      { f: 392.00, d: 0.2 },  // G4
      { f: 349.23, d: 0.2 },  // F4
      { f: 311.13, d: 0.2 },  // Eb4
      { f: 246.94, d: 0.5 }   // B3
    ];

    let timeOffset = 0;
    melody.forEach((note) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(note.f, now + timeOffset);

      gain.gain.setValueAtTime(0, now + timeOffset);
      gain.gain.linearRampToValueAtTime(0.12, now + timeOffset + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + note.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + timeOffset);
      osc.stop(now + timeOffset + note.d);

      timeOffset += note.d * 0.95;
    });
  }
};
