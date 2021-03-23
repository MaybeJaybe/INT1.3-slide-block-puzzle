import Block from './block.js';

class Puzzle {
  constructor(el, imageSrc, width) {
    this.wrapper = el;
    this.imageSrc = imageSrc;
    this.width = width;
    this.dimensions = 4;
    this.blocks = [];

    this.init();

    const img = new Image();
    img.onload = () => {
      console.log(img.width, img.height);
      this.height = img.height * this.width / img.width;

      this.el.style.width = `${this.width}px`;
      this.el.style.height = `${this.height}px`;

      this.setup();
    };
    img.src = this.imageSrc;
  }

  init() {
    this.el = this.create();
    this.wrapper.appendChild(this.el);
  }

  create() {
    const div = document.createElement('div');
    div.style.position = 'relative';
    return div;
  }

  setup() {
    for (let i = 0; i < this.dimensions * this.dimensions - 1; i++) {
      // console.log(i)
      this.blocks.push(new Block(this, i));
    }
  }
}
export default Puzzle;
