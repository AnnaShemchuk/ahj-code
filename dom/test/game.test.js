import Game from '../src/js/app.js';

describe('Game', () => {
  let game;
  
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    game = new Game();
  });

  afterEach(() => {
    game.stopMoving();
    game.destroy();
    document.body.innerHTML = '';
  });

  test('creates game board with 16 cells', () => {
    const cells = document.querySelectorAll('.cell');
    expect(cells.length).toBe(16);
  });

  test('creates gnome image element', () => {
    const gnome = document.querySelector('.gnome');
    expect(gnome).not.toBeNull();
    expect(gnome.tagName).toBe('IMG');
    expect(gnome.src).toContain('gnome.png');
  });

  test('moves gnome to different cells', () => {
    const initialPos = game.currentPosition;
    jest.useFakeTimers();
    game.startMoving();
    jest.advanceTimersByTime(1000);
    
    expect(game.currentPosition).not.toBe(initialPos);
    jest.useRealTimers();
  });

  test('stopMoving() clears interval', () => {
    game.startMoving();
    expect(game.intervalId).not.toBeNull();
    
    game.stopMoving();
    expect(game.intervalId).toBeNull();
  });
});