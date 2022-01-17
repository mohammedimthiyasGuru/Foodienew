import { Component, OnInit } from '@angular/core';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-mob-landingpage',
  templateUrl: './mob-landingpage.component.html',
  styleUrls: ['./mob-landingpage.component.scss'],
})
export class MobLandingpageComponent implements OnInit {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };


  slides = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    statusBar: StatusBar
  ) {
    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.styleDefault();
    statusBar.backgroundColorByName('white');
   }

  ngOnInit() {
  }

  onSwipeRight(event, data) {
    if (this.slides > 0) {
      console.log('event left', data);
      this.slides = this.slides + data;
      console.log('slides', this.slides);
    }
  }

  onSwipeLeft(event, data) {
    if (this.slides < 2) {
      console.log('event left', data);
      this.slides = this.slides + data;
      console.log('slides', this.slides);
    }
  }


  action1(){
    console.log('goto login page');
    
    this.router.navigateByUrl('/mob_message_login');
  }

}
