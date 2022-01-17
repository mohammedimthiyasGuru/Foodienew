import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { OrderService } from 'src/app/_core/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { authConfig } from 'src/app/_core/configs/property.config';
import { VideoService } from 'src/app/_core/services/video.service';
import { AuthService } from 'src/app/_core/services/auth.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  loader : boolean = true;
  profile: any;
  currentUser : any;
  visible  = false;
  video_count = 0;
  edit_summary = false;
  summary_value ='';

  constructor(
    private storage: LocalStorage,
    private service: ProfileService,
    private router: Router,
    // private auth: AuthService,
    private auth: AuthService,
    private videoservice: VideoService,
    private orderservice: OrderService,

  ) {
    this.visible = false;
    this.currentUser = this.storage.user;
    this.service.profile_view(this.currentUser.profile_id).subscribe(res => {
      this.profile = res;
      console.log(this.profile);
      this.visible = true;
    })

   }

   ngOnInit() {
    this.service.view(this.storage.user.profile_id).subscribe(res => {
      this.profile = res;
      console.log(res);
      if(res.profile_location == null && res.profile_biz_name == null){
        let g = {profile_id: res.profile_id, user_id: res.user.user_id}
        localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(g));
        const registerData = {
          contactno:res.profile_contact
        };
        console.log(registerData);
        this.storage.merchant_detail = registerData;
        this.router.navigateByUrl('/account/register');
      }
      this.loader = false;
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
    // this.loadData();
    this.fetch_video();

  }


  fetch_video(){
    let a = this.storage.user.profile_id
    this.videoservice.list(a).subscribe(res => {
      this.video_count = res.count;
    });
  }


  edit_summary_action(){
    this.edit_summary = true;
    this.summary_value = this.profile.profile_summary;
  }

  edit_submit(){
    this.edit_summary = false;
    // var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    const registerData = {
      profile_summary: this.summary_value,
      profile_id: this.profile.profile_id,
    };
    this.auth.register_summary(registerData).subscribe((res: any) => {
      console.log(res);
      this.profile.profile_summary = this.summary_value;
      // localStorage.removeItem(authConfig.REGISTERED_PROFILE);
      // this.toastr.successToastr('Registered Succesfully');
      // this.router.navigateByUrl("merchant_panel/dashboard");
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.toastr.warningToastr(err);
      // this.notify.showError(err, "LOGIN");
    });


  }



}
