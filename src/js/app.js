/* eslint-disable no-console */
import HomeWorkMenu from './HomeWorkMenu';

const containerNav = document.getElementById('nav');
const containerTaskOne = document.getElementById('taskOne');

const homeWorkMenu = new HomeWorkMenu();

homeWorkMenu.bindToDOM(containerNav);
homeWorkMenu.bindTaskOneToDOM(containerTaskOne);

homeWorkMenu.drawUI();

console.log('app started');
