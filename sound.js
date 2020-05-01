function loadAllSounds() {
  console.log('loadAllSounds');
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

  this.leftRightSound.setVolume(1);
  this.rotationSound.setVolume(0.5);
  this.rotationFailSound.setVolume(1);
  this.touchDownSound.setVolume(1);

  this.clearLineSingleSound.setVolume(1);
  this.clearLineDoubleSound.setVolume(1);
  this.clearLineTripleSound.setVolume(1);
  this.clearLineSpecialSound.setVolume(1);

  this.gameOverSound.setVolume(0.2);
  this.musicSound.setVolume(0.1);
  this.levelUpSound.setVolume(0.6);
}

function resetAndPlay(sound) {
  console.log('resetAndPlay: ' + sound);
  if (sound.currentTime > 0) {
    sound.currentTime = 0;
  }
  console.log('ok');
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
  this.gameOverSound.currentTime = 0;
  this.musicSound.playbackRate = 1;
  resetAndPlay(this.musicSound);
}

function soundGameOver() {
  this.gameOverSound.play();
  this.musicSound.pause();
  this.musicSound.currentTime = 0;
}

function soundTouchDown() {
  resetAndPlay(this.touchDownSound);
}

function soundLevelUp() {
  this.musicSound.playbackRate += 0.05;
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
