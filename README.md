# mars-rover-rxjs

This kata is strongly inspired by a [thoughtworks exercice](https://www.google.fr/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=mars+rovers+thoughtworks)  
The purpose here is to implement an implementation using Typescript and RxJS (v4)  
Instead of receiving commands "L", "R" and "F" as in the original version, the rover should be driven using the arrows keys 'left', 'right' and 'up' (as forward).

## Prerequisites
You need typescript installed: 
    
    npm install typescript -g  
    
You also need tsd: 

    npm install tsd -g  
To test your installation you can run "npm test". This repository includes a complex number implementation alon with unit tests as an example.  

**Note:** if you have installed Typescript with Visual Studio, you might have a very old version of typescript on your path. To know which version of typescript is installed on your box just type the followning command:

    tsc -v // should return at least 1.7

In order to transpile typescript code within your browser using file index.html, you need to use a static file http server. One simple solution is "http-server":

    npm install http-server -g
    
and then just run http-server from the directory where is located index.html

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
As an example of typescript class and unit tests, there is a complex number implementation. You are free to use that in the kata or not.
There is also an html page containing a systemjs setup that provide live tranpilation of typescript within the browser.  
Any PR aiming to improve the build process are obviously very welcome ;)
