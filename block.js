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
  }

  createDiv() {
    const div = document.createElement('div');

    div.style.backgroundSize = `${this.puzzle.width}px ${this.puzzle.height}px`;
    div.style.position = 'absolute';
    div.style.width = `${this.width}px`;
    div.style.height = `${this.height}px`;
    div.style.border = '1px solid #b6ced0';

    div.onclick = () => {
      console.log("Click", this.index);
    };

    return div;
  }

  setImage() {
    const top = this.height * (Math.floor(this.index / this.puzzle.dimensions));
    const left = this.width * (this.index % this.puzzle.dimensions);
    this.el.style.backgroundImage = `url(${this.puzzle.imageSrc})`;
    this.el.style.backgroundPosition = `-${left}px -${top}px`;
  }

  setPosition(index) {
    const {left, top} = this.getPosition(index);
    this.el.style.top = `${top}px`;
    this.el.style.left = `${left}px`;
  }

  getPosition(index) {
    return {
      top: this.height * (Math.floor(index / this.puzzle.dimensions)),
      left: this.width * (index % this.puzzle.dimensions),
    }
  }
}
export default Block;
