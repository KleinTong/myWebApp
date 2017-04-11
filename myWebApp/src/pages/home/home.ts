import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataFire } from '../../providers/data-fire';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  case: string = "news";
  ifNews: boolean = true;
  dataB: string;
  flag: boolean = true;
  constructor(public navCtrl: NavController, private dataFire: DataFire) {
    // this.dataB = this.dataFire.db;
    // console.log(this.dataB);
    let firebaseRef = firebase.database().ref()
    firebaseRef.child("houston").set("newyork");
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

  changeData() {
    let firebaseRef = firebase.database().ref();
    // firebaseRef.child('houston').once('value').then((data) => {
    //   console.log(data);
    //   if(data === 'okk') {
    //     firebaseRef.child('houston').set("rockets");
    //   }
    //   else {
    //     firebaseRef.child('houston').set("okk");
    //   }
    // })
    // firebaseRef.child('houston').set("rockets");
    if(this.flag === true) {
      firebaseRef.child('houston').set("rockets");
    }
    else {
      firebaseRef.child('houston').set("newyork");
    }
    this.flag = !this.flag;
  }

}
