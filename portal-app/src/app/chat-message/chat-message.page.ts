import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RemoteConfig } from '../_core/configs/remote.config';
import { ChatService } from '../_core/services/chat.service';
import { ProfileService } from '../_core/services/profile.service';
import { LocalStorage } from '../_core/_data/localstorage';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.page.html',
  styleUrls: ['./chat-message.page.scss'],
})
export class ChatMessagePage implements OnInit {

  public innerHeight: any;
  @ViewChild(ScrollToBottomDirective) scroll: ScrollToBottomDirective;


  last_count : number;
  socket: any;
  chats = [];
  senderId: string;
  receiverId: string;
  sender: string;
  receiver: string;

  chatmsg: string;

  merchant_name = "";
  merchant_img = "";
  role_detail = '';

  constructor(
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private service: ChatService,
    private profileservice: ProfileService,
    statusBar: StatusBar
  ) {

    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.styleDefault();
    statusBar.backgroundColorByName('white');

    this.senderId = this.storage.user.profile_id;
    this.sender = this.storage.user.user_name;
    console.log(this.storage.user);

    this.merchant_name = this.storage.user.business_name;
    this.merchant_img = this.storage.user.profile_img;

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

    this.route.params.subscribe(params => {
      console.log('Params ', params.receiver);
      if (params.receiver) {
        this.profileservice.profile_view(params.receiver).subscribe(res => {
          console.log(res);
          this.merchant_img = res.profile_img;
          this.merchant_name = res.profile_first_name;
          this.role_detail = res.role.role_name;
          this.openChat(res);
        }, err => {
          console.log(err);
        });
      }
    });

    this.service.listContents(this.senderId, this.receiverId).subscribe(res => {
      console.log(res);
      this.last_count = res.count;
      this.chats = res.rows;
      console.log('Chats - ', this.chats);
    })

    // this.socket.on('receive_message', (msg) => {
    //   console.log('Receive msgs - ', msg);
    //   this.chats.push(msg);
    // });

    setInterval(() => {
      if (this.senderId && this.receiverId) {
        this.loadChats();
        this.readChats();
      }
    }, 1500);
  }

  loadChats() {
    this.service.listContents(this.senderId, this.receiverId).subscribe(res => {
      console.log(this.last_count,res.rows.length)
      if(this.last_count !== res.count){
        this.chats = res.rows;
        console.log('Chats - ', this.chats);
        this.last_count = res.count;
      }
    })
  }

  readChats() {
    this.service.markAsRead(this.senderId, this.receiverId).subscribe(res => {
      console.log('markAsRead - ', res);
    })
  }

  openChat(_receiver) {
    this.receiverId = _receiver.profile_id;
    this.receiver = _receiver.profile_first_name + ' ' + _receiver.profile_last_name;
    this.loadChats();
  }

  send_sock() {
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
