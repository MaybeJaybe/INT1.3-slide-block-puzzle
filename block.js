class Block {
  constructor(puzzle, ind) {
    this.isEmpty = false;
    this.puzzle = puzzle;
    this.index = ind;
    this.height = this.puzzle.height / this.puzzle.dimensions;
    this.width = this.puzzle.width / this.puzzle.dimensions;

    this.el = this.createDiv();
    puzzle.el.appendChild(this.el);

    if (this.index === this.puzzle.dimensions * this.puzzle.dimensions - 1) {
      this.isEmpty = true;
      return;
    }
    this.setImage();
    this.setPosition(this.index);
  }

  createDiv() {
    const div = document.createElement('div');

    div.style.backgroundSize = `${this.puzzle.width}px ${this.puzzle.height}px`;
    div.style.position = 'absolute';
    div.style.width = `${this.width}px`;
    div.style.height = `${this.height}px`;
    div.style.border = '1px solid #b6ced0';

    div.onclick = () => {
      console.log('Click', this.index);
      console.log('Empty index');

      const currentIndex = this.puzzle.findPosition(this.index);
      const emptyIndex = this.puzzle.findEmpty();
      const { x, y } = this.getCoordinates(currentIndex);
      const { x: emptyX, y: emptyY } = this.getCoordinates(emptyIndex);
      console.log(x, y);
      console.log(emptyX, emptyY);
      if ((x === emptyX || y === emptyY)
      && (Math.abs(x - emptyX) === 1 || Math.abs(y - emptyY) === 1)) {
        console.log('can swap');
        this.puzzle.swapBlocks(currentIndex, emptyIndex);
      }
    };

    return div;
  }

  setImage() {
    const { x, y } = this.getCoordinates(this.index);
    const top = this.height * y;
    const left = this.width * x;
    this.el.style.backgroundImage = `url(${this.puzzle.imageSrc})`;
    this.el.style.backgroundPosition = `-${left}px -${top}px`;
  }

  setPosition(index) {
    const { left, top } = this.getPosition(index);
    this.el.style.top = `${top}px`;
    this.el.style.left = `${left}px`;
  }

  getPosition(index) {
    const { x, y } = this.getCoordinates(index);
    return {
      top: this.height * y,
      left: this.width * x,
    };
  }

  getCoordinates(index) {
    return {
      x: index % this.puzzle.dimensions,
      y: Math.floor(index / this.puzzle.dimensions),
    };
  }
}
export default Block;
