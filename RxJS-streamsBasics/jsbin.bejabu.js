'use strict';

var Observable = Rx.Observable;

var startButton = document.querySelector('#start');
var stopButton = document.querySelector('#stop');

var start$ = Observable.fromEvent(startButton, 'click');
var stop$ = Observable.fromEvent(stopButton, 'click');

var interval$ = Observable.interval(1000);

var instervalThatStops$ = interval$.takeUntil(stop$);

start$.switchMapTo(instervalThatStops$).subscribe(function (x) {
    return console.log(x);
});

stop$.subscribe(function () {
    return console.log('stopped!');
});