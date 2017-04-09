import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TodoList } from './todolist';

@NgModule({
  declarations: [
    TodoList,
  ],
  exports: [
    TodoList
  ]
})
export class TodolistModule {}
