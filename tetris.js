let w = 10;
let h = 20;
let q = 20; //blocks width and height
let dt; // delay between each move
let currentTime;
let grid;
let piece;
let nextPiece;
let pieces;
let score;
let r = 0; //rotation status, from 0 to 3
let level = 1;
let nbLines = 0;

let txtSize = 20;
let textColor;

let gameOver = false;
let gameOn = false;
let help = false;
let soundOn = true;

function preload() {
  loadAllSounds();
}

function setup() {
  canvas = createCanvas(600, 480);
  textSize(20);
  textColor = color(34, 230, 190);
}

function initialize() {
  dt = 1000;
  currentTime = millis();
  score = new Score();
  grid = new Grid();
  pieces = new Pieces();
  piece = new Piece(-1);
  nextPiece = new Piece(-1);
  level = 1;
  nbLines = 0;
}

function draw() {
  background(0);

  if (grid != null) {
    grid.drawGrid();
    let now = millis();
    if (gameOn) {
      if (now - currentTime > dt) {
        currentTime = now;
        piece.oneStepDown();
      }
    }
    piece.display(false);
    score.display();
  }
  if (gameOver) {
    noStroke();
    fill(255, 60);
    rect(110, 195, 240, 2 * txtSize, 3);
    fill(textColor);
    textSize(20);
    text('Game Over', 120, 220);
  }
  if (!gameOn) {
    noStroke();
    fill(255, 60);
    rect(110, 250, 255, 2 * txtSize, 3);
    fill(textColor);
    textSize(20);
    text('click to start playing!', 120, 280);
  }
  noStroke();
  fill(255, 60);
  rect(160, 445, 200, 30, 3);
  fill(textColor);
  textSize(12);
  text(`press "m" to ${soundOn ? 'mute' : 'unmute'} the sound`, 180, 465);
}

function goToNextPiece() {
  //println("-- - nextPiece - - --");
  piece = new Piece(nextPiece.kind);
  nextPiece = new Piece(-1);
  r = 0;
}

function goToNextLevel() {
  score.addLevelPoints();
  level = 1 + int(nbLines / 10);
  dt *= 0.8;
  soundLevelUp();
}

function mousePressed() {
  if (!gameOn) {
    initialize();
    soundGameStart();
    gameOver = false;
    gameOn = true;
  }
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
    case RIGHT_ARROW:
    case DOWN_ARROW:
    case UP_ARROW:
    case SHIFT:
      if (!gameOver) {
        piece.inputKey(keyCode);
      }
      break;
    case 80: // p
      break;
    case 77: // m
      soundOn = !soundOn;
      toogleSound(soundOn);
      break;
    case 72: // h
      help = !help;
      break;
  }
}
