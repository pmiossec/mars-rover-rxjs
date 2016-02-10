import { Rover, Command, NORTH, EAST, WEST, SOUTH } from "../src/rover";
import Complex from "../src/Complex";
import { expect } from 'chai';

describe("Rover", () => {

  it("Should turn left", () => {
    let rover = new Rover(new Complex(1, 2), NORTH);
    rover.execute(Command.LEFT);
    expect(rover).to.be.deep.equal(new Rover(new Complex(1, 2), WEST));
  }),

  it("Should turn right", () => {
    let rover = new Rover(new Complex(1, 2), NORTH);
    rover.execute(Command.RIGHT);
    expect(rover).to.be.deep.equal(new Rover(new Complex(1, 2), EAST));
  }),

  it("Should move forward", () => {
    let rover = new Rover(new Complex(1, 2), NORTH);
    rover.execute(Command.FORWARD);
    expect(rover).to.be.deep.equal(new Rover(new Complex(1, 3), NORTH));
  })

});
