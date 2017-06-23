import { AboutPage } from './../pages/about/about';
import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule, JsonpModule, Http } from '@angular/http';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  isLoggedIn: boolean;
  username: string;
  password: string;
  nav: NavController;
  http: Http;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.isLoggedIn = false;
      console.log('Loggout', this.isLoggedIn);
    });
  }

  onClick() {
    this.isLoggedIn = true;
    //this.nav.setRoot(HomePage);
    console.log('LoggedIn', this.isLoggedIn);
  }

  login() {

  }
}
