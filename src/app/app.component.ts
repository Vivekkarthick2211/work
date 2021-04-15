import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
	

  currentPageTitle = 'tab1';
 labels;
  appPages = [
    {
      title: 'Blood Bank',
      url: '/tabs/bloodbank',
      icon: 'color-fill'
    },
    {
      title: 'Matrimony',
      url: '/tabs/matrimony',
      icon: 'heart-half'
    },
    {
      title: 'Events',
      url: '/timeline',
      icon: 'cash'
    },
    {
      title: 'Medical Tips',
      url: '/timeline',
      icon: 'medkit'
    },
    {
      title: 'Health Tips',
      url: '/timeline',
      icon: 'heart-circle'
    },
    {
      title: 'Cooking Tips',
      url: '/timeline',
      icon: 'restaurant'
    },
    {
      title: 'Jobs',
      url: '/timeline',
      icon: 'briefcase'
    },
    {
      title: 'Settings',
      url: '/tabs/settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.labels=["karth","lion"]
    });
  }
  
}




