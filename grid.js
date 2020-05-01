class Grid {
  constructor() {
    // int [][] cells = new int[w][h];
    this.cells = new Array(w);
    for (let i = 0; i < w; i++) {
      this.cells[i] = new Array(h).fill(0);
    }
  }

  isFree(x, y) {
    if (x > -1 && x < w && y > -1 && y < h) {
      return this.cells[x][y] == 0;
    } else if (y < 0) {
      return true;
    }
    return false;
  }

  pieceFits() {
    let x = piece.x;
    let y = piece.y;
    let pos = piece.pos;
    let pieceOneStepDownOk = true;
    for (let i = 0; i < 4; i++) {
      let tmpx = pos[r][i][0] + x;
      let tmpy = pos[r][i][1] + y;
      if (tmpy >= h || !this.isFree(tmpx, tmpy)) {
        pieceOneStepDownOk = false;
        break;
      }
    }
    return pieceOneStepDownOk;
  }

  addPieceToGrid() {
    let x = piece.x;
    let y = piece.y;
    let pos = piece.pos;
    for (let i = 0; i < 4; i++) {
      if (pos[r][i][1] + y >= 0) {
        this.cells[pos[r][i][0] + x][pos[r][i][1] + y] = piece.c;
      } else {
        gameOn = false;
        gameOver = true;
        // soundGameOver();
        return;
      }
    }
    // soundTouchDown();
    score.addPiecePoints();
    this.checkFullLines();
    goToNextPiece();
    this.drawGrid();
  }

  checkFullLines() {
    let nb = 0; //number of full lines
    for (let j = 0; j < h; j++) {
      let fullLine = true;
      for (let i = 0; i < w; i++) {
        fullLine = this.cells[i][j] != 0;
        if (!fullLine) {
          break;
        }
      }
      // this jth line if full, delete it
      if (fullLine) {
        nb++;
        for (let k = j; k > 0; k--) {
          for (let i = 0; i < w; i++) {
            this.cells[i][k] = this.cells[i][k - 1];
          }
        }
        // top line will be empty
        for (let i = 0; i < w; i++) {
          this.cells[i][0] = 0;
        }
      }
    }
    this.deleteLines(nb);
    // soundClearLines(nb);
  }

  deleteLines(nb) {
    nbLines += nb;
    if (int(nbLines / 10) > level - 1) {
      goToNextLevel();
    }
    score.addLinePoints(nb);
  }

  setToBottom() {
    let originalY = piece.y;
    let j = 0;
    for (j = 0; j < h; j++) {
      if (!this.pieceFits()) {
        break;
      } else {
        piece.y++;
      }
    }
    piece.y--;
    this.addPieceToGrid();
  }

  drawGrid() {
    stroke(120);
    push();
    translate(160, 40);
    for (let i = 0; i <= w; i++) {
      line(i * q, 0, i * q, h * q);
    }
    for (let j = 0; j <= h; j++) {
      line(0, j * q, w * q, j * q);
    }

    stroke(80);
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
        if (this.cells[i][j] != 0) {
          fill(this.cells[i][j]);
          rect(i * q, j * q, q, q);
        }
      }
    }
    pop();
  }
}
