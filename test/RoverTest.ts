import Rover from "../src/Rover";
import { expect } from 'chai';

describe("Rover", () => {

  it("Should have good position", () => {
    let rover = new Rover(5, 5);

    rover.setInitalState(1, 2, 'N');

    expect(rover.x).to.be.deep.equal(1);
    expect(rover.y).to.be.deep.equal(2);
    expect(rover.direction).to.be.deep.equal('N');
  }),

  it("Should go forward on y", () => {
    let rover = new Rover(5, 5);

    rover.setInitalState(1, 2, 'N');

    rover.acceptGpsInstructions('M');

    expect(rover.x).to.be.deep.equal(1);
    expect(rover.y).to.be.deep.equal(3);
    expect(rover.direction).to.be.deep.equal('N');
  }),

  it("Should turn right", () => {
    let rover = new Rover(5, 5);

    rover.setInitalState(1, 2, 'N');

    rover.acceptGpsInstructions('R');

    expect(rover.x).to.be.deep.equal(1);
    expect(rover.y).to.be.deep.equal(2);
    expect(rover.direction).to.be.deep.equal('E');
  }),

  it("Should turn left", () => {
    let rover = new Rover(5, 5);

    rover.setInitalState(1, 2, 'N');

    rover.acceptGpsInstructions('L');

    expect(rover.x).to.be.deep.equal(1);
    expect(rover.y).to.be.deep.equal(2);
    expect(rover.direction).to.be.deep.equal('W');
  }),


  it("Should Move freely!", () => {
    let rover = new Rover(5, 5);

    rover.setInitalState(1, 2, 'N');

    rover.acceptGpsInstructions('LMLMLMLMM');

    expect(rover.x).to.be.deep.equal(1);
    expect(rover.y).to.be.deep.equal(3);
    expect(rover.direction).to.be.deep.equal('N');
  }),

  it("Should Move freely myself too!!!!", () => {
    let rover = new Rover(5, 5);

    rover.setInitalState(3, 3, 'E');

    rover.acceptGpsInstructions('MMRMMRMRRM');

    expect(rover.x).to.be.deep.equal(5);
    expect(rover.y).to.be.deep.equal(1);
    expect(rover.direction).to.be.deep.equal('E');
  }),

  it("Let's dance with me...", () => {
    let rover1 = new Rover(5, 5);

    rover1.setInitalState(1, 2, 'N');

    rover1.acceptGpsInstructions('LMLMLMLMM');

    expect(rover1.x).to.be.deep.equal(1);
    expect(rover1.y).to.be.deep.equal(3);
    expect(rover1.direction).to.be.deep.equal('N');
    expect(rover1.whereAreYou()).to.be.deep.equal('1 3 N');

    let rover2 = new Rover(5, 5);

    rover2.setInitalState(3, 3, 'E');

    rover2.acceptGpsInstructions('MMRMMRMRRM');

    expect(rover2.x).to.be.deep.equal(5);
    expect(rover2.y).to.be.deep.equal(1);
    expect(rover2.direction).to.be.deep.equal('E');
    expect(rover2.whereAreYou()).to.be.deep.equal('5 1 E');
  })
});
