const Game = require('../src/js/app');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test('should create game field', () => {
    expect(document.querySelector('.game-field')).not.toBeNull();
  });

  describe('Field Creation', () => {
    test('should create game field with correct class', () => {
      const field = document.querySelector('.game-field');
      expect(field).not.toBeNull();
    });

    test('should create 16 cells (4x4 grid)', () => {
      const cells = document.querySelectorAll('.cell');
      expect(cells.length).toBe(16);
    });

    test('cells should be children of game field', () => {
      const field = document.querySelector('.game-field');
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
        expect(cell.parentNode).toBe(field);
      });
    });
  });

  describe('Gnome Creation', () => {
    test('should create gnome element', () => {
      const gnome = document.querySelector('.gnome');
      expect(gnome).not.toBeNull();
    });

    test('gnome should be an image', () => {
      const gnome = document.querySelector('.gnome');
      expect(gnome.tagName).toBe('IMG');
    });

    test('gnome should be placed in one of the cells', () => {
      const gnome = document.querySelector('.gnome');
      const cellWithGnome = gnome.closest('.cell');
      expect(cellWithGnome).not.toBeNull();
    });
  });

  describe('Gnome Movement', () => {
    test('should change position after move', () => {
      const initialPosition = game.currentPosition;
      game.moveToRandomCell();
      expect(game.currentPosition).not.toBe(initialPosition);
    });

    test('should not stay in same position when moving', () => {
      game.currentPosition = 0;
      const cells = document.querySelectorAll('.cell');
      cells[0].appendChild(game.gnome);
      
      game.moveToRandomCell();
      expect(game.currentPosition).not.toBe(0);
    });
  });
});