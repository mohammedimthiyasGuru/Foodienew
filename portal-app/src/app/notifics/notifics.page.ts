import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorage } from '../_core/_data/localstorage';
import { NotificationService } from '../_core/services/notification.service';

@Component({
  selector: 'app-notifics',
  templateUrl: './notifics.page.html',
  styleUrls: ['./notifics.page.scss'],
})
export class NotificsPage implements OnInit {

  profileId: any;
  users: any[];

  constructor(
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private service: NotificationService
  ) {
    this.profileId = this.storage.user.profile_id;
  }

  ngOnInit() {
    this.mark_us_read();
    this.storage.submenu = 'Notifications';
    this.service.notification_list(this.profileId).subscribe(res => {
      this.users = res.rows;
      console.log(this.users);
    });
  }

  send_notification() {
    let a = {
      senderChatID: 11,
      receiverChatID: 11,
      chat_title: "Order Placed",
      content: "Good Morning"
    }
    // this.service.send_notify(a).subscribe(res => {
    //   // this.users = res.rows;
    //   console.log(res);
    // })
  }

  mark_us_read() {
    this.service.markusread(this.profileId).subscribe(res => {
      // this.users = res.rows;
      console.log(res);
    });
  }

}
