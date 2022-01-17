import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { UserService } from 'src/app/_core/services/user.service';
import { VideoService } from 'src/app/_core/services/video.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ViewChild, ElementRef } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';



@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  @ViewChild('myVideo') myVideo: ElementRef; // Prior to Angular 8
  users: any[];
  users1: any[];
  users2: any[];
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
  video_time = '';

  video_list_visible = false;

  video_details = '';
  video_id = '';
  video_index = 0;
  video_index_length = 0;
  video_temp = [];

  next_button_visible = true;
  prev_button_visible = false;

  video_desc = '';


  imageObject = [];
  imageObject1 = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UserService,
    public toastr: ToastrManager,
    private videoservice: VideoService,
    private profileservice: ProfileService,
    private storage: LocalStorage,
    private _sanitizer: DomSanitizer
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
        console.log(this.profile);
      })
    }
  }
  // playVideo(event) {
  //   event.toElement.play()
  // }
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
        this.users1 = res.rows;
        console.log(this.users);
        this.imageObject = [];
        this.users.forEach(element => {
          element.playstatus = false;
          let temp = {
            "image": 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
            "thumbImage": 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
            "title": element.video_note
             }
           this.imageObject.push(temp);
           this.imageObject1.push(temp);
        });
        this.users1.forEach(element => {
          element.playstatus = false;
        });
      });



      this.videoservice.all(a).subscribe(res => {
        this.users2 = res.rows;
        console.log(this.users2);
        this.users2.forEach(element => {
          element.playstatus = false;
        });
      });


      // this.service.listMerchants({}).subscribe(res => {
      //   this.users = res.rows;
      // })
    } else if (_role == 3) {
      this.menu = 'VENDORS';
      this.service.listVendors({}).subscribe(res => {
        // this.users = res.rows;
        // console.log(this.users);
        let a = this.profile.profile_id
        this.videoservice.list(a).subscribe(res => {
          this.users = res.rows;
          this.users1 = res.rows;
          console.log(this.users);
          this.imageObject = [];
          this.users.forEach(element => {
            element.playstatus = false;
            let temp = {
              "image": 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
              "thumbImage": 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
              "title": element.video_note
               }
             this.imageObject.push(temp);
             this.imageObject1.push(temp);
          });
          this.users1.forEach(element => {
            element.playstatus = false;
          });
        });
  
  
  
        this.videoservice.all(a).subscribe(res => {
          this.users2 = res.rows;
          console.log(this.users2);
          this.users2.forEach(element => {
            element.playstatus = false;
          });
        });
  




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
    this.profileImage = event.target.files[0];
  }



  uploadImg() {
    if (this.profileImage) {
      this.video_uploading = true;
      let c = {
        user_id: this._profileId,
        type: "video",
        note: "default"
      }
      this.videoservice.create(this.profileImage, c).subscribe(res => {
        console.log(res);
        this.toastr.successToastr('Added Successfully');
        // alert("Added Successfully");
        this.ngOnInit();
        this.video_uploading = false;
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    } else {
      this.toastr.errorToastr('Select Image');
      // alert('Select Image');
    }
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
} 


Proceed(){
  if(this.checkstatus == false){
    this.toastr.warningToastr('Please select T & C');
    // alert("Please select T & C");
  }else if(this.video_comments == ""){
    this.toastr.warningToastr('Comments should not be empty');
    // alert("Should not be empty");
  }else{
     this.video_add_status =  true;
  }

}

cancel(){
 this.video_add_status = false; 
}

video_detailss(item){
console.log(item);
}

add_video(){
  this.router.navigateByUrl('/admin/live_video/'+this._profileId);
}

playVideo(data, index) {
  console.log(data);
  let myVideo = document.getElementById(data) as HTMLFormElement;
  myVideo.play();
  console.log(index);
  // this.users[index].playstatus = true;

  /**
   * You are accessing a dom element directly here,
   * so you need to call "nativeElement" first.
   */
  // this.myVideo.nativeElement.play();
}

pauseVideo(data,index){
  let myVideo = document.getElementById(data) as HTMLFormElement;
  myVideo.pause();
  console.log(index);
  this.users[index].playstatus = false;
}



playvideo(data,index){
  this.video_details = '';
  console.log(data,index);
  if(data == 'myvideo'){
    this.video_index_length = this.users.length;
    this.video_index = index;
    this.video_temp = this.users;
    this.video_details = this.users[index].video_link;
    this.video_desc = this.users[index].video_note;
    this.video_time = this.users[index].createdAt;
  }else if(data == 'favvideo'){
    this.video_index_length = this.users1.length;
    this.video_index = index;
    this.video_temp = this.users1;
    this.video_details = this.users1[index].video_link;
    this.video_desc = this.users1[index].video_note;
    this.video_time = this.users1[index].createdAt;
  }else if(data == 'allvide'){
    this.video_index_length = this.users2.length;
    this.video_index = index;
    this.video_temp = this.users2;
    this.video_details = this.users2[index].video_link;
    this.video_desc = this.users2[index].video_note;
    this.video_time = this.users2[index].createdAt;
  }


  this.video_list_visible = true;
  console.log(this.video_index);
  console.log(this.video_index_length);
  if(+this.video_index == 0){
    this.next_button_visible = true
    this.prev_button_visible = false;
  }else{
    this.next_button_visible = true;
    this.prev_button_visible = true;
  }

}


stopvideo(){
  this.video_details = '';
  this.video_list_visible = false;
}




next_video(){
 console.log(this.video_temp);
  this.video_index = this.video_index + 1;
  this.video_details = this.video_temp[this.video_index].video_link;
  this.video_desc = this.video_temp[this.video_index].video_note;
  this.video_time = this.video_temp[this.video_index].createdAt;

  console.log(this.video_index);
  console.log(this.video_index_length);
  // this.playVideo(this.video_index,this.video_index);
  if(+this.video_index == +this.video_index_length - 1){
    this.next_button_visible = false
    this.prev_button_visible = true;
  }else {
    this.next_button_visible = true
    this.prev_button_visible = true;
  }
  console.log(this.video_details);
    this.myVideo.nativeElement.src = this.video_details;
    this.myVideo.nativeElement.load();
}

previous_video(){
  console.log(this.video_temp);
  this.video_index = this.video_index - 1;
  this.video_details = this.video_temp[this.video_index].video_link;
  this.video_desc = this.video_temp[this.video_index].video_note;
  this.video_time = this.video_temp[this.video_index].createdAt;
  console.log(this.video_index)
  if(+this.video_index == +this.video_index_length - 1){
    this.next_button_visible = false
    this.prev_button_visible = true;
  }else if(+this.video_index == 0){
    this.next_button_visible = true
    this.prev_button_visible = false;
  }else {
    this.next_button_visible = true
    this.prev_button_visible = true;
  }
  this.myVideo.nativeElement.src = this.video_details;
  this.myVideo.nativeElement.load();
}



bind_video_data(){

}




}


