export default class Rover {
  constructor(public max_x:number, public max_y:number) {

  }

  x: number;
  y: number;
  direction: string;

  setInitalState(x: number, y: number, direction: string) {
      this.x = x;
      this.y = y;
      this.direction = direction;
  }
    acceptGpsInstructions(instructions: string) {
        for (var index = 0; index < instructions.length; index++) {
            this.Move(instructions[index]);
        }
    }

    Move(instruction : string) {
        switch(instruction)
        {
            case 'M' :
                this.Go();
                break;
            case 'L':
                this.TurnLeft();
                break;
            case 'R':
                this.TurnRight();
                break;
        }
    }

    Go() {
        switch(this.direction)
        {
            case 'N':
                this.y++;
                break;
            case 'S':
                this.y--;
                break;
            case 'E':
                this.x++;
                break;
            case 'W':
                this.x--;
                break;
        }
    }

    TurnRight() {
        switch(this.direction)
        {
            case 'N':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'N';
                break;
        }
   }

    TurnLeft() {
        switch(this.direction)
        {
            case 'N':
                this.direction = 'W';
                break;
            case 'E':
                this.direction = 'N';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'W':
                this.direction = 'S';
                break;
        }
   }

   whereAreYou() {
        return ''+ this.x + ' ' + this.y + ' ' + this.direction;
   }
}


