import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BallPage } from './ball';

@NgModule({
  declarations: [
    BallPage,
  ],
  exports: [
    BallPage
  ]
})
export class BallModule {}
