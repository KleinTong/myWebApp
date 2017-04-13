import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MotionPage } from '../motion/motion';
import { BallPage } from '../ball/ball';
import { Todoapp } from '../todoapp/todoapp';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = BallPage;
  tab4Root = Todoapp;

  constructor() {

  }
}
