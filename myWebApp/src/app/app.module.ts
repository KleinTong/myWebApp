import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MotionPage } from '../pages/motion/motion';
import { BallPage } from '../pages/ball/ball';
import { Todoapp } from '../pages/todoapp/todoapp';

//components
import { TodoList } from '../components/todolist/todolist';
import { InputArea } from '../components/inputarea/inputarea';

//directives
import { Ges } from '../components/ges/ges';
import { RedFont } from '../components/red-font/red-font';

//providers
import { DataFire } from '../providers/data-fire';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MotionPage,
    BallPage,
    Todoapp,
    TodoList,
    InputArea,
    Ges,
    RedFont
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MotionPage,
    BallPage,
    Todoapp
  ],
  providers: [
    DataFire,
    StatusBar,
    SplashScreen,
    DeviceMotion,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
