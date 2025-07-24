const Game = require('../src/js/app');

describe('Game', () => {
  let game;

  beforeEach(() => {
    jest.mock('../src/images/gnome.png', () => 'test-image-path');
    game = new Game();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  describe('Gnome Behavior', () => {
    test('creates gnome image element', () => {
      const gnome = document.querySelector('.gnome');
      expect(gnome).not.toBeNull();
      expect(gnome.tagName).toBe('IMG');
      expect(gnome.src).toMatch(/test-image-path/);
    });
  });

  describe('Movement Logic', () => {
    test('handles movement with single cell', () => {
      const singleCellGame = new Game();
      singleCellGame.fieldSize = 1;

      document.body.innerHTML = '';
      singleCellGame.createField();
      singleCellGame.createGnome();

      expect(singleCellGame.currentPosition).toBe(0);

      singleCellGame.moveToRandomCell();
      expect(singleCellGame.currentPosition).toBe(0);
    });
  });
});