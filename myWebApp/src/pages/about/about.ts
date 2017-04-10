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
  subNum: number;
  constructor(public navCtrl: NavController) {
    this.subNum = this.twoNum.upper - this.twoNum.lower;
  }
  // ngDoCheck() {
  //   if(this.check == true) {
  //     console.log("change");
  //   }
  // }

  ngDoCheck() {
    if(this.subNum !== this.twoNum.upper - this.twoNum.lower) {
      this.subNum = this.twoNum.upper - this.twoNum.lower;
    }
  }

  change() {
    // console.log("something changed");
    console.log(this.check);
  }
}
