class Piece {
  constructor(k) {
    this.colors = [
      color(128, 12, 128), //purple
      color(230, 12, 12), //red
      color(12, 230, 12), //green
      color(9, 239, 230), //cyan
      color(230, 230, 9), //yellow
      color(230, 128, 9), //orange
      color(12, 12, 230), //blue
    ];
    this.kind = k < 0 ? int(random(0, 7)) : k;
    this.c = this.colors[this.kind];
    this.r = 0;
    this.x = int(w / 2);
    this.y = 0;
    this.pos = pieces.pos[this.kind];
  }

  display(still) {
    stroke(250);
    fill(this.c);
    push();
    if (!still) {
      translate(160, 40);
      translate(this.x * q, this.y * q);
    }
    let rot = still ? 0 : r;
    for (let i = 0; i < 4; i++) {
      rect(this.pos[rot][i][0] * q, this.pos[rot][i][1] * q, 20, 20);
    }
    pop();

    if (!still && help) {
      let prevY = this.y;
      while (grid.pieceFits()) {
        this.y++;
      }
      this.y--;
      pushMatrix();
      translate(160, 40);
      translate(this.x * q, this.y * q);
      fill(250, 20);
      for (let i = 0; i < 4; i++) {
        rect(this.pos[rot][i][0] * q, this.pos[rot][i][1] * q, 20, 20);
      }
      popMatrix();
      y = prevY;
    }
  }

  // returns true if the piece can go one step down
  oneStepDown() {
    this.y += 1;
    if (!grid.pieceFits()) {
      piece.y -= 1;
      grid.addPieceToGrid();
    }
  }

  // try to go one step left
  oneStepLeft() {
    x -= 1;
    if (!grid.tryOneStepLeft()) {
      x += 1;
    }
  }

  // try to go one step right
  oneStepRight() {
    x += 1;
    if (!grid.tryOneStepRight()) {
      x -= 1;
    }
  }

  goToBottom() {
    grid.setToBottom();
  }

  inputKey(k) {
    switch (k) {
      case LEFT_ARROW:
        this.x--;
        if (grid.pieceFits()) {
          soundLeftRight();
        } else {
          this.x++;
        }
        break;
      case RIGHT_ARROW:
        this.x++;
        if (grid.pieceFits()) {
          soundLeftRight();
        } else {
          this.x--;
        }
        break;
      case DOWN_ARROW:
        this.oneStepDown();
        break;
      case UP_ARROW:
        r = (r + 1) % 4;
        if (!grid.pieceFits()) {
          r = r - 1 < 0 ? 3 : r - 1;
          soundRotationFail();
        } else {
          soundRotation();
        }
        break;
      case SHIFT:
        this.goToBottom();
        break;
    }
  }
}
