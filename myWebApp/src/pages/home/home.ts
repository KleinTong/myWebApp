import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  case: string = "news";
  ifNews: boolean = true;
  constructor(public navCtrl: NavController) {

  }

  changeSeg(e) {
    if(e.direction == 4 && this.case == 'labs') {
      this.case = 'news';
      this.ifNews = !this.ifNews;
    }
    if(e.direction == 2 && this.case == 'news') {
      this.case = 'labs';
      this.ifNews = !this.ifNews;
    }
  }

  caseChange() {
    if(this.case == 'news') {
      this.ifNews = true;
    }
    else {
      this.ifNews = false;
    }
  }

}
