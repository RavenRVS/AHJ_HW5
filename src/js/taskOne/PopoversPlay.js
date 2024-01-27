/* eslint-disable max-len */
/* eslint-disable no-console */
export default class PopoversPlay {
  constructor() {
    this.container = null; // for container
    this.clickListeners = [];
    this.toltipEl = false;
    this.tooltip = false;
  }

  // binding container to class
  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  // check container
  checkBinding() {
    if (this.container === null) {
      throw new Error('DomPlay not bind to DOM');
    }
  }

  // rendering HTML
  drawUI() {
    this.checkBinding();

    this.container.innerHTML = `
        <H2>
          Popovers - подсказки открываются по допустимому месту начиная справа и по часовой.
        </H2>
        <div class="container">
  
          <p><a href="" class="has-tooltip" title="50px X 100px">Click to toggle popover</a></p>
  
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi facere dolor dicta accusamus corporis itaque 
          quam deleniti, earum similique alias nostrum corrupti aspernatur, beatae, veniam vel quidem tenetur, odit reiciendis.</p>
          
          <p>Laboriosam aliquid neque in itaque at eaque, similique nisi consequatur voluptatem nam blanditiis eum ab, pariatur, 
          harum molestias quas veniam. Aliquam maxime ipsa neque earum accusantium suscipit quasi. Harum, atque.</p>
  
          <p>Commodi fugiat vitae facere, provident voluptatem architecto reprehenderit. Nemo natus, qui quia animi voluptatibus. 
          Cupiditate dolores, ducimus, nihil adipisci nemo dolorum aliquam eveniet obcaecati aperiam quis eum corporis velit! Esse.</p>
  
          <p>Earum deleniti laborum sunt ea, inventore voluptatum. Excepturi maiores laboriosam fugit, inventore hic quae ipsum, 
          sequi ipsam expedita quisquam provident velit dolorum natus atque qui dignissimos numquam, quam, debitis! Error!</p>
  
          <p>Autem iure cum, accusantium soluta dolor beatae voluptas, ipsa ad quas dignissimos. Laboriosam laborum praesentium 
          necessitatibus cumque tempore animi similique corporis quas, ipsam suscipit id possimus deserunt vitae incidunt eos.</p>
  
          <p>Autem, temporibus, nihil. Debitis quasi ex minus, delectus doloremque officiis sint facere, ducimus impedit! Sit, minima, 
          et modi reiciendis sequi quo, voluptas dignissimos fugit veritatis quis nobis dolor saepe. Nobis!</p>
          
          <p><a href="" class="has-tooltip" title="50px X 100px">Click to toggle popover</a></p>
  
          <p>Itaque eum maxime tempora soluta, impedit placeat, dolores quod esse quibusdam saepe consequatur pariatur maiores? 
          Ex minima delectus unde sit repudiandae quidem maxime non velit aliquam temporibus nulla, magnam, laboriosam!</p>
  
          <p>Eum maiores doloribus, unde vel, doloremque, perferendis amet perspiciatis et distinctio natus veniam tempora magni 
          possimus. Eius repellat molestiae nihil deserunt accusantium provident soluta eligendi, sequi possimus suscipit, laudantium, rem!</p>
  
          <p>Odit voluptas quisquam minus id magni, temporibus cupiditate rem aspernatur nihil ipsam? Minima, tempora perspiciatis doloribus 
          ut nulla. Magni tempore repellendus voluptatem nisi esse minima ipsam, saepe facere et qui?</p>
  
          <p>Esse molestiae dolore hic sunt asperiores vitae odio ab voluptatum provident corporis, voluptates ducimus reiciendis inventore, 
          placeat quasi minima dicta nemo voluptas voluptate unde, culpa illum? Modi qui, officia nobis.</p>
  
          <p>Enim blanditiis nesciunt, repudiandae, ipsa accusantium  quos vitae magnam modi? Quia eaque natus officiis excepturi adipisci 
          optio voluptate quis ut praesentium vero. Adipisci pariatur molestias harum ullam, incidunt blanditiis officia!</p>
  
          <p><a href="" class="has-tooltip" title="50px X 100px">Click to toggle popover</a> </p>
  
          <p>Beatae aspernatur eveniet doloribus ullam magnam, reprehenderit odio eius, laboriosam voluptatum cupiditate voluptate officiis 
          fuga neque, inventore magni, labore assumenda porro dolores quidem. Accusantium temporibus consectetur architecto ab, a suscipit?</p>
  
          <p>Sit dicta eos magni vel quae est debitis ipsam eligendi veniam totam et perspiciatis reprehenderit itaque excepturi omnis autem 
          nihil explicabo sequi ut optio, officia voluptates sed? Ipsam, rerum maiores.</p>
  
          <p>Doloremque fugiat nemo ea, id praesentium illum ab soluta cumque labore nam. Itaque reprehenderit vitae aliquid debitis rerum 
          temporibus cupiditate quos dignissimos! Praesentium molestias provident vero quia esse recusandae magni.</p>
  
          <p>Soluta, rem reprehenderit dignissimos excepturi aut alias natus dicta, cumque, sequi, perferendis facere! Neque debitis veritatis 
          ratione in aut, consectetur incidunt sunt cupiditate exercitationem! Perferendis nemo molestias facilis perspiciatis voluptas.</p>
  
          <p><a href="" class="has-tooltip" title="50px X 100px">Click to toggle popover</a></p>
  
          <p>Totam dicta esse iure repudiandae asperiores culpa accusamus facilis magnam aut nemo earum quia provident necessitatibus, nihil amet, 
          praesentium voluptatibus animi temporibus libero dolorem quis eveniet dolore debitis nisi. Suscipit.</p>
  
          <p>Dolores, inventore, minima. Aut assumenda laudantium praesentium, molestiae cumque incidunt animi necessitatibus ut laboriosam. 
          Porro cupiditate laboriosam, eum dicta ut repudiandae aliquam explicabo soluta. Quidem molestiae numquam unde accusantium quasi!</p>
  
          <p>Eveniet iusto, placeat architecto enim fugiat obcaecati, ullam perferendis in culpa commodi, provident magnam similique natus nobis. 
          Illum, dolores, voluptate placeat laboriosam soluta cupiditate possimus, ea aspernatur quis debitis sint.</p>
  
          <p>Eligendi reiciendis doloremque veritatis rerum corporis voluptatem est expedita porro fuga quae. Nam hic asperiores consequatur odit, 
          ea, illo vitae quis non, aperiam tenetur architecto sint, nisi iure ipsum laudantium.</p>
  
          <p>Ad, repellendus doloremque. Debitis molestiae recusandae vero, quasi autem iusto mollitia deserunt odio delectus voluptatum dicta quae, 
          tempora sint doloremque rem. Quod eum fugiat magni nostrum, dolore eligendi vel nisi.</p>
  
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut aspernatur praesentium ipsum perferendis voluptas omnis ab quidem, 
          corrupti corporis aperiam, architecto, doloremque sequi at nisi fugit quaerat molestiae quae consectetur!</p>
      
          <p><a href="" class="has-tooltip" title="50px X 100px">Click to toggle popover</a></p>
      
          <p>Modi ab asperiores est quae consectetur inventore perferendis! Voluptatibus cumque voluptate repellat, earum ad nulla et natus eligendi. 
          Repellat ad iusto facilis dolorem recusandae, modi suscipit sapiente soluta nihil quam!</p>
        </div>
      `;

    this.container.classList.add('task');

    // находим все элементы ссылок на подсказки
    this.hasTooltips = this.container.querySelectorAll('.has-tooltip');

    // вешаем обработчик событий на каждую ссылку подсказки
    for (let i = 0; i < this.hasTooltips.length; i += 1) {
      this.hasTooltips[i].addEventListener('click', (event) => this.onClick(event));
    }
  }

  // Add listener to click
  addClickListeners(callback) {
    this.clickListeners.push(callback);
  }

  onClick(event) { // метод клика на ссылку подсказки
    event.preventDefault();

    // если клик происходит повторно, то удаляет подсказку
    const condition = this.checkTooltip(event.target);
    if (condition) { return; }

    this.toltipEl = event.target; // элемент по которому кликнули
    const textEL = this.toltipEl.title; // текст для подсказки из атрибута title

    this.clickListeners.forEach((o) => o.call(null, textEL));
  }

  checkTooltip(target) { // проверка клика на туже самую подсказку
    if (this.toltipEl === target) {
      this.tooltip.remove();

      this.toltipEl = false;
      this.tooltip = false;

      return true;
    }

    return false;
  }

  addTooltip(textEL) { // метод добавляет подсказку
    this.tooltip = document.createElement('div');
    const tooltipHeading = document.createElement('p');
    const tooltipText = document.createElement('p');

    tooltipHeading.textContent = 'Popover Title';
    tooltipText.textContent = textEL;

    this.tooltip.appendChild(tooltipHeading);
    this.tooltip.appendChild(tooltipText);
    this.toltipEl.appendChild(this.tooltip);
    this.tooltip.classList.add('tooltip');
  }

  delTooltip() { // удаляет подсказку
    if (this.tooltip) {
      this.tooltip.remove();
    }
  }

  position() {
    // если подсказки нету, то метод остонавливается
    if (!this.toltipEl) { return; }

    // атрибут для добавления стрелочки к подсказке
    this.tooltip.dataset.position = 'top';

    // высота и ширина подсказки
    const { height, width } = this.tooltip.getBoundingClientRect();
    // ширина кнопки
    const widthBtn = this.toltipEl.getBoundingClientRect().width;

    /*
      /  Что бы центрировать подсказку по горизонтали,
      /  от центра кнопки надо отнять половину ширины подсказки.
      */
    const toltipLeft = widthBtn / 2 - width / 2;

    /*
      / Что бы центрировать подсказку по вертикали,
      / от нуля нужно отнять высоту подсказки.
      */
    const toltipTop = 0 - height;

    // позиционирования подсказки через стили
    this.tooltip.style = `left: ${toltipLeft}px; top: ${toltipTop}px`;
  }

  // метод для позиционирования подсказки с любой доступной стороны отнсоительно страницы
  // positioning() {
  //   if (!this.toltipEl) { return; }
  //   const screenW = window.innerWidth;
  //   const screenH = window.innerHeight;

  //   const tooltipH = this.tooltip.getBoundingClientRect().height; // находим высоту подсказки
  //   const tooltipW = this.tooltip.getBoundingClientRect().width; // находим ширину подсказки

  //   const heightPage = window.pageYOffset; // растояние от начала страницы

  //   const {
  //     top,
  //     left,
  //     right,
  //     bottom,
  //     height,
  //     width,
  //   } = this.toltipEl.getBoundingClientRect(); // координаты ссылки на подсказку

  //   // задаём через style позиционирование по условию
  //   if (screenW - (right + tooltipW) >= 0) {
  //     // справа
  //     this.tooltip.dataset.position = 'right';
  //     this.tooltip.style = `left: ${right}px; top: ${top + heightPage - ((tooltipH - height) / 2)}px`;
  //   // eslint-disable-next-line max-len
  //   } else if (screenH - (bottom + tooltipH) >= 0 && tooltipW <= screenW && (screenW - left) >= tooltipW) {
  //     // снизу
  //     this.tooltip.dataset.position = 'bottom';
  //     this.tooltip.style = `left: ${(left + width / 2) - tooltipW / 2}px; top: ${heightPage + bottom}px`;
  //   } else if (left - tooltipW >= 0) {
  //     // слева
  //     this.tooltip.dataset.position = 'left';
  //     this.tooltip.style = `left: ${left - tooltipW}px; top: ${top + heightPage - ((tooltipH - height) / 2)}px`;
  //   } else if (top - tooltipH >= 0) {
  //     // сверху
  //     this.tooltip.dataset.position = 'top';
  //     this.tooltip.style = `left: ${(left + width / 2) - tooltipW / 2}px; top: ${top + heightPage - tooltipH}px`;
  //   }
  // }

  clearHTML() { // очищаем container в DOM
    this.container.classList.remove('task');
    this.container.innerHTML = '';
  }
}
