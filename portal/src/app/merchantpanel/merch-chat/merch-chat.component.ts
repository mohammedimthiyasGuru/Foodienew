import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { io } from 'socket.io-client';
import { RemoteConfig } from 'src/app/_core/configs/remote.config';
import { ChatService } from 'src/app/_core/services/chat.service';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { UserService } from 'src/app/_core/services/user.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';

@Component({
  selector: 'app-merch-chat',
  templateUrl: './merch-chat.component.html',
  styleUrls: ['./merch-chat.component.scss'],
})
export class MerchChatComponent implements OnInit {

  public innerHeight: any;
  @ViewChild(ScrollToBottomDirective) scroll: ScrollToBottomDirective;

  socket: any;
  chats = [];
  senderId: string;
  receiverId: string;
  sender: string;
  receiver: string;

  chatmsg: string;
  users: any[];

  constructor(
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private uservice: UserService,
    private service: ChatService,
    private profileservice: ProfileService
  ) {
    this.senderId = this.storage.user.profile_id;
    this.sender = this.storage.user.user_name;

    // this.socket = io(RemoteConfig.BASE_URL, {
    //   transports: ["websocket"],
    //   reconnection: true,
    //   reconnectionDelayMax: 1000,
    //   autoConnect: true,
    //   query: {
    //     chatID: this.senderId
    //   }
    // });

    // this.socket.on("connect", () => {
    //   console.log('Socket id - ', this.socket.id); // x8WIv7-mJelg7on_ALbx
    // });

    // this.socket.on('error', function () {
    //   console.log("Sorry, there seems to be an issue with the connection!");
    // });

    // this.socket.on('connect_error', function (err) {
    //   console.log("connect failed " + err);
    // });

    // this.socket.on('connection', function () {
    //   console.log("connected");
    // });
    
  }

  ngOnInit() {
    this.innerHeight = window.innerHeight - 150;

    if (this.storage.userRole == 1) {
      // this.uservice.listMerchants({}).subscribe(res => {
      //   this.users = res.rows;
      // })

      this.service.listChaters(this.senderId, {}).subscribe(res => {
        this.users = res.rows;
        if (this.users) {
          this.openChat(this.users[0])
        }
      })
    } else {
      this.service.listChaters(this.senderId, {}).subscribe(res => {
        if (res.count > 0) {
          this.users = res.rows;
          if (this.users) {
            this.openChat(this.users[0])
          }
        } else {
          this.uservice.list({}).subscribe(res => {
            console.log('Users ', res);
            this.users = res.rows;
            if (this.users) {
              this.openChat(this.users[0])
            }
          })
        }
      })
    }

    this.route.params.subscribe(params => {
      console.log('Params ', params.receiver);
      if (params.receiver) {
        this.profileservice.profile_view(1).subscribe(res => {
          this.openChat(res);
        }, err => {
          console.log(err);
        });
      }
    });

    // this.socket.on('receive_message', (msg) => {
    //   console.log('Receive msgs - ', msg);
    //   this.chats.push(msg);
    // });

    setInterval(() => {
      if (this.senderId && this.receiverId) {
        this.loadChats();
      }
    }, 1000);
  }

  loadChats() {
    this.service.listContents(this.senderId, this.receiverId).subscribe(res => {
      this.chats = res.rows;
      console.log('Chats - ', this.chats);
    })
  }

  openChat(_receiver) {
    this.receiverId = _receiver.profile_id;
    this.receiver = _receiver.profile_first_name + ' ' + _receiver.profile_last_name;
    this.loadChats();
  }

  send_1() {
    if (this.chatmsg != '') {
      // Push the message through socket 
      console.log('Socket - ', this.socket);

      this.socket.emit('send_message', {
        receiverChatID: this.receiverId,
        senderChatID: this.senderId,
        content: this.chatmsg
      });
    }
    this.chatmsg = '';
    // this.receive();
  }

  send() {
    if (this.chatmsg != '') {
      this.service.sendMsg({
        receiverChatID: this.receiverId,
        senderChatID: this.senderId,
        content: this.chatmsg
      }).subscribe(res => {
        console.log(res);
      })
    }
    this.chatmsg = '';
  }

  receive1() {
    console.log('receive called', this.socket);

    // Socket receiving method 
    this.socket.on('receive_message', (msg) => {
      console.log('Receive msgs - ', msg);

      var item = {};

      // check the sender id and change the style class
      // if(saletdMsgArr[0] == this.myUserId){
      //    item = { "styleClass":"chat-message right", "msgStr":saletdMsgArr[1] };
      // }
      // else{
      //    item= { "styleClass":"chat-message left", "msgStr":saletdMsgArr[1] };
      // }
      // push the bind object to array
      // Final chats array will iterate in the view  

      this.chats.push(item);
    });
  }
}