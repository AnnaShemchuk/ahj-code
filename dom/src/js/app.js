class Game {
  constructor() {
    this.fieldSize = 4;
    this.currentPosition = null;
    this.gnomeImage = 'images/gnome.png';
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
    const appElement = document.getElementById('app');
    if (!appElement) {
      throw new Error('App container not found');
    }

    this.field = document.createElement('div');
    this.field.className = 'game-field';
    Object.assign(this.field.style, {
      display: 'grid',
      gridTemplateColumns: `repeat(${this.fieldSize}, 1fr)`,
      gridTemplateRows: `repeat(${this.fieldSize}, 1fr)`,
      gap: '10px',
      width: '400px',
      height: '400px',
      backgroundColor: '#f0f0f0'
    });

    for (let i = 0; i < this.fieldSize ** 2; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      Object.assign(cell.style, {
        border: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      });
      this.field.appendChild(cell);
    }

    appElement.appendChild(this.field);
  }

  createGnome() {
    this.gnome = document.createElement('img');
    this.gnome.className = 'gnome';
    this.gnome.src = this.gnomeImage;
    this.gnome.alt = 'Gnome character';
    Object.assign(this.gnome.style, {
      width: '50px',
      height: '50px'
    });
    this.moveToRandomCell();
  }

  moveToRandomCell() {
    const cells = this.field?.querySelectorAll('.cell');
    if (!cells || !cells.length) return;

    let newPosition;
    if (cells.length === 1) {
      newPosition = 0;
    } else {
      do {
        newPosition = Math.floor(Math.random() * cells.length);
      } while (newPosition === this.currentPosition && cells.length > 1);
    }

    if (this.currentPosition !== null) {
      cells[this.currentPosition].innerHTML = '';
    }
    cells[newPosition].appendChild(this.gnome);
    this.currentPosition = newPosition;
  }

  startMoving() {
    this.stopMoving();
    this.intervalId = setInterval(() => this.moveToRandomCell(), 1000);
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

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    window.game = new Game();
  });
}

export default Game;