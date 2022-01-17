import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../_core/services/video.service';
import { LocalStorage } from '../_core/_data/localstorage';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.page.html',
  styleUrls: ['./video-list.page.scss'],
})
export class VideoListPage implements OnInit {

  @ViewChild('myVideo') myVideo: ElementRef; // Prior to Angular 8
  myVideos: any[];
  favouriteVideos: any[];
  allVideos: any[];
  profile: any;
  _profileId: number;

  constructor(
    private videoservice: VideoService,
    private storage: LocalStorage,
  ) { }

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

}
