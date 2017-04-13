import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the DataFire provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataFire {
    // public events: any;
    // public units: any;
    // public tasks: any;
    // public parts: any;
    public db: any;
    constructor() {
        // this.events = firebase.database().ref('/events/');
        // this.units = firebase.database().ref('/units/');
        // this.tasks = firebase.database().ref('/tasks/');
        // this.parts = firebase.database().ref('/tasks/parts/');
    }

  init() {
    let config = {
      apiKey: "AIzaSyCiwHCUddTA2afkayXzquo-QB6KjreZHXE",
      authDomain: "mywebapp-4232c.firebaseapp.com",
      databaseURL: "https://mywebapp-4232c.firebaseio.com",
      projectId: "mywebapp-4232c",
      storageBucket: "mywebapp-4232c.appspot.com",
      messagingSenderId: "319127924212"
    };
    firebase.initializeApp(config);
    // this.db = firebase.database().ref('/tintin/');
    // const messaging = firebase.messaging();
    // messaging.requestPermission().then(() => {
    //   console.log("get permission");
    //   return messaging.getToken();
    // }).then((token) => {
    //   console.log(token);
    // }).catch((err) => {
    //   console.log(err);
    // });
    // messaging.onMessage((payload) => {
    //   console.log("onMessage: ", payload);
    // });
  }
}
