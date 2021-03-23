class Block {
  constructor(puzzle, ind) {
    this.puzzle = puzzle;
    this.index = ind;
    this.el = this.createDiv();
    puzzle.el.appendChild(this.el);
  }

  createDiv() {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(${this.puzzle.imageSrc})`;
    div.style.backgroundSize = `${this.puzzle.width}px ${this.puzzle.height}px`;
    div.style.position = 'absolute';
    let blockWidth = this.puzzle.width / this.puzzle.dimensions;
    div.style.width = `${blockWidth}px`;
    let blockHeight = this.puzzle.height / this.puzzle.dimensions;
    div.style.height = `${blockHeight}px`;

    const top = blockHeight * (Math.floor(this.index / this.puzzle.dimensions));
    const left = blockWidth * (this.index % this.puzzle.dimensions);

    div.style.top = `${top}px`;
    div.style.left = `${left}px`;
    div.style.backgroundPosition = `-${left}px -${top}px`;
    div.style.border = '1px solid #b6ced0';

    return div;
  }
}
export default Block;
