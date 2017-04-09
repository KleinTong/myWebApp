import { Component, Directive, ElementRef, Input, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';

import { Todo } from '../todo';
/**
 * Generated class for the Todolist component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'todo-list',
  templateUrl: 'todolist.html'
})
export class TodoList {
	@Input() todoArr: Todo[];
	@Output() removeItem: EventEmitter<number> = new EventEmitter<number>();

	toggleCompletion(index) {
		this.todoArr[index].isCompleted = !this.todoArr[index].isCompleted;
	}

	remove(index) {
		this.removeItem.emit(index);
	}
}
