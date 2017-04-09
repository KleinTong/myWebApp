import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Todoapp } from './todoapp';

@NgModule({
  declarations: [
    Todoapp,
  ],
  exports: [
    Todoapp
  ]
})
export class TodoappModule {}
