import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../../_core/_data/localstorage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NotificationService } from 'src/app/_core/services/notification.service';

@Component({
  selector: 'app-mob-notification',
  templateUrl: './mob-notification.component.html',
  styleUrls: ['./mob-notification.component.scss'],
})
export class MobNotificationComponent implements OnInit {

  notes: any[];

  constructor(
    private service: NotificationService,
    private storage: LocalStorage,
    statusBar: StatusBar
  ) {
    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.backgroundColorByHexString('#f8c333');
  }

  ngOnInit() {
    this.mark_us_read();
    this.storage.submenu = 'Notifications';
      this.service.notification_list(this.storage.user.profile_id).subscribe(res => {
        this.notes = res.rows;
        console.log(this.notes);
      });
  }

  mark_us_read(){
      this.service.markusread(this.storage.user.profile_id).subscribe(res => {
        console.log(res);
      });
  }

}
