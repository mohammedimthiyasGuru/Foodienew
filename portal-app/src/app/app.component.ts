import { Component } from '@angular/core';

// import { FCM } from '@ionic-native/fcm/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { Platform } from '@ionic/angular';
import { UserService } from './_core/services/user.service';
import { LocalStorage } from './_core/_data/localstorage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private fcm: FCM,
    private service: UserService,
    private storage: LocalStorage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      // subscribe to a topic
      // this.fcm.subscribeToTopic('Deals');

      // get FCM token
      this.fcm.getToken().then(token => {
        console.log('getToken - ', token);
        if (this.storage.user) {
          this.service.updateToken({fcmToken: token}, this.storage.user.user_id).subscribe(res => {
            console.log('Token res ', res);
          });
        }
      });

      // ionic push notification example
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });      

      // refresh the FCM token
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log('onTokenRefresh - ', token);
        if (this.storage.user) {
          this.service.updateToken({fcmToken: token}, this.storage.user.user_id).subscribe(res => {
            console.log('Token res ', res);
          });
        }
      });

      // unsubscribe from a topic
      // this.fcm.unsubscribeFromTopic('offers');

    });
  }
}
