import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  check: boolean = false;
  toggle: boolean = false;
  twoNum: any = {lower: 0, upper: 0};
  constructor(public navCtrl: NavController) {

  }
  // ngDoCheck() {
  //   if(this.check == true) {
  //     console.log("change");
  //   }
  // }

  change() {
    console.log("something changed");
  }
}
