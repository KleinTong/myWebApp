import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Motion } from './motion';

@NgModule({
  declarations: [
    Motion,
  ],
  imports: [
    IonicModule.forChild(Motion),
  ],
  exports: [
    Motion
  ]
})
export class MotionModule {}
