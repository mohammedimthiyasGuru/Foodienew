import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

import { NotificationService } from 'src/app/_core/services/notification.service';

@Component({
  selector: 'app-footer-layout',
  templateUrl: './footer-layout.page.html',
  styleUrls: ['./footer-layout.page.scss'],
})
export class FooterLayoutPage implements OnInit {

  subMenuName$: Observable<string>;
  notification_detail : any;

  constructor(
    private storage: LocalStorage,
    private service: NotificationService,
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

}
