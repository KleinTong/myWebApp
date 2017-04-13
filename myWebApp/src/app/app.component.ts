import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { DataFire } from '../providers/data-fire';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  // rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dataFire: DataFire) {
    // dataFire.init();
    let config = {
      apiKey: "AIzaSyCiwHCUddTA2afkayXzquo-QB6KjreZHXE",
      authDomain: "mywebapp-4232c.firebaseapp.com",
      databaseURL: "https://mywebapp-4232c.firebaseio.com",
      projectId: "mywebapp-4232c",
      storageBucket: "mywebapp-4232c.appspot.com",
      messagingSenderId: "319127924212"
    };
    firebase.initializeApp(config);
    // firebase.auth().onAuthStateChanged((user) => {
    //   if(user) {
    //     this.rootPage = TabsPage;
    //   }
    //   else {
    //     this.rootPage = HomePage;
    //   }
    // });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
