import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { FCM } from 'plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM';
import { CommonService } from 'src/_core/services/common.service';
import { LocalStorage } from 'src/_core/_data/localstorage';
// import { FCM } from '@ionic-native/fcm/ngx';


import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Location } from '@angular/common';
import { countrycode } from './location';










@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private fcm: FCM,
    private service: CommonService,
    private storage: LocalStorage,
    private statusBar: StatusBar,
    private locationData : countrycode
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    this.statusBar.hide();



    // this.statusBar.overlaysWebView(true);
    // this.statusBar.backgroundColorByHexString('#fec429');
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();

      // subscribe to a topic
      // this.fcm.subscribeToTopic('Deals');

      // get FCM token
      // this.fcm.getToken().then(token => {
      //   console.log(token);
      //   if (this.storage.user) {
      //     this.service.updateToken({fcmToken: token}, this.storage.user.user_id).subscribe(res => {
      //       console.log('Token res ', res);
      //     });
      //   }
      // });

      // ionic push notification example
      // this.fcm.onNotification().subscribe(data => {
      //   console.log(data);
      //   if (data.wasTapped) {
      //     console.log('Received in background');
      //   } else {
      //     console.log('Received in foreground');
      //   }
      // });

      // refresh the FCM token
      // this.fcm.onTokenRefresh().subscribe(token => {
      //   console.log(token);
      //   if (this.storage.user) {
      //     this.service.updateToken({fcmToken: token}, this.storage.user.user_id).subscribe(res => {
      //       console.log('Refresh Token res ', res);
      //     });
      //   }
      // });

      // unsubscribe from a topic
      // this.fcm.unsubscribeFromTopic('offers');

    });
  }
}
