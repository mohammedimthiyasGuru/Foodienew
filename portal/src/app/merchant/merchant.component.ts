import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { authConfig } from '../_core/configs/property.config';



@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.page.html',
  styleUrls: ['./merchant.page.scss'],
})
export class MerchantPage implements OnInit {



  user_type : any = '';
  user_name : any = '';
  user_img : any = '';
  profile_details : any;
  role_id = 0;



  currentUser: any;
  sidemenu : boolean;

  constructor(
    private storage: LocalStorage,
    private router: Router,
    private route: ActivatedRoute,
    private profileservice: ProfileService,
  ) {

   let temp = this.storage.menu_setting;
   
  //  this.storage.menu_setting = true;
  this.sidemenu = temp.status;
  console.log(this.sidemenu);
   }

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

  menu_action(data){
    console.log(data);
    console.log(this.sidemenu);
    if(data == 'small'){
      this.storage.menu_setting = {status : true};
      this.sidemenu = true;
    }
    else if(data == 'big'){
      this.storage.menu_setting = {status : false};
      this.sidemenu = false;
      console.log(this.storage.menu_setting);
    }
  }


  action1(){
    this.router.navigateByUrl('/dashboard');
  }
  action2(){
    this.router.navigateByUrl('/vendor/dashboard');
  }
  action3(){
    this.router.navigateByUrl('/admin/dashboard');
  }
  action4(){
    this.router.navigateByUrl('/merchant/updateorderstatus');
  }
  action5(){
    this.router.navigateByUrl('/loginpage');
  }
  action6(){
    this.router.navigateByUrl('/loginpage');
  }
  action7(){
    this.router.navigateByUrl('/loginpage');
  }
  action8(){
    this.router.navigateByUrl('/loginpage');
  }


  logout() {
    this.storage.clear();
    window.location.reload();
  }


  edit_bussnes_info(){
    let res = {profile_id: this.profile_details.profile_id, user_id: this.profile_details.user.user_id, email: this.profile_details.user.user_login};
    localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(res));
  }

  





}
