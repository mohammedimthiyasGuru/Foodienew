import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/_core/services/notification.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-mob-footer',
  templateUrl: './mob-footer.component.html',
  styleUrls: ['./mob-footer.component.scss'],
})
export class MobFooterComponent implements OnInit {

  subMenuName$: Observable<string>;
  notification_detail: any;

  constructor(
    private storage: LocalStorage,
    private service: NotificationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subMenuName$ = this.storage.getSubMenuName();
    this.service.notification_list(this.storage.user.profile_id).subscribe(res => {
      this.notification_detail = res.count;
      console.log(this.notification_detail);
      // this.users = res.rows;
      // console.log(this.users);
    });
  }

  action1() {
    this.router.navigateByUrl("/mob_dashboard");
    this.storage.setSubMenuName("Dashboard")
  }
  action2() {
    this.router.navigateByUrl("/mob_message");
    this.storage.setSubMenuName("Chat")
  }
  action3() {
    this.router.navigateByUrl("/mob_notification");
    this.storage.setSubMenuName("Notifications")
  }
  action4() {
    this.router.navigateByUrl("/mob_video_list");
    this.storage.setSubMenuName("Videos")
  }

}
