import { Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';

@Directive({
    selector: '[longPress]'
})
export class Ges implements OnInit, OnDestroy {
    el: HTMLElement;
    pressGesture: Gesture;

    @Output()
    longPress: EventEmitter<any> = new EventEmitter<any>();

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    ngOnInit() {
        this.pressGesture = new Gesture(this.el);
        this.pressGesture.listen();
        this.pressGesture.on('swipe', e => {
            this.longPress.emit(e);
        })
    }

    ngOnDestroy() {
        this.pressGesture.destroy();
    }
}