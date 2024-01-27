import PopoversController from './taskOne/PopoversController';
import PopoversPlay from './taskOne/PopoversPlay';

export default class HomeWorkMenu {
  constructor() {
    this.container = null;
    this.taskOneInited = false;
  }

  static checkContainer(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
  }

  bindToDOM(container) {
    HomeWorkMenu.checkContainer(container);
    this.container = container;
  }

  bindTaskOneToDOM(container) {
    HomeWorkMenu.checkContainer(container);
    this.containerTaskOne = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('... not bind to DOM');
    }
  }

  drawUI() {
    this.checkBinding();
    this.container.innerHTML = `
      <div class="controls">
        <button data-id="taskOne" class="btn">Задача № 1</button>
      </div>
    `;

    this.taskOne = this.container.querySelector('[data-id=taskOne]');

    this.taskOne.addEventListener('click', (event) => this.onTaskOneClick(event));
  }

  onTaskOneClick(event) {
    event.preventDefault();

    this.taskRemover();

    if (!this.taskOneInited) { this.taskOneInit(); }

    this.taskOneInited = !this.taskOneInited;
  }

  taskRemover() {
    if (this.taskOneInited) { this.taskOneRemove(); }
  }

  taskOneInit() {
    this.popoversPlay = new PopoversPlay();
    this.popoversPlay.bindToDOM(this.containerTaskOne);
    this.popoversPlay.drawUI();

    this.popoversController = new PopoversController(this.popoversPlay);
    this.popoversController.init();
  }

  taskOneRemove() {
    this.popoversController.popoversPlay.clearHTML();
    this.popoversPlay = '';
    this.popoversController = '';
  }
}
