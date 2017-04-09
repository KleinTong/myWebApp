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
  content: boolean = false;
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

  onLongPress() {
    this.mess = 50;
    this.content = !this.content;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ball');
  }

}
