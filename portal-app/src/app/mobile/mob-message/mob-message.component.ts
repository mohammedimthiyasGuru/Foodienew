import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../_core/services/chat.service';
import { UserService } from '../../_core/services/user.service';
import { LocalStorage } from '../../_core/_data/localstorage';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-mob-message',
  templateUrl: './mob-message.component.html',
  styleUrls: ['./mob-message.component.scss'],
})
export class MobMessageComponent implements OnInit {

  senderId: any;
  users: any[];

  constructor(
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private uservice: UserService,
    private service: ChatService,
    statusBar: StatusBar
  ) {
    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.backgroundColorByHexString('#f8c333');
    this.senderId = this.storage.user.profile_id;
  }

  ngOnInit() {
    this.storage.submenu = 'Chat';

    if (this.storage.userRole == 1) {
      // this.uservice.listMerchants({}).subscribe(res => {
      //   this.users = res.rows;
      // })

      this.service.listChaters(this.senderId, {}).subscribe(res => {
        this.users = res.rows;
      })
    } else {
      this.service.listChaters(this.senderId, {}).subscribe(res => {
        if (res.count > 0) {
          this.users = res.rows;
          console.log('Users ', this.users);
        } else {
          this.uservice.list({}).subscribe(res => {
            this.users = res.rows;
          })
        }
      })
    }

  }
}
