import gnomeImage from '../images/gnome.png';

class Game {
    constructor() {
        this.fieldSize = 4;
        this.currentPosition = null;
        this.gnomeImage = gnomeImage;
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
        field.style.display = 'grid';
        field.style.gridTemplateColumns = `repeat(${this.fieldSize}, 1fr)`;
        field.style.gridTemplateRows = `repeat(${this.fieldSize}, 1fr)`;
        field.style.gap = '10px';
        field.style.width = '400px';
        field.style.height = '400px';

        for (let i = 0; i < this.fieldSize ** 2; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.border = '1px solid #ccc';
            cell.style.display = 'flex';
            cell.style.justifyContent = 'center';
            cell.style.alignItems = 'center';
            field.appendChild(cell);
        }

        document.body.appendChild(field);
        this.field = field;
    }

    createGnome() {
        this.gnome = document.createElement('img');
        this.gnome.src = this.gnomeImage;
        this.gnome.className = 'gnome';
        this.gnome.style.width = '50px';
        this.gnome.style.height = '50px';
        this.moveToRandomCell();
    }

    moveToRandomCell() {
        const cells = this.field.querySelectorAll('.cell');
        let newPosition;

        do {
            newPosition = Math.floor(Math.random() * cells.length);
        } while (newPosition === this.currentPosition && cells.length > 1);

        if (this.currentPosition !== null) {
            cells[this.currentPosition].innerHTML = '';
        }
        
        cells[newPosition].appendChild(this.gnome);
        this.currentPosition = newPosition;
    }

    startMoving() {
        setInterval(() => this.moveToRandomCell(), 2000);
    }
}

export default Game;