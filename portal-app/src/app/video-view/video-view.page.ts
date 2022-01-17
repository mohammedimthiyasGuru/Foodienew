import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../_core/services/video.service';
import { LocalStorage } from '../_core/_data/localstorage';
import { ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.page.html',
  styleUrls: ['./video-view.page.scss'],
})
export class VideoViewPage implements OnInit {
  @ViewChild('myVideo') myVideo: ElementRef; // Prior to Angular 8
  vedio_visible  = false;
  next_button_visible = true;
  video_details = '';
  video_id = '';
  video_index = 0;
  video_index_length = 0;
  video_temp = [];






  _profileId: any;
  videoId: any;
  video: any;
  videoslist: any[];
  totalvideos: number;
  currentvideo: number;
  safeURL: any;

  constructor(
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private videoservice: VideoService,
    private changeDetector: ChangeDetectorRef,
    private _sanitizer: DomSanitizer,
    statusBar: StatusBar

    // private navigationBar: NavigationBar
  ) {
    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.hide();
    statusBar.backgroundColorByName('white');
   }

  ngOnInit() {



    // let autoHide: boolean = true;
    // this.navigationBar.setUp(autoHide);

    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=RgxiR0_LXUs");
    this.currentvideo = 0;
    this._profileId = this.storage.user.profile_id;
    this.route.params.subscribe(params => {
      this.videoId = params.videoid;
      this.video_index = this.video_index;
      console.log(params);
      setTimeout(() => {
        console.log('VT ', params.type);
        let temp = params.type.split("_");
        console.log(temp);
        this.currentvideo  = +temp[1] - 1;
        console.log(this.currentvideo);
        this.goNext();
      }, 1000);
    })
    this.route.params.subscribe(params => {
      console.log('VT ', params.type);
      let temp = params.type.split("_");
      console.log(temp);
      this.currentvideo  = +temp[1] - 1;
      console.log(this.currentvideo);

      if (temp == 'allvid') {
        this.videoservice.all(this._profileId).subscribe(res => {
          this.videoslist = res.rows;
          this.totalvideos = res.count;
        });
      } else {
        this.videoservice.list(this._profileId).subscribe(res => {
          this.videoslist = res.rows;
          this.totalvideos = res.count;
        });
      }
    })


  }

  goNext() {
    console.log(this._profileId.currentvideo);
    this.currentvideo = this.currentvideo + 1;
    var _index = this.currentvideo;
    this.video_index = this.currentvideo;
    console.log(' -- ', _index,this.totalvideos);

    if(_index  == this.totalvideos - 1){
      console.log("Don't Visible");
      this.next_button_visible = false;
      this.videoId = this.videoslist[_index].id;
      this.loadVideo();
    }else if (_index < this.totalvideos) {
      console.log("Visible");
      this.next_button_visible = true
      this.videoId = this.videoslist[_index].id;
      this.loadVideo();
    }


  }

  loadVideo() {
    console.log(this.videoId);
    this.vedio_visible = true;
    this.videoservice.view(this.videoId).subscribe(res => {
      console.log('Video ', res);
      this.video = res;
      this.changeDetector.detectChanges();
      console.log(this.video);
      this.video_details = this.video.video_note;
      this.myVideo.nativeElement.src = this.video.video_link;
      this.myVideo.nativeElement.load();
      this.myVideo.nativeElement.play()
    })
  }

  back_action(){
    this.myVideo.nativeElement.destroy();
  }
}
