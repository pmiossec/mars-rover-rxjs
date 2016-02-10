import Complex from './Complex';

enum Command {LEFT, FORWARD, RIGHT}

const NORTH = new Complex(0, 1);
const WEST = new Complex(-1, 0);
const SOUTH = new Complex(0, -1);
const EAST = new Complex(1, 0);

const ROTATE_LEFT =  new Complex(0, 1);
const ROTATE_RIGHT = new Complex(0, -1);


class Rover {
  constructor(public position : Complex, public way : Complex) {}

  execute(cmd : Command) {
    if (cmd === Command.LEFT) {
      this.way = this.way.multiply(ROTATE_LEFT);
    } else if (cmd === Command.RIGHT) {
      this.way = this.way.multiply(ROTATE_RIGHT);
    } else {
      this.position = this.position.add(this.way);
    }
  }
}

export {
  NORTH,
  WEST,
  SOUTH,
  EAST,
  Command,
  Rover,
}
