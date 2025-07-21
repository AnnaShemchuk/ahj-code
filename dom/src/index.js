import './styles.css';
import gnomeImage from './images/gnome.png';

class Game {
  constructor() {
    this.fieldSize = 4;
    this.currentPosition = null;
    this.init();
  }

  init() {
    this.createField();
    this.createGnome();
    this.startMoving();
  }

  createField() {
    const field = document.createElement('div');
    field.className = 'game-field';

    for (let i = 0; i < this.fieldSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.index = i;
      field.appendChild(cell);
    }

    document.body.appendChild(field);
    this.field = field;
  }

  createGnome() {
    this.gnome = document.createElement('img');
    this.gnome.src = gnomeImage;
    this.gnome.className = 'gnome';
    this.moveToRandomCell();
  }

  moveToRandomCell() {
    const cells = this.field.querySelectorAll('.cell');
    let newPosition;

    do {
      newPosition = Math.floor(Math.random() * cells.length);
    } while (newPosition === this.currentPosition);

    cells[newPosition].appendChild(this.gnome);
    this.currentPosition = newPosition;
  }

  startMoving() {
    setInterval(() => this.moveToRandomCell(), 2000);
  }
}

// Запуск игры при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  new Game();
});