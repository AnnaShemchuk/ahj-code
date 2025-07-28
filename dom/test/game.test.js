const Game = require('../src/js/app');

describe('Game', () => {
  let game;

  beforeAll(() => {

    document.body.innerHTML = '<div id="app"></div>';
    global.Image = class {
      constructor() {
        this.src = '';
        setTimeout(() => this.onload?.(), 0);
      }
    };
  });

  beforeEach(() => {
    game = new Game();
  });

  afterEach(() => {
    game.destroy();
    document.body.innerHTML = '<div id="app"></div>';
  });

  test('should create game field with 16 cells', () => {
    const field = document.querySelector('.game-field');
    expect(field).not.toBeNull();
    expect(field.children).toHaveLength(16);
  });

  test('should create gnome image element', () => {
    const gnome = document.querySelector('.gnome');
    expect(gnome).not.toBeNull();
    expect(gnome.tagName).toBe('IMG');
    expect(gnome.src).toContain('gnome.png');
  });

  test('should move gnome to different cells', () => {
    const initialPos = game.currentPosition;
    jest.useFakeTimers();
    game.startMoving();
    jest.advanceTimersByTime(2000);
    expect(game.currentPosition).not.toBe(initialPos);
    jest.useRealTimers();
  });
});