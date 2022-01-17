import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../_core/services/chat.service';
import { UserService } from '../_core/services/user.service';
import { LocalStorage } from '../_core/_data/localstorage';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.page.html',
  styleUrls: ['./chat-user-list.page.scss'],
})
export class ChatUserListPage implements OnInit {

  senderId: any;
  users: any[];

  constructor(
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private uservice: UserService,
    private service: ChatService,
  ) {
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
