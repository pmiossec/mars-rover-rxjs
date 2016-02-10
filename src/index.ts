import Complex from './Complex'
import * as rx from 'rx.all'
import { keysToCommands, plugRover } from './pipeline';
import { Rover, Command } from './rover';

let keys : rx.Observable<number>  = rx.Observable
  .fromEvent(document, "keydown")
  .pluck("keyCode")
  .map(k => k as number);

plugRover(keysToCommands(keys)).subscribe(rover => {
  document.getElementById("container").innerHTML = rover.position.real + " " + rover.position.im;
});

plugRover(keysToCommands(keys)).subscribe(rover => {
  let roverDiv = document.getElementById("rover");
  roverDiv.innerHTML = rover.way.real + "," + rover.way.im;
  roverDiv.style.left = (window.innerWidth/2 + rover.position.real) + "px";
  roverDiv.style.top = (window.innerHeight/2 - rover.position.im) + "px";
});
