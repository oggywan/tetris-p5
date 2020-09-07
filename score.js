class Score {
  constructor() {
    this.points = 0;
  }

  addLinePoints(nb) {
    if (nb == 4) {
      this.points += level * 10 * 20;
    } else {
      this.points += level * nb * 20;
    }
  }

  addPiecePoints() {
    this.points += level * 5;
  }

  addLevelPoints() {
    this.points += level * 100;
  }

  display() {
    push();
    translate(40, 60);

    //score
    fill(textColor);
    text('score: ', 0, 0);
    fill(230, 230, 12);
    text('' + this.formatPoint(this.points), 0, txtSize);

    //level
    fill(textColor);
    text('level: ', 0, 3 * txtSize);
    fill(230, 230, 12);
    text('' + level, 0, 4 * txtSize);

    //lines
    fill(textColor);
    text('lines: ', 0, 6 * txtSize);
    fill(230, 230, 12);
    text('' + nbLines, 0, 7 * txtSize);
    pop();

    push();
    translate(400, 60);

    //score
    fill(textColor);
    text('next: ', 0, 0);

    translate(1.2 * q, 1.5 * q);
    nextPiece.display(true);
    pop();
  }

  formatPoint(p) {
    let txt = '';
    let qq = int(p / 1000000);
    if (qq > 0) {
      txt += qq + '.';
      p -= qq * 1000000;
    }

    qq = int(p / 1000);
    if (txt != '') {
      if (qq == 0) {
        txt += '000';
      } else if (qq < 10) {
        txt += '00';
      } else if (qq < 100) {
        txt += '0';
      }
    }
    if (qq > 0) {
      txt += qq;
      p -= qq * 1000;
    }
    if (txt != '') {
      txt += '.';
    }

    if (txt != '') {
      if (p == 0) {
        txt += '000';
      } else if (p < 10) {
        txt += '00' + p;
      } else if (p < 100) {
        txt += '0' + p;
      } else {
        txt += p;
      }
    } else {
      txt += p;
    }
    return txt;
  }
}
