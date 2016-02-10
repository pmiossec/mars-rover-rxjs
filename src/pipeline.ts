import * as rx from 'rx'
import { Rover, Command, NORTH } from './rover'
import Complex from './Complex'

function keysToCommands(keys : rx.Observable<number>) : rx.Observable<Command> {
  return keys.map(k => {
    let cmd = Command.FORWARD;
    if (k === 37) {
      cmd = Command.LEFT;
    } else if (k === 39) {
      cmd = Command.RIGHT;
    }
    return cmd;
  });
}

function plugRover(commands : rx.Observable<Command>) : rx.Observable<Rover> {
  let rover : Rover = new Rover(new Complex(0,0), NORTH);
  return commands.scan((rover, command) => {
    rover.execute(command);
    return rover;
  }, rover);
}

export {
  keysToCommands,
  plugRover
}
