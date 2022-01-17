import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-mob-message-otp',
  templateUrl: './mob-message-otp.component.html',
  styleUrls: ['./mob-message-otp.component.scss'],
})
export class MobMessageOtpComponent implements OnInit {

  constructor(statusBar: StatusBar) {
    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.backgroundColorByHexString('#f8c333');
   }

  ngOnInit() {}

}
