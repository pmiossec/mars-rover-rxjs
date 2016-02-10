import Complex from './Complex'
import * as rx from 'rx.all'

document.getElementById("container").innerHTML = 0 + " " + 0;

let roverDiv = document.getElementById("rover");
roverDiv.innerHTML = "Mars";
roverDiv.style.left = (window.innerWidth/2 + 0) + "px";
roverDiv.style.top = (window.innerHeight/2 - 0) + "px";
