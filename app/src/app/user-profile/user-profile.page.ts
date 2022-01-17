import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/_core/_data/localstorage';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user_details : any;
  page_visible : boolean =  false;


  constructor(private StatusBar : StatusBar,private storage: LocalStorage,private router: Router,) {
    this.StatusBar.show();
    this.StatusBar.backgroundColorByName('white');
    this.StatusBar.styleDefault();
  }

  ngOnInit() {
    this.user_details = this.storage.user;
    console.log('user_details - ' , this.user_details);
    if(this.user_details){
      this.page_visible = true;
    }else{
      this.router.navigateByUrl('/auth/login');
    }

  }

  clear(){
    this.storage.clear();
    // this.router.navigateByUrl('/home')
  }

}
