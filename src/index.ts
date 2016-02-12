import Rover from './Rover'
import * as rx from 'rx.all'

document.getElementById("container").innerHTML = 0 + " " + 0;

let roverDiv = document.getElementById("rover");
roverDiv.innerHTML = "Mars";
roverDiv.style.left = (window.innerWidth/2 + 0) + "px";
roverDiv.style.top = (window.innerHeight/2 - 0) + "px";

var keysSource = rx.Observable.fromEvent(document, 'keydown');

let rover = new Rover(0,0);
rover.setInitalState(0,0,'N');
keysSource.subscribe(function (e : KeyboardEvent) {
        if(e.keyCode === 38) {
            rover.acceptGpsInstructions('M');
            console.log(rover.whereAreYou());
  } else if(e.keyCode === 37){
            rover.acceptGpsInstructions('L');
            console.log(rover.whereAreYou());
  }else if(e.keyCode === 39){
            rover.acceptGpsInstructions('R');
            console.log(rover.whereAreYou());
  }
    displayRover(rover);
  });

function displayRover(rover: Rover) {
    document.getElementById("container").innerHTML = rover.x + " " + rover.y + " (" + rover.direction + ")";
    roverDiv.style.left = (window.innerWidth/2 + rover.x * 10) + "px";
    roverDiv.style.top = (window.innerHeight/2 - rover.y * 10) + "px";
}




  //{}
