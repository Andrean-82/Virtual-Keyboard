import Keyboard from './Keyboard.js';
import text from './language/engkey.js';
import './style.css';

const Keys = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'IntlSlash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

const body = document.querySelector('body');
const divcreat = document.createElement('div');
divcreat.classList.add('area');
body.appendChild(divcreat);
const window = document.createElement('div');
window.classList.add('window');
divcreat.append(window);
const wrapperKeyboard = document.createElement('div');
wrapperKeyboard.classList.add('wrapper-keyboard');
divcreat.append(wrapperKeyboard);

let keyOne;
let Id;
const array = [];

function overkill() {
  for (let i = 0; i < Keys.length; i++) {
    for (let j = 0; j < Keys[i].length; j++) {
      keyOne = document.createElement('div');
      keyOne.id = Keys[i][j];
      keyOne.classList.add('button');
      keyOne.addEventListener('click', createdKey, false);
      Id = text.find((val) => val.code === keyOne.id).small;
      keyOne.textContent = Id;
      wrapperKeyboard.append(keyOne);
    }
  }
}
overkill();

function createdKey(e) {
  e.preventDefault();
  const eventKeq = e.target;
  const button = this.id;
  if (eventKeq.id === 'CapsLock') {
    Id = text.find((val) => val.code === button).shift;
    array.push(window.textContent = Id);
    return text.shift;
  } if (eventKeq.id != 'CapsLock') {
    eventKeq.classList.toggle('not-shadow');
    const button = this.id;
    Id = text.find((val) => val.code === button).small;
    array.push(window.textContent = Id);
    if (eventKeq.id === 'Backspace') {
      array.pop();
      array.pop();
    }
    window.textContent = array.join('');
    const elem = document.querySelector('.not-shadow');
    elem.classlist.remove('not-shadow');
  }
}
