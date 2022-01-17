import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../../_core/services/video.service';
import { LocalStorage } from '../../_core/_data/localstorage';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-mob-video-list',
  templateUrl: './mob-video-list.component.html',
  styleUrls: ['./mob-video-list.component.scss'],
})
export class MobVideoListComponent implements OnInit {

  @ViewChild('myVideo') myVideo: ElementRef; // Prior to Angular 8
  myVideos: any[];
  favouriteVideos: any[];
  allVideos: any[];
  profile: any;
  _profileId: number;

  constructor(
    private router: Router,
    private videoservice: VideoService,
    private storage: LocalStorage,
    statusBar: StatusBar
  ) {
    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.backgroundColorByHexString('#f8c333');
  }

  ngOnInit() {
    this.storage.submenu = 'Videos';

    this._profileId = this.storage.user.profile_id;

    this.loadVideos();
  }

  loadVideos() {
    this.videoservice.list(this._profileId).subscribe(res => {
      this.myVideos = res.rows;
      this.favouriteVideos = res.rows;
    });
    this.videoservice.all(this._profileId).subscribe(res => {
      this.allVideos = res.rows;
    });
  }


  action1(){
    this.router.navigateByUrl('/mob_video_add/'+this._profileId);
  }

  action2(){
    this.router.navigateByUrl('/mob_video_add');
  }

  action3(data1,data2,data3,data4,){
    console.log(data1+data2+"/"+data3+data4);
    this.router.navigateByUrl(data1+data2+"/"+data3+data4);
  }

}
