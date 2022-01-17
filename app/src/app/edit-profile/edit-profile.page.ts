import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/_core/_data/localstorage';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  user_details : any;


  constructor(private storage: LocalStorage,private StatusBar : StatusBar,) {

this.StatusBar.show();
this.StatusBar.backgroundColorByName('white');
this.StatusBar.styleDefault();
  }

  ngOnInit() {
    this.user_details = this.storage.user;
  }

}
