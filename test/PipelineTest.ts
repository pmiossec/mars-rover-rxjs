import { Rover, Command, NORTH, EAST, WEST, SOUTH } from "../src/rover";
import Complex from "../src/Complex";
import { keysToCommands  } from "../src/pipeline";


import { expect } from 'chai';
import * as rx from 'rx';


describe("Pipeline", () => {

  it("Should map left to command", () => {
    let keys = rx.Observable.just(37);

    let commands = keysToCommands(keys);
    let result:Command = null;
    commands.subscribe(cmd => result = cmd);

    expect(result).to.be.equals(Command.LEFT);
  }),

  it("Should map right to command", () => {
    let keys = rx.Observable.just(39);

    let commands = keysToCommands(keys);
    let result:Command = null;
    commands.subscribe(cmd => result = cmd);

    expect(result).to.be.equals(Command.RIGHT);
  }),

  it("Should map forward command", () => {
    let keys = rx.Observable.just(38);

    let commands = keysToCommands(keys);
    let result:Command = null;
    commands.subscribe(cmd => result = cmd);

    expect(result).to.be.equals(Command.FORWARD);
  })

});
