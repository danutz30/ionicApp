import { MyApp } from './../../app/app.component';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { HelpPage } from './../help/help';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = HelpPage;
  tab5Root = MyApp;
  constructor() {

  }


}
