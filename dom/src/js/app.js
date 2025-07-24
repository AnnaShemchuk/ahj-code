'use strict';

const gnomeImage = require('../images/gnome.png');

class Game {
  constructor() {
    this.fieldSize = 4;
    this.currentPosition = null;
    this.gnomeImage = gnomeImage;
    this.intervalId = null;
    this.init();
  }

  init() {
    this.createField();
    this.createGnome();
    this.startMoving();
  }

  createField() {
    const field = document.createElement('div');
    Object.assign(field.style, {
      display: 'grid',
      gridTemplateColumns: `repeat(${this.fieldSize}, 1fr)`,
      gridTemplateRows: `repeat(${this.fieldSize}, 1fr)`,
      gap: '10px',
      width: '400px',
      height: '400px',
    });
    field.className = 'game-field';

    for (let i = 0; i < this.fieldSize ** 2; i += 1) {
      const cell = document.createElement('div');
      Object.assign(cell.style, {
        border: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      });
      cell.className = 'cell';
      field.appendChild(cell);
    }

    document.body.appendChild(field);
    this.field = field;
  }

  createGnome() {
    this.gnome = document.createElement('img');
    Object.assign(this.gnome.style, {
      width: '50px',
      height: '50px',
    });
    this.gnome.src = this.gnomeImage;
    this.gnome.className = 'gnome';
    this.gnome.alt = 'Gnome character';
    this.moveToRandomCell();
  }

  moveToRandomCell() {
  const cells = this.field.querySelectorAll('.cell');

  if (!cells || cells.length === 0) {
    return;
  }

  let newPosition;
  
  if (cells.length === 1) {
    newPosition = 0;
  } else {
    do {
      newPosition = Math.floor(Math.random() * cells.length);
    } while (newPosition === this.currentPosition && cells.length > 1);
  }

  if (this.currentPosition !== null && cells[this.currentPosition]) {
    cells[this.currentPosition].innerHTML = '';
  }

  if (cells[newPosition]) {
    cells[newPosition].appendChild(this.gnome);
    this.currentPosition = newPosition;
  }
}

  startMoving() {
    this.intervalId = setInterval(() => this.moveToRandomCell(), 2000);
  }

  stopMoving() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

module.exports = Game;