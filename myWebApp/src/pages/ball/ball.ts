import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Ball page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ball',
  templateUrl: 'ball.html',
})
export class BallPage {
  mess: number = 0;
  content: boolean = true;
  left: number = 5;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.changeMess();
  }

  changeMess() {
    setInterval(() => {
      this.mess++;
    }, 500);
  }

  count() {
    this.mess++;
  }

  onLongPress(e) {
    this.mess = 50;
    // this.content = !this.content;
    if(e.direction == 2) {
      if(this.left < 0) {
        this.left += window.innerWidth;
      }
      this.left = (this.left - 5) % window.innerWidth;
    }
    else if(e.direction == 4) {
      this.left = (this.left + 5) % window.innerWidth;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ball');
  }

}
