import { Component, Directive, ElementRef, Input, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gesture } from 'ionic-angular/gestures/gesture';
import { Todo } from '../../components/todo';

/**
 * Generated class for the Todoapp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// interface Todo {
// 	label: string,
// 	isCompleted: boolean,
// 	time: string;
// }

// @Component({
// 	selector: 'todo-list',
// 	template:`
// 		<ul>
// 			<li *ngFor="let todo of todoArr, let index = index">
// 		        <input type="checkbox" [checked]="todo.isCompleted"
// 		        (change)="toggleCompletion(index)" />
// 			    <div maToolTip="#B3E5FC" class="todoCom" *ngIf="!todo.isCompleted" [class.completed]="todo.isCompleted">{{todo.label}}</div>
// 			    <div class="todoCom" *ngIf="todo.isCompleted" [class.completed]="todo.isCompleted" [class.move]="todo.completed">
// 				    <span *ngFor="let char of todo.label.split('')">
// 						{{char}}
// 					</span>
// 				</div>
// 				{{todo.time}}
// 				<button (click)="remove(index)">remove</button>
// 			</li>
// 		</ul>
// 	`,
// 	styleUrls: ['./todoList.css']
// })
// export class TodoList {
// 	@Input() todoArr: Todo[];
// 	@Output() removeItem: EventEmitter<number> = new EventEmitter<number>();

// 	toggleCompletion(index) {
// 		this.todoArr[index].isCompleted = !this.todoArr[index].isCompleted;
// 	}

// 	remove(index) {
// 		this.removeItem.emit(index);
// 	}
// }

// @Component({
// 	selector: 'input-area',
// 	template:`
// 		<input #bbb type="text" placeholder="type items"
// 		(change)="todoItem = $event.target.value;"/>
// 		<button (click)="addTodo(todoItem);bbb.value = ''">Add</button>
// 	`,
// })
// export class InputArea {
// 	todoItem: string;
// 	@Output() inputText: EventEmitter<string> = new EventEmitter<string>();
// 	addTodo(text: string) {
// 		this.inputText.emit(text)
// 	}
// }
@IonicPage()
@Component({
	selector: 'todo-app',
  templateUrl: 'todoapp.html'
})
export class Todoapp {
	todos: Todo[];
	title: string;
	hour: number;
	minute: number;
	second: number;

	constructor() {
		this.title = 'hello klein tong';
		this.title = this.title.toUpperCase();
		this.todos = [{
			label: 'buy apples',
			isCompleted: false,
			time: '12:31:23',
		},
		{
			label: 'wash clothes',
			isCompleted: false,
			time: '12:31:23',
		}];

		let now = new Date();
		this.second = now.getSeconds();
		this.minute = now.getMinutes();
		this.hour = now.getHours();
		this.getTime();
	}

	addTodo(item) {
	    if(item){
	  		this.todos.push({
	  			label: item,
	  			isCompleted: false,
	  			time: this.hour + ":" + (Number(this.minute) < 10 ? '0' : '') + this.minute + ":" + (Number(this.second) < 10 ? '0' : '') + this.second,
	  		})
	    }
	}

	removeTodo(index) {
		this.todos.splice(index, 1);
	}

  getTime() {
    setInterval(() => {
      let now = new Date();
      this.second = now.getSeconds();
      this.minute = now.getMinutes();
      this.hour = now.getHours();
    }, 1000);
  }
}
