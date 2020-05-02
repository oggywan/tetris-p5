function loadAllSounds() {
  this.leftRightSound = new Audio('sounds/SFX_PieceMoveLR.ogg');
  this.rotationSound = new Audio('sounds/SFX_PieceRotateLR.ogg');
  this.rotationFailSound = new Audio('sounds/SFX_PieceRotateFail.ogg');
  this.touchDownSound = new Audio('sounds/SFX_PieceTouchDown.ogg');

  this.clearLineSingleSound = new Audio('sounds/SFX_LineClearSingle.ogg');
  this.clearLineDoubleSound = new Audio('sounds/SFX_LineClearDouble.ogg');
  this.clearLineTripleSound = new Audio('sounds/SFX_LineClearTriple.ogg');
  this.clearLineSpecialSound = new Audio('sounds/SFX_SpecialTetris.ogg');

  this.gameOverSound = new Audio('sounds/GameOver.mp3');
  this.musicSound = new Audio('sounds/tetris-gameboy-02.mp3');
  this.musicSound.loop = true;
  this.levelUpSound = new Audio('sounds/SFX_LevelUp.ogg');

  this.toogleSound(true);
}

function toogleSound(soundOn) {
  this.leftRightSound.volume = soundOn ? 1 : 0;
  this.rotationSound.volume = soundOn ? 0.5 : 0;
  this.rotationFailSound.volume = soundOn ? 1 : 0;
  this.touchDownSound.volume = soundOn ? 1 : 0;

  this.clearLineSingleSound.volume = soundOn ? 1 : 0;
  this.clearLineDoubleSound.volume = soundOn ? 1 : 0;
  this.clearLineTripleSound.volume = soundOn ? 1 : 0;
  this.clearLineSpecialSound.volume = soundOn ? 1 : 0;

  this.gameOverSound.volume = soundOn ? 0.2 : 0;
  this.musicSound.volume = soundOn ? 0.1 : 0;
  this.levelUpSound.volume = soundOn ? 0.6 : 0;
}

function resetAndPlay(sound) {
  sound.currentTime = 0;
  sound.play();
}

function soundLeftRight() {
  resetAndPlay(this.leftRightSound);
}

function soundRotation() {
  resetAndPlay(this.rotationSound);
}

function soundRotationFail() {
  resetAndPlay(this.rotationFailSound);
}

function soundGameStart(fromStart = true) {
  this.gameOverSound.pause();
  if (fromStart) {
    this.musicSound.playbackRate = 1;
    resetAndPlay(this.musicSound);
  } else {
    this.musicSound.play();
  }
}

function soundGamePause() {
  this.musicSound.pause();
}

function soundGameOver() {
  this.musicSound.pause();
  resetAndPlay(this.gameOverSound);
}

function soundTouchDown() {
  resetAndPlay(this.touchDownSound);
}

function soundLevelUp() {
  musicSound.playbackRate += 0.03;
  this.levelUpSound.play();
}

function soundClearLines(nb) {
  if (nb === 1) {
    resetAndPlay(this.clearLineSingleSound);
  } else if (nb === 2) {
    resetAndPlay(this.clearLineDoubleSound);
  } else if (nb === 3) {
    resetAndPlay(this.clearLineTripleSound);
  } else if (nb === 4) {
    resetAndPlay(this.clearLineSpecialSound);
  }
}
