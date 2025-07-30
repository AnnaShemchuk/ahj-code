import '@testing-library/jest-dom';

global.Image = class {
  constructor() {
    this.src = '';
    this.onload = null;
    setTimeout(() => {
      if (typeof this.onload === 'function') {
        this.onload();
      }
    }, 0);
  }
};


window.matchMedia = window.matchMedia || (() => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
}));