'use strict';

class Game {
  constructor() {
    this.fieldSize = 4;
    this.currentPosition = null;
    this.gnomeImage = 'gnome.png';
    this.intervalId = null;
    this.field = null;
    this.gnome = null;
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

    for (let i = 0; i < this.fieldSize ** 2; i++) {
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

    const root = document.getElementById('app') || document.body;
    root.appendChild(field);
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
    if (!cells.length) return;

    let newPosition;
    if (cells.length === 1) {
      newPosition = 0;
    } else {
      do {
        newPosition = Math.floor(Math.random() * cells.length);
      } while (newPosition === this.currentPosition);
    }

    if (this.currentPosition !== null) {
      cells[this.currentPosition].innerHTML = '';
    }
    cells[newPosition].appendChild(this.gnome);
    this.currentPosition = newPosition;
  }

  startMoving() {
    this.stopMoving();
    this.intervalId = setInterval(() => this.moveToRandomCell(), 2000);
  }

  stopMoving() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  destroy() {
    if (this.field?.parentNode) {
      this.field.parentNode.removeChild(this.field);
    }
    this.stopMoving();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Game;
}
if (typeof exports !== 'undefined') {
  exports.default = Game;
}