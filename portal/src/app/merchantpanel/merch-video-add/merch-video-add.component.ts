import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { UserService } from 'src/app/_core/services/user.service';
import { VideoService } from 'src/app/_core/services/video.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ToastrManager } from 'ng6-toastr-notifications';


import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { RemoteConfig } from '../../_core/configs/remote.config';

@Component({
  selector: 'app-merch-video-add',
  templateUrl: './merch-video-add.component.html',
  styleUrls: ['./merch-video-add.component.scss'],
})
export class MerchVideoAddComponent implements OnInit {

  terms  = false;
  comments_error = false;
  video_error = false;
  users: any[];
  sub_vendors: any[];
  menu: string = 'VENDORS';
  profile: any;
  _profileId: number;
  safeURL: any;

  profileImage: any;
  checkstatus : boolean = false;

  video_add_status : boolean = false;
  video_comments : String = '';
  video_uploading : boolean = false;

  video_error1 = false;


  timer_count = 0;
  actual_count = 0;
  interval;



  name = 'Angular';
  percentDone: any = '0';
  percentDone_pre = '0%'



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UserService,
    public toastr: ToastrManager,
    private videoservice: VideoService,
    private profileservice: ProfileService,
    private storage: LocalStorage,
    private _sanitizer: DomSanitizer,
    private _httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.video_uploading = false;
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=RgxiR0_LXUs");
    this.route.params.subscribe(params => {
      this._profileId = params.userid;
    })
    if (this._profileId) {
      this.profileservice.view(this._profileId).subscribe(res => {
        this.profile = res;
        this.loadUsers(this.profile.role_id);
        console.log(this.profile.role_id);
      })
    }
  }
  playVideo(event) {
    event.toElement.play()
  }
  loadUsers(_role: number) {
    if (_role == 1) {
      this.service.list({}).subscribe(res => {
        this.users = res.rows;
      })
    } else if (_role == 2) {
      this.menu = 'MERCHANTS';

      let a = this.profile.profile_id
      this.videoservice.list(a).subscribe(res => {
        this.users = res.rows;
        console.log(this.users);
      });
      // this.service.listMerchants({}).subscribe(res => {
      //   this.users = res.rows;
      // })
    } else if (_role == 3) {
      this.menu = 'VENDORS';
      this.service.listVendors({}).subscribe(res => {
        this.users = res.rows;
        console.log(this.users);
      })
      this.service.listSubVendors({}).subscribe(res => {
        this.sub_vendors = res.rows;
        console.log(this.sub_vendors);
      })
    } else if (_role == 4) {
      this.menu = 'RIDERS';
      this.service.list({}).subscribe(res => {
        this.users = res.rows;
      })
    } else if (_role == 5) {
      this.menu = 'CUSTOMERS';
      this.service.list({}).subscribe(res => {
        this.users = res.rows;
      })
    }
    console.log(this.users);
    console.log(this.sub_vendors);
  }










  selectImg(event) {
    this.video_error1 = false;
    this.profileImage = event.target.files[0];
    console.log(this.profileImage);
    console.log(this.profileImage.size);
    console.log(this.profileImage.size);
    if(this.profileImage.size < 4080712){
     this.timer_count = 6;
     this.actual_count = 6;
    }else if(this.profileImage.size < 8080712){
      this.timer_count = 10;
      this.actual_count = 10;
    }else if(this.profileImage.size < 12080712){
      this.timer_count = 14;
      this.actual_count = 14;
    }else if(this.profileImage.size < 16080712){
      this.timer_count = 16;
      this.actual_count = 16;
    }else if(this.profileImage.size < 20080712){
      this.timer_count = 16;
      this.actual_count = 16;
    }
    console.log(this.timer_count,this.actual_count);
    if(this.profileImage.size > 20080712){
      console.log("False");
      this.video_error1 = true;
    }else{
      console.log("True");
      this.video_error1 = false;
    }


  }


  uploadImg() {
    this.video_error = false;
    if(this.video_comments == ""){
      // alert("Should not be empty");
      this.comments_error = true;
      // this.toastr.warningToastr('Comments should not be empty')
    }else{
    if (this.profileImage) {
      this.video_uploading = true;
      console.log(this.timer_count);
      this.interval = setInterval(() => {
        if(this.timer_count > 0) {
          console.log(this.timer_count);
          const percentDone = Math.round(
            (100 * (this.actual_count - this.timer_count)) / this.actual_count
          );
          console.log(percentDone);
          this.percentDone = percentDone;
          this.percentDone_pre = '';
          this.percentDone_pre = this.percentDone + "%";
          this.timer_count --;
        } else {
          this.percentDone = 100;
          this.percentDone_pre = '';
          this.percentDone_pre = this.percentDone + "%";
          this.pauseTimer();
        }
      },1000)

      let c = {
        user_id: this._profileId,
        type: "video",
        note: this.video_comments
      }
      this.videoservice.create(this.profileImage, c).subscribe((res:any) => {
        console.log(res);
        
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
      // this.videoservice.create(this.profileImage, c).subscribe(res => {
      //   console.log(res);
      // }, err => {
      //   // this.notify.showError(err, "LOGIN");
      // });
    } else {
      // this.toastr.warningToastr('Select Video');
      this.video_error = true;

      // alert('Select Image');
    }
  }
  }


  searchInterest(){
    this.comments_error = false;
  }


  delete(data) {
    this.videoservice.delete(data).subscribe(res => {
      console.log(res);
      this.toastr.successToastr('Deleted Successfully');
      // alert("Deleted Successfully");
      this.ngOnInit();
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }


  toggleEditable(event) {
    console.log(event.target.checked);
    this.checkstatus = event.target.checked;
    this.terms = false;
} 


Proceed(){
  if(this.checkstatus == false){
    this.terms = true;
    // this.toastr.warningToastr('Please select T & C');
    // alert("Please select T & C");
  }else{
     this.video_add_status =  true;
     this.terms = false;
  }

}

cancel(){
 this.video_add_status = false; 
}


pauseTimer() {
        clearInterval(this.interval);
        console.log('File is completely uploaded!');
        this.video_uploading = false;
        this.video_add_status  = false;
        this.video_comments = '';
        this.video_uploading = false;  
        this.percentDone = 0;
        this.router.navigateByUrl('/merchant/video_list/'+this._profileId);
}


}
