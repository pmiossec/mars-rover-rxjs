# mars-rover-rxjs

This kata is strongly inspired by a [thoughtworks exercice](https://www.google.fr/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=mars+rovers+thoughtworks)  
The purpose here is to implement an implementation using Typescript and RxJS (v4)  
Instead of receiving commands "L", "R" and "F" as in the original version, the rover should be driven using the arrows keys 'left', 'right' and 'up' (as forward).

## First step
Provide a rover implementation, without any link to the UI.

## Second step
Plug your rover implementation to the keyboard and to the screen.  
You can use RX.Observable.fromEvent() method to generate an observable from pressed keys.
In file index.html there are two div elements:
- A div which id=container where you can display the position and direction of the rover.
- A div which id=rover that can move on the screen, reprensenting the rover itself

## Notes
This repository contains a minimal npm build that allows to transpile typescript to es5 and run unit tests using mocha/chai/sinon.
There is also an html page containing a systemjs setup that provide live tranpilation of typescript within the browser.  
Any PR aiming to improve the build process are obviously very welcome ;)
