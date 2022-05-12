/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import Keyboard from './Keyboard';
import './style.css';

const Keys = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'IntlSlash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];
let text;
let N = window.localStorage.getItem('Keyboard') || 'en';
if (N === 'en') {
  text = Keyboard.Lang.engkey;
} else {
  text = Keyboard.Lang.ruskey;
}
let keyOne;
let Id;
const array = [];

const body = document.querySelector('body');
const divcreat = document.createElement('div');
divcreat.classList.add('area');
divcreat.textContent = 'Реализованона Windows 10, держать Shif + нажать Alt переключение языка :-))';
body.appendChild(divcreat);
const win = document.createElement('div');
win.classList.add('window');
divcreat.append(win);
let wrapperKeyboard = document.createElement('div');
wrapperKeyboard.classList.add('wrapper-keyboard');
divcreat.append(wrapperKeyboard);

document.addEventListener('keydown', (event) => {
  const isShift = 'Shift';
  if (isShift && event.key === 'Alt') {
    divcreat.removeChild(wrapperKeyboard);
    if (N === 'en') {
      wrapperKeyboard = document.createElement('div');
      wrapperKeyboard.classList.add('wrapper-keyboard');
      divcreat.append(wrapperKeyboard);
      text = Keyboard.Lang.ruskey;
      localStorage.setItem('Keyboard', 'ru');
      N = 'ru';
      overkill();
    } else {
      wrapperKeyboard = document.createElement('div');
      wrapperKeyboard.classList.add('wrapper-keyboard');
      divcreat.append(wrapperKeyboard);
      text = Keyboard.Lang.engkey;
      localStorage.setItem('Keyboard', 'en');
      N = 'en';
      overkill();
    }
  }
});

function overkill() {
  for (let i = 0; i < Keys.length; i += 1) {
    for (let j = 0; j < Keys[i].length; j += 1) {
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
    array.push(win.textContent = Id);
    return text.shift;
  } if (eventKeq.id !== 'CapsLock') {
    eventKeq.classList.toggle('not-shadow');
    const button = this.id;
    Id = text.find((val) => val.code === button).small;
    array.push(win.textContent = Id);
    if (eventKeq.id === 'Backspace') {
      array.pop();
      array.pop();
    }
    win.textContent = array.join('');
    const elem = document.querySelector('.not-shadow');
    setTimeout(() => elem.classList.remove('not-shadow'), 500);
  }
}
