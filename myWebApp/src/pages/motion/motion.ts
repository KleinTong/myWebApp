import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

/**
 * Generated class for the Motion page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-motion',
  templateUrl: 'motion.html',
})
export class MotionPage {
  mess: string = "hello";
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private deviceMotion: DeviceMotion) {
  }


  ngAfterViewInit() {
    // // Get the device current acceleration
    // this.deviceMotion.getCurrentAcceleration().then(
    //   (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
    //   (error: any) => console.log(error)
    // );

    // // Watch device acceleration
    // var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
    //   console.log(acceleration);
    // });

    // // Stop watch
    // subscription.unsubscribe();
    this.platform.ready().then(() =>
      this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => {console.log(acceleration); this.mess="succeed"},
      (error: any) => {console.log(error);console.log("why"); this.mess="not fine"}
      ));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Motion');
  }

}
