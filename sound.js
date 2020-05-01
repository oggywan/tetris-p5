function loadAllSounds() {
  masterVolume(0.5);
  soundFormats('mp3', 'ogg');

  this.leftRightSound = loadSound('sounds/SFX_PieceMoveLR.ogg');
  this.rotationSound = loadSound('sounds/SFX_PieceRotateLR.ogg');
  this.rotationFailSound = loadSound('sounds/SFX_PieceRotateFail.ogg');
  this.touchDownSound = loadSound('sounds/SFX_PieceTouchDown.ogg');

  this.clearLineSingleSound = loadSound('sounds/SFX_LineClearSingle.ogg');
  this.clearLineDoubleSound = loadSound('sounds/SFX_LineClearDouble.ogg');
  this.clearLineTripleSound = loadSound('sounds/SFX_LineClearTriple.ogg');
  this.clearLineSpecialSound = loadSound('sounds/SFX_SpecialTetris.ogg');

  this.gameOverSound = loadSound('sounds/GameOver.mp3');
  this.musicSound = loadSound('sounds/tetris-gameboy-02.mp3');
  this.levelUpSound = loadSound('sounds/SFX_LevelUp.ogg');

  this.toogleSound(true);
}

function toogleSound(soundOn) {
  this.leftRightSound.setVolume(soundOn ? 1 : 0);
  this.rotationSound.setVolume(soundOn ? 0.5 : 0);
  this.rotationFailSound.setVolume(soundOn ? 1 : 0);
  this.touchDownSound.setVolume(soundOn ? 1 : 0);

  this.clearLineSingleSound.setVolume(soundOn ? 1 : 0);
  this.clearLineDoubleSound.setVolume(soundOn ? 1 : 0);
  this.clearLineTripleSound.setVolume(soundOn ? 1 : 0);
  this.clearLineSpecialSound.setVolume(soundOn ? 1 : 0);

  this.gameOverSound.setVolume(soundOn ? 0.2 : 0);
  this.musicSound.setVolume(soundOn ? 0.1 : 0);
  this.levelUpSound.setVolume(soundOn ? 0.6 : 0);
}

function resetAndPlay(sound) {
  sound.stop();
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

function soundGameStart() {
  this.gameOverSound.pause();
  this.musicSound.playbackRate = 1;
  resetAndPlay(this.musicSound);
}

function soundGameOver() {
  this.musicSound.pause();
  resetAndPlay(this.gameOverSound);
}

function soundTouchDown() {
  resetAndPlay(this.touchDownSound);
}

function soundLevelUp() {
  this.musicSound.rate(1 + (level - 1) * 0.04);
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
