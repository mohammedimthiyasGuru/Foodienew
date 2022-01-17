import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { authConfig } from '../../_core/configs/property.config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-masterheader',
  templateUrl: './masterheader.page.html',
  styleUrls: ['./masterheader.page.scss'],
})
export class MasterheaderPage implements OnInit {

  currentUser: any;

  user_type : any = '';
  user_name : any = '';
  user_img : any = '';
  profile_details : any;
  role_id = 0;

  constructor(
    private storage: LocalStorage,
    private profileservice: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.currentUser = this.storage.user;

    this.profileservice.profile_view(this.currentUser.profile_id).subscribe(res => {
      console.log(res);
      this.user_name =  res.profile_biz_name;
      this.profile_details = res;
      this.role_id = res.role_id;
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });



    console.log(this.currentUser);
    if(this.currentUser.role_id == 2){
      this.user_type = 'Merchant';
      // this.user_name = this.currentUser.user_name;
      this.user_img = this.currentUser.profile_img;
    }else if(this.currentUser.role_id == 3){
      this.user_type = 'Vendor';
      // this.user_name = this.currentUser.user_name;
      this.user_img = this.currentUser.profile_img;
    }else if(this.currentUser.role_id == 1){
      this.user_type = 'Admin';
      // this.user_name = this.currentUser.user_name;
      this.user_img = this.currentUser.profile_img;
    }
  }

  

  logout() {
    this.storage.clear();
    window.location.reload();
    this.router.navigateByUrl('/loginpage');

  }


  edit_bussnes_info(){
    let res = {profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login};
    localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(res));
  }

  // edit_bussnes_info(){
  //   let res = {profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login};
  //   localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(res));
  // }

 
  action1(){
    let res = {profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login};
    localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(res));
    this.router.navigateByUrl('/merchant_panel/merch_edit_profile/' + this.currentUser.profile_id);
  }

  action2(){
    let res = {profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login};
    localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(res));
    this.router.navigateByUrl('/merchant_panel/merch_edit_bussiness/' + this.currentUser.profile_id);
  }

  action3(){
    let res = {profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login};
    localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(res));
    this.router.navigateByUrl('/merchant_panel/merch_edit_bankinfo/' + this.currentUser.profile_id);
  }

  action4(){
    let res = {profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login};
    localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(res));
    this.router.navigateByUrl('/merchant_panel/merch_edit_changepassword/' + this.currentUser.profile_id);
  }


}
