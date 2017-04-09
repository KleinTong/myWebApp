import { Component, Directive, ElementRef, Input, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';

/**
 * Generated class for the Inputarea component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'input-area',
  templateUrl: 'inputarea.html'
})
export class InputArea {
	todoItem: string;
	@ViewChild('bbb')
	inp: ElementRef;
	@Output() inputText: EventEmitter<string> = new EventEmitter<string>();
	addTodo(text: string) {
		this.inputText.emit(text)
	}

	ngDoCheck() {
		if(this.inp.nativeElement.value !== this.todoItem) {
			this.todoItem = this.inp.nativeElement.value;
		}
	}
}
