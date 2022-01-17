import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../_core/services/video.service';
import { LocalStorage } from '../../_core/_data/localstorage';
import { ProfileService } from '../../_core/services/profile.service';
import { UserService } from '../../_core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-mob-videoadd',
  templateUrl: './mob-videoadd.component.html',
  styleUrls: ['./mob-videoadd.component.scss'],
})
export class MobVideoaddComponent implements OnInit {


  video_add_text = true;

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
    private videoservice: VideoService,
    private profileservice: ProfileService,
    private storage: LocalStorage,
    statusBar: StatusBar

  ) {
    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.backgroundColorByHexString('#f8c333');

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._profileId = params.userid;
    })
    if (this._profileId) {
      this.profileservice.view(this._profileId).subscribe(res => {
        this.profile = res;
        // this.loadUsers(this.profile.role_id);
        console.log(this.profile.role_id);
      })
    }
  }

  move_to_video_upload(){
    this.video_add_text = false;
  }

  move_to_video_upload_back(){
    this.video_add_text = true;
  }

  add_video(){

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
        this.router.navigateByUrl('/video-view/'+ res.id+'/myfav_0');
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
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
      // this.toastr.successToastr('Deleted Successfully');
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
        // console.log('File is completely uploaded!');
        // this.video_uploading = false;
        // this.video_add_status  = false;
        // this.video_comments = '';
        // this.video_uploading = false;
        // this.percentDone = 0;
        // this.router.navigateByUrl('/merchant/video_list/'+this._profileId);
}

// uploadFile(event: Event) {
//   this.percentDone = '0%';
//   // console.log(event.target['files'][0]);
//   const formData = new FormData();
//   formData.append('doc_video', this.profileImage);
//   formData.append('user_id', ""+this._profileId);
//   formData.append('type', "video");
//   formData.append('note', ""+this.video_comments);
//   this._httpClient
//     .post(RemoteConfig.BASE_URL+'/createVideo_test', formData, {
//       reportProgress: true,
//       observe: 'events'
//     })
//     .subscribe((response: any) => {
//       console.log(response);

//     });
// }

action(){
  this.router.navigateByUrl('/mob_video_list');
}

}
